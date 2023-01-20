import './App.css';
import db from './firebase_config';
import React,{useState,useEffect} from 'react';
import { collection, query, where, onSnapshot, documentId } from "firebase/firestore";

function App() {
 
  const v = "KIEslbTqmKIHanhg6QcunLLr50nO";
  const q = query(collection(db, "printing/"+v+"/documents"));  /*, where("state", "==", "CA"))*/ 

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const cities = [];
    querySnapshot.forEach((doc) => {
        cities.push(doc.data());
    });
    console.log("Current cities in CA: ", cities);
  });

  return (
    <div className="App">
      <h1>Hi</h1>
      
          <div className="blog-container">
              <h2>Data</h2>
          </div>
          
      </div>
  );
}

export default App;
