import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import RefreshToken from "@/models/RefreshToken";
import User from "@/models/User";

type ParamTypes = {
  email: string;
  password: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const ipAddress: string = "192.168.100.71";
  if (req.method === "POST") {
    const { email, password }: ParamTypes = req.body;
    const user: User | null = await User.findOne({ where: { email } });
    if (
      !user ||
      !user.isVerified ||
      !(await bcrypt.compare(password, user.passwordHash))
    ) {
      res.status(400).json({ message: "Email or password is incorrect" });
      return;
    }
    const jwtToken: string = generateJwtToken(user);
    const refreshToken: RefreshToken = generateRefreshToken(user, ipAddress);

    // save refresh token
    await refreshToken.save();

    // return basic details and tokens
    res.status(200).json({
      ...basicDetails(user),
      jwtToken,
      refreshToken: refreshToken.token,
    });
  }
}

function generateJwtToken(user: User): string {
  // create a jwt token containing the user id that expires in 15 minutes
  return jwt.sign({ sub: user.id, id: user.id }, "API_SET", {
    expiresIn: "15m",
  });
}

function generateRefreshToken(user: User, ipAddress: string): RefreshToken {
  // create a refresh token that expires in 7 days
  return new RefreshToken({
    userId: user.id,
    token: randomTokenString(),
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    createdByIp: ipAddress,
  });
}

function randomTokenString(): string {
  return crypto.randomBytes(40).toString("hex");
}

function basicDetails(user: User): any {
  const {
    id,
    title,
    firstName,
    lastName,
    email,
    user_type,
    status,
    created,
    updated,
    isVerified,
  } = user;
  return {
    id,
    title,
    firstName,
    lastName,
    email,
    user_type,
    status,
    created,
    updated,
    isVerified,
  };
}

