import { BrowserRouter, Routes, Route } from "react-router-dom";

import Start from "./pages/Start";
import LevelSelect from "./pages/LevelSelect";
import TutorialSelect from "./pages/TutorialSelect";
import Settings from "./pages/Settings";
import Credits from "./pages/Credits";
import Level from "./pages/Level";


export default function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />} />

                <Route path="/levels" element={<LevelSelect />} />
                <Route path="/tutorial" element={<TutorialSelect />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/credits" element={<Credits />} />
                <Route path="/level/:id" element={<Level />} />

                <Route path="*" element={<Start />} />
            </Routes>
        </BrowserRouter>
    );
}