import { useState } from "react";
import styles from "./join-us.module.css";

const eyeClosed = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M21.375 16.4063C21.2893 16.4551 21.1948 16.4866 21.097 16.4989C20.9991 16.5112 20.8998 16.5041 20.8047 16.478C20.7097 16.4518 20.6207 16.4072 20.5428 16.3467C20.465 16.2861 20.3999 16.2108 20.3512 16.125L18.57 13.0125C17.5344 13.7127 16.392 14.2402 15.1875 14.5744L15.7378 17.8763C15.754 17.9735 15.7509 18.0729 15.7287 18.1689C15.7065 18.2649 15.6656 18.3556 15.6083 18.4358C15.551 18.516 15.4784 18.5841 15.3948 18.6363C15.3112 18.6884 15.2181 18.7236 15.1209 18.7397C15.0809 18.7462 15.0405 18.7497 15 18.75C14.8225 18.7498 14.6509 18.6866 14.5157 18.5718C14.3804 18.4569 14.2903 18.2979 14.2612 18.1228L13.7203 14.881C12.5795 15.0397 11.4223 15.0397 10.2815 14.881L9.74058 18.1228C9.71147 18.2982 9.62103 18.4575 9.48538 18.5724C9.34974 18.6872 9.1777 18.7502 8.99995 18.75C8.9585 18.7498 8.91712 18.7464 8.8762 18.7397C8.77898 18.7236 8.6859 18.6884 8.60227 18.6363C8.51864 18.5841 8.44611 18.516 8.38882 18.4358C8.33153 18.3556 8.29061 18.2649 8.26839 18.1689C8.24617 18.0729 8.24309 17.9735 8.25933 17.8763L8.81245 14.5744C7.60835 14.2391 6.46664 13.7107 5.43183 13.0097L3.6562 16.125C3.60696 16.2108 3.54129 16.2861 3.46296 16.3465C3.38462 16.407 3.29515 16.4514 3.19965 16.4772C3.10415 16.5031 3.00449 16.5099 2.90637 16.4972C2.80825 16.4846 2.71358 16.4527 2.62776 16.4035C2.54195 16.3542 2.46668 16.2885 2.40625 16.2102C2.34582 16.1319 2.30141 16.0424 2.27555 15.9469C2.24969 15.8514 2.2429 15.7517 2.25556 15.6536C2.26822 15.5555 2.30008 15.4608 2.34933 15.375L4.22433 12.0938C3.56573 11.5248 2.96013 10.8972 2.41495 10.2188C2.34696 10.1429 2.29516 10.0539 2.2627 9.95729C2.23024 9.86069 2.2178 9.75849 2.22616 9.65693C2.23451 9.55536 2.26347 9.45657 2.31127 9.36657C2.35908 9.27657 2.42472 9.19726 2.5042 9.13347C2.58367 9.06969 2.67531 9.02277 2.77353 8.99558C2.87174 8.96839 2.97446 8.9615 3.07542 8.97533C3.17639 8.98916 3.27347 9.02342 3.36075 9.07602C3.44804 9.12862 3.52368 9.19846 3.58308 9.28127C5.13933 11.2069 7.86183 13.5 12 13.5C16.1381 13.5 18.8606 11.2041 20.4168 9.28127C20.4755 9.19676 20.551 9.12525 20.6386 9.07117C20.7261 9.01708 20.8238 8.9816 20.9257 8.96691C21.0275 8.95222 21.1313 8.95865 21.2306 8.98579C21.3298 9.01293 21.4224 9.06021 21.5026 9.12468C21.5828 9.18915 21.6489 9.26943 21.6968 9.36054C21.7446 9.45164 21.7732 9.55161 21.7807 9.65423C21.7883 9.75686 21.7746 9.85993 21.7406 9.95706C21.7066 10.0542 21.653 10.1433 21.5831 10.2188C21.0379 10.8972 20.4323 11.5248 19.7737 12.0938L21.6487 15.375C21.699 15.4606 21.7319 15.5552 21.7454 15.6535C21.7588 15.7519 21.7527 15.8519 21.7272 15.9478C21.7017 16.0437 21.6575 16.1337 21.597 16.2123C21.5366 16.291 21.4611 16.357 21.375 16.4063Z"
      fill="white"
    />
  </svg>
);

