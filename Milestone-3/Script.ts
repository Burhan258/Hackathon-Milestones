// GET REFERCES TO THE FORM AND DISPLAY AREA 
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLFormElement;

// HANDLE FORM SUBMISSION
form.addEventListener('submit', (event: Event) => {
event.preventDefault (); // prevent page reload 

// collect input values 
const name = (document.getElementById('name') as HTMLFormElement).value
const email = (document.getElementById('email') as HTMLFormElement).value
const phone = (document.getElementById('phone') as HTMLFormElement).value
const eudcation = (document.getElementById('education') as HTMLFormElement).value
const experience = (document.getElementById('experience') as HTMLFormElement).value
const skills = (document.getElementById('skills') as HTMLFormElement).value

// Generate the resume content dynamically 
const resumeHTML = `
<h2><b>Resume</b></h2>
<h3>Personal information</h3?
<p><b>Name:</b>${name}</P>
<p><b>Name:</b>${email}</P>
<p><b>Name:</b>${phone}</P>

<h3>Education</h3>
<p>${eudcation}

<h3>Experience</h3>
<p>${experience}

<h3>Skills</h3>
<p>${skills}
`;

//Display the generated resume 
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
}else{
    console.error('the resume display element is missing.')
}
})