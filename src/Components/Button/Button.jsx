
export default function ButtonMaker({name, styling,link}){
       return (
        <a href={link}>
           <button style={styling} >{name}</button>
        </a>
       )
    
}
