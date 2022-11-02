import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dinner from "./Pages/Home/Rooms/Dinner/Dinner";
import Patio from "./Pages/Home/Rooms/Patio/Patio";
import Terrace from "./Pages/Home/Rooms/Terrace/Terrace";
import Layout from "./Pages/Layout/Layout";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}>
          <Route index element={<Dinner />} />
          <Route path="patio" element={<Patio />} />
          <Route path="terrace" element={<Terrace />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
