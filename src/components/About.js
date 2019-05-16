// components/About.js

import React from 'react';
import Experience from './Experience';
import Education from './Education';

class about extends React.Component {
    state = {}


    componentDidMount() {
        console.log('about did mount')
    }
    render() {
        return (
            <div>
                <div style={{ width: '40%', float: "left" }}>
                    <Education />
                </div>
                <div style={{ width: '60%', float: "right" }}>
                    <Experience />
                </div>
            </div>
        )
    }
}

export default about;