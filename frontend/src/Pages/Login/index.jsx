import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../app/actions/user.actions";
import LoginImage from "../../assets/loginpic.jpg";

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    dispatch(login(user));
  };

  return (
    <div className="container mt-5 mb-5 card" style={{ backgroundColor: "#f0f0f0", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <div className="text-center">
              <h1 className="mt-1" style={{ color: "#1877F2", fontSize: "1.5rem", fontWeight: "bold"}}>Fitness Center - Fitness Social Media Network</h1>
              <img
                src={LoginImage}
                className="image-fluid"
                alt="login"
                style={{ maxWidth: "100%", height: "100%", borderRadius: "10px" }}
              />
            </div>
          </div>
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <div className="mt-5 mb-3">
                <label className="form-label" style={{ color: "#555", fontSize: "1.2rem" }}>Username</label>
                <input
                  type="text"
                  className="form-control input-width-login"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ borderRadius: "5px", border: "1px solid #ddd" }}
                />
                <div id="emailHelp" className="form-text" style={{ color: "#888", fontSize: "0.9rem" }}>
                  
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" style={{ color: "#555", fontSize: "1.2rem" }}>Password</label>
                <input
                  type="password"
                  className="form-control input-width-login"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ borderRadius: "5px", border: "1px solid #ddd" }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ borderRadius: "5px", fontSize: "1.2rem", fontWeight: "bold" }}>
                LOGIN
              </button>
            </form>
            <hr />
            <Link to="/forgotpassword" className="text-decoration-none" style={{ color: "#555", fontSize: "1rem" }}>
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
