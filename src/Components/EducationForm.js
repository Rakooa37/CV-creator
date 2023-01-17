export default function EducationForm(props){
    return(<div className = "education-form"> 
    <form onChange={props.onChange}> <h2>Education</h2>  
        <input type = "text" placeholder="University" className ="university"></input>
        <input type = "text" placeholder="Subject" className ="subject"></input>
        <input type = "text" placeholder="City" className ="city"></input>
        <input type = "text" placeholder="From" className ="from"></input>
        <input type = "text" placeholder="To" className ="to"></input>
    </form>
</div>)
}