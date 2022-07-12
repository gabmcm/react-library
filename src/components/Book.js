const Book = ({ book, toggleRead }) => {
    const label = book.read ? 'read' : 'not read'

    return(
        <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <button onClick={toggleRead}>{label}</button>
        </div>
    )
  }

export default Book