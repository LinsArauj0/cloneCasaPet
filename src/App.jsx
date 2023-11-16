
import './App.css'
import RoutesApp from './Routes/Routes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer />
      <RoutesApp />
    </>
  )
}

export default App
