

export default function GameCard(props) {
    return (
        <>
            <a href={`/game/${props.id}`}>
                <div className="gamecard" id={props.id}>
                    <div className="card">
                        <img className="card-img-top" src={props.image} alt="Game" />
                        <img className="card-img-top" src="/assets/images/stock-vector-vector-illustration-neon-future-game-pad-background-1861318969.jpg" alt="Default Game" />
                        <div className="card-body">
                            <h5 className="card-title">{props.title} {props.upvotes}</h5>
                        </div>
                    </div>
                </div>
            </a>
        </>
    );
}