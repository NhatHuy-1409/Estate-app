import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js"

export const register = async (req, res) => {
  const { username, email, password } = req.body

  //Hass the password

  const hashedPassword = await bcrypt.hash(password, 10)

  // Create a new user and save to db

  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  })

  console.log({ newUser })
}

export const login = (req, res) => {
  console.log(req.body)
}

export const logout = (req, res) => {
  console.log(req.body)
}
