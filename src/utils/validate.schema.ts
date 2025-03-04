import * as Yup from 'yup';
export const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(3, 'Password cần tối thiểu 3 ký tự')
        .max(50, 'Password tối đa 50 ký tự')
        .required('Password không được để trống'),
    username: Yup.string()

});

export const RegisterSchema1 = Yup.object().shape({
    commonname: Yup.string()
        .required('Common Name không được để trống'),
    organization: Yup.string()
        .required('Organization không được để trống'),
    organizationunit: Yup.string()
        .required('Organization Unit tên không được để trống'),
    country: Yup.string()
        .required('Country không được để trống'),
    stateorprovince: Yup.string()
        .required('State or Province không được để trống'),
    locality: Yup.string()
        .required('Locality không được để trống'),
});


export const RegisterSchema2 = Yup.object().shape({
    username: Yup.string()
        .required('Username không được để trống'),
    cccd: Yup.string()
        .required('cccd không được để trống'),
    email: Yup.string()
        .required('email Unit tên không được để trống'),

});


