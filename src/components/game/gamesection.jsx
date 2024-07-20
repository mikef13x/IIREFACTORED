

export default function GameSection() {


    return (
        <>
            <div className="imageContainer">
                <img className="largeImage"
                    src="/assets/images/stock-vector-vector-illustration-neon-future-game-pad-background-1861318969.jpg"
                    alt="" />
                {[...Array(5)].map((_, index) => (
                    <img key={index} className="smallImage"
                        src="/assets/images/stock-vector-vector-illustration-neon-future-game-pad-background-1861318969.jpg"
                        alt="" />
                ))}
            </div>
            <button className="slide next"> <i className="icon">next</i></button>
            <div className="descriptionContainer">
                <h2> "{props.game.title}" Description</h2>
                <p>{props.game.description}</p>
                <h3>Other Game Info</h3>
                <p>Other Game info goes here</p>
                <h3>Minimum Specs Required</h3>
                <p>specs goes here</p>
            </div>

            <aside className="sidebarRight">
                <h2 className="supportHeader">Support This Game!</h2>
                <h6>(Support Packages Available for Purchase Soon!)</h6>
                <div className="supportContainer">
                    <div className="levelOne supportPackage">
                        <h5>level one</h5>
                        <p>free shirt</p>
                        <p>early access content</p>
                        <button>$4.99</button>
                    </div>
                    <div className="levelOne supportPackage">
                        <h5>level two</h5>
                        <p>level one +</p>
                        <p>behind the scenes content</p>
                        <button>$9.99</button>
                    </div>
                    <div className="levelOne supportPackage">
                        <h5>level three</h5>
                        <p>level one, two +</p>
                        <p>1 hour zoom Q/A</p>
                        <button>$19.99</button>
                    </div>

                </div>
            </aside>


        </>
    )
}