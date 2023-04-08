import React from "react";
import AddTodo from "./AddTodo";
import './ListTodo.scss';

class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Fixing bugs' }
        ],
        editTodo: {

        }
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCoppy = [...listTodos]
            let index = listTodosCoppy.findIndex(item => item.id === todo.id)

            listTodosCoppy[index].title = editTodo.title
            this.setState({
                listTodos: listTodosCoppy,
                editTodo: {}
            })
            return
        }

        this.setState({
            editTodo: todo
        })


    }

    handleDeleteTodo = (todo) => {
        console.log(">> handle delete", todo)
        let currentTodo = this.state.listTodos
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodo
        })
    }

    handleEditOnchangeTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        console.log(">> check empty object", isEmptyObj)
        return (
            <>
                <p>Simple TODO App with React.js</p>
                <div className="list-todo-container">

                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span>{index + 1} - {item.title}</span>
                                            : <>
                                                {editTodo.id === item.id ?
                                                    <span>{index + 1} - <input
                                                        value={editTodo.title}
                                                        onChange={(event) => this.handleEditOnchangeTodo(event)} /></span>
                                                    :
                                                    <span>{index + 1} - {item.title}</span>
                                                }
                                            </>

                                        }
                                        <button className="edit"
                                            onClick={() => this.handleEditTodo(item)}
                                        >
                                            {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                        </button>
                                        <button className="delete"
                                            onClick={() => this.handleDeleteTodo(item)}
                                        >Delete
                                        </button>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </>
        )
    }

}

export default ListTodo