import React from "react";

const Test = () => {

    function traertareas(){
        console.log('traertareas')
        fetch('https://playground.4geeks.com/apis/fake/todos/user/conejito')
        .then( (response)=> response.json())
        .then( (data)=> console.log(data))
    }

    function crearusuario(){
        console.log('crearusuario')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([])
        };
        fetch('https://playground.4geeks.com/apis/fake/todos/user/alberto', requestOptions)
        .then( (response)=> response.json())
        .then( (data)=> console.log(data))
    }


	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Test</h1>
            <button onClick={traertareas}>traer tareas</button>
            <button onClick={crearusuario}>crearusuario</button>
		</div>
	);
};

export default Test;
