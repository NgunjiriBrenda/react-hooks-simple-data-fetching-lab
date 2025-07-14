import React, {useState, useEffect} from 'react';

function App(){
    const[image, setImage] = useState([]);
    // const[isLoaded, setIsLoaded] = useState()

    useEffect(() =>{
        fetch("https://images.dog.ceo/breeds/bulldog-english/mami.jpg")
        .then((res) => res.json())
        .then((data) =>
            setImage(data.message));

    }, []);
    if(!Image) return <p>Loading</p>;
    return(
            <img src={image} alt="A Random Dog"/>
        
    );
  
}

export default App;