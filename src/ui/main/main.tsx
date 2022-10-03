import React from 'react';
import s from './styles.module.css'
import InputForm from "../inputForm/inputForm";
import DataForm from "../data/dataForm";

const Main = () => {
    return (
        <div className={s.Main}>
          <InputForm/>
            <DataForm/>
        </div>
    );
};

export default Main;