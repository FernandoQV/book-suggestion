import { NextApiRequest, NextApiResponse } from "next"
import  prismaAdmin  from "../../db"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return await createBook(req, res)
  }
  if (req.method === "GET") {
    return await readBooks(req, res)
  }
  return res.status(200).json({ message: "Method not found", success: false })
}

const createBook = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body
  try {
    const newBook = await prismaAdmin.bookSugesstion.create({
      data: {
        title: body.title,
        author: body.author,
        gener: body.gener,
      },
    })
    return res.status(200).json({ book: newBook, success: true })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ book: null, success: false })
  }
}
const readBooks = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const allBooks = await prismaAdmin.bookSugesstion.findMany({})
    return res.status(200).json({ books: allBooks, success: true })
  } catch (error) {
    console.log(error)

    return res
      .status(500)
      .json({ message: "Error Server Prisma",books:[], success: false })
  }
}
