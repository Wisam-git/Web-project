import { Link } from 'react-router-dom';
import '../Styles/style.css';
import Animals from '../Pages/Animals.js';
import Employees from '../Pages/Employees.js';
import zoo from '../Img/zoo.jpg'

function Home() {

    const showInfo = () => {
        alert(`Name: Wissam Dannawy ID: 92330233`);
    }
    return (
        <main>

            <h1>Welcome to Happy Zoo 🐾</h1>

            <div className="home">
                <div className='homeImg1'>
                    <div className='homeImg' style={{ backgroundImage: `url(${zoo})`, backgroundSize: 'cover' }}></div>
                </div>
                
                    <div className="homeBtns">
                        <Link to="/Animals"><button>View Animals</button></Link>
                        <button className="infoBtn" onClick={showInfo}>Display Your Name and ID</button>
                        <Link to="/Employees"><button>View Employees</button></Link>
                    </div>
            </div>

        </main>

    );
}

export default Home;