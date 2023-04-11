const readDB = () => {
    return JSON.parse(localStorage.getItem('applied-jobs')) || {};
};

const addToDB = (id) => {
    const appliedJobs = readDB()
    if (appliedJobs[id]) {
        // The id already exists in localStorage
        alert('Already Exists!')
        return
    }
    appliedJobs[id] = 1
    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
};

export { addToDB, readDB }