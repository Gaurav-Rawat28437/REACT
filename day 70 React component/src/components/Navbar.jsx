function Navbar()
{
    
    const navStyle={
        height:"10vh",
        width:"100vw",
        display:"flex",
        alignItems:"center",
        backgroundColor:"black",
        color:"white",
        justifyContent:"space-around",
        gap:"60vw"

        

    }
        

    return (
        
        <nav style={navStyle}>
            <h2>LOGO</h2>
            <div style={{display:"flex",gap:"20px",}}>
                <a style={{textDecoration:"none",color:"white"}} href="">Facebook</a>
                <a style={{textDecoration:"none",color:"white"}} href="">Whatapps</a>
                <a style={{textDecoration:"none",color:"white"}} href="">Instagram</a>
            </div>
        </nav>
    )
}

export default Navbar