const eyeOpen = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="16"
    viewBox="0 0 24 16"
    fill="none"
  >
    <path
      d="M23.1853 7.69625C23.1525 7.62219 22.3584 5.86062 20.5931 4.09531C18.2409 1.74312 15.27 0.5 12 0.5C8.72999 0.5 5.75905 1.74312 3.40687 4.09531C1.64155 5.86062 0.843741 7.625 0.814679 7.69625C0.772035 7.79217 0.75 7.89597 0.75 8.00094C0.75 8.10591 0.772035 8.20971 0.814679 8.30562C0.847491 8.37969 1.64155 10.1403 3.40687 11.9056C5.75905 14.2569 8.72999 15.5 12 15.5C15.27 15.5 18.2409 14.2569 20.5931 11.9056C22.3584 10.1403 23.1525 8.37969 23.1853 8.30562C23.2279 8.20971 23.25 8.10591 23.25 8.00094C23.25 7.89597 23.2279 7.79217 23.1853 7.69625ZM12 14C9.11437 14 6.59343 12.9509 4.50655 10.8828C3.65028 10.0313 2.92179 9.06027 2.34374 8C2.92164 6.93963 3.65014 5.9686 4.50655 5.11719C6.59343 3.04906 9.11437 2 12 2C14.8856 2 17.4066 3.04906 19.4934 5.11719C20.3514 5.9684 21.0815 6.93942 21.6609 8C20.985 9.26188 18.0403 14 12 14ZM12 3.5C11.11 3.5 10.2399 3.76392 9.49993 4.25839C8.7599 4.75285 8.18313 5.45566 7.84253 6.27792C7.50194 7.10019 7.41282 8.00499 7.58646 8.87791C7.76009 9.75082 8.18867 10.5526 8.81801 11.182C9.44735 11.8113 10.2492 12.2399 11.1221 12.4135C11.995 12.5872 12.8998 12.4981 13.7221 12.1575C14.5443 11.8169 15.2471 11.2401 15.7416 10.5001C16.2361 9.76005 16.5 8.89002 16.5 8C16.4988 6.80691 16.0242 5.66303 15.1806 4.81939C14.337 3.97575 13.1931 3.50124 12 3.5ZM12 11C11.4066 11 10.8266 10.8241 10.3333 10.4944C9.83993 10.1648 9.45542 9.69623 9.22835 9.14805C9.00129 8.59987 8.94188 7.99667 9.05764 7.41473C9.17339 6.83279 9.45911 6.29824 9.87867 5.87868C10.2982 5.45912 10.8328 5.1734 11.4147 5.05764C11.9967 4.94189 12.5999 5.0013 13.148 5.22836C13.6962 5.45542 14.1648 5.83994 14.4944 6.33329C14.824 6.82664 15 7.40666 15 8C15 8.79565 14.6839 9.55871 14.1213 10.1213C13.5587 10.6839 12.7956 11 12 11Z"
      fill="white"
    />
  </svg>
);
export const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);

  const [tel, setTel] = useState("");
  const [telValid, setTelValid] = useState(true);

  const [password, setPassword] = useState("");
  const [passwordConfirma, setPasswordConfirm] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);

  const [eyePass, setEyePass] = useState(false);
  const [eyePassConfirm, setEyePassConf] = useState(false);

  const [passVisibility, setPassVisibility] = useState(false);
  const [passConfirmVisibility, setPassConfirmVisibility] = useState(false);

  // toggle visible or invisible password
  const toggleEyePassword = () => {
    setEyePass(!eyePass);
    setPassVisibility(!passVisibility);
  };
  const togglePasswordConfirmVisibility = () => {
    setEyePassConf(!eyePassConfirm);
    setPassConfirmVisibility(!passConfirmVisibility);
  };

  // validate email
  const validateEmail = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const isValidEmail = emailRegex.test(email);
    setEmailValid(isValidEmail);
  };

  //validate phone number
  const handlePhoneChange = (e: any) => {
    const inputValue = e.target.value;
    const formattedValue = formatPhoneNumber(inputValue);
    setTel(formattedValue);
  };
  const validateTel = () => {
    const isValidPhone =
      /^\+?\d{1,3}(\(\d{1,4}\))?\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/.test(tel);
    setTelValid(isValidPhone);
  };
  const formatPhoneNumber = (inputValue: any) => {
    const sanitizedValue = inputValue.replace(/[^0-9+() ]/g, "");
    return sanitizedValue;
  };

  // validate password
  const validatePassword = () => {
    setPasswordValid(
      password.length >= 4 &&
        passwordConfirma.length >= 4 &&
        password === passwordConfirma
    );
  };

  //send form
  const sendForm = () => {
    if (
      emailValid &&
      telValid &&
      passwordValid &&
      email !== "" &&
      tel !== "" &&
      password !== "" &&
      passwordConfirma !== ""
    ) {
      alert("Form sended!");
    } else {
      setEmailValid(false);
      setTelValid(false);
      setPasswordValid(false);
    }
  };

  return (
    <>
      <form autoComplete="off" className={styles.form}>
        {/* INPUT EMAIL */}
        <div className={styles.inputContainer}>
          <div
            className={`${styles.inputBlockEmail} ${
              !emailValid ? styles.valid : ""
            }`}
          >
            <span className={styles.asterisk}>*</span>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              className={styles.input}
              placeholder="Enter email"
              required
            />
          </div>
          <p
            className={`${styles.errorEmail} ${
              emailValid ? styles.errorEmailVisibility : ""
            }`}
          >
            Is not valid email
          </p>
        </div>

        {/* INPUT PHONE */}
        <div className={styles.inputContainer}>
          <div
            className={`${styles.inputBlockTel} ${
              !telValid ? styles.valid : ""
            }`}
          >
            <span className={styles.svg}>
              <div className={styles.flag}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1142_1691)">
                    <path
                      d="M32 5H4C2.93913 5 1.92172 5.42143 1.17157 6.17157C0.421427 6.92172 0 7.93913 0 9L0 18H36V9C36 7.93913 35.5786 6.92172 34.8284 6.17157C34.0783 5.42143 33.0609 5 32 5Z"
                      fill="#005BBB"
                    />
                    <path
                      d="M36 27C36 28.0609 35.5786 29.0783 34.8284 29.8284C34.0783 30.5786 33.0609 31 32 31H4C2.93913 31 1.92172 30.5786 1.17157 29.8284C0.421427 29.0783 0 28.0609 0 27V18H36V27Z"
                      fill="#FFD500"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1142_1691">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.arrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 9L12 14L17 9"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </span>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={tel}
              onChange={handlePhoneChange}
              onBlur={validateTel}
              className={styles.input}
              placeholder="+ 38(0__) ___ __ __"
              required
            />
          </div>
          <p
            className={`${styles.errorTel} ${
              telValid ? styles.errorTelVisibility : ""
            }`}
          >
            Please complete this field
          </p>
        </div>

        {/* INPUT PASSWORD */}
        <div className={styles.inputContainer}>
          <div
            className={`${styles.inputBlockPass} ${
              !passwordValid ? styles.valid : ""
            }`}
          >
            <span className={styles.asterisk}>*</span>
            <input
              type={passVisibility ? "text" : "password"}
              id="password"
              name="password"
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
              className={styles.input}
              placeholder="Password"
              required
            />
            <span onClick={toggleEyePassword}>
              {eyePass ? eyeOpen : eyeClosed}
            </span>
          </div>
          <p
            className={`${styles.errorPass} ${
              passwordValid ? styles.errorPassVisibility : ""
            }`}
          >
            Please complete this field
          </p>
        </div>

        {/* INPUT CONFIRM PASSWORD */}
        <div className={styles.inputContainer}>
          <div className={styles.inputBlockPass}>
            <span className={styles.asterisk}>*</span>
            <input
              type={passConfirmVisibility ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              autoComplete="new-password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              onBlur={validatePassword}
              className={styles.input}
              placeholder="Confirm password"
              required
            />
            <span onClick={togglePasswordConfirmVisibility}>
              {eyePassConfirm ? eyeOpen : eyeClosed}
            </span>
          </div>
          <p
            className={`${styles.errorPass} ${
              passwordValid ? styles.errorPassVisibility : ""
            }`}
          >
            Please complete this field
          </p>
        </div>
        <button className={styles.sendIt} onClick={sendForm}>
          <div className={styles.line}></div>
          <span>SEND IT</span>
        </button>
      </form>
    </>
  );
};
