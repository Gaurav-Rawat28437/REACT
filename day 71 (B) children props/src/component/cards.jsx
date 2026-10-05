function Cards({ img, name, price }) {
  return (
    <div style={{display:"flex",border: "1px solid black", padding: "10px", height:"300px", width: "200px",flexDirection:"column",justifyContent:"space-between"}}>
      <img src={img} alt={name} style={{height:"100%",width: "100%",objectFit:"contain"}} />
     
      <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
        <h3 style={{color: "blue"}}>{name}</h3>
        <span style={{fontWeight: "bold"}}>{price}</span>
      </div>
    </div>
  )
}

export default Cards