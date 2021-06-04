import React from 'react';
import Temp from './Temp';

const Result = (props) => {
    const name = props.data.name;
    const country = props.data.sys.country;
    const main = props.data.main;
    
    return (
        <>
            <h1 className="city">{ name }, {country} </h1>
            <div className="temp-div row col col-12">
                <Temp title="Temprature" temprature={ main.temp } />
                <Temp title="Min. Temp" temprature={ main.temp_min } />
                <Temp title="Max. Temp" temprature={ main.temp_max } />
            </div>
        </>
    )
}

export default Result;