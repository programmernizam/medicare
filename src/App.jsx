import { Toaster } from "react-hot-toast";
import "./App.css";
import Layout from "./layout/Layout";
const App = () => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Layout />
    </div>
  );
};

export default App;
