import s from './style.module.css';
import {CopyLogo} from "../../asset/small-component/Logos";
import {Snackbar, Alert, Slide} from '@mui/material';
import {useState} from "react";
import {toast, ToastContainer} from "react-toastify";



export const CardBody = (props) => {
    const [isSuccessCopy, setIsSuccessCopy] = useState(false);
    const handlingCopy = async () => {
        try {
            if(navigator.clipboard){
                await navigator.clipboard.writeText(props.passwordValue);
                setIsSuccessCopy(true);
            }else{
                console.log('API doesnt Support');
            }
        }catch (e){
            console.error('Failed to copy: ', e);
        }
    }

    const handleCloseAlert = () =>{
        setIsSuccessCopy(false);
    }

    
    return (
        <div className={s.bodyContainer}>
            <div className={s.passwordContent}>
                <span key="span-password">{props.passwordValue? props.passwordValue : 'Something went wrong'}</span>
                <CopyLogo hoveredMode='imageHandler' onClickLogo={handlingCopy}/>
                <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal:"center" }}
                    open={isSuccessCopy}
                    autoHideDuration={1000}
                    onClose={handleCloseAlert}
                >
                    <Alert severity="success">
                        Copied!
                    </Alert>
                </Snackbar>
            </div>

        </div>
    )
}