import React, { useReducer } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import Calendar from "./pages/Calendar";
import Tasks from "./pages/Tasks";
import Reports from "./pages/Reports";
import People from "./pages/People/Index";
import Person from "./pages/People/Edit";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Business from "./pages/Business";
import Payments from "./pages/Payments";
import Schedule from "./pages/Schedule/Index";
import PowerUps from "./pages/PowerUps";
import Plans from "./pages/Plans";
import Team from "./pages/Team";
import Billing from "./pages/Billing";
import Notifications from "./pages/Notifications";
import SettingsAccount from "./pages/SettingsAccount";

import "reactjs-popup/dist/index.css";
import "~/styles/global.scss";

import {
  // setCurrentUser,
  userReducer
} from "../react/state/user/reducer";
import { initialUserState } from "../react/state/user/state";
import { UserContext } from "../react/state/user/context";
import {
  // setCurrentAccount,
  accountReducer,
} from "../react/state/account/reducer";
import { initialAccountState } from "../react/state/account/state";
import { AccountContext } from "../react/state/account/context";
// import { getProfile } from "../react/api/profile";

export default function () {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const [accountState, accountDispatch] = useReducer(
    accountReducer,
    initialAccountState
  );

  // useEffect(() => {
  //   (async () => {
  //     const data = await getProfile();
  //     const currentUser = {
  //       name: data.name,
  //       name_familiar: data.name_familiar,
  //       account_id: data.account_id,
  //       email: data.email,
  //       id: data.id,
  //       person_id: data.person_id,
  //       phone: data.phone,
  //       created_at: data.created_at,
  //       updated_at: data.updated_at,
  //     };
  //     userDispatch(setCurrentUser(currentUser));
  //     accountDispatch(setCurrentAccount(data.account));
  //   })();
  // }, []);

  return (
    <BrowserRouter>
      <AccountContext.Provider
        value={{ state: accountState, dispatch: accountDispatch }}
      >
        <UserContext.Provider
          value={{ state: userState, dispatch: userDispatch }}
        >
          <Routes>
            {/* Authentication */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Admin */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/people" element={<People />} />
            <Route path="/people/:id" element={<Person />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/reports" element={<Reports />} />
            {/* Power Ups */}
            <Route path="/power-ups" element={<PowerUps />} />
            {/* Settings */}
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/account" element={<SettingsAccount />} />
            <Route path="/settings/business" element={<Business />} />
            <Route path="/settings/payments" element={<Payments />} />
            <Route path="/settings/schedule" element={<Schedule />} />
            <Route path="/settings/plans" element={<Plans />} />
            <Route path="/settings/team" element={<Team />} />
            <Route path="/settings/billing" element={<Billing />} />
            <Route path="/settings/notifications" element={<Notifications />} />
          </Routes>
        </UserContext.Provider>
      </AccountContext.Provider>
    </BrowserRouter>
  );
}
