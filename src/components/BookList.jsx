import BookShow from "./BookShow";
import "./booklist.css";
const BookList = ({books, onDelete, onEdit}) => {
    console.log(books)
  return (
    <div className="book-list">
        {books.map((book) => (
           <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
        ))}
    </div>
  );
};

export default BookList;