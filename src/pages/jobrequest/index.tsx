import { useEffect, useState } from "react";
import { getAllJobs, createJob } from "../api/job_request"
import { toast } from "react-toastify";
import moment from "moment"
import Label from "./label"

interface JobRequest {
    Job_id: number
    Creator_id: number
    Description: string
    Created_date: Date
    Due_date: NullTime
    Finished_date: NullTime
    Incharge_id: number
    Job_number: string
}

interface NullTime {
    Time: Date
    Valid: boolean
}

// export const getStaticProps: GetStaticProps = async (context) => {
//     const jobs: JobRequest[] = await getAllJobs()
//     return {
//         props: {
//             jobs,
//         },
//     }
// }

const getInputValue = (id: string) => {
    let value = (document.getElementById(id) as HTMLInputElement).value
    return value
}

const JobCreateForm = () => {
    const [jobs, setJobs] = useState<JobRequest[]>([])

    useEffect(() => {
        getJobs()
        console.log("getJob")
    }, [])

    const getJobs = async () => {
        setJobs(await getAllJobs())
    }

    const submitCreateJob = async () => {
        let creatorId = parseInt(getInputValue('creator_id'))
        console.log(creatorId)
        let inchargeId = parseInt(getInputValue('incharge_id'))
        let description = getInputValue('description')
        let createdDate = moment(getInputValue('created_date'), 'YYYY-MM-DD').toDate()
        let dueDate = moment(getInputValue('due_date'), 'YYYY-MM-DD').toDate()
        let created = await createJob(creatorId, inchargeId, description, createdDate, dueDate)
        console.log(created)
        created = created[0]
        if (created.Description !== undefined) {
            toast(`Job ${created.Job_number} : ${created.Description} was created !!`)
            getJobs()
        } else {
            toast(`Job created error`)
        }
    }

    return (
        <>
            <form method="POST" action="http://0.0.0.0:4000/jobs" style={{ width: "80%", margin: "0 auto" }}>
                <div className="field">
                    <label className="label">Creator id</label>
                    <div className="control has-icons-left has-icons-right">
                        <input id="creator_id" className="input is-success" type="text" placeholder="Text input" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                    </div>
                    <p className="help is-success">This username is available</p>
                    <label className="label">Incharge id</label>
                    <input id="incharge_id" className="input is-success" type="text" />
                    <label className="label">Description</label>
                    <input id="description" className="input is-success" type="text" />
                    <label className="label">Created date</label>
                    <input id="created_date" className="input is-success" type="text" />
                    <label className="label">Due date</label>
                    <input id="due_date" className="input is-success" type="text" />
                </div>
                <button className="button is-success" type="button" onClick={submitCreateJob}>Create</button>
            </form>
            <JobsTable jobs={jobs} />
        </>
    )
}

// const JobsTable = ({ jobs }: InferGetStaticPropsType<typeof getStaticProps>) => {
// const JobsTable = ({ jobs }: { jobs: JobRequest[] }) => {
const JobsTable = ({ jobs }: { jobs: JobRequest[] }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Job number</th>
                    <th>Description</th>
                    <th>Requester</th>
                    <th>Assigned to</th>
                    <th>Requested date</th>
                    <th>Due date</th>
                    <th>Finished date</th>
                </tr>
            </thead>
            <tbody>
                {
                    jobs.map((job: JobRequest, idx: number) => {
                        console.log(job)
                        return (
                            <tr key={idx}>
                                <td>{job.Job_id}</td>
                                <td>{job.Description}</td>
                                <td>{job.Creator_id}</td>
                                <td>{job.Incharge_id}</td>
                                <td>{job.Created_date}</td>
                                <td>{
                                    job.Due_date.Valid ?
                                        job.Due_date.Time
                                        :
                                        "-"
                                }</td>
                                <td>{
                                    job.Finished_date.Valid ?
                                        job.Finished_date.Time
                                        :
                                        "-"
                                }</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

// const JobRequest = ({ jobs }: InferGetStaticPropsType<typeof getStaticProps>) => {
const JobRequest = () => {
    return (
        <>
            <Label />
            <JobCreateForm />
        </>
    )
}

export default JobRequest;