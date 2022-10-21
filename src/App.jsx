import { ToastContainer } from "react-toastify";
import { Sidebar } from "./components/Sidebar";
import { Products } from "./pages/Products";

function App() {
  return (
    <>
      <ToastContainer pauseOnFocusLoss={false} />
      <Sidebar />

      <Products />
    </>
  );
}
export default App;
