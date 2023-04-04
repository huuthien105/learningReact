import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handlleOnClickDelete = (job) => {
        this.props.deleteOneJob(job)
    }
    render() {
        let { jobs } = this.props
        let { showJobs } = this.state
        //let check = showJobs === true ? 'showJobs=true' : 'showJobs=false';
        return (
            <>
                {!showJobs ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-list">
                            {
                                jobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.id} - {item.title}  - {item.salary}
                                            <></> <button onClick={() => this.handlleOnClickDelete(item)}>X</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>

        )
    }
}

// const ChildComponent = (props) => {
//     console.log('>> Check props:', props)
//     let { name, age, address, jobs } = props
//     return (
//         <>
//             <div className="job-list">
//                 {
//                     jobs.map((item, index) => {
//                         if (item.salary >= 600) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.id} - {item.salary}$
//                                 </div>
//                             )
//                         }

//                     })
//                 }
//             </div>
//         </>

//     )
// }

export default ChildComponent;