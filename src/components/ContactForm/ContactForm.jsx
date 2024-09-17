import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

import css from "./ContactForm.module.css";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short, min 3 letters!")
    .max(50, "Too long, max 15 letters!")
    .required("This field is required!"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Must be in tel format!")
    .required("This field is required!"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={(values, action) => {
        dispatch(
          addContact({
            id: nanoid(),
            name: values.name,
            number: values.number,
          })
        );
        action.resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label>Name:</label>

          <Field type="text" className={css.input} name="name" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>

        <div className={css.formGroup}>
          <label>Number:</label>
          <Field type="tel" className={css.input} name="number" />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>

        <button className={css.btnSmt} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}
