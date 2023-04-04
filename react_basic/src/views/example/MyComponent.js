import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        first: '',
        second: '',
        arrJob: [
            { id: '123', title: 'Engineer', salary: '500' },
            { id: '456', title: 'Manager', salary: '1000' }
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJob: [...this.state.arrJob, job]
        })
    }

    deleteOneJob = (job) => {
        let currenJobs = this.state.arrJob
        currenJobs = currenJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJob: currenJobs
        })
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}

                />

                <ChildComponent
                    jobs={this.state.arrJob}
                    deleteOneJob={this.deleteOneJob} />
            </>

        )
    }
}

export default MyComponent;