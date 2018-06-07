import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { aploadActions } from '../actions/uploads.actions';
import {store} from "../helpers/store";

class UpladFiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadStatus: false
        };
        this.handleUpload = this.handleUpload.bind(this);
    }


    handleUpload(ev) {
        ev.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        // data.append('filename', this.fileName.value);
        const { dispatch } = this.props;
        dispatch({ type: 'UPLOAD_SUCCESS', payload: data });

        axios.post('http://localhost:3001/file/upload', data)
            .then(function (response) {
                this.setState({uploadStatus: true });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleUpload}>
                    <div className="form-group">
                        <input className="form-control" ref={(ref) => {
                            this.uploadInput = ref;
                        }} type="file"/>
                    </div>

                    <button className="btn btn-success" type>Upload</button>

                </form>
            </div>
        );
    }
}

export default connect()(UpladFiles);
