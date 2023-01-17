export default function PersonalExperienceForm(props){
    return(<div className = "personal-experience-form"> 
    <form onChange={props.onChange}> <h2>Personal Experience</h2>  
        <input type = "text" placeholder="Position" className ="position" id={props.id}></input>
        <input type = "text" placeholder="Company" className ="company" id={props.id}></input>
        <input type = "text" placeholder="City" className ="city" id={props.id}></input>
        <input type = "text" placeholder="From" className ="from" id={props.id}></input>
        <input type = "text" placeholder="To" className ="to" id={props.id}></input>
        <textarea rows="3" cols="40" placeholder="Description" className = "description" id={props.id}></textarea>
    </form>
</div>)
}