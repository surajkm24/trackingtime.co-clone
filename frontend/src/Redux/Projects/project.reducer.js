import { ADD_PROJECT, GET_ALL_PROJECTS } from "./project.types"

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
        default: {
            return {
                ...state
            }
        }
    }
}