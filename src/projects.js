const Project = (projectName) => {
    let notes = [];

    const getNotes = () => notes;
    const getProjectName = () => projectName;

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
        return custom.find(projectName);
    }

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
        getCustom, getIndex, getToday, getWeek, addCustomProject, addIndex, addToday, addWeek
    }
}

export default {Project, Projects}
