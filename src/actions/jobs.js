export const ADD_JOB_LIST = 'ADD_JOB_LIST';
export const addJobList = title => ({
    type: ADD_JOB_LIST,
    title
});

export const ADD_JOB_CARD = 'ADD_JOB_CARD';
export const addJobCard = (text, listIndex) => ({
    type: ADD_JOB_CARD,
    text,
    listIndex
});
