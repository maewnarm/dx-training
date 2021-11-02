export const fetchTodos = async () => {
    const url = `https://jsonplaceholder.typicode.com/todos`
    // 0.0.0.0:4000/employee
    const fetchOptions = {
        method: `GET`, //GET,POST,PUT,DELETE
    }

    const res = await fetch(url,fetchOptions)
    if (res.status !== 200) throw new Error(res.statusText)

    const data = await res.json()
    console.log(data)
    return data
}

export const fetchUsers = async () => {
    const url = `https://jsonplaceholder.typicode.com/users`
    // 0.0.0.0:4000/employee
    const fetchOptions = {
        method: `GET`, //GET,POST,PUT,DELETE
    }

    const res = await fetch(url,fetchOptions)
    if (res.status !== 200) throw new Error(res.statusText)

    const data = await res.json()
    console.log(data)
    return data
}