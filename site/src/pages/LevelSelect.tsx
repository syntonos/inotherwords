import LevelBlock from "../components/LevelBlock";

import {
    levels
} from "../levels/levels";


export default function LevelSelect() {

    return (

        <main className="
            min-h-screen

            bg-black

            text-white

            px-6
            py-10
        ">


            <h1 className="
                text-4xl
                md:text-5xl

                font-mono

                mb-10

                text-center
            ">
                Level Select
            </h1>



            <section
                className="
                    grid

                    grid-cols-1

                    sm:grid-cols-2

                    md:grid-cols-3

                    lg:grid-cols-4

                    xl:grid-cols-5

                    gap-6

                    max-w-7xl

                    mx-auto
                "
            >

                {
                    levels.map((level) => (

                        <LevelBlock

                            key={level.id}

                            id={level.id}

                            title={level.title}

                            stars={level.stars}

                        />

                    ))
                }


            </section>


        </main>

    );
}