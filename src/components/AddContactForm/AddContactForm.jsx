import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import css from "./AddContactForm.module.css";

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const ContactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Ім'я профілю є обов'язковим")
    .min(2, "Ім'я профілю має бути мінімум в 2 символи")
    .max(50, "Ім'я профілю має бути меншим за 50 символів"),
  number: Yup.string()
    .matches(
      phoneRegExp,
      "Номер телефону має співпадати з форматом 'xxx-xx-xx'"
    )
    .required("Номер телефону є обов'язковий"),
});

const INITIAL_VALUES = {
  name: "",
  number: "",
};

const AddContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    const contactObject = {
      name: values.name,
      number: values.number,
    };

    onAddContact(contactObject);

    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={ContactValidationSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <label className={css.label}>
            <span>Ім&apos;я користувача:</span>
            <Field type="text" name="name" placeholder="Іван Петров" />
            <ErrorMessage
              className={css.errorText}
              name="name"
              component="span"
            />
          </label>

          <label className={css.label}>
            <span>Номер телефону:</span>
            <Field type="tel" name="number" placeholder="123-12-34" />
            <ErrorMessage
              className={css.errorText}
              name="number"
              component="span"
            />
          </label>

          <button
            disabled={Object.keys(errors).length > 0}
            className={css.submitBtn}
            type="submit"
          >
            🛂 Add New Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddContactForm;
