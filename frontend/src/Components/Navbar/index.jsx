import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../../Pages/Profile";
import { getUser } from "../../app/actions/user.actions";
import { logout } from "../../app/slices/user.slice";
import LogoImage from "../../assets/logo.png";
import UserImage from "../../assets/user.jpeg";
import NotificationDropdown from "../NotificationDropdown";

Modal.setAppElement("div");

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    if (
      sessionStorage.getItem("Authorization") &&
      sessionStorage.getItem("userId")
    ) {
      if (!user.loginStatus) {
        dispatch(getUser(sessionStorage.getItem("userId")));
      }
    }

    if (!sessionStorage.getItem("Authorization")) {
      navigate("/login");
    }
  }, [dispatch, user.loginStatus]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={LogoImage}
              className="tastebuds logo"
              alt=" "
              height="40px"
              width="auto"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="d-flex align-items-center">
            <input
              type="text"
              placeholder="Search"
              className="form-control me-2"
            />
            <button className="btn btn-primary">
              <i class="fas fa-search"></i>Search
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            {user.loginStatus ? (
              <div className="d-flex align-items-center">
                <Link className="nav-link me-3" to="/">
                  <b>Timeline </b>
                </Link>
                <Link className="nav-link me-3" to="/user">
                  <b> Profile </b>
                </Link>
                <Link className="nav-link me-3" to="/mealList">
                  <b> Meal Plan </b>
                </Link>
                <Link className="nav-link me-3" to="/workoutStatus">
                  <b> Workout Status </b>
                </Link>
                <NotificationDropdown />
                <button
                  className="btn btn-outline-danger me-3"
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  Logout
                </button>
                <Link
                  onClick={() => {
                    openModal();
                  }}
                  className="d-flex align-items-center text-decoration-none"
                >
                  <img
                    src={
                      user?.user?.profileImage
                        ? user.user.profileImage
                        : UserImage
                    }
                    className="user-profile-image img-fluid me-1"
                    alt="Profile"
                  />
                  <span className="fw-bold">{user?.user?.username}</span>
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/login" className="btn btn-primary me-3">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-success">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Profile Modal"
      >
        <div className="p-2">
          <Profile closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );
}

export default Navbar;
