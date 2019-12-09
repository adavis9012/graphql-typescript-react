import React, {useCallback, useState} from 'react';
import './App.css';
import LaunchListContainer from "./components/LaunchList";
import LaunchProfileContainer from "./components/LaunchProfile";

const App = () => {
    const [id, setId] = useState(42);
    const handleIdChange = useCallback(newId => {
        setId(newId);
    }, []);

    return (
        <div className="App">
            <LaunchListContainer handleIdChange={handleIdChange} />
            <LaunchProfileContainer id={id} />
        </div>
    );
}

export default App;
