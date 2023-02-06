import { ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import Routers from "./routes/index.routes"
import Global from "./styles/global.style"

const App = () => (
  <>
    <Global />
    <Routers />
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  </>
)

export default App
