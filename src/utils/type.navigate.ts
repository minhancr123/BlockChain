export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Verification: undefined;
    Home: undefined;
    UploadFile: undefined;
    CertificateHistory: undefined;
    SecuritySettings: undefined;
    AdminHome: undefined;
    ListIdentity: undefined;
    ListRequests: undefined;
    ListRequestsRejected: undefined;
    ConfirmCertification: undefined;
    Register1: undefined;
    Register2: {
        commonName: string;
        organization: string;
        organizationUnit: string;
        country: string;
        state: string;
        locality: string;
    };
    PinScreen: undefined;
    RefreshPassword: undefined;
    DetailIdentity: {
        id: string;
    };
};