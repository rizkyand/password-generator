import s from './style.module.css';
import {CardContainer} from "./component/card-container/CardContainer";


function App() {
    return (
        <div key="app-container" className={s.appContainer}>
            <CardContainer/>
        </div>
  );
}
export default App;
