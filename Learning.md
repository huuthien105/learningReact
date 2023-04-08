# Learning React

## Component

```js
import React from "react";

class MyComponent extends React.Component {

    render() {

        return (
            <>
                <div className="first">
                    Hello, this is new my componen.
                </div>
                <div className="second">
                    My company is Tran Huu Thien
                </div>

            </>

        )
    }
}

export default MyComponent;
```


### State

```js
import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Thiennn',
        company: 'TMA'
    }


    handleClickButton = () => {
        alert('Info click me')
    }

    render() {

        return (
            <>
                <div className="first">
                    Hello new my component, 
                    My name is {this.state.name} 
                </div>
                <div className="second">
                    
                    My company is {this.state.company}
                </div>
                <div className="third">
                    <button onClick={ }>Click me</button>
                </div>
            </>

        )
    }
}

export default MyComponent;
```

## DOM
```js

import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Thiennn',
        company: 'TMA'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })

    }

    handleClickButton = () => {
        alert('Info click me')
    }

    render() {

        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)}>
                    </input>
                    Hello new my component
                </div>
                <div className="second">
                    My name is {this.state.name} ---
                    My company is {this.state.company}
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>

        )
    }
}

export default MyComponent;
```

## Form

```js
import React from "react";

class MyComponent extends React.Component {
    state = {
        first: '',
        second: ''
    }


    handleChangeFirstName = (event) => {
        this.setState({
            first: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            second: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert("Submit click")
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text"
                        value={this.state.first}
                        onChange={(event) => this.handleChangeFirstName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text"
                        value={this.state.second}
                        onChange={(event) => this.handleChangeLastName(event)} /><br /><br />
                    <input type="submit" value="submit" onClick={(event) => this.handleSubmit(event)} />
                </form>
            </>

        )
    }
}

export default MyComponent;
```


## Nesting Components
```js
import ChildComponent from "./ChildComponent";
```

### Props
```js
// on father
<ChildComponent name={'child one'}  age={'25'}/>

// on child
{this.props.name} {this.props.age}

let {name, age} = this.props;
```


## Outputing List
```js
// on father
    state = {
        first: '',
        second: '',
        arrJob: [
            { id: '123', salary: '500' },
            { id: '456', salary: '1000' }
        ]
    }

<ChildComponent name={'child one'} age={this.state.first} address={this.state.second} jobs={this.state.arrJob} />

// on child
class ChildComponent extends React.Component {
    render() {
        let { name, age, address, jobs } = this.props
        return (
            <>
                <div className="job-list">
                    {
                        jobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.id} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>

        )
    }
}

```

## Stateless/ StateFull Component

```js
const ChildComponent = (props) => {
    console.log('>> Check props:', props)
    let { name, age, address, jobs } = props
    return (
        <>
            <div className="job-list">
                {
                    jobs.map((item, index) => {
                        if (+item.salary >= 600) {                        
                            return (
                            <div key={item.id}>
                                {item.id} - {item.salary}
                            </div>
                        )}

                    })
                }
            </div>
        </>

    )
}
```

## Conditional Output
```js
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
                                            {item.id} - {item.salary}
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
```

## Split Components 
```js
import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }

    handleChangetitleName = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <form>
                <label htmlFor="fname">Title:</label><br />
                <input type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangetitleName(event)} /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)} /><br /><br />
                <input type="submit" value="submit" onClick={(event) => this.handleSubmit(event)} />
            </form>
        )
    }
}
```

## Function as prop

```js
// root
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

    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent jobs={this.state.arrJob} />
            </>

        )
    }
}

//child
class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
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
```
## Deleting Data

```js
//father 
import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }

    handleChangetitleName = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert("Missing required field")
            return
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }


    render() {
        return (
            <form>
                <label htmlFor="fname">Title:</label><br />
                <input type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangetitleName(event)} /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)} /><br /><br />
                <input type="submit" value="submit" onClick={(event) => this.handleSubmit(event)} />
            </form>
        )
    }
}

export default AddComponent


// child

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
                                            <></> <span onClick={() => this.handlleOnClickDelete(item)}>X</span>
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
```

## Lifecycle


```js
componentDidUpdate(preProps, preState){

}

componentDidMount(){
    
}
```

## Todo App

## React Routers
keyword: react rounter dom
npm install --save-exact react-router-dom@5.3.0
npm i --force