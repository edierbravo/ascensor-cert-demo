import React, { useEffect, useState } from "react";
import Image from "../assets/iso.png";
import Logo from "../assets/logo.svg";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";



const Login = () => {
  const [ showPassword, setShowPassword ] = useState(false);


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
            <form>
              <input type="email" placeholder="Correo" />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Contraseña" />
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
                <button type="button">Log In</button>
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

export default Login;
