
import React from 'react';
import { Redirect } from 'react-router-dom'

class Home extends React.Component {

    componentDidMount() {
        console.log('home did mount')
    }
    componentWillReceiveProps(props, nextProps) {
        console.log('props,nextProps', props, nextProps)
    }
    render() {
        return (
            <div>
                <div>
                    <h3>Welcome to my portfolio page! My name is</h3>
                    {this.props.loggedIn ?
                        <h1>{this.props.user}</h1>
                        :
                        <div>
                            <h1>Not logged in</h1>
                            <Redirect to="/contact" />
                        </div>
                    }
                    <p>and I'm Web Developer!</p>
                </div>
            </div>
        )
    }

}

export default Home;