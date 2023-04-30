import Header from "./Header"
import Content from "./Content"
import "./Notification.css"
import {useState} from "react"

function Notification(){
    let [count, setCount] = useState(7);
    function resetAll() {
            setCount(0);
      }
    function handleChangeState() {
        if (count !== 0)
            setCount(--count);
      }
    return (
        <div className="notification">
            <Header count={count} resetAll={resetAll}/>
            <Content count={count}  onChangeState={handleChangeState}/>
        </div>
      );
}
 
export default Notification;