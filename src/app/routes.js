import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { ScrollablePage } from "../pages/ScrollablePage";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<ScrollablePage />} />
        <Route path="/home" element={<ScrollablePage />} />
        <Route path="/about" element={<ScrollablePage />} />
        <Route path="/portfolio" element={<ScrollablePage />} />
        <Route path="/contact" element={<ScrollablePage />} />
        <Route path="*" element={<ScrollablePage />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
