import './index.css';
import data from "./data.js";
import Navbar from './components/Navbar';

function App() {
    const dataMapped = data.map(item => {
        return (
            <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </div>
        );

    })
    console.log(dataMapped);

    return(
        <div className="App">
            <Navbar />

            <div className="App">
                {dataMapped}
            </div>

        </div>
    );
}

export default App;