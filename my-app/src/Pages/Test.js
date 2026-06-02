import { Link } from 'react-router-dom';
import '../Styles/style.css';
function Test() {

  
    const showInfo = () => {
        alert(`hello`);
    }
      return (
<main>
    <div>
             <div className="homeBtns"></div>
           <button className="infoBtn" onClick={showInfo}>hello</button>
           
    </div>
</main>

       )



}
export default Test;