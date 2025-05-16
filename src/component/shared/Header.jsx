export default function Header() {
    return (
        <header>
            <nav className="py-5 px-10 flex justify-between items-center text-lg">
                <div className="text-4xl font-extrabold">OCTAV<span className={"text-blueOctavia"}>IA</span></div>
                <div className="absolute left-[50%] translate-x-[-50%] font-bold text-xl">Version Beta - 1.0</div>
                <div className="flex gap-4">
                    <a href="" className="btn-white shadow-hover">Se connecter</a>
                    <a href="" className="btn-blue shadow-hover">Essayer gratuitement</a>
                </div>
            </nav>
        </header>
    );
}