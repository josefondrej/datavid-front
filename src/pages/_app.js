import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import AboutPage from "./about";
import FaqPage from "./faq";
import PricingPage from "./pricing";
import AddDataPage from "./adddata";
import ViewDataPage from "./viewdata";
import DashboardPage from "./dashboard";
import ContactPage from "./contact";
import AuthTypePage from "./authtype";
import { Switch, Route, Router } from "./../util/router.js";
import Footer from "./../components/Footer";
import { ProvideAuth } from "./../util/auth.js";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <NavbarCustom
            bg="white"
            variant="light"
            expand="md"
            logo="/logo.png"
          ></NavbarCustom>

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/about" component={AboutPage} />

            {/*<Route exact path="/faq" component={FaqPage} />*/}

            <Route exact path="/pricing" component={PricingPage} />

            <Route exact path="/add-data" component={AddDataPage} />

            <Route exact path="/view-data" component={ViewDataPage} />

            <Route exact path="/dashboard" component={DashboardPage} />

            <Route exact path="/auth/:type" component={AuthTypePage} />

            <Route exact path="/contact" component={ContactPage} />


            <Route
              component={({ location }) => {
                return (
                  <div
                    style={{
                      padding: "50px",
                      width: "100%",
                      textAlign: "center"
                    }}
                  >
                    The page <code>{location.pathname}</code> could not be
                    found.
                  </div>
                );
              }}
            />
          </Switch>

          <Footer
            bg="light"
            textColor="dark"
            size="sm"
            bgImage=""
            bgImageOpacity={1}
            description="A short description of what you do here"
            copyright="© 2020 DataVID"
            logo="/logo.png"
          ></Footer>
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
