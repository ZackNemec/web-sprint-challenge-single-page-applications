import React from "react";
import * as yup from "yup";
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
import axios from "axios";

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
  const formSchema = yup.object().shape({
    name: yup.string().required().min(2),
  });
  const changleHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleMeats = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.checked });
  };
  const submit = () => {
    formSchema.validate(formData).then(() => {
      axios.post("https://reqres.in/api/users", formData).then((results) => {
        console.log("returned data from post", results.data);
      });
    });
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
      <Form
        style={{ width: "80%", margin: "0 auto" }}
        data-cy="submit"
        onSubmit={(event) => {
          event.preventDefault();
          submit();
          console.log(formData);
        }}
      >
        <FormGroup>
          <legend>name</legend>
          <Input
            type="text"
            name="name"
            data-cy="name"
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
                name="chicken"
                data-cy="checkbox1"
                checked={formData.chicken}
                onChange={handleMeats}
              />
              Chicken
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="bacon"
                data-cy="checkbox2"
                checked={formData.bacon}
                onChange={handleMeats}
              />
              Bacon
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="sausage"
                data-cy="checkbox3"
                checked={formData.sausage}
                onChange={handleMeats}
              />
              Sausage
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="pepperoni"
                data-cy="checkbox4"
                checked={formData.pepperoni}
                onChange={handleMeats}
              />
              Pepperoni
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <legend>Special Instructions</legend>
          <Input
            type="textarea"
            name="special"
            value={formData.special}
            onChange={changleHandler}
          ></Input>
        </FormGroup>
        <Card>
          <Button>Add to Order</Button>
        </Card>
      </Form>
    </>
  );
};

export default PizzaForm;
