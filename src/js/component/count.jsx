import React , { useState, useEffect}from "react";

const Count = () => {
    const [clicks, setClicks] = useState(3)
    const [clicks2, setClicks2] = useState(5)

    function agregar(){
        setClicks(clicks + 1)
    }

    function agregar2(){
        setClicks2(clicks2 + 1)
    }

    //useEffect( callback que se va a ejecuar cuando algo cambie, un array de los estado que quiero observar)
    useEffect( ()=>{
        console.log('clicks cambio')
    }, [clicks])

    useEffect( ()=>{
        console.log('clicks 2 cambio')
    }, [clicks2])


    useEffect( ()=>{
        console.log('el componente cambio')
    }, [])

    useEffect( ()=>{
        console.log('cambio algun click')
    }, [clicks,clicks2])

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Count</h1>
            {clicks}
            <button onClick={agregar}>agregar</button>
            <br/>            
            {clicks2}
            <button onClick={agregar2}>agregar 2</button>
		</div>
	);
};

export default Count;
