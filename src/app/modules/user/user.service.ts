import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  await user.save();
  return user;
};

export const getUserFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const users = await User.findOne(
    { id: payload },
    { name: 1, contactNumber: 1 }
  );
  return users;
};

export const getAdminUserFromDB = async (): Promise<IUser[]> => {
  const users = await User.getAdminUsers();
  return users;
};
