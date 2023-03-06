const Note = (title, description, priority) => {
    
    const getTitle = () => title;
    const getDescription = () => description;
    const getPriority = () => priority;

    return {getTitle, getDescription, getPriority}
}

export default Note;
