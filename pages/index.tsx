import React from "react"
import type { GetServerSideProps, NextPage } from "next"
import { BookSugesstion } from "@prisma/client"
import {
  Button,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react"
interface Props {
  books: BookSugesstion[]
}
const Home: NextPage<Props> = ({ books }) => {
  console.log(books)

  return (
    <VStack>
      <Heading fontSize={"5xl"} color="gray.700">
        App Books Sugestions
      </Heading>
      <SimpleGrid width={"full"} minChildWidth={"200px"} gap={8}>
        {books.map((book) => (
          <GridItem key={book.id}>
            <VStack boxShadow={"md"} padding={4}>
              <Image rounded={'lg'}
                src={"https://placeholder.pics/svg/300"}
                alt=""
                maxW={"full"}
                objectFit="cover"
              />
              <VStack paddingX={4} align='flex-start' w={'full'}>
                <Heading as={'h2'} fontSize='2xl'>{book.title}</Heading>
                <Text>{book.author}</Text>
              </VStack>
              <Button colorScheme={'purple'} m={4} w='full'>{book.gener}</Button>
            </VStack>
          </GridItem>
        ))}
      </SimpleGrid>
    </VStack>
  )
}
export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  let books
  try {
    const response = await fetch("http://localhost:3000/api/bookstore", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    })
    const data = await response.json()
    if (data.success) {
      books = data.books
    }
  } catch (error) {
    books = null
  } finally {
    return {
      props: {
        books,
      },
    }
  }
}
