import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
   const [modalIsOpen, setModalIsOpen] = useState(false); //React hook

  function deleteHandler() {
    setModalIsOpen(true);
  }
  
  function colseModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={colseModalHandler} onConfirm={colseModalHandler}/>}
      {modalIsOpen && <Backdrop onCancel={colseModalHandler}/>}
    </div>
  );
}
export default Todo;
