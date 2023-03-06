import React, { useEffect, useState } from "react";
import Logo from "../../../../public/logotipo.png";
import ButtonDefault from "@/components/Layout/button_default";
import { useForm } from "@/hooks/useForm.hook";
import Swal from "sweetalert2";
import { validateLogin } from "@/utils/email_validator";
import { ErrorLogin, LoginU, User } from "@/model/user";
import useRequest from "@/hooks/useRequest";
import { useDispatch } from "react-redux";
import { logIn } from "@/redux/states";
import { useNavigate } from "react-router-dom";

export const FormComponent = () => {
  const { values, handleInputChange } = useForm({ email: "", password: "" });
  const [errors, setErrors] = useState<ErrorLogin>();
  const [state, fetchRequest] = useRequest();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (
    evt:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();
    setErrors(validateLogin(email, password));
    if(email.length > 0 && password.length > 0){

      fetchRequest("https://reqres.in/api/login", "POST", {
        email: email,
        password: password,
      });
    }
  };

  useEffect(() => {
    const parse = values as unknown as User;
    const { email, password } = parse;
    setEmail(email);
    setPassword(password);
  }, [values]);

  useEffect(() => {
    if (state.code == "200") {
      console.log(state.data as LoginU);
      const info: LoginU = state.data as LoginU;
      dispatch(logIn(info));
      navigate("/");
    }
    if(state.isError){
      Swal.fire({
        title: 'Oops..',
        text: "Something went wrong",
        icon: "error"
      })
    }
    console.log(state);
    return () => {};
  }, [state]);

  return (
    <>
      <div className="login_form">
        <img src={Logo} />
        <h3>Log In</h3>

        <form onSubmit={handleSubmit}>
          <input
            className="input_component"
            type="text"
            name="email"
            value={email}
            id="email"
            placeholder="Email"
            onChange={handleInputChange}
          />
          {errors?.email !== null && (
            <div className="input_component_error">{errors?.email}</div>
          )}
          <input
            className="input_component"
            type="password"
            name="password"
            value={password}
            id="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
          {errors?.password !== null && (
            <div className="input_component_error">{errors?.password}</div>
          )}
        </form>
        <ButtonDefault action={handleSubmit} />
      </div>
    </>
  );
};
