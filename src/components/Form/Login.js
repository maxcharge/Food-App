import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import {login} from '../../redux/Shopping/shopping-actions'
import "./Login.css";
function Login({user,login}) {

	let history = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();
    if (e.target[1].value !== e.target[2].value) {
      alert("Passwords Dont match");
      return;
    }
    axios
      .post("http://localhost:3000/register", {
        username: e.target[0].value,
        password: e.target[1].value,
      })
      .then((res) => {
        res.data.name ? alert(res.data.message) : alert("Registerd Successfully now login");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", {
        username: e.target[0].value,
        password: e.target[1].value,
      })
      .then((res) => {
        if(res.data.name){
			alert(res.data.message);
		}else{
			login(res.data.username);
			history.replace("/Food-App");
		};
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="login-wrap">
      <div className="login-html">
        <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
        <label htmlFor="tab-1" className="tab">
          Sign In
        </label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" />
        <label htmlFor="tab-2" className="tab">
          Sign Up
        </label>
        <div className="login-form">
          <div className="sign-in-htm">
		  <form onSubmit={handleLogin}>
            <div className="group">
              <label htmlFor="user" className="label">
                Username
              </label>
              <input id="user" type="text" className="input" />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">
                Password
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
              />
            </div>
            <div className="group">
              <input type="submit" className="button" value="Sign In" />
            </div>
			</form>
          </div>
          <div className="sign-up-htm">
            <form onSubmit={handleRegister}>
              <div className="group">
                <label htmlFor="user" className="label">
                  Username
                </label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Repeat Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                />
              </div>
              <div className="group">
                <input
                  type="submit"
                  placeholder="Sign Up"
                  className="button"
                  value="Sign Up"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
	return {
	  user: state.shop.user,
	};
  };
  
  const mapDispatchToProps = (dispatch) => {
	return {
	  login: (name) => dispatch(login(name)),
	};
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Login);
