export default function ProfileSection(props) {
    const { user, games } = props;

    return (
        <>
            <div>
                <button className="editBtn">
                    <a href="/profileEdit">Edit Profile</a>
                </button>
            </div>
            <div className="profileContainer">
                <div className="userContainer">
                    <div className="profile-image-section">
                        <h1>{user.username}</h1>
                        <img src={user.profile_picture} alt={`Profile Image of ${user.username}`} className="profile-image rounded-circle img-fluid" />
                    </div>
                    <div className="textContainer">
                        <h2>About Me!</h2>
                        <div className="profile-about-section">
                            <div className="description-box">
                                <p>{user.about_me}</p>
                            </div>
                        </div>
                        <h2>Creations</h2>
                        <div className="profile-creations-section bg-custom mt-4 p-3 rounded">
                            {games.map((game) => (
                                <div key={game.id} className="creation-item">
                                    <a href={`/game/${game.id}`} className="text-white">{game.title}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}