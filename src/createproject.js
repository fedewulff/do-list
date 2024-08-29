import { homelist } from "./addtodolist";

const listitems = document.querySelector(`.listitems`)

const projectform = document.querySelector(`.projectform`);
const projectname = document.querySelector(`#projectname`);
const projectformbutton = document.querySelector(`.projectformbutton`);
const projectitems = document.querySelector(`.projectitems`);
const form1 = document.querySelector(`.form1`);


class newproject{
    constructor(title){
        this.title = title
    }
}

form1.addEventListener(`submit`,function(e){

    e.preventDefault();
   
    const project = new newproject(projectname.value)
    
    const addedprojecttitle = document.createElement(`div`);
    addedprojecttitle.textContent = `${project.title}`;
    

    for (let i = 0; i < listitems.children.length; i++){
            listitems.children[i].style.display = `none`
    }
    
    addToProjectList(addedprojecttitle)

    projectname.value = ``;    

    projectform.style.display = `none`;
})

function addToProjectList(element){
    const addedproject = document.createElement(`li`);
    addedproject.classList.add(`newcontent`, `projectindex`);
    addedproject.appendChild(element);
    projectitems.appendChild(addedproject);
    listitems.setAttribute(`id`,`${element.textContent}`);
    console.log(addedproject.textContent);
    deleteProject(addedproject);
    
   
    addedproject.addEventListener(`click`,function(){
        listitems.setAttribute(`id`,`${element.textContent}`);
        for (let i = 0; i < listitems.children.length; i++){
            listitems.children[i].style.display = `none`
            if(element.textContent == listitems.children[i].getAttribute(`id`)){
                listitems.children[i].style.display = `flex`
            }
        }     
    }) 
}

function deleteProject(element) {
    const deleteproject = document.createElement(`button`);
    deleteproject.classList.add(`delete`)
    deleteproject.textContent = `Delete`;
    element.appendChild(deleteproject);

    deleteproject.addEventListener(`click`,function(e){

        e.stopPropagation();
        console.log(listitems.children.length)
        for (let i = listitems.children.length - 1; i >= 0; i--){

            if(element.textContent.replace("Delete", "") == listitems.children[i].getAttribute(`id`)){
                listitems.children[i].remove();
                console.log(listitems.children.length)
                console.log(i)
            }
        }
        element.remove()
    }) 
}



