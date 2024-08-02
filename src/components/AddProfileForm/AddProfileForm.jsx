import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import css from "./AddProfileForm.module.css";

// {
//     "name": "Іван Петров",
//     "phone": "+380501234567",
//     "email": "ivan.petrov@example.com",
//     "status": "online",
//     "avatar": "https://example.com/avatars/ivan.jpg",
//     "hasPhisicalAddress": false
//   }

const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const ProfileValidationSchema = Yup.object().shape({
  profileName: Yup.string()
    .required("Ім'я профілю є обов'язковим")
    .min(2, "Ім'я профілю має бути мінімум в 2 символи")
    .max(50, "Ім'я профілю має бути меншим за 50 символів"),
  profileNumber: Yup.string()
    .matches(
      phoneRegExp,
      "Номер телефону має співпадати з форматом 'xxx-xxx-xx-xx'"
    )
    .required("Номер телефону є обов'язковий"),
  profileEmail: Yup.string()
    .email("Електронна адреса має бути валідного формату")
    .required("Електронна адреса є обов'язковою"),
  profileStatus: Yup.string()
    .oneOf(["online", "offline"])
    .required("Статус є обов'язковим для вибору"),
  profilePhisicalAddress: Yup.bool(),
});

const INITIAL_VALUES = {
  profileName: "",
  profileNumber: "",
  profileEmail: "",
  profileStatus: "",
  profilePhisicalAddress: false,
};

const AddProfileForm = ({ onAddProfile }) => {
  const handleSubmit = (values, actions) => {
    const profileObject = {
      name: values.profileName,
      phone: values.profileNumber,
      email: values.profileEmail,
      hasPhisicalAddress: values.profilePhisicalAddress,
      status: values.profileStatus,
      avatar: "https://example.com/avatars/ivan.jpg",
    };

    onAddProfile(profileObject);

    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={ProfileValidationSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Ім&apos;я користувача:</span>
          <Field
            type="text"
            name="profileName"
            placeholder="Іван Петров"
            
          />
          <ErrorMessage
            className={css.errorText}
            name="profileName"
            component="span"
          />
        </label>

        <label className={css.label}>
          <span>Номер телефону:</span>
          <Field
            type="tel"
            name="profileNumber"
            placeholder="+(38)0501234567"
            
          />
          <ErrorMessage
            className={css.errorText}
            name="profileNumber"
            component="span"
          />
        </label>

        <label className={css.label}>
          <span>E-mail:</span>
          <Field
            type="email"
            name="profileEmail"
            placeholder="ivan.petrov@example.com"
            
          />
          <ErrorMessage
            className={css.errorText}
            name="profileEmail"
            component="span"
          />
        </label>

        <p>Статус активності:</p>
        <div className={css.label}>
          <label className={css.statusWrapper}>
            Онлайн:{" "}
            <Field type="radio" name="profileStatus" value="online" />
          </label>

          <label className={css.statusWrapper}>
            Офлайн:{" "}
            <Field type="radio" name="profileStatus" value="offline" />
          </label>
          <ErrorMessage
            className={css.errorText}
            name="profileStatus"
            component="span"
          />
        </div>

        <label className={css.checkboxLabel}>
          <Field type="checkbox" name="profilePhisicalAddress" />
          <span>Чи має профіль фізичну адресу?</span>
        </label>

        <button className={css.submitBtn} type="submit">
          🤷‍♂️ Add New Profile
        </button>
      </Form>
    </Formik>
  );
};

export default AddProfileForm;
