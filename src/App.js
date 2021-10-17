import './App.css';
import Head from "./Components/Header"
import Card from "./Components/Card"
import { useEffect,useState } from 'react';


const url="https://www.breakingbadapi.com/api/characters"

function App() {

const [info, setInfo]=useState([]);

useEffect(()=> {
  fetch(url)
  .then((response)=>response.json())
  .then((response)=>setInfo(response))
  .catch()

},[])

console.log(info)

  return (
    <div className="App">
      <Head />
     <div className="respond">
     {info.map((item) => (
          <Card key={item.id} 
           image={item.img} 
           name={item.name} 
           dob={item.birthday}  
           nickname={item.nickname}
           status={item.status} />
     ))}
     </div>
    </div>
  );
}

export default App;
