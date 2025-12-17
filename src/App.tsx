import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./features/Home/Page/Home";
import Patients from "./Page/Patients";
import ListOfPatients from "./features/ListOfPatients/Page/ListOfPatients";
import OnsPateintsEdit from "./features/ListOfPatients/Components/OnsPateintsEdit/OnsPateintsEdit";
import Login from "./Page/Login";
import ProfilePage from "./Page/ProfilePage";
import TimeDays from "./Page/TimeDays";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="patient" element={<Patients />} />
            <Route path="listofpatients" element={<ListOfPatients />} />
            <Route path="onpateintsedit/:ID" element={<OnsPateintsEdit />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="timedays" element={<TimeDays />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
