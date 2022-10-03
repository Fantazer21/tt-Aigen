enum APP {
    GET_ALL_DOCUMENTS = 'GET_DOCUMENTS',
    SET_FILTERED_DOCUMENTS = 'SET_FILTERED_DOCUMENTS'
}

export type initialStateType = {
    documents: Array<documentType>
    filteredDocuments: Array<documentType> | []
}
export const initialState: initialStateType = {
    documents: [],
    filteredDocuments: []
}


export type documentType = {
    id: number
    dateOfCreation: string
    name: string
    content: string
}

export const documentsReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case APP.GET_ALL_DOCUMENTS:
            return {...state, documents: action.documents}
        case APP.SET_FILTERED_DOCUMENTS:
            return {...state, filteredDocuments: action.documents}
        default:
            return state
    }
}

//actions
export const getAllDocumentsAC = (documents: documentType[]) => ({type: APP.GET_ALL_DOCUMENTS, documents} as const)


export const setFilteredDocumentsAC = (documents: documentType[]) => ({
    type: APP.SET_FILTERED_DOCUMENTS,
    documents
} as const)


type ActionsType =
    ReturnType<typeof setFilteredDocumentsAC>
    | ReturnType<typeof getAllDocumentsAC>
