
export default function Die(props) {

    return (
        <button className="die-component" 
        onClick={props.hold}
        style={{backgroundColor : props.isHeld ? "#59E391" : null}} >{props.number}</button>
    )
}