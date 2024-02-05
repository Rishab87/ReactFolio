import './ItemDate.css';

function ItemDate(props){
    const day =props.day; //assume yeh sab values kisi api se fetch ki hai pr phir bhi jitne baar itemdate use krenge utne baar data toh same hi mil rhai hai reusability ka kya hua? uske liye use krenge props
    const month = props.month;
    const year = props.year;
    return( //use curly braces to put variables inside tags without curly braces exact word ajayega 
        <div className='date'>
            <span>{day} </span>
            <span>{month} </span>
            <span>{year}</span>
        </div>
    )
}
 
export default ItemDate;