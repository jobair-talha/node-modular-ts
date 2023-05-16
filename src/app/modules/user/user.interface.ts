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

export interface IUserMethods {
  fullName(): string;
}
