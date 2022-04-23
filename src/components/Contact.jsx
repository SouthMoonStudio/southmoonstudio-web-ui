import React, { useState } from "react";
import { InViewContext } from "./Slide";
import Joi from "joi-browser";
import { toast, Zoom } from "react-toastify";
import "../css/Contact.css";

const onShowWarning = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const onNotImplemented = (message) => {
  toast.success(message, {
    position: "bottom-center",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Zoom,
  });
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState({});

  const schema = {
    name: Joi.string().required().label("name"),
    email: Joi.string().email().required().label("email address"),
    subject: Joi.string().required().label("subject"),
    message: Joi.string().required().label("message"),
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(formData, schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
      onShowWarning(item.message);
    }

    return errors;
  };

  const handleOnChange = ({ currentTarget: input }) => {
    const newFormData = { ...formData };
    newFormData[input.name] = input.value;
    setFormData(newFormData);
  };

  function sendEmail(e) {
    e.preventDefault();

    const errors = validate();
    setError(errors || {});
    if (errors) return;

    onNotImplemented(
      "Thank you for your submission, however I have not yet implemented the server side of this service. please feel free to contact me via LinkedIn."
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <InViewContext.Consumer>
      {(isVisible) => {
        return (
          isVisible &&
          RenderContact({ formData, error, handleOnChange, sendEmail })
        );
      }}
    </InViewContext.Consumer>
  );
};

const RenderContact = ({ formData, error, handleOnChange, sendEmail }) => {
  return (
    <div id="contact-container">
      <form onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto">
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="8"
              className="form-control"
              placeholder="Your message"
              value={formData.message}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <div className="col-8 pt-3 mx-auto">
            <div className="row mx-auto">
              <input
                type="submit"
                className="btn btn-danger col-auto mx-auto"
                value="Submit"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
