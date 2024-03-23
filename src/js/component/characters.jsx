import React, { useEffect, useState } from "react";

const Characters = () => {
    const [personajes, setPersonajes] = useState([])

    function getCharacters(){
        console.log('getCharacters')
        fetch('https://rickandmortyapi.com/api/character')
        .then( (response) => response.json()  )
        .then( (data) => setPersonajes(data.results)  )

    }

    useEffect(()=>{
        getCharacters()
    },[])
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Characters !</h1>
            {personajes.map( (personaje)=> <p key={personaje.id}> {personaje.name} <img src={personaje.image} /> </p> )}
		</div>
	);
};

export default Characters;
