import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

import "../assets/css/header.css"
import "../assets/css/galeria.css";
import "../assets/imgs/toppng 1.png"
import "../assets/imgs/DBZ-logo.png"



const Home = () => {
    const navigate = useNavigate()

    const [allData, setAllData] = useState([])
    const [data, setData] = useState([])
    const [value, setValue] = useState("")
    const [order, setOrder] = useState("todos")

    useEffect(() => {
        filterData()
    }, [value])

    useEffect(() => {
        filterUniverse()
    }, [order])

    useEffect(() => {
        fetch('https://dragon-ball-super-api.herokuapp.com/api/characters')
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                setAllData(json)
                setData(json)
             })
            .catch((e) => console.log(e))
            }, [])

        const filterData = () => {
        const search = value.toLowerCase()
        const filtered = allData.filter((character) => {
            const name = character.name.toLowerCase()

            return name.includes(search)
        })
        setData(filtered)


    }

    const filterUniverse = () => {
        const filtered = allData.filter((character) => {
            const universe = character.universe
            return universe == order
        })
        setData(filtered)
    }

    return (
        <><header><div className="searcher">

            <div className="search-box">
                <input type="text" required onChange={(e) => setValue(e.target.value)}></input>
                <i className="fa fa-search"></i>
            </div>
            <p>Buscar por Nombre</p>

        </div>
            <div className="logos">
                <img src="src/assets/imgs/DBZ-logo.png" alt="logo"></img>
                <h1>Prueba del Dragon</h1>
            </div>
            <div className="selector">
            <p>Filtra por Universo</p>
                <div className="search-box">
                <i className="fa solid fa-filter"></i>
                    <select className= "select" onChange={(e) => setOrder(e.target.value)}>
                        <option value={data.universe = '1'}>Todos</option>
                        <option key={data.universe = '0'} value={data.universe = "0"}>Universo 0</option>
                        <option key={data.universe = '1'} value={data.universe = '1'}>Universo 1</option>
                        <option key={data.universe = '2'} value={data.universe = '2'}>Universo 2</option>
                        <option key={data.universe = '3'} value={data.universe = '3'}>Universo 3</option>
                        <option key={data.universe = '4'} value={data.universe = '4'}>Universo 4</option>
                        <option key={data.universe = '5'} value={data.universe = '5'}>Universo 5</option>
                        <option key={data.universe = '6'} value={data.universe = '6'}>Universo 6</option>
                        <option key={data.universe = '7'} value={data.universe = '7'}>Universo 7</option>
                        <option key={data.universe = '8'} value={data.universe = '8'}>Universo 8</option>
                        <option key={data.universe = '9'} value={data.universe = '9'}>Universo 9</option>
                        <option key={data.universe = '10'} value={data.universe = '10'}>Universo 10</option>
                        <option key={data.universe = '11'} value={data.universe = '11'}>Universo 11</option>
                        <option key={data.universe = '12'} value={data.universe = '12'}>Universo 12</option>
                    </select>
                </div>
                
            </div>
        </header><div className="galeria grid-columns-4 p-3">
                {data.map((data) => {
                    return (
                        <div key={data.id}
                            className="card">
                            <h2>{data.name}</h2>
                            <p> Universo {data.universe}</p>
                            <div className="card-img">
                                <img src={data.imageUrl} alt={data.name}></img>
                                </div>
                                <button onClick={() => navigate(`/${data.name}`)}>Ver ficha</button>
                            
                        </div>
                    );
                })}

            </div></>
    )

}

export default Home