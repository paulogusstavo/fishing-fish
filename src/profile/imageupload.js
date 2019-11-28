import React, {Component} from 'react';
import {storage} from '../services/conexaodb';
import MapContainer from '../services/maps';
import firebase from '../services/conexaodb';

class imageupload extends Component{
    constructor(props){
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0
        }
        this.handleChange = this
        .handleChange
        .bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleChange = e => {
        if  (e.target.files[0]){
            const image = e.target.files[0];
            this.setState(() => ({image}));
        }
    }
    handleUpload = () => {
        const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
        //Progress
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});

        },
        (error) => {
        //Error
            console.log(error);
        },
        () => {
        //Complete
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
               console.log(url); 
               this.setState({url});
            })
        });
    }

    render(){
        const style = {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        };
        return ( 
        <div>
            <h3 class="text-dark mb-0">Upload de Fotos</h3>
        <div style={style}>
        <br/>
        <progress value={this.setState.progress} max="100"/>
            <br/>
            <input type="file" onChange={this.handleChange}/>
            <button onClick={this.handleUpload}>Upload</button>
            <br/>
            <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
        </div>
        </div>
        )
    }
}

export default imageupload;

