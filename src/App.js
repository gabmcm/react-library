import { useState, useEffect } from 'react'
import Book from "./components/Book"
import BookForm from './components/BookForm'
import bookService from './services/books'

const App = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    bookService
      .getAll()
      .then(initialBooks => {setBooks(initialBooks)})
    }, [])

  const addBook = (bookObject) => {
    bookService
      .create(bookObject)
      .then(returnedBook => {
        console.log(returnedBook)
        setBooks(books.concat(returnedBook))
      })
  }

  const toggleReadOf = id => {
    const book = books.find(b => b.id === id)
    const changedBook = {...book, read: !book.read }

    bookService
      .update(id, changedBook)
      .then(returnedBook => {
        setBooks(books.map(book => book.id !== id ? book : returnedBook))
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <h1>Books</h1>
      <div>
        {books.map(book =>
            <Book key={book.id} book={book} toggleRead={() => toggleReadOf(book.id)} />
        )}
      </div>
      <BookForm createBook={addBook}/>
    </div>
  )
}

export default App