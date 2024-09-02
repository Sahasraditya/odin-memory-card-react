export default function header(score,highScore){
    return (
        <>

        <div class = "header">
            <div className="header-left">
            <p>Click on a Pokemon to score, Click it again and you will Lose!!</p>
            </div>

            <div className="header-right">
                <div className="scores">
                   Score: {score}
                </div>
                <div className="highScore">
                    High Score : {highScore}
                </div>
            </div>
            
        </div>
        
        
        </>
    )
}