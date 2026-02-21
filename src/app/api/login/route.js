import dbConnect from "@/lib/db";
import User from "@/models/User";
import md5 from "md5";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { email, password } = body;

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not registered" });
    }

    if (md5(password) === user.password) {
      return NextResponse.json({ message: "Login Successful", user });
    } else {
      return NextResponse.json({ message: "Incorrect password" });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid User", error: error.message },
      { status: 500 },
    );
  }
}
