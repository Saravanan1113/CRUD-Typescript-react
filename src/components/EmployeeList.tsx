import React, { useState } from "react";
import "./EmployeeList.style.css";
import { IEmployee } from "./EmployeeType";
import EmployeeModal from "./EmployeeModal";

type Props = {
  list: IEmployee[];
  onDeleteClickHandler: (data: IEmployee) => void;
  onEditEmployeeHandler: (data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {
  const { list, onDeleteClickHandler, onEditEmployeeHandler } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IEmployee | null);

  const viewEmployee = (data: IEmployee) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div>
        <article>
          <h3 className="list-header">EMPLOYEE LIST</h3>
        </article>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
            {list.map((item) => {
              console.log(item);
              return (
                <tr key={item.id}>
                  <td>{`${item.firstName} ${item.lastName}`}</td>
                  <td>{item.email}</td>
                  <td>
                    <div>
                      <input
                        type="button"
                        value="View"
                        onClick={() => viewEmployee(item)}
                      />
                      <input
                        type="button"
                        value="Edit"
                        onClick={() => onEditEmployeeHandler(item)}
                      />
                      <input
                        type="button"
                        value="Delete"
                        onClick={() => onDeleteClickHandler(item)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {showModal && dataToShow !== null && (
          <EmployeeModal onClose={closeModal} data={dataToShow} />
        )}
      </div>
    </>
  );
};

export default EmployeeList;
