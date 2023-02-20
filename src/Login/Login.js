import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function Login() {
  const [error, setError] = React.useState(false);
  const [msg, setMsg] = React.useState("");
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      fetch(`http://localhost:9000/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        // converts a JavaScript object or value to a JSON string
        // converts a JavaScript object or value to a JSON string
        body: JSON.stringify(values),
      })
        
      // extracting the JSON data from the response object returned by the fetch() function
        .then((res) => res.json())
        .then((data) => {
          

          // If the status property of the data object is not equal to 401, it means that the request was successful and the server has provided an access token.
          if (data.status != 401) {
            localStorage.setItem("token", data.access_token);
            swal("Welcome to your online banking")
            navigate("/cardpro");
          } else {
            setError(true);
            setMsg(data.message);
          }
        });
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email("Invalid Email Address")
        .required("Email cannot be left blank"),
      password: yup.string().required("Password cannot be left blank"),
    }),
  });
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <img
            src="firstpic.png"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="500"
            height="500"
            loading="lazy"
          ></img>

{/* the handleSubmit() function is called when the user submits the login form  */}

          <form onSubmit={formik.handleSubmit} className="mb-3">
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="form-control form-control-sm"
                placeholder="Email"
              />
              {formik.errors.email && formik.touched.email ? (
                <span className="text-danger">{formik.errors.email}</span>
              ) : null}
            </div>
            <div className="mt-2">
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
            <div className="mt-2 text-center">
              <button id="btnLogin" type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
          {error ? (
            <div className="alert alert-danger" role="alert">
              {msg}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
