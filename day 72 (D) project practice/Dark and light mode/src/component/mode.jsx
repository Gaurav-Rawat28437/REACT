import { useState } from "react"

function Mode()
{
    const [isDarkMode,setDarkMode]=useState(false)
    return(

    <main 
    className= {"h-screen w-screen "+(isDarkMode?"bg-black text":"bg-white")}
    >
        <button 
        className="h-[100px] w-[100px] bg-black text-white border-1 border-amber"
        onClick={()=>{
            setDarkMode(true)
        }}
        >
            Dark mode
        </button>

        <button 
        className="h-[100px] w-[100px] bg-amber-100 text-black border-1 border-black"
        onClick={()=>{
            setDarkMode(false)
        }}
        >
            Light mode
        </button>
        
        
        <div 
        className={isDarkMode?"bg-black text-white":"bg-white text-black"}
        >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore repudiandae tempore ullam deserunt voluptates error, consectetur, quos nulla nam vero, optio dignissimos rem dicta fugiat! Quod fugiat adipisci expedita fuga!
            Ducimus quo dicta accusantium tempore pariatur itaque quod dolores quas quisquam reiciendis atque corporis reprehenderit quos, voluptate facere. Numquam cupiditate debitis vero, fugiat sed sunt!
        </div>
    </main>

    )
}

export default Mode