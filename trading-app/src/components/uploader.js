import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

class UpladFiles extends Component {
    constructor(props) {
        super(props);
        // state = '';
    };

    uploadFile = (event) => {
        const fileData = new FormData();
        fileData.append('file', event.target.files[0]);
        fileData.append('name', event.target.files[0].name);
        // fileData.append('description', 'some value user types');
        console.log(event.target.files[0]);
    };

    render() {
        return (
            <div className="input-group">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="inputGroupFile04" onChange={this.uploadFile} />
                        <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
                </div>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Upload</button>
                </div>
            </div>
        );
    }
}

export default connect()(UpladFiles);
