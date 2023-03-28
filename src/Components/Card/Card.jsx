
import ButtonMaker from '../Button/Button';
import './style.css';
export default function Card({pObj}) {
  const btn1={fontWeight: 'bold'};
  const btn2={fontWeight: 'normal'};
    return (
    <>
  <img src={pObj.img} alt="Avatar" />
  <div className="container">
    <h4><b>{pObj.title}</b></h4>
    <p>{pObj.desc}</p>
    <ButtonMaker link={pObj.link1} name="Go somewhere" styling={btn1}/>
    <br/>
    <ButtonMaker link={pObj.link2} name="Go somewhere2" styling={btn2}/>
    {/* <a href={pObj.link1} className="btn btn-primary">Go somewhere</a>
    <br/> <br/>
    <a href={pObj.link2} className="btn btn-success">Go somewhere2</a> */}
  </div>

  
  </>

       
       
    
    )
}