import notes from './note'
import projectManager from './projects'


const projects = projectManager.Projects();
let currentProject = '';

//Divs


//Buttons

const inboxBtn = document.querySelector('#inboxBtn')
const todayBtn = document.querySelector('#todayBtn')
const weekBtn = document.querySelector('#weekBtn')

inboxBtn.addEventListener('click', () => showNotes(projects.getIndex()))

todayBtn.addEventListener('click', () => showNotes(projects.getToday()));

weekBtn.addEventListener('click', () => showNotes(projects.getWeek()));

//form buttons

const formPopup = document.querySelector('#formPopup');

const submitNoteBtn = document.querySelector('#submitNote');

const submitProjectBtn = document.querySelector('#submitProject');

const noteForm = document.querySelector('#noteAddition');

const projectForm = document.querySelector('#projectAddition');

const addProjectBtn = document.querySelector('#addStuff');

const formCancelBtn = document.querySelector('#formCancel');

const selectNoteForm = document.querySelector('#selectnoteform');

const selectProjectForm = document.querySelector('#selectprojectform');

selectNoteForm.addEventListener('click', () => showNoteForm())

selectProjectForm.addEventListener('click', () => showProjectForm())

formCancelBtn.addEventListener('click', () => hideForm())

addProjectBtn.addEventListener('click', () => showForm());

submitProjectBtn.addEventListener('click', () => createProject())

//Testing creation of note

projects.addToday(notes('a', 'b', 'c'))
projects.addToday(notes('d', 'b', 'c'))
projects.addToday(notes('f', 'b', 'c'))
projects.addToday(notes('g', 'b', 'c'))

projects.addWeek(notes('n', 'b', 'c'))
projects.addWeek(notes('l', 'b', 'c'))
projects.addWeek(notes('p', 'b', 'c'))
projects.addWeek(notes('z', 'b', 'c'))

projects.addIndex(notes('d', 'b', 'c'))
projects.addIndex(notes('s', 'b', 'c'))
projects.addIndex(notes('a', 'b', 'c'))
projects.addIndex(notes('x', 'b', 'c'))





// Showing the notes on screen
function showNotes(notes){
    let items = document.querySelector('.notesList');
    items.innerHTML = '';

    for (let i = 0; i < notes.length; i++ ) {
        let item = document.createElement("li");
        item.innerHTML = notes[i].getTitle();
        item.onclick = () => alert(notes[i].getTitle());
        item.style.cursor = "pointer"
        items.appendChild(item);
    }

}

function showCustomNotes(project) {

    let items = document.querySelector('.notesList');
    items.innerHTML = '';
    let notes = project.getNotes();

    for (let i = 0; i < notes.length; i++ ) {
        let item = document.createElement("li");
        item.innerHTML = notes[i].getTitle();
        item.onclick = () => alert(notes[i].getTitle());
        item.style.cursor = "pointer"
        items.appendChild(item);
    }

    currentProject = project;
    console.log(currentProject.getProjectName());

}

function showForm() {
    
    formPopup.style.display = 'flex'
}

function hideForm() {

    formPopup.style.display = 'none'
}


function showNoteForm() {

    noteForm.style.display = 'block'
    projectForm.style.display = 'none'

}

function showProjectForm() {
    noteForm.style.display = 'none'
    projectForm.style.display = 'block'
}


function createProject() {
    const projectName = document.querySelector('#projecttitle');

    projects.addCustomProject(projectManager.Project(projectName.value));

    
    projectName.value = '';
    
    showProjects()
}

function showProjects() {

    let items = document.querySelector('#projectList');
    items.innerHTML = '';


    for (let i = 0; i < projects.getProjects().length; i++) {

        let item = document.createElement("li");

        let projectName = projects.getProjects()[i].getProjectName();

        item.innerHTML = projects.getProjects()[i].getProjectName();

        item.addEventListener('click', () => showCustomNotes(projects.getCustom(projectName)));


        item.style.cursor = "pointer"
        items.appendChild(item);
    }



}
