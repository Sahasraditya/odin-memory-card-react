function Card({data,clickHandler}){
    return (
        <>
        <div className="card">
        <div id={data.id} onClick = {() =>clickHandler(data.name)}>
           <img src = {data.spriteSource} alt = {data.name} width={150}/> 
        </div>
        <div className="card-name">{data.name}</div>
        </div>
        </>
        
    )

}

export default Card;