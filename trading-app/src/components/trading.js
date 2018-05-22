import React, { Component } from 'react';
import { connect } from 'react-redux';

class Trading extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <h1> show trading data from external API</h1>
        );
    }
}

export default connect()(Trading);
