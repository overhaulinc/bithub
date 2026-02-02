import { useState } from "react";

function Navbar(){
 
    const [open , setOpen] = useState(false);


    return(
        <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4">

        <div className="flex h-16 items-center justify-between">
             <div className="logo text-2xl font-semibold">Bithub</div>
             <div className="navigations hidden md:flex gap-6">
                <a href="#" className="btn p-2">Buy N Sell</a>
                <a href="#" className="btn p-2">FAQs</a>
                <a href="#" className="btn p-2">Contact Us</a>
             </div>

             <button id="menu-btn" className="md:hidden text-2xl" onClick={ () => setOpen(!open)}> ☰ </button>

        </div>
                    
            <div id="mobile-menu" className={`${open ? "block" : "hidden" } md:hidden flex flex-col gap-4 pb-4`}>
                <a href="#">Buy N Sell</a>
                <a href="#">FAQs</a>
                <a href="#">Contacts</a>

            </div>



        </div>
        </nav>
    )

}

export default Navbar;