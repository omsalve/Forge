import { NextResponse } from "next/server";
import prisma from "../../../libs/prisma"; // Correctly import our singleton client

// This function handles GET requests to /api/user/[id]
export async function GET(request, { params }) {
  try {
    const { id } = params; // Extract the user ID from the URL

    if (!id) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      // You can include related data here if needed
      // include: {
      //   workoutPlans: true,
      // }
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Don't send back sensitive data if you have any (e.g., password hash)
    const { ...userData } = user;

    return NextResponse.json(userData);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "An error occurred", error: error.message },
      { status: 500 }
    );
  }
}