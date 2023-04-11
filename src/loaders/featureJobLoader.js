import { readDB } from "../utils/dbConnection"

export const featureJobLoader = async () => {
    const jobListData = await fetch('/featured-job-list.json')
    const jobLists = await jobListData.json()

    const dbJobList = readDB()
    const savedJobList = []
    for (const id in dbJobList) {
        const foundJob = jobLists.find(job => job.id === id)
        if (foundJob) {
            savedJobList.push(foundJob)
        }
    }

    return { jobLists, savedJobList }
}