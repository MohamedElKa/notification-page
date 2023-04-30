import "./Header.css"

function Header({count, resetAll}){
    console.log(resetAll);
    function changeColor(name, point){
        let div = document.querySelectorAll(`.con`);
        let poi = document.querySelectorAll(`.point`);
                // console.log(div);
        div.forEach((e) => {
            e.style.backgroundColor = "white";
        })
        poi.forEach((e) =>{
            e.style.display = "none";
        })
        resetAll();
    }
    return (
        <div className="header">
            <div className="title">
                <h1>Notifications</h1>
                <span className="num">{count}</span>
            </div>
            <a onClick={changeColor}>Mark all as read</a>
        </div>
      );
}
 
export default Header;