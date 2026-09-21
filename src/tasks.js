// CampusEats task list
const tasks = [
    { title: "Design the menu screen", dueDate: "2026-09-25" },
    { title: "Build the order API", dueDate: "2026-09-30" },
    { title: "Add user login", dueDate: "2026-10-04" },
];

console.log(`CampusEats has ${tasks.length} open tasks:`);

tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.title} - due ${task.dueDate}`);
});
