import './index.css';
import data from "./data.js";
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
    const dataMapped = data.map(item => {
        return (
            <Card
               {...item}
            />

        );

    })
    console.log(dataMapped);

    return(
        <div className="App">
            <Navbar />

            {dataMapped}
            <hr />

        </div>
    );
}

export default App;