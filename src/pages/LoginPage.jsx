import React, { useEffect, useState } from "react";
import Image from "../assets/iso.png";
import Logo from "../assets/logo.svg";
// import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { useAuth } from "../hooks/useAuth";


const initialLoginForm = {
    email: 'admin@admin.com',
    password: '1234',
}

export const LoginPage = () => {
  const { handlerLogin } = useAuth();
  const [ showPassword, setShowPassword ] = useState(false);
  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const { email, password } = loginForm;

  const onInputChange = ({ target }) => {
        const { name, value } = target;
        setLoginForm(
            {
                ...loginForm,
                [name]: value,
            }
        )
    }

  const onSubmit = (event) => {
        event.preventDefault();
        console.log(loginForm)

        if (!email || !password) {
            console.log("Error campos vacios")
            // Swal.fire(
            //     'Campos obligatorios',
            //     'Correo y Password son requeridos',
            //     'error'
            // )
            return;
        }

        handlerLogin({ email, password });

        setLoginForm(initialLoginForm);
    }


  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo-center">
            <img src={Logo} alt="Logo" />
            <p className="login-logo-siglas">
              Organismo Nacional de Acreditación de Colombia
            </p>
          </div>

          <div className="login-center">
            <h2>Bienvenido!</h2>
            <p>Por favor ingresa tus credenciales</p>
            <form onSubmit={onSubmit}>
              <input 
                type="email" name="email" placeholder="Correo" value={email}
                onChange={onInputChange} 
              />
              <div className="pass-input-div">
                <input 
                  type={showPassword ? "text" : "password"} name="password" value={password} 
                  placeholder="Contraseña"  onChange={onInputChange}
                />
                {showPassword ? <FaEyeSlash className="eye-icon" onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye className="eye-icon" onClick={() => {setShowPassword(!showPassword)}} />}
              </div>

              {/* <div className="login-center-options"> */}
                {/* <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div> */}
                {/* <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a> */}
              {/* </div> */}
              <div className="login-center-buttons">
                <button type="submit">Log In</button>
                {/* <button type="button">
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button> */}
              </div>
            </form>
          </div>

          {/* <p className="login-bottom-p">
            Don't have an account? <a href="#">Sign Up</a>
          </p> */}

        </div>
      </div>
    </div>
  );
};

