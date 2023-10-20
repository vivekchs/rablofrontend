import React from 'react'
import './display.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'




function Displayproduct() {

  
  const navigate = useNavigate();

  const [data, setdata] = useState([]);
  const [del , setDel] =useState(false);

  const display = async () => {
    let result = await fetch('http://localhost:8000/displaydata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

    })

    result = await result.json();

    setdata(result);

    console.log(result);

  }

    useEffect(() => {
    
      display();

    // console.log(data);
    }, [del])
  
  const handledelete = async (id) => {
    console.log(id);
    // id = id.toString();
    console.log(id);  
    const result = await fetch(`http://localhost:8000/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    setDel(!del);
    // navigate('/displayproduct');
  }

  // const updateProduct = async (req,res) => {
  //   let result = await fetch(`http://localhost:8000/${req.params._id}`, {
  //     method: 'Put',
  //     body: JSON.stringify({ Name}),
  //     headers: {
  //         'Content-Type': 'Application/json'
  //     }
  // });
  // result = await result.json();
  // if (result) {
  //     navigate('/')
  // }
  // }


  return (
    <div  className='cont'>


    <div className="search-box">
      <input
        type="text"
        placeholder="Search..."
        // onChange={handleSearch}
      />
    </div>

        <div className='container1'>
        <div className='list1'>ID</div>
        <div className='list1'>Name</div>
        <div className='list1'>rating</div>

        <div className='list1'>date</div>
        <div className='list1'>company</div>
        <div className='list1'>Price</div>
        {/* <button>UPDATE</button> */}
              {/* <button>DELETE</button> */}
      </div>

      
      {data.map((product , index) => {
        // console.log(product._id);
          return (
            <div  className='container'>
            <div className='list-itmes'>{index+1}</div>
            <div className='list-itmes'>{product.name}</div>
              <div className='list-itmes'>{ product.rating}</div>
              <div className='list-itmes'>{product.Date}</div>
            <div className='list-itmes'>{product.company}</div>
              <div className='list-itmes'>{product.price}</div>
              <button >UPDATE</button>
             
              <button onClick={() => handledelete(product._id) }>DELETE</button>
              </div>
          )
        })}
       
    
      
      




    </div>
  )
}

export default Displayproduct