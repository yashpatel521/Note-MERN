import React, { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LandingPage from "./screens/landing/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import UpdateNote from "./screens/UpdateNote/UpdateNote";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import { useSelector } from "react-redux";

const App = () => {
  const [search, setSearch] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <BrowserRouter>
      {userInfo && <Header setSearch={setSearch} />}
      <main>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/profile" component={ProfileScreen} />
        <Route
          exact
          path="/mynotes"
          component={() => <MyNotes search={search} />}
        />
        <Route exact path="/createnote" component={CreateNote} />
        <Route exact path="/note/:id" component={UpdateNote} />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
