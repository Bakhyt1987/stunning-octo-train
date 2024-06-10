const tasks = ['task 1']

function Add(task) {
    tasks.push(task)
}

function Remove(task) {
    const index = tasks.indexOf(task)
    if (index === -1) {
        return
    }
    tasks.splice(index, 1)
}

function Prioritize(task) {
    const index = tasks.indexOf(task)
    if (index === -1) {
        return
    }
    const oldTask = tasks[index]
    tasks.splice(index, 1)
    tasks.unshift(oldTask)
}
Add('task 2')
Add('task 3')
console.log(tasks)
Remove('task 4')
console.log(tasks)
Prioritize('task 4')
console.log(tasks)