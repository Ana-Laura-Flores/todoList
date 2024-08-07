import { FaGithubAlt, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="w-full h-auto flex flex-col items-center justify-center p-5">
            <ul className="flex m-3 text-lg">
                <li className="p-5">
                    <a
                        href="https://github.com/Ana-Laura-Flores"
                        target="blank"
                    >
                        <FaGithubAlt />
                    </a>
                </li>
                <li className="p-5">
                    <a
                        href="https://www.linkedin.com/in/kreardisenio/"
                        target="blank"
                    >
                        {" "}
                        <FaLinkedinIn />{" "}
                    </a>
                </li>
                <li className="p-5">
                    <a href="mailto:anadisenio@hotmail.com" target="_blank">
                        <FaEnvelope />
                    </a>
                </li>
            </ul>
            <div className="flex items-center mb-3">
                <p className="px-2">Hecho con </p>
                <p className="">❤️</p>
                <p className="px-2"> por Ana Laura Flores</p>
            </div>
        </footer>
    );
}
