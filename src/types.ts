export type User = {
  _id?: string;
  userName: string;
  phoneNumber: string;
  email: string;
  hobbies: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};
export type EditableUser = {
  userName: string;
  phoneNumber: String;
  email: string;
  hobbies: string;
};
