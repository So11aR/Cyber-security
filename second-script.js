const arr_solve_tasks = Array(5).fill(false);

console.log("Закрой консоль, ответы ты здесь не найдёшь :)");

function check_end_game(){
    return arr_solve_tasks.every(task => task);
}

const inputSelectors = [
    {
        selector: "#task1",
        correctAnswer: "1642",
    },
    {
        selector: "#task2",
        correctAnswer: "20012017",
    },
    {
        selector: "#task3",
        correctAnswer: "роман кодабрин",
    },
    {
        selector: "#task4",
        correctAnswer: "1820",
    },
    {
        selector: "#task5",
        correctAnswer: "flag{c0d3br4_ctf}",
    },
];

inputSelectors.forEach((element, taskIndex) => {
    const input_answer = document.querySelector(element.selector);
    input_answer.addEventListener("click", () => {
        if (!arr_solve_tasks[taskIndex]) {
            const answer = document.getElementById(`input-task-${taskIndex + 1}`).value;
            if (answer.toLowerCase() === element.correctAnswer) {
                swal(
                    'Правильно!',
                    'Yaaaaaaaaaaaaaaay!',
                    'success'
                );
                arr_solve_tasks[taskIndex] = true;
                document.getElementById(`div-task-${taskIndex + 1}`).innerHTML = '<img src="images/correct.png" width="200px">';
                if(check_end_game()){
                    window.open('offer.html');
                }
            } else {
                swal(
                    'Ответ неправильный!',
                    'Попробуй ещё разок',
                    'error'
                );
            }
        }
        return;
    });
});