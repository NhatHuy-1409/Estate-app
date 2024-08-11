import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js"

export const register = async (req, res) => {
  const { username, email, password } = req.body

  try {
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

    res.status(201).json({ message: "User created successfully" })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Failed to create user!" })
  }
}

export const login = async (req, res) => {
  const { username, password } = req.body

  try {
    //Check if the user exists
    const user = await prisma.user.findUnique({
      where: { username },
    })
    if (!user) return res.status(401).json({ message: "Invalid Credentials!" })

    //Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if(!isPasswordValid) return res.status(401).json({ message: "Invalid Credentials!" }) 
  } catch {}
}

export const logout = (req, res) => {
  console.log(req.body)
}
