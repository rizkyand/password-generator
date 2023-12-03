import s from './style.module.css';
import {CardHeader} from "../card-header/CardHeader";
import {CardBody} from "../card-body/CardBody";
import {CardFooter} from "../card-footer/CardFooter";
import {useState} from "react";

export const CardContainer = (props) => {
    const [currentValue, setCurrentValue] = useState('your password will be here');
    const handlingValues = (pass) => {
        setCurrentValue(pass);
    }
    return (
       <div className={s.workspace}>
           <CardHeader/>
           <CardBody passwordValue={currentValue}/>
           <CardFooter onButtonClicked={handlingValues}/>
       </div>
    )
}