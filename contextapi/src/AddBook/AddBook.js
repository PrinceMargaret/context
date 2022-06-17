import {useState ,React,useContext , useEffect}from 'react'
import AppContext from '../AppContext'
export default function AddBook() {
  const theme = useContext(AppContext)
 
  const [booltitle, setbooltitle] = useState('');
  const [bookauthor, setbookauthor] = useState('');
  const [bookpicture, setbookpicture] = useState({});
  const [alert, setalert] = useState('');

  useEffect(() => {
    if(theme==="off"){
      document.body.style.backgroundColor = "white";
    }
    else{
      document.body.style.backgroundColor = "black";
    }
  
    
  }, [theme])
  
  
const upload=()=>{
  //setnewBook(...newBook, {title: booltitle, author: bookauthor, picture: bookpicture});
  fetch('http://localhost:3001/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    //body: JSON.stringify(newBook)
    body: JSON.stringify({title: booltitle, author: bookauthor, picture: bookpicture})
      


}).then(res => res.json()).then(() => {
  
 setalert(<div className="alert alert-success w-50 mx-auto mt-2" role="alert">
  Book Added Successfully
</div>)}
);
  

}




  return (
    
    <div className="container" style={{"backgroundColor":theme}}>
      <div className="row">
        <div className="col " id='msg'>
          {alert}
     
        </div>
      </div>
      <div className="row">
        <div className="col">
        <div className="mb-3 w-50 mx-auto py-2">
        <form className="form-floating mt-3 p-5 border border-secondary bg-light bg-gradient rounded-1">
        <div className="input-group flex-nowrap mt-3">
        <span className="input-group-text" id="addon-wrapping">Book Title</span>
        <input type="text" className="form-control" onChange={e=>setbooltitle(e.target.value)} placeholder="Book Title" aria-label="Book Title" aria-describedby="addon-wrapping"/>
      </div>
            <div className="input-group flex-nowrap mt-3 mb-3">
        <span className="input-group-text" id="addon-wrapping">Book Author</span>
        <input type="text" className="form-control" onChange={e=>setbookauthor(e.target.value)} placeholder="Book Author" aria-label="Book Author" aria-describedby="addon-wrapping"/>
      </div>
      <div className="input-group flex-nowrap mt-3">
         <input className="form-control " onChange={e=>setbookpicture(e.target.value)} type="file" id="formFile"/>
         </div>
         <div className="d-grid gap-2 d-md-block text-center mt-4">
          <button className="btn btn-success" type="button"  onClick={upload}>Upload</button>
         
        </div>
         </form>

         
      
         
          </div>
        </div>
      </div>
    </div>
    
  )
}
