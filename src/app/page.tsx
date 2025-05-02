import { PAGES } from "@/constants/constants";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Home ~ Victor's Lendsqr Frontend Test",
  description: "This is the home page of Victor's Lendsqr Frontend Test",
};

const Home = () => {
  redirect(PAGES.login);
};

export default Home;
