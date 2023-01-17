export default function PersonalInformationForm(props){
  
    return(<div className = "personal-information-form"> 
        <form onChange={props.onChange}> <h2>Personal Information</h2>  
            <input type = "text" placeholder="First Name" className ="firstName"></input>
            <input type = "text" placeholder="Last Name" className ="lastName"></input>
            <input type = "text" placeholder="Title" className ="title"></input>
            <input type = "text" placeholder="Address" className ="address"></input>
            <input type = "text" placeholder="Phone Number" className ="phoneNumber"></input>
            <input type = "text" placeholder="Email" className ="email"></input>
            <input type = "textarea" placeholder="Description" className = "description"></input>
        </form>
    </div>);
}

