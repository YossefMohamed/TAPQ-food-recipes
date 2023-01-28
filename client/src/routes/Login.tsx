import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import FormInput from "../components/form/FormInput";
import { signin, signup } from "../redux/slices/userSlice";
import { AppDispatch, Rootstate } from "../redux/store/store";

function Login() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [lEmail, setLEmail] = useState("");
  const [lPassword, setLPassword] = useState("");

  const navigate = useNavigate();
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    callback: (value: string) => void
  ) => {
    callback(e.target.value);
  };

  const dispatch = useDispatch<AppDispatch>();

  const userState = useSelector((state: Rootstate) => state.userState);
  useEffect(() => {
    if (userState.user._id)
      searchParams.get("to")
        ? navigate("/" + searchParams.get("to"))
        : navigate("/");
  }, [userState, navigate]);

  const onSubmitSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      signup({
        name,
        email,
        password,
        passwordConfirm,
      })
    );
  };
  const onSubmitSignIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      signin({
        email: lEmail,
        password: lPassword,
      })
    );
  };
  return (
    <div className="flex justify-around  mt-[80px]">
      <div className="sign-up w-[45%]">
        <h2 className="title">Already have an account</h2>
        <form className="sign-up-form" onSubmit={onSubmitSignIn}>
          <FormInput
            type="text"
            name="email"
            value={lEmail}
            label="email"
            handleonchange={(e) => handleInputChange(e, setLEmail)}
          />
          <FormInput
            type="password"
            name="password"
            value={lPassword}
            label="password"
            handleonchange={(e) => handleInputChange(e, setLPassword)}
          />

          <button className="btn btn-primary">Sign In</button>
        </form>
      </div>
      <div className="sign-up w-[45%]">
        <h2 className="title">I do not have an account</h2>
        <form className="sign-up-form" onSubmit={onSubmitSignUp}>
          <FormInput
            type="text"
            name="displayName"
            label="UserName"
            value={name}
            handleonchange={(e) => handleInputChange(e, setName)}
          />
          <FormInput
            type="text"
            name="email"
            value={email}
            label="email"
            handleonchange={(e) => handleInputChange(e, setEmail)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="password"
            handleonchange={(e) => handleInputChange(e, setPassword)}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={passwordConfirm}
            label="confirm Password"
            handleonchange={(e) => handleInputChange(e, setPasswordConfirm)}
          />

          <button className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
