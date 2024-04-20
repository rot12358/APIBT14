import { useState } from "react";
import "./bookcreate.css";
const BookCreate = ({onCreate}) => {
    const[title, setTitle] = useState("title");
    const[des, setDes] = useState("Description");
    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleChangeDes = (e) => {
        setDes(e.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const reps = await onCreate({
            // vì key và value giống nhau nên ghi chung 1 biến cho ngắn gọn
            // còn nếu key và value khác nhau thì chúng ta sẽ ghi đầy đủ ra!!!
            //  VD: key là title và value là title1 thì chúng ta không thể ghi như vậy
            title,
            des,
        });
        console.log(reps);
    };
  return (
    <div className="from-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
                <div className="Title">Title</div>
                <div className="title"><input onChange={handleChangeTitle} 
                type ="text" 
                id="title" 
                name="title" 
                /></div>
                <div className="Title">Description</div>
                <div className="des"><input onChange={handleChangeDes} 
                type ="text" 
                id="des" 
                name="des" 
                /></div>
               <input className="Create" type="submit" value="Create!" />
                
        </form>
    </div>
  );
};

export default BookCreate;