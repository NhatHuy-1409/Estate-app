import prisma from "../lib/prisma.js"

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Failed to get users" })
  }
}

export const getUser = async (req, res) => {
  try {
    const id = req.params.id
    const user = await prisma.user.findUnique({ where: { id } })
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: "Failed to get user" })
  }
}

export const updateUser = async (req, res) => {
  const id = req.params.id
  const userId = req.userId
  const body = req.body

  //   if (id !== userId) return res.status(403).json({ message: "Not Authorized" })
  try {
    const updateUser = await prisma.user.update({
      where: { id },
      data: body,
    })

    console.log(updateUser)
    res.status(200).json(updateUser)
  } catch (error) {
    res.status(500).json({ message: "Failed to update user" })
  }
}
export const deleteUser = () => {}
