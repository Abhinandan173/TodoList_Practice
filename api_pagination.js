import React, { Component } from 'react'
import axios from 'axios'
class Api extends Component {
    constructor() {
        super()
        this.state = {
            mydata: [], //it will take all data from api
            page: 1   // it will set pagination numbers 1 & 2
        }
    }

    //getdata function will get the data from api and set it to stste called "mydata"
    getdata = () => {
        let url = `https://reqres.in/api/users?page=${this.state.page}`
        axios.get(url).then((response) => {
            console.log(response.data.data);
            this.setState({
                mydata: response.data.data  // fetching data from api and sending it to "mydata" state
            })

        })
    }

    componentDidMount() {
        this.getdata()
    }

    componentDidUpdate() {
        this.getdata()
    }

    render() {
        const { mydata } = this.state;
        console.log(mydata);
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        {/* buttons for pagination purpose page-one & page-two */}
                        <button onClick={() => { this.setState({ page: 1 }) }} className="btn btn-primary px-4 m-2"> ONE </button>
                        <button onClick={() => { this.setState({ page: 2 }) }} className="btn btn-primary px-4 m-2"> TWO </button>
                    </div>
                </div>
                {
                    this.state.mydata.map(user => {
                        return (
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3">
                                        <div className="row my-3 shadow-lg">
                                            <div className="col-lg-4">
                                                <img src={user.avatar} />
                                            </div>
                                            <div className="col-lg-8 mt-4">
                                                <h4><b>Name : </b>{user.first_name}-{user.last_name}</h4>
                                                <p><b>Email-id : </b> {user.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                 <div className="row">
                    <div className="col text-center">
                        {/* buttons for pagination purpose page-one & page-two */}
                        <button onClick={() => { this.setState({ page: 1 }) }} className="btn btn-primary px-4 m-2"> ONE </button>
                        <button onClick={() => { this.setState({ page: 2 }) }} className="btn btn-primary px-4 m-2"> TWO </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Api;