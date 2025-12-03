import * as yup from 'yup'





const CourseSchema = {
    category:yup.string().required('Kategori zorunludur!'),
    title:yup.string().required('Başlık zorunludur!'),
    summary:yup.string().required('Özet Bilgi zorunludur!').min(10,'Minimum 10 karakter girmek zorunludur'),
    rating:yup.string().required('Kurs Puanı girmek zorunludur!'),
    img:yup.string().required('Kurs resmi girmek zorunludur!').url('Lütfen geçerli bir url giriniz'),
}

export default CourseSchema;