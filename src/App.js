
import Navbar from "./component/navbar/Navbar";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Createpost from "./screens/create/Createpost";
import Postdetail from "./screens/postdetail/Postdetail";
import Editpost from "./screens/edit/Editpost"
import Themeswitch from "./component/navbar/switch/Themeswitch";
import './Apps.css'
import useThemeContext from "./hookss/useThemeContext";


function App() {

  const {theme} = useThemeContext()
  return (
    <div className= {`App ${theme}bg`}>
      <BrowserRouter>
        <Navbar />
        <Themeswitch/>
        <div className="container">
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/create" element={<Createpost/>}/>
           <Route path="/postss/:id" element={<Postdetail/>}/>
           <Route path="/edit/:id" element={<Editpost/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
