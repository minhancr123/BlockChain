import * as Yup from 'yup';
export const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(3, 'Password cần tối thiểu 3 ký tự')
        .max(50, 'Password tối đa 50 ký tự')
        .required('Password không được để trống'),
    username: Yup.string()

});

export const RegisterSchema = Yup.object().shape({
    password: Yup.string()
        .min(3, 'Password cần tối thiểu 3 ký tự')
        .max(50, 'Password tối đa 50 ký tự')
        .required('Password không được để trống'),
    email: Yup.string()
        .email('Định dạng email không hợp lệ')
        .required('Email không được để trống'),
    username: Yup.string()
        .required('Họ tên không được để trống'),
    phone: Yup.string()
        .min(10, 'Phone cần tối thiểu 10 ký tự')
        .max(10, 'Phone tối đa 10 ký tự')
        .required('Phone không được để trống'),

});