import React, {useState} from 'react';
import s from './styles.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {documentType, setFilteredDocumentsAC} from "../../bll/documentsReducer";


const InputForm = () => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [monthOfCreate, setMonthOfCreate] = useState('')

    const dispatch = useDispatch()
    const documents = useSelector<AppRootStateType, Array<documentType>>(state => state.documents.documents)

    const filteredDocuments = useSelector<AppRootStateType, Array<documentType>>(state => state.documents.filteredDocuments)

    function searchDocuments() {
        dispatch(setFilteredDocumentsAC([]))
        const filter = (doc: documentType) => doc.name === name || doc.dateOfCreation === monthOfCreate
        if (+id) {
            const filteredDocs = documents.filter(doc => doc.id === +id)
            dispatch(setFilteredDocumentsAC(filteredDocs))
        } else if (
            documents.filter(filter).length >= 1
        ) {
            const filteredDocs = documents.filter(filter)
            dispatch(setFilteredDocumentsAC(filteredDocs))
        }
    }

    return (
        <div className={s.LeftSection}>
            <div className={s.InputForm}>
                <div><h3>ID document</h3> <input onChange={(e) => setId(e.currentTarget.value)}/></div>
                <div><h3>Created</h3><input onChange={(e) => setMonthOfCreate(e.currentTarget.value)}/></div>
                <div><h3>Name of document</h3> <input onChange={(e) => setName(e.currentTarget.value)}/></div>
                <button onClick={() => searchDocuments()} className={s.ButtonFind}>Find</button>
            </div>
            <div className={s.FilteredData}>
                <h3>Filtered documents</h3>
                {filteredDocuments.length > 0 ?
                    filteredDocuments.map((el, ind) => {
                        return <div key={ind}>
                            <h3>ID document</h3>{el.id}
                            <h3>Created</h3> {el.dateOfCreation}
                            <h3>Name of document</h3> {el.name}
                            <h3>Content</h3> {el.content}
                        </div>
                    })
                    : <div>Insert correct input searching requirements</div>
                }
            </div>
        </div>
    );
};

export default InputForm;