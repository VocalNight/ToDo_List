import notes from './note'
import projectManager from './projects'


let projects = projectManager.Projects();

//Testing creation of note

projects.addToday(notes('a', 'b', 'c'))
projects.addToday(notes('d', 'b', 'c'))
projects.addToday(notes('f', 'b', 'c'))
projects.addToday(notes('g', 'b', 'c'))

console.log(projects.getToday()[0].getTitle())




// Showing the notes on screen
function write_letters(){
    let items = document.querySelector('.inboxList');
    console.log(items);

    for (let i = 0; i < projects.getToday().length; i++ ) {
        let item = document.createElement("li");
        console.log(projects.getToday()[i]);
        item.innerHTML = projects.getToday()[i].getTitle();
        item.onclick = () => alert(projects.getToday()[i].getTitle());
        item.style.cursor = "pointer"
        items.appendChild(item);
    }

}

write_letters();
