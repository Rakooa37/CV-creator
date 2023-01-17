import React from 'react'
import EducationDisplay from './EducationDisplay'

    export default function cvDisplay(props){
    return(
    <div className="cvDisplay" id = 'cv-display' ref = {props.innerRef}>
        <div className="cvDisplayHeader">
            <div className="name">{props.personalData.firstName + " " + props.personalData.lastName}</div>
            <div className="title">{props.personalData.title}</div>
        </div>
        

        <div className="cvDisplayBody">
            <div className="description">{props.personalData.description}</div>
            <div className = "personal-information">

                <label htmlFor="file-input">
                    <img src={props.image} alt = ""/>
                </label>
                <input type="file" id="file-input" onChange = {props.handleImageUpload}/>
                <div className="email">{props.personalData.email}</div>
                <div className="phoneNumber">{props.personalData.phoneNumber}</div>
                <div className="address">{props.personalData.address}</div>

                <EducationDisplay education = {props.education}></EducationDisplay>
            </div>

            <div className="personal-experience"> Work Experience <br/> <br/>
                {props.personalExperienceDisplays}
            </div>

            
        </div>
        
    </div>
    )  
}


