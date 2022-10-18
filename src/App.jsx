import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Products } from "./pages/Products";

function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <div style={{ marginLeft: "4rem" }}>
        <Products />
      </div>
    </>
  );
}
export default App;
