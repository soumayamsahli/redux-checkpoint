import logo from './logo.svg';
import './App.css';
import React ,{ useState, useSyncExternalStore } from 'react';
import{useSelector, useDispatch}from'react-redux'
import { addtodo, COMPLETEtodo, deletetodo } from './action/todoaction';
import {Modal,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {task,setTask} = useState("")
  const {edittask,setedittaask} = useState("")
  const {filter,setTfilter} = useState("all")
  const todos = useSelector(state=> state.todoReducer)
  const Dispatch=useDispatch()
  return (
    <div className="App">
      
        <input type="text" placeholder="add task..." onChange={(e) => setTask(e.target.value)}/>
        <button onClick={()=>Dispatch(addtodo(task))}>add task</button>
        <button onClick={()=>setfilter("all")}>all</button>
        <button onClick={()=>setfilter("done")}>done</button>
        <button onClick={()=>setfilter("undone")}>undone</button>

        {filter==="all" ?todos.map(el=><div>
          <h2>(el.title)</h2>
          
          <Button variant="primary" onClick={handleShow}>
        update
      </Button>
      <Modal show={show} onHide={handleClose}>
       
        <Modal.Body>
          <input type="text" placeholder="edit task..." onChange={(e) => seteditTask(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <button onClick={()=>Dispatch(deletetodo(el.id))}> DELETE</button>
          <button onClick={()=>Dispatch(updatetodo(el.id))}> {el.update? "done":"undone"}</button>
         </div>):filter==="done"(el=>el.COMPLETE===true)
         .map(el=> <div>
          <h2>(el.title)</h2>
          <button onClick={()=>Dispatch(deletetodo(el.id))}> DELETE</button>
          <button onClick={()=>Dispatch(COMPLETEtodo(el.id))}> {el.COMPLETE? "done":"undone"}</button>
         </div>): todos.filter(el => el.COMPLETE===false)
         .map(el =><div> 
          <h2>(el.title)</h2>
          <button onClick={()=>Dispatch(deletetodo(el.id))}> DELETE</button>
          <button onClick={()=>Dispatch(COMPLETEtodo(el.id))}> {el.COMPLETE? "done":"undone"}</button>
   

    </div>
    </div>
  );
}

export default App;
