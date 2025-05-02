import Users from "@/components/users";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users ~ Victor's Lendsqr Frontend Test",
  description: "This is the users page of Victor's Lendsqr Frontend Test",
};

const UsersPage = () => {
  return <Users />;
};

export default UsersPage;
