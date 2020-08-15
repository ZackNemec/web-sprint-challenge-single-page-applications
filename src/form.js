import React from "react";
import {
  Card,
  Form,
  FormGroup,
  Button,
  CardImg,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Label,
} from "reactstrap";

const PizzaForm = () => {
  const [isOpen, setClosed] = React.useState(false);
  const toggle = () => setClosed((currentState) => !currentState);
  const [formData, setFormData] = React.useState({
    name: "",
    size: "",
    sauce: "",
    chicken: false,
    sausage: false,
    pepperoni: false,
    bacon: false,
  });
  const changleHandler = (event) => {
    setFormData({ ...FormData, [event.target.name]: event.target.value });
  };
  const handleMeats = (event) => {
    setFormData({ ...FormData, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <Card>
        <h2 style={{ margin: "0 auto" }}>Build the PIZZA</h2>
        <CardImg
          style={{ width: "80%", margin: "0 auto" }}
          src={require("./Assets/Pizza.jpg")}
        />
      </Card>
      <Form style={{ width: "80%", margin: "0 auto" }}>
        <FormGroup>
          <legend>name</legend>
          <Input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={changleHandler}
          />
        </FormGroup>
        <FormGroup style={{ width: "80%", margin: "0 auto" }}>
          <Dropdown isOpen={isOpen} toggle={toggle}>
            <DropdownToggle caret>Select your Size</DropdownToggle>
            <DropdownMenu>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="size"
                    value="small"
                    onChange={changleHandler}
                  />
                  Small
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="size"
                    value="medium"
                    onChange={changleHandler}
                  />
                  Medium
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="size"
                    value="large"
                    onChange={changleHandler}
                  />
                  Large
                </Label>
              </FormGroup>
            </DropdownMenu>
          </Dropdown>
        </FormGroup>

        <FormGroup style={{ width: "80%", margin: "0 auto" }}>
          <legend>Select your sauce</legend>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="sauce"
                value="sauce 1"
                onChange={changleHandler}
              />
              Sauce 1
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="sauce"
                value="sauce 2"
                onChange={changleHandler}
              />
              Sauce 2
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="sauce"
                value="ketchup?"
                onChange={changleHandler}
              />
              Ketchup?
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup style={{ width: "80%", margin: "0 auto" }}>
          <legend>Select your Meat</legend>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="meat"
                value="chicken"
                checked={false}
                onChange={handleMeats}
              />
              Chicken
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="meat"
                value="bacon"
                checked={false}
                onChange={handleMeats}
              />
              Bacon
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="meat"
                value="sausage"
                checked={false}
                onChange={handleMeats}
              />
              Sausage
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="meat"
                value="pepperoni"
                checked={false}
                onChange={handleMeats}
              />
              Pepperoni
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <legend>Special Instructions</legend>
          <Input type="textarea" name="special"></Input>
        </FormGroup>
        <Card>
          <Button>Add to Order</Button>
        </Card>
      </Form>
    </>
  );
};

export default PizzaForm;
