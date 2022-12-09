import studentsJson from 'data/students.json'
export const studentsService = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(studentsJson)
        }, 1000);
    })
}