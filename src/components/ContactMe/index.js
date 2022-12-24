import React from "react";
import cx from "classnames";
import { Formik, Form, Field } from "formik";
import emailjs from "emailjs-com";
import styles from "./ContactMe.module.scss";

function sendEmail(e) {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_99tgnff",
      "template_wf81u0y",
      e.target,
      "2wQadjCakXxRK4SiR"
    )
    .then(
      (result) => {
        window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
      },
      (error) => {
        console.log(error.text);
      }
    );
}

const ContactMe = ({ theme,className }) => {
  const contactMe = cx(styles.contact_me, {
    [styles.contact_me_black]: theme === "dark",
    [styles.contact_me_420]:className,
  });
  const title =cx(styles.title,{
    [styles.title_420]:className
  })
  const form = cx(styles.form,{
    [styles.form_420]:className
  })
  const mainField = cx(styles.info_main_item, styles.field);

  return (
    <section className={contactMe}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className={title}>
          <h2>Contact me</h2>
          <p>
            I want to start working in a good company and develop as a person,
            teach to teach and teach again
          </p>
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            info: "",
          }}
        >
          <Form onSubmit={sendEmail} className={form}>
            <label className={styles.info_main}>
              <Field name="name" placeholder="Name" className={mainField} />
              <Field name="email" placeholder="Email" className={mainField} />
            </label>
            <Field
              name="subject"
              placeholder="Subject"
              className={styles.info_main_item}
            />
            <Field
              name="info"
              placeholder="Please write your message"
              className={styles.info_main_item}
            />
            <input
              type="submit"
              value="Send Message"
              className={styles.submit}
            />
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default ContactMe;
