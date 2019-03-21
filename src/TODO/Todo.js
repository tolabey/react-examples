import React from 'react';
import { connect } from "react-redux";
import I from 'immutable';
import actionCreator from '../reduxStore/action';
import { uuidv4 } from '../api/api.js';
import './todo.scss';

class Todo extends React.Component {

    showTodoList(todos) {
        const { updateTodo, deleteTodo } = this.props;

        console.log(todos);
        return todos.map( todo => {
            console.log('some debug', todo)
            return (
                <div className="one-todo" key={todo.get('id')}>
                    <button className="one-complete" onClick={() => updateTodo(todo.get('id'))}>
                        {`${todo.get('status') === 'COMPLETED' ? '●' : 'o'}`}
                    </button>
                    {todo.get('text', '')}
                    <button className="delete-todo" onClick={() => deleteTodo(todo.get('id'))}>{'X'}</button>
                </div>
            )
        })
    }

    addTodo() {
        this.props.addTodo({id: uuidv4(), text: this.props.todoText, status: 'NOT_COMPLETED'});
        this.props.setTodoText('');
    }

    desiredTodoList() {
        const { todos, desired } = this.props;
        let newList;

        switch (desired) {
            case 'COMPLETED':
                newList =  todos.filter((oneTodo) => oneTodo.get('status') === 'COMPLETED');
                return this.showTodoList(newList);
            case 'NOT_COMPLETED':
                newList = todos.filter((oneTodo) => { return oneTodo.get('status') === 'NOT_COMPLETED' });
                console.log(newList);
                return this.showTodoList(newList);
            default:
                return this.showTodoList(todos);
        }
    }

    render() {
        const { setTodoText, todoText, todos, setDesired } = this.props;

        console.log(this.props.desired, 'desired');
        return (
            <div className="todo-container">
                <input type="text" className="add-todo" onChange={(e) => e.target.value.trim() !== '' && setTodoText(e.target.value)} value={todoText}/>
                <button className="add-button" onClick={() => this.addTodo()}>{"ADD"}</button>
                <div className="todos">
                    {this.desiredTodoList(todos)}
                </div>
                <div className="todo-footer">
                    <button onClick={() => setDesired('ALL')}>{"all"}</button>
                    <button onClick={() => setDesired('COMPLETED')}>{"completed"}</button>
                    <button onClick={() => setDesired('NOT_COMPLETED')}>{"not completed"}</button>
                </div>
            </div>
        )
    }

}

function mapStateToProps(store) {
    console.log(store);
    return {
        todos: store.getIn(['todo', 'todos'], I.List()),
        todoText: store.getIn(['todo', 'todoText'], ''),
        desired: store.getIn(['todo', 'desired'], 'ALL'),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (payload) => dispatch(actionCreator('ADD_TODO', payload)),
        setTodoText: (value) => dispatch(actionCreator('SET_TODO_TEXT', value)),
        setDesired: (value) => dispatch(actionCreator('SET_DESIRED', value)),
        updateTodo: (id) => dispatch(actionCreator('UPDATE_TODO_STATUS', id)),
        deleteTodo: (id) => dispatch(actionCreator('DELETE_TODO', id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);