

import { ADD, DELETE, COMPLETE } from './Types'

export const addtodo = (input) => {
    return {
        type: ADD,
        payload: input
    }        

};
export const deletetodo = (id) => {
    return {
        type: DELETE,
        payload: id
    }      }
    export const COMPLETEtodo = (id) => {
        return {
            type: COMPLETE,
            payload: id
        }      }