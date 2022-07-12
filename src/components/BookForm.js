import { useState } from 'react'

const BookForm = ({ createBook }) => {
    const [newTitle, setNewTitle] = useState('')
    const [newAuthor, setNewAuthor] = useState('')
    const [newIsbn, setNewIsbn] = useState('')

    const handleTitleChange = (event) => {
        setNewTitle(event.target.value)
    }

    const handleAuthorChange = (event) => {
        setNewAuthor(event.target.value)
    }

    const handleIsbnChange = (event) => {
        setNewIsbn(event.target.value)
    }

    const addBook = (event) => {
        event.preventDefault()
        createBook({
            title: newTitle,
            author: newAuthor,
            ISBN: newIsbn,
        })

        setNewTitle('')
        setNewAuthor('')
        setNewIsbn('')
    }

    return (
        <div>
            <h2>Add a new book</h2>

            <form onSubmit={addBook}>
            <div>
                    title:
                    <input
                        value={newTitle}
                        onChange ={handleTitleChange}
                        id='book-title'
                    />
                </div>
                <div>
                    author:
                    <input
                        value={newAuthor}
                        onChange ={handleAuthorChange}
                        id='book-author'
                    />
                </div>
                <div>
                    ISBN:
                    <input
                        value={newIsbn}
                        onChange ={handleIsbnChange}
                        id='book-isbn'
                    />
                </div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default BookForm