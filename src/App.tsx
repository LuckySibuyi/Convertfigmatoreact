import { useState } from "react";
import { LoginPage, SelectUserTypePage, SignUpPage, VendorSignUpPage, OTPVerificationPage, SignUpSuccessPage, ForgotPasswordPage, CreateNewPasswordPage } from "./src/pages/auth";
import { DashboardPage } from "./src/pages/user/DashboardPage";
import { Toaster } from "sonner";
import "./styles/globals.css";

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
  | "createNewPassword"
  | "vendorDashboard"
  | "corporateDashboard"
  | "selectUserType";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("selectUserType");
  const [accountType, setAccountType] = useState<"user" | "vendor" | "corporate">("corporate");
  const [userEmail, setUserEmail] = useState<string>("");
  const [isPasswordResetFlow, setIsPasswordResetFlow] = useState<boolean>(false);

  const handleNavigate = (page: Page) => {
    // Track if we're entering password reset flow
    if (page === 'forgotPassword') {
      setIsPasswordResetFlow(true);
    } else if (page === 'login' || page === 'vendorSignup') {
      setIsPasswordResetFlow(false);
    }
    setCurrentPage(page);
  };

  const handleSelectUserType = (type: "user" | "vendor" | "corporate") => {
    setAccountType(type);
  };

  const handleSignUp = (type: "user" | "vendor" | "corporate") => {
    setAccountType(type);
    // Navigate to create account page for ALL user types
    handleNavigate('vendorSignup');
  };

  const handleCreateAccount = (email: string) => {
    setUserEmail(email);
  };

  const handleLogin = (
    email: string,
    password: string,
    type: "user" | "vendor" | "corporate"
  ) => {
    console.log("Login:", { email, password, type });
    setAccountType(type);
    setUserEmail(email);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setCurrentPage("selectUserType");
    setAccountType("corporate");
    setUserEmail("");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "selectUserType":
        return (
          <SelectUserTypePage
            onNavigate={handleNavigate}
            onSelectUserType={handleSelectUserType}
          />
        );
      case "signup":
        return (
          <SignUpPage
            onNavigate={handleNavigate}
            onSignUp={handleSignUp}
          />
        );
      case "vendorSignup":
        return (
          <VendorSignUpPage
            onNavigate={handleNavigate}
            accountType={accountType}
            onCreateAccount={handleCreateAccount}
          />
        );
      case "otpVerification":
        return (
          <OTPVerificationPage
            onNavigate={handleNavigate}
            isSignupFlow={!isPasswordResetFlow}
            accountType={accountType}
            userEmail={userEmail || 'user@example.com'}
          />
        );
      case "signupSuccess":
        return (
          <SignUpSuccessPage
            onNavigate={handleNavigate}
            accountType={accountType}
          />
        );
      case "login":
        return (
          <LoginPage
            onNavigate={handleNavigate}
            onLogin={handleLogin}
            accountType={accountType}
          />
        );
      case "forgotPassword":
        return (
          <ForgotPasswordPage
            onNavigate={handleNavigate}
            accountType={accountType}
          />
        );
      case "createNewPassword":
        return (
          <CreateNewPasswordPage
            onNavigate={handleNavigate}
            accountType={accountType}
          />
        );
      case "dashboard":
      case "vendorDashboard":
      case "corporateDashboard":
        return (
          <DashboardPage
            onNavigate={handleNavigate}
            accountType={accountType}
            onLogout={handleLogout}
          />
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