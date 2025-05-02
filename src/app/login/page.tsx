import { Metadata } from "next";
import Login from "@/components/login";

export const metadata: Metadata = {
  title: "Login ~ Victor's Lendsqr Frontend Test",
  description: "This is the login page of Victor's Lendsqr Frontend Test",
};

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
