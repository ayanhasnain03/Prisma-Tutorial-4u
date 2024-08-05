import { prisma } from "../lib/Prisma.js";

export const registerUser = async (req, res, next) => {
  try {
    const { email, name } = req.body;

    // Validate input
    if (!email || !name) {
      return res.status(400).json({
        success: false,
        message: "Email and name are required",
      });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    // Create new user
    await prisma.user.create({
      data: {
        email,
        name,
      },
    });

    // Respond with success message
    return res.status(201).json({
      success: true,
      message: `Welcome to Nexa.com, ${name}`,
    });
  } catch (error) {
    // Handle unexpected errors
    console.error("Error registering user:", error);
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "An unexpected error occurred",
    });
  }
};
