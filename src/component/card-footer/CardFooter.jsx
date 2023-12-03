import s from './style.module.css';
import {GenerateLogo} from "../../asset/small-component/Logos";
import {useState} from "react";
import {REQUIREMENT, SIZED} from "../../utils/enum/REQUIREMENT";
import {shufflePassword} from "../../utils/functions/PasswordMain";


export const CardFooter = (props) => {
    const [checkBoxValues, setCheckBoxValues] = useState({size: 10});
    const [isClicked, setIsClicked] = useState(false);
    const [sizeSelected, setSizeSelected] = useState(10);
    const handlingCheckBoxValue = (keyName) => {
        setCheckBoxValues(prevValue => ({
            ...prevValue,
            [keyName] : !prevValue[keyName]
        }));
    };
    const onClickHandling = () => {
        const genPass = shufflePassword(checkBoxValues);
        props.onButtonClicked(genPass);
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
        }, 200)
    }

    const handlingSizeOption = (val) => {
        setCheckBoxValues(prevValue => ({
            ...prevValue,
            size : Number(val)
        }));
        setSizeSelected(val);
    }

    return (
        <div className={s.bodyContainer}>
            <div className={s.bodyContent}>
                <label key={`${SIZED.keyName}-label`}>{SIZED.name}</label>
                <select className={s.items} value={sizeSelected} key={`${SIZED.keyName}-options`}
                        onChange={(e)=> handlingSizeOption(e.target.value)}>
                    {SIZED.sizeArr.map(v => {
                        return (
                            <option key={v.keySize} value={v.val}>{v.val}</option>
                        )
                    })}
                </select>
                {REQUIREMENT.map(req => {
                    return (
                        <>
                            <label key={`${req.keyName}-label`} onClick={() => handlingCheckBoxValue(req.keyName)}>{req.name}</label>
                            <input className={s.items} key={`${req.keyName}-input`} type={req.types}
                                   checked={checkBoxValues[req.keyName] || false}
                                   onChange={()=> handlingCheckBoxValue(req.keyName)}/>
                        </>
                    )
                })}
            </div>
            <div className={`${s.footerContainer} ${isClicked? s.clicked : ''}`} role={"button"}
                onClick={onClickHandling}>
                    <div className={s.footerContent}>
                        <GenerateLogo clickedMode={isClicked? 'rotateLogo' : ''}/>
                        <h2>Generate</h2>
                    </div>
            </div>
        </div>
    )
}
