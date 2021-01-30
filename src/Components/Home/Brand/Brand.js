import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png'; 
import airbnb from '../../../images/logos/airbnb.png';

const Brand = () => {
    const iconContent ={
        padding : '70px 0'
    }
    const imgStyle = {
        width : '140px',
        height : '36px'

    }
    return (
        <div className='container'>
            <div className='row' style={iconContent}>
                <div className="col-md-1 col-sm-6 offset-md-1 text-center mt-4">
                    <img style={imgStyle} src={slack} alt="icon"/>
                </div>
                <div className="col-md-1 col-sm-6 offset-md-1 text-center mt-4">
                    <img style={imgStyle} src={google} alt="icon"/>
                </div>
                <div className="col-md-1 col-sm-6 offset-md-1 text-center mt-4">
                    <img style={imgStyle} src={uber} alt="icon"/>
                </div>
                <div className="col-md-1 col-sm-6 offset-md-1 text-center mt-4">
                    <img style={imgStyle} src={netflix} alt="icon"/>
                </div>
                <div className="col-md-1 col-sm-6 offset-md-1 text-center mt-4">
                    <img style={imgStyle} src={airbnb} alt="icon"/>
                </div>
            </div>
        </div>
    );
};

export default Brand;