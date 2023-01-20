import db from './firebase_data.js';
import { useState } from 'react';

  
  
//Firebase Code Attempt 100 
const Read = () => {
  
  const [info , setInfo] = useState([]);

  // Start the fetch operation as soon as
  // the page loads
  window.addEventListener('load', () => {
      Fetchdata();
    });

  // Fetch the required data using the get() method
  const Fetchdata = ()=>{
      db.collection("printing").get().then((querySnapshot) => {
           
          // Loop through the data and store
          // it in array to display
          querySnapshot.forEach(element => {
              var data = element.data();
              setInfo(arr => [...arr , data]);
                
          });
      })
  }
    
  // Display the result on the page
  console.log({info});
}
      