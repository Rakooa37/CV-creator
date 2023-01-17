import './Styles/App.css'
import './Styles/Form.css'
import './Styles/CvDisplay.css'

import CvDisplay from './Components/CvDisplay';
import PersonalInformationForm from './Components/PersonalInformationForm';
import {useEffect, useRef, useState} from 'react'
import PersonalExperienceForm from './Components/PersonalExperienceForm';
import Button from './Components/Button';
import PersonalExperienceDisplay from './Components/PersonalExperienceDisplay';
import { exportComponentAsPDF } from 'react-component-export-image'
import EducationForm from './Components/EducationForm';



export default function App() {

  const ref = useRef(0);
  const pdf = useRef()
  
  const handleChangePersonalExperience = (e) =>{
    setPersonalExperience((prev)=>{
      return {...prev, [e.target.className]:e.target.value}
    });   
    
  }
  const [image, setImage] = useState("avatar.jpg")
  const [personalExperience, setPersonalExperience] = useState({'position': "", 'company': "", 'city':"", 'from':"", 'to':"", 'description': ''});
  const [personalExperiences, setPersonalExperiences] = useState([{'position': "", 'company': "", 'city':"", 'from':"", 'to':"", 'description': ''}]);
  const [personalExperienceForms, setpersonalExperienceForms] = useState([<PersonalExperienceForm key = {0} id = {0} onChange={handleChangePersonalExperience}/>]);
  const [personalInfo, setPersonalInfo] = useState({firstName: '', lastName: '', title: '', address: '', phoneNumber: '', email: '', description: ''}); 
  const [personalExperienceDisplays, setPersonalExperienceDisplays] = useState([<PersonalExperienceDisplay key={0} id = {0} data={{'position': "", 'company': "", 'city':"", 'from':"", 'to':"", 'description': ''}}/>]);
  const [education, setEducation] = useState({'university': '', "subject": '', 'city':'', 'from':'', 'to':''})
  
  const handleChangePersonalInfo = (e)=>{
    setPersonalInfo({...personalInfo, [e.target.className]: e.target.value});
  }

  const handleChangeEducation = (e)=>{
    setEducation({...education, [e.target.className] : e.target.value});
  }

  useEffect(()=>{
    console.log(ref.current);
    console.log(personalExperience)
    console.log(personalExperiences);
    
  })  

  document.addEventListener('click', (event)=>{
    if(event.target.tagName.toLowerCase() === 'input' || event.target.tagName.toLowerCase() === 'textarea'){
      ref.current = event.target.id
    }
    
  }) 

  document.addEventListener('keydown', (event)=>{
    if(event.key == "Tab" && (event.target.tagName.toLowerCase() === 'input'|| event.target.tagName.toLowerCase() === 'textarea')){
      ref.current = event.target.id
    }
  }) 

  document.addEventListener('keydown', (event)=>{
    if((event.key === "Backspace" || event.key === "Delete") || (event.target.tagName.toLowerCase() === 'input' || event.target.tagName.toLowerCase() === 'textarea') ){
      ref.current = event.target.id
    }
  }) 

  document.addEventListener('focus', (event)=>{
    if(event.target.tagName.toLowerCase() === 'input' || event.target.tagName.toLowerCase() === 'textarea'){
      ref.current = event.target.id
    }
  })  
  
  useEffect(()=>{
    if(ref.current){
      setPersonalExperience(personalExperiences[ref.current])  
    }
  },[ref.current])

  
  useEffect(()=>{
    if(ref.current){

      setPersonalExperiences((prev)=>{
        
        let newArray = [...prev];
        newArray[ref.current] = personalExperience;
        return newArray
      })
    }
    
  }, [personalExperience])

  useEffect(()=>{
    const displays = [...personalExperienceDisplays];
      displays[ref.current] = <PersonalExperienceDisplay key={ref.current} id = {ref.current} data={personalExperiences[ref.current]}/>
      setPersonalExperienceDisplays(displays);
  }, [personalExperiences])



  const handleAddClick = ()=>{
    const newPersonalExperienceForm = <PersonalExperienceForm key={personalExperienceForms.length} id = {personalExperienceForms.length} onChange={handleChangePersonalExperience}/>;
    const newPersonalExperienceDisplay = <PersonalExperienceDisplay key={personalExperienceDisplays.length} id = {personalExperienceDisplays.length} data = {{'position': "", 'company': "", 'city':"", 'from':"", 'to':"", 'description': ''}}/>;
    setpersonalExperienceForms([...personalExperienceForms, newPersonalExperienceForm])

    setPersonalExperienceDisplays((prev)=>{
      return [...prev, newPersonalExperienceDisplay]
    });

    ref.current = parseInt(ref.current)
    
    setPersonalExperiences((prev)=>{
      let newArray = [...prev];
      newArray[personalExperienceForms.length] = {'position': "", 'company': "", 'city':"", 'from':"", 'to':"", 'description': ''};
      return newArray
    })
  }

  const handleDeleteClick = ()=>{
    setpersonalExperienceForms(personalExperienceForms.slice(0,-1));
    setPersonalExperienceDisplays(personalExperienceDisplays.slice(0,-1));

  }

  const handleImageUpload = (event)=>{
    let file = event.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = ()=>{
      setImage(reader.result)
    }
  }

  const handleLoadExampleClick = (event)=>{
    setPersonalInfo({'firstName': 'Ramira', 'lastName': 'Jhones', 'title': 'Rpa Developer', 'address': 'Rio Cauto, Cuba', 'phoneNumber': '+4074349027', 'email': 'ramirajhones@hotmail.com', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'})
    setPersonalExperiences([{'position': "Rpa developer", 'company': "Deloite", 'city':"Bucharest", 'from':"June 2020", 'to':"May 2021", 'description': `- Reduced manual effort by developing an automation solution for checking scanned documents using OCR and sending results via email Developed web
    - Developed web data scraping and Excel automations to remove manual labor
    -Developed pdf automations and data validation using RegEx
    - Developed Excel and Google Sheets macros
    -Data analytics (QlikView) - took part in real business projects for
    clients like a stock management dashboard for a car distribution
    company`}
    ])
    setImage("download.jpg")
    setEducation({'university': 'Cambridge', "subject": 'Computer Science', 'city':'London', 'from':'June 2015', 'to':'September 2019'})
  }

  const handleResetClick = (event)=>{
    setPersonalInfo({firstName: '', lastName: '', title: '', address: '', phoneNumber: '', email: '', description: ''})
    setPersonalExperiences([{'position': "", 'company': "", 'city':"", 'from':"", 'to':"", 'description': ''}])
    setEducation({'university': '', "subject": '', 'city':'', 'from':'', 'to':''})
    setImage("avatar.jpg")
  }
  

  
  return (
    
    <div className="App" >
      <div className='header'>Cv Creator</div>
      <div className='CV '>
        <div className='form' >
          <PersonalInformationForm onChange={handleChangePersonalInfo}/>
          <EducationForm onChange = {handleChangeEducation}/>
          {personalExperienceForms}
          <Button color = "#4a9e47" text = "Add experience" onClick = {handleAddClick}></Button>
          <Button color = "#c74655" text = "Delete" onClick={handleDeleteClick}></Button>
          <Button color = "#7d94b5" text = "Generate PDF" onClick={()=>exportComponentAsPDF(pdf, {fileName:'Curriculum Vitae', pdfOptions: { w: 210, h: 297 }})}></Button>
          <Button color = "#2f47bd" text = "Load Example" onClick={handleLoadExampleClick}/>
          <Button color = "#1e8e94" text = "Reset CV" onClick={handleResetClick}/>
        </div>

        <CvDisplay innerRef = {pdf} personalData = {personalInfo} personalExperienceDisplays = {personalExperienceDisplays} handleImageUpload = {handleImageUpload} image = {image} education = {education}/>
        
      </div>
    </div>
  );
}


