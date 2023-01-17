export default function EducationDisplay(props){
    return(
        <div className="education-component"> <br></br> <h2>Education</h2>
            <div className="subject">{props.education.subject}</div>
            <div className="university">{props.education.university}</div>
            <div className="city">{props.education.city}</div>
            <div className="from">{props.education.from} - {props.education.to}</div>
        </div>
    )
}