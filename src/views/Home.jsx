import "../assets/css/header.css"
import "../assets/css/galeria.css";
import "../assets/imgs/toppng 1.png"
import "../assets/imgs/DBZ-logo.png"
import Context from "../context/Context.js"

import { useContext } from "react"




const Home = () => {
    const { data } = useContext(Context)
    return (
        <><header><div className="searcher">
            
            <form action="">
                <input type="search" required></input>
                <i className="fa fa-search"></i>
            </form>
            <p>Buscar por Nombre</p>
            
        </div>
            <div className="logos">
                <img src="src/assets/imgs/DBZ-logo.png" alt="logo"></img>
                <h1>Prueba del Dragon</h1>
            </div>
            <div className="selector">
            <form action="">
            <select>
                    <option value="asc">Name from A-Z</option>
                    <option value="desc">Name from Z-A</option>
            </select>
            </form>
            <p>filtra por Universo</p>
            </div>
        </header><div className="galeria grid-columns-4 p-3">
                {data.map((data) => {
                    return (
                        <div key={data.id}
                            className="card">
                            <h2>{data.name}</h2>
                            <p> {data.role}</p>
                            <div className="card-img"><img src={data.imageUrl} alt={data.name}></img>
                            </div>
                        </div>
                    );
                })}

            </div></>
    )

}

export default Home