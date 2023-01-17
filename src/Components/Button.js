export default function Button(props){
    return(
        <div>
            <button type="button" style = {{backgroundColor:props.color}} onClick = {props.onClick}>{props.text}</button>
        </div>
    )
}