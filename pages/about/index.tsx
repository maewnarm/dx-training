import { useState } from 'react'
import { fetchTodos,fetchUsers } from '../api/fetch'

interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

interface Users {
    name: string
    username: string
    email: string
    address: addressInfo
}

interface addressInfo {
    street: string
    city: string
}

const About = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [users, setUsers] = useState<Users[]>([])

    const getTodos = async () => {
        const todosList: Todo[] = await fetchTodos();
        // console.log(todosList)
        setTodos(todosList)
    }

    const getUsers = async () => {
        const UsersList: Users[] = await fetchUsers();
        setUsers(UsersList)
    }

    return (
        <>
            <h1>This page is About</h1>
            <button className="button is-primary" onClick={getTodos}>Get Todos</button>
            <button className="button is-primary" onClick={getUsers}>Get Users</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo: Todo, idx: number) => {
                            const userid = "User" + todo.userId
                            console.log(todo)
                            console.log(idx)
                            return (
                                <tr key={idx}>
                                    <td>{userid}</td>
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    <td>{
                                        todo.completed ?
                                            "Completed"
                                            :
                                            "Not yet"
                                    }</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Street</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user: Users, idx: number) => {
                            return (
                                <tr key={idx}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.street}</td>
                                    <td>{user.address.city}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default About;