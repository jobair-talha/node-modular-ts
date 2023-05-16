import { Model } from "mongoose";

export interface IUser {
  id: string;
  role: "student";
  password: string;
  name: {
    firstName: String;
    lastName: String;
  };
  dateOfBirth?: string;
  gender: "male" | "female";
  email?: string;
  contactNumber: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
}

// instance method
export interface IUserMethods {
  fullName(): string;
}

// static Method
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): IUser[];
}
