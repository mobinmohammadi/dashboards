import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import Patients from "./Page/Patients";
import PrescriptionPage from "./Page/PrescriptionPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            
            <Route index element={<Home />} />
            <Route path="patient" element={<Patients />} />
            <Route path="prescriptionpage" element={<PrescriptionPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
