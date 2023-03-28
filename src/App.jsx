import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import Profile from './Components/Profile/Profile' 
// import Box1 from './Components/Box1/Box1'; 
import './App.css'
import ButtonMaker from './Components/Button/Button'
import Card from './Components/Card/Card'
import Show_Hide from './Components/Show_Hide/Show_Hide'
// Props are a way to pass data from one component to another. They are similar to function parameters.
/*function Greetings({name,age,occupation}){
  //console.log("props",props)

  return (
    <div>
      <h3> Hi, I, {name}</h3>
      <p>
        I am {age}years old and I'm a {occupation}
      </p>
    </div>
  )
}*/

//Children props
// function Greetings({children}){
//   return (
//     <div>
//       <p> Hi, I'm {children}</p>

//     </div>
//   )
// }
function App() {
  // function formatName(user){
  //   return user.firstname+" "+user.lastname
  // }
  // const user = {
  //   firstname: "Alaa",
  //   lastname: "Barazi"
  // }
  // const data = ["Hello", "World"];
  // const number1 = 5;
  // const number2 = 6;
  const string = "I love React!";
  const btn1 = { fontWeight: 'bold' };
  const btn2 = { fontWeight: 'normal' };

  //Exe2
  const img1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBp59MjI8VCZIbrPEsXimA6Gct-8wAsgd6izYJX0QwZg7rOW-4MqilyCgD97E2Vi5PluQ&usqp=CAU';
  const img2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzSK7T5QDmTaEEUlosP7BukG6hF3xZPVip_qeHtIbDXuT1HhwVaOPzHpQtqSdUvk3tN58&usqp=CAU';
  const img3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBxgI4cZhdsOGkObC48dHE--q-ff0NOQrRYP888I87r4A0gZjKU3Cl_iVZo_d3G2v6pU&usqp=CAU';
  const card1 = {
    img: img1, title: "Book", desc: "The Book",
    link1: 'www.google.com', link2: 'www.ynet.com'
  };
  const cards = [
    {
      img: img1, title: "Book", desc: "The Book",
      link1: 'www.google.com', link2: 'www.ynet.com'
    },
    {
      img: img2, title: "Book2", desc: "The Book2",
      link1: 'www.google.com', link2: 'www.ynet.com'
    },
    {
      img: img3, title: "Book3", desc: "The Book3",
      link1: 'www.google.com', link2: 'www.ynet.com'
    }
  ]


    
  
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  const changeFlag = () => setFlag(flag => !flag);
  return (
    <>
      
      <button onClick={ ()=>setCount(count + 1)}>Increment</button>
      {count}

      <button onClick={changeFlag}> show/hide</button>

      <Show_Hide flag={flag} />



      {/*Exe2 <div className='card'>
      
        <Card pObj={cards[0]} />
        </div>
        <br/>
        <div className='card'>
        <Card pObj={cards[1]} />
        </div>
        <br/>
        <div className='card'>
        <Card pObj={cards[2]} />
      </div> */}
      {/* <ButtonMaker name="Important" styling={btn1} />
    <ButtonMaker name="Not Important" styling={btn2} /> */}

    </>


    /* <Greetings>
            <p>Hi, I am a software developer and I am 27 years old</p>
          </Greetings> */

    /*<div className='App'>
      {data[0]}&nbsp;{data[1]}
      <br />
      {number1}+{number2} = {number1 + number2}
      <br />
      The string's length is {string.length}
    </div> //react fragments  <> </> or <React.Fragment>*/
  )
}
export default App
