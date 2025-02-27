require("dotenv").config();
const express = require("express");
const FabricCAServices = require("fabric-ca-client");
const { Wallets } = require("fabric-network");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Khởi tạo Fabric CA client và ví lưu danh tính
const caURL = process.env.FABRIC_CA_URL;
const ca = new FabricCAServices(caURL);
const walletPath = path.join(__dirname, "wallet");

// Hàm enroll admin nếu chưa tồn tại
async function enrollAdmin() {
  const wallet = await Wallets.newFileSystemWallet(walletPath);
  const adminExists = await wallet.get(process.env.ADMIN_USER);
  if (adminExists) {
    console.log("Admin đã được enroll rồi.");
    return;
  }
  try {
    const enrollment = await ca.enroll({
      enrollmentID: process.env.ADMIN_USER,
      enrollmentSecret: process.env.ADMIN_PASS,
    });
    const x509Identity = {
      credentials: {
        certificate: enrollment.certificate,
        privateKey: enrollment.key.toBytes(),
      },
      mspId: process.env.MSP_ID,
      type: "X.509",
    };
    await wallet.put(process.env.ADMIN_USER, x509Identity);
    console.log("Enroll admin thành công và lưu vào ví.");
  } catch (error) {
    console.error(`Enroll admin thất bại: ${error}`);
    throw error;
  }
}

// Endpoint đăng ký danh tính mới
app.post("/register", async (req, res) => {
  const {
    commonName, // CN: tên chung, sẽ dùng làm enrollmentID
    organization, // O: tên tổ chức (sử dụng cho thông tin bổ sung)
    organizationalUnit, // OU: đơn vị tổ chức
    country, // C: mã quốc gia
    state, // ST: tiểu bang hoặc tỉnh
    locality, // L: thành phố
  } = req.body;

  if (!commonName || !organization || !country || !state || !locality) {
    return res.status(400).json({ error: "Thiếu thông tin bắt buộc" });
  }

  try {
    const wallet = await Wallets.newFileSystemWallet(walletPath);
    // Lấy admin đã enroll
    const adminIdentity = await wallet.get(process.env.ADMIN_USER);
    if (!adminIdentity) {
      return res
        .status(500)
        .json({ error: "Danh tính admin chưa được enroll" });
    }
    // Tạo context admin để ký yêu cầu
    const provider = wallet
      .getProviderRegistry()
      .getProvider(adminIdentity.type);
    const adminUser = await provider.getUserContext(
      adminIdentity,
      process.env.ADMIN_USER
    );

    // Sử dụng affiliation mà admin được phép đăng ký
    const affiliation = "org1.department1"; // Thay đổi affiliation cho phù hợp với cấu hình CA của bạn

    // Gọi API register trên Fabric CA (yêu cầu đã được ký bởi admin)
    const secret = await ca.register(
      {
        enrollmentID: commonName, // Dùng commonName làm enrollmentID
        affiliation: affiliation, // Sử dụng affiliation hợp lệ
        role: "client",
        attrs: [
          { name: "org", value: organization, ecert: true },
          { name: "ou", value: organizationalUnit, ecert: true },
          { name: "country", value: country, ecert: true },
          { name: "state", value: state, ecert: true },
          { name: "locality", value: locality, ecert: true },
        ],
      },
      adminUser
    );

    res.status(200).json({
      message: "Đăng ký danh tính thành công",
      enrollmentID: commonName,
      enrollmentSecret: secret,
    });
  } catch (error) {
    console.error("Lỗi ở endpoint /register:", error);
    res.status(500).json({
      error: "Đăng ký danh tính thất bại",
      details: error.message,
    });
  }
});

app.listen(PORT, async () => {
  try {
    await enrollAdmin();
    console.log(`Server đang chạy trên cổng ${PORT}`);
  } catch (error) {
    console.error("Lỗi khi khởi tạo admin:", error);
  }
});
