import { ADD_PROJECT, ADD_TASK, DEL_PROJECT, DEL_TASK, GET_ALL_PROJECTS, GET_TASKS, SET_PROJECT, UPD_PROJECT, UPD_TASK } from "./project.types"

const initState = {
    projects: [],
    loading: false,
    error: false,
    selectedProject: {},
    tasks: []
}

export const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_PROJECTS: {
            return {
                ...state,
                loading: false,
                error: false,
                projects: action.payload || [],
                selectedProject: action?.payload[0] || {}
            }
        }
        case ADD_PROJECT: {
            return {
                ...state,
                projects: [...state.projects, action.payload],
                selectedProject: action.payload
            }
        }
        case DEL_PROJECT: {
            let updProjects = state.projects.filter((ele) => ele._id !== action.payload);
            return {
                ...state,
                projects: updProjects,
                selectedProject: updProjects[0] || {}
            }
        }
        case SET_PROJECT: {
            return {
                ...state,
                selectedProject: action.payload || {}
            }
        }
        case UPD_PROJECT: {
            let updProjects = state.projects.map((ele) => {
                if (ele._id === action.payload?._id) return action.payload;
                else return ele;
            })
            return {
                ...state,
                projects: updProjects,
                selectedProject: action.payload || {}
            }
        }
        case GET_TASKS: {
            return {
                ...state,
                tasks: action.payload || []
            }
        }
        case ADD_TASK: {
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        }
        case UPD_TASK: {
            let updTasks = state.tasks.map((ele) => {
                if (ele._id === action.payload?._id) return action.payload;
                else return ele;
            })
            return {
                ...state,
                tasks: updTasks
            }
        }
        case DEL_TASK: {
            let updTasks = state.tasks.filter((ele) => ele._id !== action.payload);
            return {
                ...state,
                tasks: updTasks
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}