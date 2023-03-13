const Project = (projectName) => {
    let notes = [];
    let name = projectName;

    const getNotes = () => notes;
    const getProjectName = () => name;

    const addNotes = (note) => {
        notes.push(note);
    }

    return {
        getNotes, addNotes, getProjectName
    }
}


const Projects = () => {
    let index = [];
    let today = [];
    let week = [];
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
        index.push(note);
    }

    const addToday = (note) => {
        today.push(note);
    }

    const addWeek = (note) => {
        week.push(note);
    }

    return {
        getCustom, getIndex, getToday, getWeek, addCustomProject, addIndex, addToday, addWeek, getProjects
    }
}

export default {Project, Projects}
