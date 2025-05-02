import { USERS } from "@/constants/users";
import { NextResponse } from "next/server";

export const GET = async () => NextResponse.json({ users: USERS });
