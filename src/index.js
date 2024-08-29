import "./style.css";
import "./forms.css";
import "./createproject.js"


import {dolistform,dolisttitle,description,date,dolistformbutton,listitems,form2,
    lowprioritybutton,mediumprioritybutton,highprioritybutton,newdolist,homelist,createAllListElements,
    addToToDoList,details,detailstitle,detailsdescription,detailsdate,detailspriority,hidedetails,detailsButton,
    showDetails,hideDetailsfuntion,deleteDoList,deleteButtonPress, divBorder, priorityChoice,clearListForm,
    addedtodolist}
from "./addtodolist.js";





const projectform = document.querySelector(`.projectform`);
const addprojectbutton = document.querySelector(`.addprojectbutton`);


const addlisttbutton = document.querySelector(`.addlistbutton`);



addprojectbutton.addEventListener(`click`,function(){
    projectform.style.display = `flex`;
})

addlisttbutton.addEventListener(`click`,function(){
    dolistform.style.display = `flex`;
})


const home = document.querySelector(`.home`);
home.addEventListener(`click`,function(){
    listitems.removeAttribute(`id`)
    for (let i = 0; i < listitems.children.length; i++){
            listitems.children[i].style.display = `flex`}
})


createAllListElements();
hideDetailsfuntion();

