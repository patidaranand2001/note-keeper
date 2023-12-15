const addButton=document.getElementById('add');

const updateLSData=()=>{
    const textAreaData=document.querySelectorAll('textarea');
    const notes=[];
    textAreaData.forEach((note)=>{
        return notes.push(note.value);
    })
    // console.log(notes);
    localStorage.setItem('notes',JSON.stringify(notes));
}



const addNewNote=(text="")=>{
    const note=document.createElement('div');
    note.classList.add('note');
    
    const htmlData= 
 `   <div class="note">
    <div class="operation">
        <button class="edit"><i class="fa fa-edit"></i></button>
<button class="delete"><i class="fa fa-trash-o"></i></button>

    </div>
    <div class="main ${text ? "":"hidden"}"></div>
    <textarea class=" ${text ? "hidden": ""}"></textarea>
</div>`;
note.insertAdjacentHTML('afterbegin',htmlData);

//gettting refrences
const editbutton =note.querySelector('.edit');
const delbutton =note.querySelector('.delete');
const maindiv =note.querySelector('.main');
const textArea =note.querySelector('textarea');

// deleteing note

delbutton.addEventListener('click',()=>{
    note.remove();
    updateLSData();
})
textArea.value=text;
maindiv.innerHTML=text;

//toggel using edit button
editbutton.addEventListener('click',()=>{
    maindiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
    updateLSData();
})
textArea.addEventListener('change',(event)=>{
    const value=event.target.value;
    maindiv.innerHTML= value
})


document.body.appendChild(note);

}
// getting data from local storage
const notes=JSON.parse(localStorage.getItem('notes'));
if(notes)
{
    notes.forEach((note)=>addNewNote(note));
}

addButton.addEventListener('click',() => addNewNote());