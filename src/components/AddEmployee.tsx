import React, { useState } from "react";
import "./AddEmployee.style.css";
import { IEmployee } from "./EmployeeType";
type Props = {
  onClickBackBtn: () => void;
  onFormSubmit: (data: IEmployee) => void;
};
const AddEmployee = (props: Props) => {
  const { onClickBackBtn, onFormSubmit } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const onFirstNamechangeHnd = (e: any) => {
    setFirstName(e.target.value);
  };
  const onLastNamechangeHnd = (e: any) => {
    setLastName(e.target.value);
  };
  const onEmailchangeHnd = (e: any) => {
    setEmail(e.target.value);
  };

  const onSubmitClicked = (e: any) => {
    e.preventDefault();
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName,
      lastName,
      email,
    };
    onFormSubmit(data);
    onClickBackBtn();
  };
  return (
    <div className="form-container">
      <div>
        <h3>Add Employee</h3>
      </div>
      <form onSubmit={onSubmitClicked}>
        <label>FirstName :</label>
        <input
          type="text"
          value={firstName}
          onChange={onFirstNamechangeHnd}
        ></input>
        <br />
        <label>LastName :</label>
        <input
          type="text"
          value={lastName}
          onChange={onLastNamechangeHnd}
        ></input>
        <br />
        <label>Email Add :</label>
        <input type="text" value={email} onChange={onEmailchangeHnd}></input>
        <br />
        <div>
          <input type="button" value="Back" onClick={onClickBackBtn} />
          <input type="submit" value="Add Employee" />
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
