import Lock from '../image/lock-solid.svg';
import Copy from '../image/copy-solid.svg';
import Reload from '../image/arrows-rotate-solid.svg';
import s from './style.module.css'

export const LockLogo = () => {
    return (
        <img key="lock-logo" alt="" src={Lock}/>
    )
}
export const CopyLogo = (props) => {
    return (
        <img className={props.hoveredMode? s[props.hoveredMode] : ''} key="copy-logo" alt="Copy password" src={Copy}
             onClick={props.onClickLogo}/>
    )
}
export const GenerateLogo = (props) => {
    return (
        <img className={props.clickedMode? s[props.clickedMode] : ''} key="reload-logo" alt="" src={Reload}/>
    )
}
