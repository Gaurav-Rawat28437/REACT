import React ,{ useState } from "react"

function Pass(){
    
    const [isHide,setIsHide]=useState(true)

    return(
        <main>
            <div> 
                <label htmlFor="name">Username</label>
                <input id="name" type="text" placeholder="username" />
            </div>

            <br/>


            <div> 
                <label htmlFor="name">Password</label>
                <input id="name" type={isHide?"password":"text"} placeholder="password" />
                <button
                onClick={()=>{
                    setIsHide(!isHide)
                }}
                >
                  {isHide?"show":"hide"}
                </button>
            </div>

        </main>
    )
}
export default Pass
