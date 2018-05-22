import React, { Component } from 'react';
import { connect } from 'react-redux';

class ParsingTables extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <h1>parse table component</h1>
        );
    }
}

export default connect()(ParsingTables);
