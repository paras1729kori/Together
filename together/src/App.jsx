import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import CreateCampaign from "./pages/CreateCampaign";
import CampaignDetails from "./pages/CampaignDetails";
import WithdrawalRequest from "./pages/Withdrawal";
import CreateWithdrawalRequest from "./pages/CreateWithdrawalRequest";
import Footer from "./components/Footer";
import AuthContextProvider from "./context/AuthContext";

const App = () => {
  return (
    <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-6xl mx-auto my-5 md:my-12">
      <AuthContextProvider>
        <Navbar />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route
            path="/withdrawal-requests/:id"
            element={<WithdrawalRequest />}
          />
          <Route
            path="/create-withdrawal-request/:id"
            element={<CreateWithdrawalRequest />}
          />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </div>
  );
};

export default App;
