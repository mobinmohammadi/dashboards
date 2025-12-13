import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import Patients from "./Page/Patients";
import ListOfPatients from "./features/ListOfPatients/ListOfPatients";
import OnsPateintsEdit from "./features/ListOfPatients/OnsPateintsEdit/OnsPateintsEdit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="patient" element={<Patients />} />
            <Route path="listofpatients" element={<ListOfPatients />} />
            <Route path="onpateintsedit/:ID" element={<OnsPateintsEdit />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
