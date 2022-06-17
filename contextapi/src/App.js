
import Header from "./Header/Header";

import {BrowserRouter , Route, Routes} from "react-router-dom";
import BookList from "./BookList/BookList";
import AddBook from "./AddBook/AddBook";
import ManageBook from "./ManageBook/ManageBook";
import Bookdetail  from "./BookDetail/Bookdetail";
import AppContext from "./AppContext";
import {useState} from "react";

function App() {
  const [theme, settheme] = useState("off");

  return (
    <div>


      

      <AppContext.Provider value={theme}>
      <BrowserRouter>
      <Header />
        <div className="container">
          <div className="row mx-auto">
          <div class="form-check form-switch  mt-3">
  <input class="form-check-input" type="checkbox" onChange={e=>settheme(e.target.value)} role="switch" id="flexSwitchCheckChecked"/>
  <label class="form-check-label" for="flexSwitchCheckChecked">Dark theme</label>
</div>
          </div>

        </div>
       <Routes>
         <Route path="/" element={<BookList/>}/>
          <Route path="/home" element={<BookList/>} />
          <Route path="/add-books" element={<AddBook/>} />
          <Route path="/manage-books" element={<ManageBook/>} />
          <Route path="/manage-books/:id" element={<Bookdetail/>} />
        
          
       </Routes>
      </BrowserRouter>
      </AppContext.Provider>
     
    </div>
  );
}

export default App;
