import dbConnect from "@/lib/db";
import User from "@/models/User";
import md5 from "md5";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { name, email, password } = body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json({ message: "User already registered" });
    }

    const newUser = new User({
      name,
      email,
      password: md5(password),
    });

    await newUser.save();
    return NextResponse.json({ message: "Successful registration" });
  } catch (error) {
    return NextResponse.json(
      { message: "Registration failed", error: error.message },
      { status: 500 },
    );
  }
}
