import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import css from "./SearchPostsForm.module.css";

const SearchPostsValidationSchema = Yup.object().shape({
  searchTerm: Yup.string()
    .required("Пошукове слово є обов'язковим")
    .min(2, "Пошукове слово має бути мінімум в 2 символи")
    .max(100, "Пошукове слово має бути меншим за 100 символів"),
});

const SearchPostsForm = ({ onSearch, defaultSearchValue }) => {
  const INITIAL_VALUES = {
    searchTerm: defaultSearchValue || "",
  };

  const handleSubmit = (values) => {
    onSearch(values.searchTerm);
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={SearchPostsValidationSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <label className={css.label}>
            <span>Знайти пости за заголовком:</span>
            <Field type="text" name="searchTerm" placeholder="Love..." />
            <ErrorMessage
              className={css.errorText}
              name="searchTerm"
              component="span"
            />
          </label>

          <button
            disabled={Object.keys(errors).length > 0}
            className={css.submitBtn}
            type="submit"
          >
            🔍 Search Posts
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchPostsForm;
