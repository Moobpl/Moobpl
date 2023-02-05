// 훅
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// 페이지 컴포넌트
import Intro from "../pages/Intro";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import MyPlan from "../pages/MyPlan";
import MoobAdd from "../pages/MoobAdd";
import MoobDetail from "../pages/MoobDetail";
import CheckList from "../pages/CheckList";
import AreaInfoList from "../pages/AreaInfoList";
import AreaInfoDetail from "../pages/AreaInfoDetail";
import LifeInfoList from "../pages/LifeInfoList";
import LifeInfoDetail from "../pages/LifeInfoDetail";
import Setting from "../pages/Setting";
import Announcement from "../pages/Announcement";
import AnnouncementDetail from "../pages/AnnouncementDetail";
import Service from "../pages/Service";
import Privacy from "../pages/Privacy";
import Event from "../pages/Event";

const routes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myplan" element={<MyPlan />} />
        <Route path="/moobadd" element={<MoobAdd />} />
        <Route path="/moobdetail/:id" element={<MoobDetail />} />
        <Route path="/moobdetail/:id/checklist" element={<CheckList />} />
        <Route path="/areainfolist" element={<AreaInfoList />} />
        <Route path="/areainfodetail/:id" element={<AreaInfoDetail />} />
        <Route path="/lifeinfolist" element={<LifeInfoList />} />
        <Route path="/lifeinfodetail/:id" element={<LifeInfoDetail />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/setting/announcement" element={<Announcement />} />
        <Route path="/setting/announcement/:id" element={<AnnouncementDetail />} />
        <Route path="/setting/service" element={<Service />} />
        <Route path="/setting/privacy" element={<Privacy />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
