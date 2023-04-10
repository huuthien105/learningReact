import React from "react";
import { withRouter } from "react-router-dom";


class Home extends React.Component {

    componentDidMount() {
        console.log('>> did mount')
        setTimeout(() => {
            this.props.history.push('/todo')
        }, 5000)
    }

    render() {
        console.log('>> home render')
        return (
            <div>
                Hello word for home page
            </div>
        )
    }
}

// HOC: higher order component
export default withRouter(Home);