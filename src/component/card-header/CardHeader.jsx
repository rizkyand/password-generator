import s from './style.module.css';
import {LockLogo} from "../../asset/small-component/Logos";

export const CardHeader = (props) => {
    return (
        <div className={s.headerContainer}>
            <h2 className={s.headContent}>Password Generator</h2>
            <LockLogo/>
        </div>
    )
}