import React, { useState } from "react";
import "./Home.style.css";
import { IEmployee, PageEnum, dummyEmpList } from "./EmployeeType";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
const Home = () => {
  //statemanagement
  const [employeeList, setEmployeeList] = useState(dummyEmpList as IEmployee[]);

  const [showPage, setShowPage] = useState(PageEnum.list);

  const [dataToEdit, setDataToEdit] = useState({} as IEmployee);
  const addEmpHandler = (): void => {
    setShowPage(PageEnum.addEmp);
  };
  const showListPage = () => {
    setShowPage(PageEnum.list);
  };

  const addEmployee = (data: IEmployee) => {
    setEmployeeList([...employeeList, data]);
  };

  const deleteEmployee = (data: IEmployee) => {
    const indexToDelete = employeeList.indexOf(data);
    const tempList = [...employeeList];

    tempList.splice(indexToDelete, 1);
    setEmployeeList(tempList);
  };

  const editEmployee = (data: IEmployee) => {
    setShowPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = (data: IEmployee) => {
    const filterData = employeeList.filter((x) => x.id === data.id)[0];
    const indexToUpdate = employeeList.indexOf(filterData);
    const tempData = [...employeeList];
    tempData[indexToUpdate] = data;
    setEmployeeList(tempData);
  };
  return (
    <>
      <article className="header-article">
        <header>
          <h1>React CRUD operations</h1>
        </header>
      </article>

      <section className="section-content">
        {showPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="Add Employee"
              onClick={addEmpHandler}
              className="add-employee-btn"
            />
            <EmployeeList
              list={employeeList}
              onDeleteClickHandler={deleteEmployee}
              onEditEmployeeHandler={editEmployee}
            />
          </>
        )}

        {showPage === PageEnum.addEmp && (
          <AddEmployee
            onClickBackBtn={showListPage}
            onFormSubmit={addEmployee}
          />
        )}
        {showPage === PageEnum.edit && (
          <EditEmployee
            data={dataToEdit}
            onClickBackBtn={showListPage}
            onUpdateBtnClicked={updateData}
          />
        )}
      </section>
    </>
  );
};

export default Home;
