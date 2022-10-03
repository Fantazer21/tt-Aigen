import React, {useEffect, useState} from 'react';
import s from './styles.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getDocuments} from "../../dal/documentsAPI";
import {documentType} from "../../bll/documentsReducer";
import {AppRootStateType} from "../../bll/store";
import confirm from '../assets/confirm.png'

const DataForm = () => {
    const dispatch = useDispatch()
    const documents = useSelector<AppRootStateType, Array<documentType>>(state => state.documents.documents)
    const [openDocument, setOpenDocument] = useState(432432)
    const [openStatus, setOpenStatus] = useState(false)

    useEffect(() => {
        // @ts-ignore
        dispatch(getDocuments())
    }, [])


    function openDetails(id: number) {
        setOpenStatus(!openStatus)
        setOpenDocument(id)
    }

    return (
        <div className={s.DataForm}>
            <h3>Start data from server</h3>
            {documents.map((el, ind) => {
                return <div key={ind} className={s.DocumentForm}>
                    <div className={s.DocumentFormMain}>
                        <div>
                            <h4>Name of document : {el.name}</h4>
                        </div>
                        <div>
                            <img className={s.ImageConfirm} src={confirm} alt="icon" width={25}
                                 onClick={() => openDetails(el.id)}/>
                        </div>
                    </div>
                    {openDocument === el.id && openStatus ?
                        <div>
                            <div>Document id: {el.id}</div>
                            <div>Created in : {el.dateOfCreation} </div>
                            <div>Content: {el.content}</div>
                        </div>
                        : null}
                </div>
            })}
        </div>
    );
};

export default DataForm;
