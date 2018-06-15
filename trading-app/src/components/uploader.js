import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { aploadActions } from '../actions/uploads.actions';
import {store} from "../helpers/store";

class UpladFiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        };
    }


    // handleUpload(ev) {
    //     ev.preventDefault();
    //
    //     const data = new FormData();
    //     data.append('file', this.uploadInput.files[0]);
    //     // data.append('filename', this.fileName.value);
    //     const { dispatch } = this.props;
    //     dispatch({ type: 'UPLOAD_SUCCESS', payload: data });
    //
    //     axios.post('http://localhost:3001/file/upload', data)
    //         .then(function (response) {
    //             return {
    //                 uploadStatus: true
    //             }
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    fileChangedHandler = (event) => {
        this.setState({selectedFile: event.target.files[0]})
    };

    uploadHandler = () => {
        console.log(this.state.selectedFile);
        const formData = new FormData();
        formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('http://localhost:3001/file/upload', formData, {
            onUploadProgress: progressEvent => {
                console.log(progressEvent.loaded / progressEvent.total)
            }
        })
    };

    render() {
        return (
            <div className="container">
                <input type="file" onChange={this.fileChangedHandler}/>
                <button onClick={this.uploadHandler}>Upload!</button>
            </div>
        );
    }
}

export default connect()(UpladFiles);
