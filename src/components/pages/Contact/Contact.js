import React, { useState } from "react";
// helper to ensure valid email address is entered
import { validateEmail } from "/Users/mrao/Code/react-portfolio/src/utils/helpers.js";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(event) {
    if (event.target.name === "email") {
      const isValid = validateEmail(event.target.value);

      if (!isValid) {
        setErrorMessage("Please enter a valid email address!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  }

  return (
    <section className="container">
      <form className="justify-content-center" id="contact-form">
        <div className="mt-5">
          <label htmlFor="name">Name:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="email">Email Address:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="7"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        <div className="mt-5 mb-5">
          <button
            className="btn btn-outline-dark "
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
