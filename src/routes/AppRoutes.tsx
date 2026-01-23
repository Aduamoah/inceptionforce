// AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import SuccessVerify from "../pages/verificationsuccess";
import RecoverPassword from "../pages/recoverpassword";
import ResetPassword from "../pages/resetpassword";
import FinishSetup from "../pages/finishsetup";
import EmailVerify from "../pages/emailverification";
import ResetPasswordMessage from "../pages/resetpasswordmessage";
import ResetSuccess from "../pages/resetsuccess";
import LandingPage from "../pages/landingpage";
import InventoryPage from "../pages/inventorypage";
import SolutionPage from "../pages/solutionspage";
import RetailPage from "../pages/retailpage";
import ConstructionPage from "../pages/constructionpage";
import AgriculturePage from "../pages/agriculturepage";
import RestaurantPage from "../pages/restaurantpage";
import ForcePage from "../pages/forcepage";
import FlexiblePage from "../pages/flexiblepage";
import AboutPage from "../pages/aboutus";
import PremisePage from "../pages/onpremise";
import { ROUTE_PATHS } from "../types";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATHS.HOME} element={<Layout />}>
        <Route index element={<LandingPage />} />
        {/* <Route path={ROUTE_PATHS.HOME} element={<LandingPage />}> */}
        <Route path={ROUTE_PATHS.INVENTORY} element={<InventoryPage />} />
        <Route path={ROUTE_PATHS.SOLUTIONS} element={<SolutionPage />} />
        <Route path={ROUTE_PATHS.RETAIL} element={<RetailPage />} />
        <Route path={ROUTE_PATHS.CONSTRUCTION} element={<ConstructionPage />} />
        <Route path={ROUTE_PATHS.AGRICULTURE} element={<AgriculturePage />} />
        <Route path={ROUTE_PATHS.RESTAURANT} element={<RestaurantPage />} />
        <Route path={ROUTE_PATHS.FORCE} element={<ForcePage />} />
        <Route path={ROUTE_PATHS.FLEXIBLE} element={<FlexiblePage />} />
        <Route path={ROUTE_PATHS.ABOUT} element={<AboutPage />} />
        <Route path={ROUTE_PATHS.PREMISE} element={<PremisePage />} />
        <Route path={ROUTE_PATHS.SIGNIN} element={<Signin />} />
        <Route path={ROUTE_PATHS.SIGNUP} element={<Signup />} />
        <Route path={ROUTE_PATHS.VERIFY} element={<SuccessVerify />} />
        <Route path={ROUTE_PATHS.RECOVER} element={<RecoverPassword />} />
        <Route path={ROUTE_PATHS.RESET} element={<ResetPassword />} />
        <Route path={ROUTE_PATHS.FINISH} element={<FinishSetup />} />
        <Route path={ROUTE_PATHS.EMAILVERIFY} element={<EmailVerify />} />
        <Route
          path={ROUTE_PATHS.RESETMESSAGE}
          element={<ResetPasswordMessage />}
        />
        <Route path={ROUTE_PATHS.RESETSUCCESS} element={<ResetSuccess />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
