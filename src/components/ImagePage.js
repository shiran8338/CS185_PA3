import React, { useState } from 'react';
import './style.css';


import image1 from './images/1.JPG';
import image2 from './images/2.JPG';
import image3 from './images/3.JPG';
import image4 from './images/4.JPG';
import image5 from './images/5.jpg';
import image6 from './images/6.JPG';
import image7 from './images/7.JPG';

function Images() {

    var [overlayImage, setOverlayImage] = useState(image1);
    var [overlayStatus, toggleOverlay] = useState(false);
    var [topButtonStatus, toggleTopButton] = useState(false);

    function spawnOverlay(image) {
        setOverlayImage(image);
        toggleOverlay(true);
    }

    function despawnOverlay() {
        toggleOverlay(false);
    }

    window.onscroll = () => scrollFunction();

    function scrollFunction() {
        var scrollTop = window.scrollY;
        var documentHeight = document.body.offsetHeight;
        var windowHeight = window.innerHeight;
        var scrollPercent = 100 * scrollTop / (documentHeight - windowHeight)
        if (scrollPercent > 25) {
            toggleTopButton(true);
        }
        else {
            toggleTopButton(false);
        }
    }

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
    return (

        <div>

            <div className="grid_container">
                
                <div className="grid_item">
                    <img src={image1} onClick={() => spawnOverlay(image1)} />
                </div>

                <div className="grid_item">
                    <img src={image2} onClick={() => spawnOverlay(image2)} />
                </div>

                <div className="grid_item">
                    <img src={image3} onClick={() => spawnOverlay(image3)} />
                </div>

                <div className="grid_item">
                    <img src={image4} onClick={() => spawnOverlay(image4)} />
                </div>

                <div className="grid_item">
                    <img src={image5} onClick={() => spawnOverlay(image5)} />
                </div>

                <div className="grid_item">
                    <img src={image6} onClick={() => spawnOverlay(image6)} />
                </div>

                <div className="grid_item">
                    <img src={image3} onClick={() => spawnOverlay(image4)} />
                </div>

                <div className="grid_item">
                    <img src={image7} onClick={() => spawnOverlay(image7)} />
                </div>

            </div>

            <div className="modal" onClick={() => despawnOverlay()} style={{ display: overlayStatus ? "block" : "none" }}>
                <img className="modal_image" src={overlayImage} />
            </div>

            <button onClick={() => backToTop()} id="top_button" title="To Top" style={{ display: topButtonStatus ? "block" : "none" }}>Top</button>

        </div>

    )

}

export default Images;