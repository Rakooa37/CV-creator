export default function PersonalExperienceDisplay(props){
    return(<div className="personal-experience-component">
    <div className ="position">{props.data.position}</div>
    <div className ="company">{props.data.company}</div>
    <div className ="city">{props.data.city}</div>
    <div className ="period">{props.data.from} - {props.data.to}</div>
    <div className ="description-experience">{props.data.description}</div>
    <br></br>
    </div>)
}

