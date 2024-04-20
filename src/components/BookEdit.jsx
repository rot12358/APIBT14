import { useState } from "react";
export const BookEdit = ({book,onEdit}) => {
    const[title, setTitle] = useState(book.title);
    const[des, setDes] = useState(book.des);
    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleChangeDes = (e) => {
        setDes(e.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        onEdit(book.id, {
            title,
            des,
        }

        );
    };
  return (
    <div>
        <h3>Edit a Book</h3>
        <form onSubmit={handleSubmit}>
                <label htmlFor="">Title</label>
                <input onChange={handleChangeTitle}
                type ="text" 
                id="title" 
                name="title"
                value={title}
                /><br></br>
                <input onChange={handleChangeDes} 
                value={des} 
                type ="text" 
                id="des" 
                name="des" 
                />
                <input className="Edit"  type="submit" value="Edit"/>
                <><button className="out">Cancel</button></>
               
                
        </form>
        
    </div>
  )
}

export default BookEdit