import { Link } from "react-router-dom";

export default function PrimaryButton({ href, children }) {
    return (
        <Link
            to={href}
            className="px-20 py-7 rounded-lg hover:bg-slate-400 bg-black shadow-xl shadow-slate-950 text-white font-mono text-lg font-bold inline-block"
        >
            {children}
        </Link>
    );
}

