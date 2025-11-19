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
import { ROUTE_PATHS } from "../types";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATHS.HOME} element={<Layout />}>
        <Route index element={<LandingPage />} />
        {/* <Route path={ROUTE_PATHS.HOME} element={<LandingPage />}> */}
        <Route path={ROUTE_PATHS.INVENTORY} element={<InventoryPage />} />
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
