import { Link } from "react-router-dom";

type Props = {
    id: number;
    title: string;
    stars: number;
};

export default function LevelBlock({
    id,
    title,
    stars,
}: Props) {
    return (
        <Link
            to={`/level/${id}`}
            className="level-card"
        >
            <span className="text-4xl font-mono">
                {String(id).padStart(2, "0")}
            </span>

            <h2 className="mt-4 text-xl font-semibold text-center">
                {title}
            </h2>

            <span className="mt-6 text-yellow-400 text-xl">
                {"★".repeat(stars)}
                {"☆".repeat(5 - stars)}
            </span>
        </Link>
    );
}