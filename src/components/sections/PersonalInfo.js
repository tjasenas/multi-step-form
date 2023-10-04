import { useState, useRef } from "react";
import { StepHandler } from "../../PageContext";

const PersonalInfo = () => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const name = useRef();
  const email = useRef();
  const phone = useRef();

  const nextStep = StepHandler().nextStepHandler;

  const checkName = () => {
    setNameError(false);
    const inputValue = name.current.value;

    const isTwoWords = () => {
      const words = inputValue.split(" ");
      const checkWords = words.length > 1 && words[1].split("").length > 0;
      return checkWords;
    };

    const validateName = inputValue !== "" && isTwoWords();
    if (!validateName) return setNameError((prev) => !prev);
  };
  const checkEmail = () => {
    setEmailError(false);
    const inputValue = email.current.value;
    const validateName = inputValue !== "" && inputValue.include("@");
    if (!validateName) return setEmailError((prev) => !prev);
  };

  const chechPhone = () => {
    setPhoneError(false);
    const inputValue = phone.current.value;
    const validateName = inputValue !== "" && inputValue.length > 11;
    if (!validateName) return setPhoneError((prev) => !prev);
  };

  const submitForm = (e) => {
    e.preventDefault();
    checkName();
    checkEmail();
    chechPhone();

    if (nameError && emailError && phoneError) {
      nextStep();
    }
  };

  return (
    <div className="content-wrapper">
      <div className="mb-4">
        <h1>Personal Info</h1>
        <p>Please provide you name, email address, and phone number</p>
      </div>

      <form onSubmit={submitForm} className="form">
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            ref={name}
            id="name"
            type="text"
            placeholder="e.g. Stephen King"
          />
          {nameError && <p className="error">Please use full name</p>}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email address</label>
          <input
            ref={email}
            id="email"
            type="email"
            placeholder="e.g. stephenking@gmail.com"
          />
          {emailError && <p className="error">Email entered incorrectly</p>}
        </div>
        <div className="form-control">
          <label htmlFor="phone">Phone number</label>
          <input
            ref={phone}
            id="phone"
            type="tel"
            placeholder="e.g. +37064353502"
          />
          {phoneError && (
            <p className="error">
              Phone number is incorrect, please check you number
            </p>
          )}
        </div>

        <button type="submit" className="button form-btn">
          Next step
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;
