import { ADD_PROJECT, DEL_PROJECT, GET_ALL_PROJECTS } from "./project.types"

const initState = {
    projects: [],
    loading: false,
    error: false
}

export const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_PROJECTS: {
            return {
                ...state,
                loading: false,
                error: false,
                projects: action.payload || []
            }
        }
        case ADD_PROJECT: {
            return {
                ...state,
                projects: [...state.projects, action.payload]
            }
        }
        case DEL_PROJECT: {
            let updProjects = state.projects.filter((ele) => ele._id !== action.payload);
            return {
                ...state,
                projects: updProjects
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}