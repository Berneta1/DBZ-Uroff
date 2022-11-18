import "../assets/css/details.css"

const Details = ({ character }) => {
    return (
        <div className="detalle">
            <main-header>
                <div className="logo">
                    <img src="src/assets/imgs/DBZ-logo.png" alt="logo"></img>
                </div>
            </main-header>
            <div className="ficha">
                <img className="characterimg" src={character.imageUrl} alt={character.name}></img>
                <div className="stats">


                    <h1>{character.name}</h1>

                    <h4>Universo {character.universe}</h4>
                    <div className="table">
                        <tr>
                            <td><p>specie</p></td><td>{character.specie}</td>
                        </tr>
                        <tr>
                            <td><p>Role</p></td><td>{character.role}</td>
                        </tr>
                        <tr>
                            <td><p>Status</p></td><td>{character.status}</td>
                        </tr>
                        <tr>
                            <td><p>Originplanet</p></td><td>{character.originplanet}</td>
                        </tr>
                        <tr>
                            <td><p>Transform</p></td><td>{character.transform}</td>
                        </tr>
                    </div>

                </div>
            </div>










        </div>


    )
}

export default Details