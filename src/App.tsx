import { useState } from "react";
import { Toaster } from "sonner@2.0.3";
import { DashboardPage } from "./src/pages/user/DashboardPage";
import { ProfilePage } from "./src/pages/user/ProfilePage";
import { UserTransactionsPage } from "./src/pages/user/UserTransactionsPage";
import { HelpSupportPage } from "./src/pages/user/HelpSupportPage";
import { MessageChatPage } from "./src/pages/user/MessageChatPage";
import { OverviewPage } from "./src/pages/user/OverviewPage";
import { SelectUserTypePage } from "./src/pages/auth/SelectUserTypePage";
import { SignUpPage } from "./src/pages/auth/SignUpPage";
import { VendorSignUpPage } from "./src/pages/auth/VendorSignUpPage";
import { OTPVerificationPage } from "./src/pages/auth/OTPVerificationPage";
import { SignUpSuccessPage } from "./src/pages/auth/SignUpSuccessPage";
import { LoginPage } from "./src/pages/auth/LoginPage";
import { ForgotPasswordPage } from "./src/pages/auth/ForgotPasswordPage";
import { CreateNewPasswordPage } from "./src/pages/auth/CreateNewPasswordPage";
import { ServiceDetailPage } from "./src/pages/user/ServiceDetailPage";
import { CampaignsPage } from "./src/pages/user/CampaignsPage";
import { ViewCampaignDetailPage } from "./src/pages/user/ViewCampaignDetailPage";
import { VouchersPage } from "./src/pages/user/VouchersPage";
import { SaveAsDraftPage } from "./src/pages/user/SaveAsDraftPage";
import { CorporateDashboardPage } from "./src/pages/corporate/CorporateDashboardPage";
import { CorporateCampaignsPage } from "./src/pages/corporate/CorporateCampaignsPage";
import { CorporateProfilePage } from "./src/pages/corporate/CorporateProfilePage";
import { CorporateTransactionsPage } from "./src/pages/corporate/CorporateTransactionsPage";
import { CorporateDraftsPage } from "./src/pages/corporate/CorporateDraftsPage";
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
  | "viewCampaignDetail"
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
  | "corporateCampaigns"
  | "corporateProfile"
  | "corporateTransactions"
  | "corporateDrafts"
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
        return (
          <DashboardPage
            onNavigate={handleNavigate}
            accountType={accountType}
            onLogout={handleLogout}
          />
        );
      case "corporateDashboard":
        return (
          <CorporateDashboardPage
            onNavigate={handleNavigate}
            onLogout={handleLogout}
          />
        );
      case "corporateCampaigns":
        return (
          <CorporateCampaignsPage
            onNavigate={handleNavigate}
            onLogout={handleLogout}
          />
        );
      case "corporateProfile":
        return (
          <CorporateProfilePage
            onNavigate={handleNavigate}
          />
        );
      case "corporateTransactions":
        return (
          <CorporateTransactionsPage
            onNavigate={handleNavigate}
          />
        );
      case "corporateDrafts":
        return (
          <CorporateDraftsPage
            onNavigate={handleNavigate}
          />
        );
      case "profile":
        return (
          <ProfilePage
            onNavigate={handleNavigate}
            onLogout={handleLogout}
          />
        );
      case "transactions":
        return (
          <UserTransactionsPage
            onNavigate={handleNavigate}
          />
        );
      case "helpSupport":
        return (
          <HelpSupportPage
            onNavigate={handleNavigate}
          />
        );
      case "messaging":
        return (
          <MessageChatPage
            onNavigate={handleNavigate}
          />
        );
      case "overview":
        return (
          <OverviewPage
            onNavigate={handleNavigate}
            onLogout={handleLogout}
          />
        );
      case "serviceDetail":
        return (
          <ServiceDetailPage
            onNavigate={handleNavigate}
          />
        );
      case "campaigns":
        return (
          <CampaignsPage
            onNavigate={handleNavigate}
          />
        );
      case "campaignDetail":
      case "viewCampaignDetail":
        return (
          <ViewCampaignDetailPage
            onNavigate={handleNavigate}
            onLogout={handleLogout}
          />
        );
      case "vouchers":
        return (
          <VouchersPage
            onNavigate={handleNavigate}
            onLogout={handleLogout}
          />
        );
      case "draft":
      case "saveDraft":
        return (
          <SaveAsDraftPage
            onNavigate={handleNavigate}
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