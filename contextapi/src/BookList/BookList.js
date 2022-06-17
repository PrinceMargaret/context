import React from 'react'
import AppContext from '../AppContext'
export default function BookList() {
    const [Book, setBook] = React.useState([])
    const theme = React.useContext(AppContext)
    
    
    React.useEffect(() => {
        if(theme==="off"){
            document.body.style.backgroundColor = "white";
          }
          else{
            document.body.style.backgroundColor = "black";
          }
        
        fetch('http://localhost:3001/books')
            .then(res => res.json())
            .then(data => setBook(data))
     
    }, [theme])
    



  return (
   <div className="container-fluid" style={{"backgroundColor":theme}}>
      
        <div className="row mt-2">
            {
            Book.map((item) => <div className="col-md-2 mt-5 " key={item.id}>
                <div className="card p-2 h-100">
                <img src={item.picture} className="card-img-top image"  alt={item.picture} />
            <div className="card-body justify-content-center">
                <h6 className="card-title ">{item.title}</h6>
               
                <p className="card-text align-bottom text-primary">{item.author}</p>
                
              
                
            </div>
            </div>


            </div>

            

      )
    
           }
           </div>
       </div>

  )
}
