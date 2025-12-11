import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import Patients from "./Page/Patients";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            
            <Route index element={<Home />} />
            <Route path="patient" element={<Patients />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
