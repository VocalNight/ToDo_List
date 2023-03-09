import notes from './note'
import projectManager from './projects'


let projects = projectManager.Projects();

//Divs


//Buttons

const inboxBtn = document.querySelector('#inboxBtn')
const todayBtn = document.querySelector('#todayBtn')
const weekBtn = document.querySelector('#weekBtn')

inboxBtn.addEventListener('click', () => showNotes(projects.getIndex()));

todayBtn.addEventListener('click', () => showNotes(projects.getToday()));

weekBtn.addEventListener('click', () => showNotes(projects.getWeek()));

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
function showNotes(project){
    let items = document.querySelector('.notesList');
    items.innerHTML = '';

    for (let i = 0; i < project.length; i++ ) {
        let item = document.createElement("li");
        item.innerHTML = project[i].getTitle();
        item.onclick = () => alert(project[i].getTitle());
        item.style.cursor = "pointer"
        items.appendChild(item);
    }

}
