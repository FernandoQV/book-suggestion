import React, { FormEvent } from "react"
import { NextPage } from "next"
interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement
  author: HTMLInputElement
  gener: HTMLInputElement
}
interface ElementsFormElements extends HTMLFormElement {
  // now we can override the elements type to be an HTMLFormControlsCollection
  // of our own design...
  readonly elements: FormElements
}

const HomePage: NextPage = ({}) => {
  const handleSubmit =async (e: FormEvent<ElementsFormElements>) => {
    e.preventDefault()
    const title = e.currentTarget.elements.title.value
    const author = e.currentTarget.elements.author.value
    const gener = e.currentTarget.elements.gener.value
    if (!title || !author || !gener) return
    const body={title,author,gener}
    console.log(body);
    
    try {
     const response=await fetch('http://localhost:3000/api/bookstore',{
       method:'POST',
       headers:{'Content-Type':"application/json"},
       body:JSON.stringify(body)
     })
     if(response.status!==200){
       alert('HUbo error')
       return
     }
     console.log(response);
     
   } catch (error) {
     console.log(error); 
   } 

  }
  return (
    <div>
      <div>
        <h1>Book Suggestion</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="book">Book</label>
          <input id="title" type="text" placeholder="book" />
          <label htmlFor="author">Author Book</label>
          <input id="author" type="text" placeholder="author" />
          <label htmlFor="gener">Genre</label>
          <input id="gener" type="text" placeholder="genre" />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  )
}
export default HomePage
