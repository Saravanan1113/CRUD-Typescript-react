import { IEmployee } from "./EmployeeType";
import "./AddEmployee.style.css";
import { useState } from "react";
type Props = {
  data: IEmployee;
  onClickBackBtn: () => void;
  onUpdateBtnClicked: (data: IEmployee) => void;
};
const EditEmployee = (props: Props) => {
  const { data, onClickBackBtn, onUpdateBtnClicked } = props;

  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);

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
    const UpdataedData: IEmployee = {
      id: data.id,
      firstName,
      lastName,
      email,
    };
    onUpdateBtnClicked(UpdataedData);
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
          <input type="submit" value="Update Employee" />
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
