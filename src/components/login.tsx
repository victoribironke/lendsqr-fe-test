"use client";

import styles from "@/styles/login.module.scss";
import { IMAGES, PAGES } from "@/constants/constants";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/ui/input";
import Button from "@/ui/button";

const Login = () => {
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateForm = () => {
    let isValid = true;
    const errs = { email: "", password: "" };

    if (!email) {
      errs.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!password) {
      errs.password = "Password is required";
      isValid = false;
    } else if (password.length < 8) {
      errs.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(errs);
    return isValid;
  };

  const handleLogin = () => {
    if (validateForm()) push(PAGES.users);
  };

  useEffect(() => {
    setErrors({ email: "", password: "" });
  }, [email, password]);

  return (
    <section className={styles.loginContainer}>
      <div className={styles.illustrationContainer}>
        <div className={styles.illustration}>
          <div>
            <img src={IMAGES.lendsqr_logo} alt="" />
          </div>
          <div>
            <img src={IMAGES.login_image} alt="" />
          </div>
        </div>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.login}>
          <h1>Welcome!</h1>
          <h2>Enter details to login</h2>

          <div className={styles.inputWrapper}>
            <Input
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              animatePlaceholder={true}
              error={errors.email}
            />
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              animatePlaceholder={true}
              error={errors.password}
            />

            <p>Forgot Password?</p>
          </div>

          <Button onClick={handleLogin}>LOG IN</Button>
        </div>
      </div>
    </section>
  );
};

export default Login;
