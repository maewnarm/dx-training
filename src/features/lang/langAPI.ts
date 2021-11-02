export async function testFuncAsync(): Promise<Array<any>> {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'GET',
    })
    const result: Array<any> = await response.json()
    // console.log(result)
    return result
}