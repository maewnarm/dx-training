export const getAllJobs = async () => {
    const url = `http://0.0.0.0:4000/jobs`
    const fetchOptions = {
        method: `GET`,
    }

    const res = await fetch(url, fetchOptions)
    if (res.status !== 200) throw new Error(res.statusText)
    const data = await res.json()
    return data
}

export const createJob = async (creatorId: number, inchargeId: number, description: string, createdDate: Date, dueDate: Date) => {
    const url = `http://0.0.0.0:4000/jobs`
    const fetchOptions = {
        method: `POST`,
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            Creator_id: creatorId,
            Incharge_id: inchargeId,
            Description: description,
            Created_date: createdDate,
            Due_Date: {Time: dueDate}
        })
    }

    const res = await fetch(url, fetchOptions)
    // if (res.status !== 200) throw new Error(res.statusText)
    if (res.status !== 200) {
        return "error"
    } else {
        console.log(res)
        const data = await res.json()
        console.log(data)
        return data
    }
}