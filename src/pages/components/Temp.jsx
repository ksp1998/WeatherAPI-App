import React from 'react';
import cold from '../../images/cold.png';
import veryCold from '../../images/very-cold.png';
import warm from '../../images/warm.png';
import hot from '../../images/hot.png';
import veryHot from '../../images/very-hot.png';

const Temp = (props) => {
    let imgsrc = "";
    const temp = props.temprature;

    console.log(props.temp);

    if(temp < 10)
        imgsrc = veryCold;
    else if(temp < 20)
        imgsrc = cold;
    else if(temp < 30)
        imgsrc = warm;
    else if(temp < 40)
        imgsrc = hot;
    else
        imgsrc = veryHot;

    return (
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4">
            <img src={ imgsrc } alt="jpg" />
            <h5> { props.title } </h5>
            <h5> { temp } °C 🌤️ </h5>
        </div>
    )
}

export default Temp;