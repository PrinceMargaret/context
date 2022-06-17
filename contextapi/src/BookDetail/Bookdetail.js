import React from 'react'
import  { useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import AppContext from '../AppContext'
export default function Bookdetail() {
  const [bookDetail, setbookDetail] = React.useState([]);
  const theme = React.useContext(AppContext)
  const navigate = useNavigate();
  let {id} =useParams();


 
  
   
 React.useEffect(() => {
  if(theme==="off"){
    document.body.style.backgroundColor = "white";
  }
  else{
    document.body.style.backgroundColor = "black";
  }

  
  fetch(`http://localhost:3001/Books/${id}`)
  .then(res => res.json())
  .then(data => {
   
   
     setbookDetail(data);
 
      }).catch(err => console.log(err));
 
 }, [id,theme])
 
const deleteBook=(id)=>{
  fetch(`http://localhost:3001/Books/${id}`,{
    method:"DELETE"
  })
  .then(res => 
    {
      if(res.status===200){
        document.getElementById("alert").innerHTML=`
        <div class="alert alert-danger" role="alert">
 Book Deleted Successfully
</div>`
      navigate("/manage-books");
      }
    })
  
}


   
  return (
   <div className="container-fluid" style={{"backgroundColor":theme}}>
     <div className="row">
       <div className="col-md-4" id="alert">
         
       </div>
     </div>
       <div className="row">
           <div className="col-md-4 mx-auto mt-3">
           <div className="card">
          <img src={bookDetail.picture} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title text-secondary">{bookDetail.title}</h5>
            <h5 className="card-title">{bookDetail.author}</h5>
           <div className='text-center mt-3'>
           <button onClick={deleteBook.bind(this , bookDetail.id)}  type="button" className="btn btn-danger">Danger</button>
         

            </div>

          </div>
        </div>
             
              
           </div>
       </div>
   </div>
   )
  


}
