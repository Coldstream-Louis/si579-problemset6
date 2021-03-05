import * as moment from 'moment';

const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;

addTask("Create this page", 1614376800000);

function addTask(description, dueTime) {
    const taskList = document.getElementById("task_list");

    const dueTimeNode = document.createElement("span");
    dueTimeNode.setAttribute("class", "due");
    dueTimeNode.textContent = moment(dueTime).endOf('hour').fromNow();

    const newTask = document.createElement("li");
    newTask.append(description, dueTimeNode)
    taskList.append(newTask);
}

const addTaskButton = document.getElementById("add_task");

addTaskButton.addEventListener("click", () => {
    const descriptionInput = document.getElementById("task_description_input");
    const dueDateInput     = document.getElementById("duedate_input");
    const dueTimeInput     = document.getElementById("duetime_input");

    const description = descriptionInput.value;
    const dueDate = dueDateInput.valueAsNumber;
    const dueTime = dueTimeInput.valueAsNumber;
    const fullDueDate = dueDate + dueTime + timezoneOffset;

    addTask(description, fullDueDate);

    descriptionInput.value = '';
});