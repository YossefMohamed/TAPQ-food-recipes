import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../components/form/FormInput";
import { signup } from "../redux/slices/userSlice";
import { AppDispatch, Rootstate } from "../redux/store/store";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector((state: Rootstate) => state.userState);
  console.log(user);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("ggg");

    dispatch(
      signup({
        name,
        email,
        password,
        passwordConfirm,
      })
    );
  };
  return (
    <div className="flex justify-around  mt-[80px]">
      <div className="sign-up w-[45%]">
        <h2 className="title">Already have an account</h2>
        <form className="sign-up-form" onSubmit={onSubmit}>
          {error && (
            <div className="alert" role="alert">
              {error}
            </div>
          )}

          <FormInput
            type="text"
            name="email"
            value={email}
            label="email"
            handleonchange={handleEmailChange}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="password"
            handleonchange={handlePasswordChange}
          />

          <button className="btn btn-primary">Sign Up</button>
        </form>
      </div>
      <div className="sign-up w-[45%]">
        <h2 className="title">I do not have an account</h2>
        <form className="sign-up-form" onSubmit={onSubmit}>
          {error && (
            <div className="alert" role="alert">
              {error}
            </div>
          )}
          <FormInput
            type="text"
            name="displayName"
            label="UserName"
            value={name}
            handleonchange={handleNameChange}
          />
          <FormInput
            type="text"
            name="email"
            value={email}
            label="email"
            handleonchange={handleEmailChange}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="password"
            handleonchange={handlePasswordChange}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={passwordConfirm}
            label="confirm Password"
            handleonchange={(e: ChangeEvent<HTMLInputElement>) => {
              setPasswordConfirm(e.target.value);
            }}
          />

          <button className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
