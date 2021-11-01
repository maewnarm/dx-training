import { useState } from "react";
import { getAllEmployees } from "../api/employees";

interface Employee {
    Id: number
    Emp_id: number
    Name: string
    Position: string
}

const employees = () => {
    const [employees, setEmployees] = useState<Employee[]>([])

    const getEmployees = async () => {
        const empLists: Employee[] = await getAllEmployees()
        setEmployees(empLists)
    }

    return (
        <div>
            <button className="button is-primary" onClick={getEmployees}>Load data</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Emp id</th>
                        <th>Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((emp: Employee, idx: number) => (
                            <tr key={idx}>
                                <td>{emp.Id}</td>
                                <td>{emp.Emp_id}</td>
                                <td>{emp.Name}</td>
                                <td>{emp.Position}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default employees;