import axios from 'axios';
import {getAllDocumentsAC} from "../bll/documentsReducer";




export const getDocuments = () => {
    return async (dispatch: any) => {
        const response = await axios.get('https://server-aigen.herokuapp.com/')
        dispatch(getAllDocumentsAC(response.data))
    }
}