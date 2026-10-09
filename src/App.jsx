import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import LaunchScreen from "./Components/LaunchScreen";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Participants from "./pages/Participants";
import About from "./pages/About";

function App() {

    const [showLaunch, setShowLaunch] = useState(true);

    if (showLaunch) {
        return (
            <LaunchScreen
                onFinish={() => setShowLaunch(false)}
            />
        );
    }

    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/participants" element={<Participants />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;