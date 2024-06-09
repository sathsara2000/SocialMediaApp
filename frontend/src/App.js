import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home/index";
import User from "./Pages/User";
import SharedPosts from "./Pages/SharedPosts";
import Profile from "./Pages/Profile";
import UserPosts from "./Pages/UserPosts";

// import HomePage from "./Pages/MealPlan/HomePage";
import MealList from "./Pages/MealPlan/MealList";
import AddMeal from "./Pages/MealPlan/AddMeal";
import ViewMeal from "./Pages/MealPlan/ViewMeal";
import UpdateMeal from "./Pages/MealPlan/UpdateMeal";

import WorkoutStatus from "./Pages/WorkoutStatus/workoutStatus";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/user/:userId" element={<UserPosts />} />
            <Route path="/sharedposts" element={<SharedPosts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/mealList" element={<MealList />} />
            <Route path="/add" element={<AddMeal />} />
            <Route path="/view/:id" element={<ViewMeal />} />
            <Route path="/update/:id" element={<UpdateMeal />} />
            <Route path="/workoutStatus" element={<WorkoutStatus />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
