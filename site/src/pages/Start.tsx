import { Link } from "react-router-dom";


export default function Start() {
    return (
        <main className="
            min-h-screen
            bg-black
            text-white
            flex
            flex-col
            items-center
            justify-center
            gap-8
        ">

            <section className="text-center">

                <h1 className="
                    text-6xl
                    font-mono
                    mb-4
                ">
                    In Other Words
                </h1>

                <p className="
                    text-gray-400
                    text-lg
                ">
                    A typeracer game about love and language, machines and artifice. 
                </p>

            </section>
                                    

            <nav className="
                flex
                flex-col
                gap-4
                w-64
            ">

                <Link
                    to="/level/1"
                    className="menuButton"
                >
                    Start
                </Link>


                <Link
                    to="/levels"
                    className="menuButton"
                >
                    Level Select
                </Link>


                <Link
                    to="/tutorial"
                    className="menuButton"
                >
                    Tutorial
                </Link>

                {/*
                <Link
                    to="/settings"
                    className="menuButton"
                >
                    Settings
                </Link>
                */}


                <Link
                    to="/credits"
                    className="menuButton"
                >
                    Credits
                </Link>

            </nav>

        </main>
    );
}