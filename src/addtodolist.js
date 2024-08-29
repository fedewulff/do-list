import "./createproject.js"

export const dolistform = document.querySelector(`.dolistform`)
export const dolisttitle = document.querySelector(`#dolisttitle`);
export const description = document.querySelector(`#description`);
export const date = document.querySelector(`#date`);

export const dolistformbutton = document.querySelector(`.dolistformbutton`);
export const listitems = document.querySelector(`.listitems`)

export const form2 = document.querySelector(`.form2`);

export const lowprioritybutton = document.querySelector(`#lowprioritybutton`);
export const mediumprioritybutton = document.querySelector(`#mediumprioritybutton`);
export const highprioritybutton = document.querySelector(`#highprioritybutton`);



export class newdolist{
    constructor(title,description,date,priority){
        this.title = title,
        this.description = description,
        this.date = date,
        this.priority = priority
    }
}

export const homelist = document.createElement(`div`)



export function createAllListElements() {form2.addEventListener(`submit`,function(e){
    e.preventDefault();

    const priority = ``;
    
    const dolist = new newdolist(dolisttitle.value,description.value,date.value, priorityChoice(priority))
    
    const addeddolisttitle = document.createElement(`div`);
    addeddolisttitle.textContent = `${dolist.title}`;

    const addeddolistdescription = document.createElement(`div`);
    addeddolistdescription.textContent = `${dolist.description}`;
  
    const addeddolistdate = document.createElement(`div`);
    addeddolistdate.textContent = `${dolist.date}`;

    const addeddolistpriority = document.createElement(`div`);
    addeddolistpriority.textContent = `${dolist.priority}`;

    
    addToToDoList(addeddolisttitle,addeddolistdescription ,addeddolistdate,addeddolistpriority);
    clearListForm();
    
})
}


export function addToToDoList(title,description,date,priority){
    const addedtodolist = document.createElement(`div`);
    addedtodolist.classList.add(`newcontent`, `projectindex`);
    
    addedtodolist.setAttribute(`id`,`${listitems.getAttribute(`id`)}`)
    
    addedtodolist.appendChild(title);
    addedtodolist.appendChild(date);
    
    listitems.appendChild(addedtodolist);

    divBorder(addedtodolist)
    detailsButton(addedtodolist,title,description,date,priority)
    deleteDoList(addedtodolist)
}



export const details = document.querySelector(`.details`);
export const detailstitle = document.querySelector(`.detailstitle`);
export const detailsdescription = document.querySelector(`.detailsdescription`);
export const detailsdate = document.querySelector(`.detailsdate`);
export const detailspriority = document.querySelector(`.detailspriority`);
export const hidedetails = document.querySelector(`.hidedetails`);


export function detailsButton(element,title,description,date,priority){
    const detailsbutton = document.createElement(`button`);
    detailsbutton.classList.add(`dolistbuttons`)
    detailsbutton.textContent = `Details`;
    element.appendChild(detailsbutton);

    showDetails(detailsbutton,title,description,date,priority)
}

export function showDetails(button,title,description,date,priority){
    button.addEventListener(`click`,function(){
        details.style.display = `flex`;
        detailstitle.textContent = title.textContent;
        detailsdescription.textContent = description.textContent;
        detailsdate.textContent = date.textContent;
        detailspriority.textContent = priority.textContent;
       
    })
}

export function hideDetailsfuntion() {
    hidedetails.addEventListener(`click`,function(){
    details.style.display = `none`
})
}

export function deleteDoList(element) {
    const deletedolist = document.createElement(`button`);
    deletedolist.classList.add(`dolistbuttons`)
    deletedolist.textContent = `Delete`;
    element.appendChild(deletedolist);

    deleteButtonPress(deletedolist,element)
}

export function deleteButtonPress(button,div){
    button.addEventListener(`click`,function(){
        div.remove()
    })
}


export function divBorder(divBorder){
    if (lowprioritybutton.checked == true){
        divBorder.style.border = `2px solid green`;
        
    }
    if (mediumprioritybutton.checked == true){
        divBorder.style.border = `2px solid orange`;
        
    }
    if (highprioritybutton.checked == true){
        divBorder.style.border = `2px solid red`;
        
    }
}

export function priorityChoice(item){
    if (lowprioritybutton.checked == true){
        item = `Low`;
        return item
    }
    if (mediumprioritybutton.checked == true){
        item = `Medium`;
        return item
    }
    if (highprioritybutton.checked == true){
        item=`High`;
        return item
    }
}

function clearListForm(){
    dolisttitle.value = ``;
    description.value = ``;
    date.value = ``;
    lowprioritybutton.checked = false;
    mediumprioritybutton.checked = false;
    highprioritybutton.checked = false;
    dolistform.style.display = `none`;  
}

