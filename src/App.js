import React from "react";
import {
  Button,
  Navbar,
  Card,
  CardImg,
  CardTitle,
  Component,
  CardText,
  Col,
  Row,
} from "reactstrap";
import { Link, Route } from "react-router-dom";
import PizzaForm from "./form";
const App = () => {
  return (
    <>
      <Navbar>
        <h1>Lambda Eats</h1>
        <div>
          <Link to={"/"}>
            <Button>Home</Button>
          </Link>
          <Button>Help</Button>
        </div>
      </Navbar>
      <Route exact path="/">
        <Card>
          <CardImg src={require("./Assets/Pizza.jpg")}></CardImg>
          <Link to={"/pizza"}>
            <Button style={{ position: "absolute", left: "50%", top: "80%" }}>
              Pizza?
            </Button>
          </Link>
        </Card>
      </Route>
      <Route path="/pizza">
        <PizzaForm></PizzaForm>
      </Route>
    </>
  );
};
export default App;
