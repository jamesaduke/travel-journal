import './index.css';
import data from "./data.js";

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
            {dataMapped}
        </div>
    );

}

export default App;