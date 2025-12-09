import { useState } from "react";
import { LoginPage } from "./src/pages/auth";
import { Toaster } from "sonner";

type Page =
  | "dashboard"
  | "campaigns"
  | "vouchers"
  | "transactions"
  | "profile"
  | "overview"
  | "draft"
  | "howItWorks"
  | "campaignDetail"
  | "messaging"
  | "serviceDetail"
  | "selectedServices"
  | "createCampaign"
  | "manageCampaign"
  | "contributors"
  | "contributorDetail"
  | "campaignSchedule"
  | "campaignsHistory"
  | "contribute"
  | "individualCampaign"
  | "groupCampaign"
  | "managingCampaigns"
  | "helpSupport"
  | "saveDraft"
  | "selectServices"
  | "signup"
  | "vendorSignup"
  | "otpVerification"
  | "signupSuccess"
  | "login"
  | "forgotPassword"
  | "vendorDashboard"
  | "corporateDashboard"
  | "selectUserType";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("login");
  const [accountType, setAccountType] = useState<"user" | "vendor" | "corporate">("corporate");

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const handleLogin = (
    email: string,
    password: string,
    type: "user" | "vendor" | "corporate"
  ) => {
    console.log("Login:", { email, password, type });
    setAccountType(type);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return (
          <LoginPage
            onNavigate={handleNavigate}
            onLogin={handleLogin}
            accountType={accountType}
          />
        );
      case "dashboard":
      case "vendorDashboard":
      case "corporateDashboard":
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl mb-4">
                {currentPage === "vendorDashboard"
                  ? "Vendor Dashboard"
                  : currentPage === "corporateDashboard"
                    ? "Corporate Dashboard"
                    : "User Dashboard"}
              </h1>
              <p className="text-gray-600 mb-4">Dashboard page coming soon!</p>
              <button
                onClick={() => handleNavigate("login")}
                className="px-6 py-2 bg-[#8363f2] text-white rounded-md hover:bg-[#7354e1]"
              >
                Back to Login
              </button>
            </div>
          </div>
        );
      default:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl mb-4">Page: {currentPage}</h1>
              <p className="text-gray-600 mb-4">This page is coming soon!</p>
              <button
                onClick={() => handleNavigate("login")}
                className="px-6 py-2 bg-[#8363f2] text-white rounded-md hover:bg-[#7354e1]"
              >
                Back to Login
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <Toaster position="top-right" richColors />
      {renderPage()}
    </>
  );
}

export default App;
