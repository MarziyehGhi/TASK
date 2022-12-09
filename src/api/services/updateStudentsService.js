import studentsJson from 'data/students.json'
export const updateStudentsService = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(studentsJson)
        }, 1);
    })
}