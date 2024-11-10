
const ToggleButton =document.getElementById('toggle-skills')as HTMLBodyElement
const Skills = document.getElementById('skills')as HTMLElement

ToggleButton.addEventListener('click',()=> {
    if(Skills.style.display === 'none'){
        Skills.style.display = 'block'
    }else{
        Skills.style.display ='none'
    }
})
