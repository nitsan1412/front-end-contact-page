import React, { useState, useEffect } from "react";
import { Grid, Stack, Paper, TextField } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { login, signup } from "../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import validateForm from "../helper/validations";
import { useNavigate } from "react-router-dom";
import strings from "../helper/hebrew-translation";

const Login = () => {
  const jwt = useSelector((state) => state.user.jwt);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [action, setAction] = useState("login");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (jwt) {
      navigate("./dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jwt]);

  useEffect(() => {
    if (action === "login") {
      setFormData({
        email: formData.email || "",
        password: formData.password || "",
      });
    } else {
      setFormData({
        email: formData.email || "",
        password: formData.password || "",
        user_name: formData.user_name || "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action]);

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const resoponse = await validateForm(formData);
    await setErrors(resoponse.errors);
    if (Object.keys(resoponse.errors).length === 0) {
      try {
        action === "login"
          ? dispatch(
              login({ email: formData.email, password: formData.password })
            )
          : dispatch(
              signup({
                email: formData.email,
                password: formData.password,
                user_name: formData.user_name,
              })
            );
      } catch (error) {
        console.error("Error during login:", error);
      }
    }
  };

  return (
    <Stack
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <LockIcon
            style={{ fontSize: 50, margin: "0 auto", display: "block" }}
          />
          <h2 style={{ textAlign: "center" }}>
            {action === "login" ? strings.login : strings.signin}
          </h2>
          <form style={{ maxWidth: "28rem" }}>
            <TextField
              fullWidth
              error={errors.email}
              label={strings.email}
              variant="outlined"
              margin="normal"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              helperText={errors.email && strings[errors.email]}
            />
            <TextField
              fullWidth
              error={errors.password}
              label={strings.password}
              type="password"
              variant="outlined"
              margin="normal"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              helperText={errors.password && strings[errors.password]}
            />
            {action === "signup" && (
              <TextField
                fullWidth
                error={errors.user_name}
                label={strings.user_name}
                variant="outlined"
                margin="normal"
                value={formData.user_name}
                onChange={(e) => handleChange("user_name", e.target.value)}
                helperText={errors.user_name && strings[errors.user_name]}
              />
            )}
            <div className="button-container">
              <div
                className="button"
                fullWidth
                onClick={(e) => handleLogin(e)}
                style={{ marginTop: "10px", alignSelf: "center" }}
              >
                {action === "login" ? strings.login : strings.signup}
              </div>
            </div>
          </form>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={8} md={6} lg={4} style={{ marginTop: "10px" }}>
        <div
          className="underline-text"
          onClick={() => {
            setAction(action === "login" ? "signup" : "login");
          }}
        >
          {action === "login"
            ? strings["change to signup"]
            : strings["change to login"]}
        </div>
      </Grid>
    </Stack>
  );
};

export default Login;
