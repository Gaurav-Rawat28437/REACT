import Cards from "./Cards"

function Hero()
{
    const mainStyle={
        height:"90vh",
        width:"60vw",
        backgroundColor:"gray",
        color:"black",
        display:"grid",
        gridTemplateColumns:"repeat(4,1fr)",
        justifyItems:"center"
        
    
        

    }

    return (
       <main style={mainStyle}>

        <Cards {"gurv","data:image/png;base64,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"}/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>

       </main>
    )
}

export default Hero