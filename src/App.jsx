
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LandingPage from "./Components/Login/LandingPage";
// import ForgotPasswordPage from "./Components/Login/ForgotPasswardpage";
// import LoginPage from "./Components/Login/LoginPage";
// import OtpPage from "./Components/Login/Otp";
// import Resetpassword from "./Components/Login/Resetpassword";
// import Dashboard from "./Components/Dashboard/Dashboard";
// import Resgisterpage from "./Components/Dashboard/RegisterPage";
// import ViewResgister from "./Components/Dashboard/viewRegister/ViewRegister";
// import DataTable from "./Components/Dashboard/viewRegister/sub/ViewTable";
// import ViewReg2 from "./Components/Dashboard/viewRegister/sub/ViewReg2";
// import { DashAccounts, DashAccounts1 } from "./Components/Dashboard/DashAccounts";
// import Logout1 from "./Components/Login/Logout";
// import Payment1 from "./Components/Dashboard/Payment";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* login Routes */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/forgot-password" element={<ForgotPasswordPage />} />
//         <Route path="/email-otp" element={<OtpPage />} />
//         <Route path="/reset-password" element={<Resetpassword />} />

//         {/* Dashboard Routes */}
//         <Route path="/Dashboard" element={<Dashboard />} />
//         {/* <Route path="/Dashboard" element={<DashAccounts />} /> */}
//         {/* <Route path="/Dashboard" element={<DashAccounts1 />} /> */}
//         {/* <Route path="/register/dashboard" element={<Dashboard />} /> */}
//         <Route path="/register" element={<Resgisterpage />} />
//         <Route path="/View-Registered" element={<ViewResgister />} />
//         {/* <Route path="/dashboard/View-Registered" element={<ViewResgister />} /> */}
//         {/* <Route path="/dashboard/View-Registered" element={<DataTable/>} /> */}
//         <Route path="/dashboard/View-Registered/ViewReg2" element={<ViewReg2 />} />
//         <Route path="/dashboard/View-Registered/Logout" element={<Logout1/>} />
//         <Route path="/dashboard/View-Registered/ViewReg2/Logout" element={<Logout1/>} />
//         <Route path="/dashboard/Logout" element={<Logout1/>} />
//         <Route path="/dashboard/Payment History" element={<Payment1/>} />
        
        
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/Login/LandingPage";
import ForgotPasswordPage from "./Components/Login/ForgotPasswardpage";
import LoginPage from "./Components/Login/LoginPage";
import OtpPage from "./Components/Login/Otp";
import Resetpassword from "./Components/Login/Resetpassword";
import Dashboard from "./Components/Dashboard/Dashboard";
import RegisterPage from "./Components/Dashboard/RegisterPage";
// import DataTable from "./Components/Dashboard/viewRegister/sub/ViewTable";
import ViewReg2 from "./Components/Dashboard/viewRegister/sub/ViewReg2";
// import { DashAccounts, DashAccounts1 } from "./Components/Dashboard/DashAccounts";
import Logout1 from "./Components/Login/Logout";
import Payment1 from "./Components/Dashboard/Payment";
// import { Download1, RenewelPop1 } from "./Components/Dashboard/Renewel pop/RenewelPop";
import EditProfileMain from "./Components/Dashboard/viewRegister/EditProfile";
import ViewRegister from "./Components/Dashboard/viewRegister/ViewRegister";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/email-otp" element={<OtpPage />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/logout" element={<Logout1 />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/RenewelPop" element={<RenewelPop1/>} /> */}

        <Route path="/view-registered" element={<ViewRegister />} />
        {/* <Route path="/download1" element={<Download1 />} /> */}
        {/* <Route path="/view-profile-main" element={<ViewProfileMain />} /> */}
        <Route path="/view-profile-main" element={<EditProfileMain />} />
        <Route path="/viewReg2" element={<ViewReg2 />} />
        <Route path="/payment-history" element={<Payment1 />} />
      </Routes>
    </Router>
  );
}

export default App;
