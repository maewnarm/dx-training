export const getAllEmployees = async () => {
    const url = `http://0.0.0.0:4000`
    const fetchOptions = {
        method: `GET`, 
    }

    const res = await fetch(url,fetchOptions)
    if (res.status !== 200) throw new Error(res.statusText)

    const data = await res.json()
    console.log(data)
    return data
}