import ToDo from './Components/ToDo'
import Modal from './Components/Modal'
import Backdrop from './Components/backdrop';


function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <ToDo text='Learn React'/>
      <ToDo text='Learn Python'/>
      <ToDo text='Learn C++'/>
      <ToDo text='Learn Java'/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
