arr_solve_tasks = [false, false, false, false, false];

console.log("Закрой консоль, ответы ты здесь не найдёшь :)");

function check_end_game(){
    for (var i=0; i < arr_solve_tasks.length; i++) {
        if(arr_solve_tasks[i] == false){
            return false;
        }
    }; 
    return true;
}

var input_answer = document.querySelector("#task1");
input_answer.addEventListener("click", handler1);
function handler1() {
    if(!arr_solve_tasks[0]){
        let answer = document.getElementById("input-task-1").value;
        if(answer == "1642"){
            swal(
                'Правильно!',
                'Yaaaaaaaaaaaaaaay!',
                'success'
              );
            arr_solve_tasks[0] = true;
            document.getElementById("div-task-1").innerHTML = '<img src="images/correct.png" width="200px">';
            if(check_end_game()){
                window.open('offer.html');
            }
        }
        else{
            swal(
                'Ответ неправильный!',
                'Попробуй ещё разок',
                'error'
              );
        }
    }
    else{
        return;
    }
}

var input_answer2 = document.querySelector("#task2");
input_answer2.addEventListener("click", handler2);
function handler2() {
    if(!arr_solve_tasks[1]){
        let answer = document.getElementById("input-task-2").value;
        if(answer == "20012017"){
            swal(
                'Правильно!',
                'Yaaaaaaaaaaaaaaay!',
                'success'
              );
            arr_solve_tasks[1] = true;
            document.getElementById("div-task-2").innerHTML = '<img src="images/correct.png" width="200px">';
            if(check_end_game()){
                window.open('offer.html');
            }
        }
        else{
            swal(
                'Ответ неправильный!',
                'Попробуй ещё разок',
                'error'
              );
        }
    }
    else{
        return;
    }
}

var input_answer3 = document.querySelector("#task3");
input_answer3.addEventListener("click", handler3);
function handler3() {
    if(!arr_solve_tasks[2]){
        let answer = document.getElementById("input-task-3").value;
        answer = answer.toLowerCase();
        if(answer == "роман кодабрин"){
            swal(
                'Правильно!',
                'Yaaaaaaaaaaaaaaay!',
                'success'
              );
            arr_solve_tasks[2] = true;
            document.getElementById("div-task-3").innerHTML = '<img src="images/correct.png" width="200px">';
            if(check_end_game()){
                window.open('offer.html');
            }
        }
        else{
            swal(
                'Ответ неправильный!',
                'Попробуй ещё разок',
                'error'
              );
        }
    }
    else{
        return;
    }
}

var input_answer4 = document.querySelector("#task4");
input_answer4.addEventListener("click", handler4);
function handler4() {
    if(!arr_solve_tasks[3]){
        let answer = document.getElementById("input-task-4").value;
        if(answer == "1820"){
            swal(
                'Правильно!',
                'Yaaaaaaaaaaaaaaay!',
                'success'
              );
            arr_solve_tasks[3] = true;
            document.getElementById("div-task-4").innerHTML = '<img src="images/correct.png" width="200px">';
            if(check_end_game()){
                window.open('offer.html');
            }
        }
        else{
            swal(
                'Ответ неправильный!',
                'Попробуй ещё разок',
                'error'
              );
        }
    }
    else{
        return;
    }
}

var input_answer5 = document.querySelector("#task5");
input_answer5.addEventListener("click", handler5);
function handler5() {
    if(!arr_solve_tasks[4]){
        let answer = document.getElementById("input-task-5").value;
        if(answer == "flag{c0d3bR4_ctf}"){
            swal(
                'Правильно!',
                'Yaaaaaaaaaaaaaaay!',
                'success'
              );
            arr_solve_tasks[4] = true;
            document.getElementById("div-task-5").innerHTML = '<img src="images/correct.png" width="200px">';
            if(check_end_game()){
                window.open('offer.html');
            }
        }
        else{
            swal(
                'Ответ неправильный!',
                'Попробуй ещё разок',
                'error'
              );
        }
    }
    else{
        return;
    }
}