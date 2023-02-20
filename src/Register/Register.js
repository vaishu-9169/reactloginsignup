import { useFormik } from "formik";
import * as yup from "yup";
import React, { useRef } from "react";

import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./Register.css";
export default function Register() {
  let navigate = useNavigate();
  const data = useRef();
  const handleClick = () => {
    localStorage.setItem("inputvalue", data.current.value);
  };
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit: (values, action) => {
      fetch("http://localhost:9000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((data) => {
          swal(
            "Registered!!!!",
            "You Have Successfully Registered with us",
            "success"
          );
        });
      navigate("/login");
      action.resetForm();
    },
    onChange: (values) => {
      console.log("I am inside On Change ...");
    },
    validationSchema: yup.object().shape({
      firstname: yup
        .string()
        .min(3, "FirstName is too short")
        .max(10, "FirstName is too long")
        .required("FirstName cannot be left blank"),
      lastname: yup
        .string()
        .min(3, "LastName is too short")
        .max(10, "LastName is too long")
        .required("LastName cannot be left blank"),
      email: yup
        .string()
        .email("Invalid Email Address")
        .required("Email cannot be left blank"),

      password: yup.string().required("Password cannot be left blank"),
      password: yup
        .string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    }),
  });

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4 offset-md-4" id="register-image">
          <img
            src="/New1.png"
            id="signup-photo"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="500"
            height="500"
            loading="lazy"
          ></img>

          <form onSubmit={formik.handleSubmit}>
            <div className="mt-1">
              <input
                ref={data}
                id="firstname"
                name="firstname"
                type="text"
                value={formik.values.firstname}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="form-control form-control-sm"
                placeholder="First Name"
              />
              {formik.errors.firstname && formik.touched.firstname ? (
                <span className="text-danger">{formik.errors.firstname}</span>
              ) : null}
            </div>
            <div className="mt-1">
              <input
                id="lastname"
                name="lastname"
                type="text"
                value={formik.values.lastname}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="form-control form-control-sm"
                placeholder="Last Name"
              />
              {formik.errors.lastname && formik.touched.lastname ? (
                <span className="text-danger">{formik.errors.lastname}</span>
              ) : null}
            </div>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="text"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="form-control form-control-sm"
                placeholder="Email Address"
              />
              {formik.errors.email && formik.touched.email ? (
                <span className="text-danger">{formik.errors.email}</span>
              ) : null}
            </div>

            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="form-control form-control-sm"
                placeholder="Password"
              />
              {formik.errors.password && formik.touched.password ? (
                <span className="text-danger">{formik.errors.password}</span>
              ) : null}
            </div>

           

            <div className="mt-1 text-center" id="submitx">
              {/* <button type="reset" style={{
                backgroundColor: "#55A2C1",
                width: "15vw",
                color: "#000506",
                fontWeight: "bold"
              }}>Reset</button> */}
              
              <button
                onClick={handleClick}
                style={{
                  backgroundColor: "#55A2C1",
                  width: "15vw",
                  color: "#000506",
                  fontWeight: "bold",
                }}
                type="submit"
                className="btn btn"
              >
                Submit
              </button>
            </div>
            <br></br>
            <br></br>
          </form>
        </div>
      </div>
    </div>
  );
}
