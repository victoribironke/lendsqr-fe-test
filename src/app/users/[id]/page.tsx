import UserDetails from "@/components/user-details";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User page ~ Victor's Lendsqr Frontend Test",
  description: "This is a user page of Victor's Lendsqr Frontend Test",
};

const UserPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;

  return <UserDetails id={id} />;
};

export default UserPage;
