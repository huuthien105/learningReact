import React from "react";
import axios from 'axios';
import './ListUser.scss'
import { withRouter } from "react-router-dom";
class ListUser extends React.Component {

    state = {
        listUsers: []
    }
    async componentDidMount() {
        console.log(">>did mounr")

        let res = await axios.get('https://reqres.in/api/user?page=2')

        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let { listUsers } = this.state
        console.log(listUsers)
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list user
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className="child" key={item.id}
                                    onClick={() => this.handleViewDetailUser(item)}
                                >
                                    {index + 1} - {item.name} - {item.year} - {item.pantone_value}
                                </div>
                            )
                        })

                    }

                </div>

            </div>
        )
    }
}

export default withRouter(ListUser);
