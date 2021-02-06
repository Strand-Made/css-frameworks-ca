import "./sass/style.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Home from "./components/home/Home";
import News from "./components/news/News";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand className="navbar__logo">
              The YAY Company
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto navbar-nav">
                <NavLink
                  exact
                  to="/"
                  className="px-3 my-2 my-lg-0 mr-md-2 my-lg-0 navbar-nav__link"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/news"
                  className="px-3 my-2 my-lg-0 mr-md-2 my-lg-0 navbar-nav__link"
                >
                  News
                </NavLink>
                <NavLink
                  to="/contact"
                  className="px-3 my-2  mr-md-2 my-lg-0 navbar-nav__link"
                >
                  Contact
                </NavLink>
              </Nav>
              <Form inline className="navbar-form">
                <Col className="navbar-form-container d-flex justify-content-center">
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="navbar-form__input--search w-100 mr-sm-2"
                  />
                  <Button variant="primary">Go</Button>
                </Col>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
