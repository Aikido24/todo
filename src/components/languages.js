
import USA from '../img/estados-unidos.png'; 
import SPAIN from '../img/espana.png'; 

const  English = ({Event})=>{
    return (
        <button onClick={Event} className="buttonUsa">
            <img src={USA} alt="flag USA" />
            <div>En</div>
        </button>
    )
}
const  Spanish = ({Event})=>{
    return (
        <button onClick={Event} className="buttonSpain">
            
            <img src={SPAIN} alt="flag SPAIN" />
            <div>Es</div>
            
        </button>
    )
}
const Languages = ({click,Language})=>{
    

    return(
        (Language)?
        <English Event={click}/>:
        <Spanish Event={click}/>
    );
};


export default Languages;
