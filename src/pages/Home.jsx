import React, { useEffect, useState } from 'react';
import Result from './components/Result';

const Home = () => {

    const [text, setText] = useState("Mumbai");
    const [data, setData] = useState({cod: "400"});
    // const [imgsrc, setImgSrc] = useState("weather");

    useEffect(() => {
        async function fetchData() {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=dd522fe8ceaa4f24929ab9a1d3414361`;
            const res = await fetch(url);
            const data = await res.json();
            
            setData(data);
            // const imgurl = `https://source.unsplash.com/random/300x150/?${text}`;
            // setImgSrc(imgurl);
            console.log(data);
            //console.log(data.main);
        }
        fetchData();
    }, [text]);

    return (
        <>
            {/* <div className="row col-12">
                <h1 className="col">Weather App</h1>
            </div> */}
            {/* <div className="row col-4">
                
            </div> */}

            <div className="main-div container-fluid">
                <div className="card-div row col col-10 col-sm-8 col-md-6">
                    <div className="title col col-12">weather app</div>
                    <hr className="hr-line" />
                    <div className="data-div row col col-12">
                        <div className="input-div row col col-12 col-sm-10 col-md-8">
                            <input 
                                type="text"
                                className="col col-10" 
                                placeholder="Enter city name" 
                                onChange={ (evt) => setText(evt.target.value) } 
                                value={text} />
                            <div className="close-icon col col-2"><span title="Clear" onClick={() => setText("") } >x</span></div>
                        </div>
                        <div className="row col col-12">
                            {/* <img src={imgsrc} alt={imgsrc} style={{width: "100%"}} /> */}
                            {
                            (data.cod === 200) ? 
                                <Result data={ data } />
                                : 
                                ((data.cod === "404") ? <h1 className="city"> { data.message } </h1> : null)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;