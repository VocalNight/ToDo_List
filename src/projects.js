const Project = (projectName) => {
    let notes = [];
    let name = projectName;

    const getNotes = () => notes;
    const getProjectName = () => name;

    const addNote = (note) => {
        notes.push(note);
    }

    return {
        getNotes, addNote, getProjectName
    }
}


const Projects = () => {
    let index = Project('index');
    let today = Project('today');
    let week = Project('week');
    let custom = [];

    const getIndex = () => index;
    const getToday = () => today;
    const getWeek = () => week;


    const getCustom = (projectName) => {
        return custom.find(project => project.getProjectName() === projectName);
    }

    const getProjects = () => custom;

    const addCustomProject = (project) => {
        custom.push(project);
    }

    const addIndex = (note) => {
        index.addNote(note);
    }

    const addToday = (note) => {
        today.addNote(note);
    }

    const addWeek = (note) => {
        week.addNote(note);
    }

    return {
        getCustom, getIndex, getToday, getWeek, addCustomProject, addIndex, addToday, addWeek, getProjects
    }
}

export default {Project, Projects}
