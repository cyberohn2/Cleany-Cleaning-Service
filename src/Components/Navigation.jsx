import PryCtaBtn from "./PryCtaBtn";

const Navigation = () =>{
    return(
        <nav className="max-w-[1200px] mx-auto py-4 flex items-center justify-between">
            <h1 className="font-semibold text-[22px] text-[#118AC5]">Cleany</h1>
            <ul className="flex items-center justify-between gap-6 text-[14px] font-medium text-[#121212]">
                {['Home', 'About', 'Services', 'Contact'].map( navLink => <li><a href={`#${navLink}`}>{navLink}</a></li>)}
            </ul>
            <PryCtaBtn text="Get Quote" />
        </nav>
    )
}

export default Navigation;