import React, {Component} from 'react';
import {storage} from '../services/conexaodb';
import MapContainer from '../services/maps';
import firebase from '../services/conexaodb';
import './portfolio.css';

class portfolio extends Component{
    constructor(props){
        super(props);
        this.state = {
            image: null,
            url: ''
        }
    }

    render(){
        return ( 
            <div>       
            <div class="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 class="text-dark mb-0">Portfólio</h3>
                <head>
                <link rel="stylesheet" type="text/css" href="portfolio.css"></link>
                <link rel="stylesheet" type="text/css" href="./css/lightbox.min.css"></link>
                <script type="text/javascript" src="./js/lightbox-plus-jquery.min.js"></script>
                </head>
            </div>
            <body>
            <div class="gallery">
                <a href="../img/blog1.jpg" data-lightbox="blog1" data-title="Primeira pesca!"><img src={require('../img/blog1-small.jpg')}/></a>
                <a href="../img/blog2.jpg" data-lightbox="blog2" data-title="Segunda pesca!"><img src={require('../img/blog2-small.jpg')}/></a>
                <a href="../img/blog3.jpg" data-lightbox="blog3" data-title="Terceira pesca!"><img src={require('../img/blog3-small.jpg')}/></a>
                <a href="../img/blog4.jpg" data-lightbox="blog4" data-title="Quarta pesca!"><img src={require('../img/blog4-small.jpg')}/></a>
                <a href="../img/blog5.jpg" data-lightbox="blog5" data-title="Quinta pesca!"><img src={require('../img/blog5-small.jpg')}/></a>
                <a href="../img/blog6.jpg" data-lightbox="blog6" data-title="Sexta pesca!"><img src={require('../img/blog6-small.jpg')}/></a>
                <a href="../img/blog1.jpg" data-lightbox="blog1" data-title="Primeira pesca!"><img src={require('../img/blog1-small.jpg')}/></a>
                <a href="../img/blog2.jpg" data-lightbox="blog2" data-title="Segunda pesca!"><img src={require('../img/blog2-small.jpg')}/></a>
                <a href="../img/blog3.jpg" data-lightbox="blog3" data-title="Terceira pesca!"><img src={require('../img/blog3-small.jpg')}/></a>
                <a href="../img/blog4.jpg" data-lightbox="blog4" data-title="Quarta pesca!"><img src={require('../img/blog4-small.jpg')}/></a>
                <a href="../img/blog5.jpg" data-lightbox="blog5" data-title="Quinta pesca!"><img src={require('../img/blog5-small.jpg')}/></a>
                <a href="../img/blog6.jpg" data-lightbox="blog6" data-title="Sexta pesca!"><img src={require('../img/blog6-small.jpg')}/></a>
                             
            </div>
            </body>  
        </div>
    )}
}

export default portfolio;

