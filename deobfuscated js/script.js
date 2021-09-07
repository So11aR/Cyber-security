var key = getRandomInt(1000,100000);
var rand_question = getRandomInt(0,4);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function signin(){
    var password = document.getElementById("password").value;

	if (password == key){
        var frame = window.open('second.html');
	} 
	else if (password == '') {
		alert( 'Вы что-то забыли ввести' );
	} 
	else {
		alert( 'Неверный логин или пароль' );
	}
}

var input_password = document.querySelector("#password");
input_password.addEventListener("keyup", handler);
function handler() {
  if(event.code == "Enter"){
    signin();
  };
}

function forgot(){
    question = ['Любимый цвет?','Любимая машина?','Любимое место отдыха?','На какой улице живете?','В каком городе была ваша первая работа?'];
    answer = ['голубой','лимузин','бали','аптекарский переулок','новосибирск'];
    var rand = rand_question;
    var user_answer = prompt(question[rand], '');
    user_answer = user_answer.toLowerCase();
	if (user_answer == answer[rand]){
		alert('Код доступа: ' + key);
	} 
	else if (user_answer == null) {
		alert( 'Вы не ввели ответ на вопрос' );
	} 
	else {
		alert( 'Неправильный ответ' );
	}
}
