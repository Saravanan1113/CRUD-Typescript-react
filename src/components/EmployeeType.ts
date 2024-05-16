export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export const dummyEmpList: IEmployee[] = [
  {
    id: new Date().toJSON().toString(),
    firstName: "Dummy1",
    lastName: "Dummy2",
    email: "dummy1@gmmail.com",
  },
];

export enum PageEnum {
  list,
  addEmp,
  edit,
}
