const key = getRandomInt(1000,100000);
const rand_question = getRandomInt(0,4);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function signin(){
    const password = document.getElementById("password").value;

	if (Number(password) === key){
        window.open('second.html');
	} 
	else if (password === '') {
		alert( 'Вы что-то забыли ввести' );
	} 
	else {
		alert( 'Неверный логин или пароль' );
	}
}

const input_password = document.querySelector("#password");
input_password.addEventListener("keyup", handler);
function handler(event) {
  if(event.code === "Enter"){
    signin();
  };
}

function forgot(){
    const question = ['Любимый цвет?','Любимая машина?','Любимое место отдыха?','На какой улице живете?','В каком городе была ваша первая работа?'];
    const answer = ['голубой','лимузин','бали','аптекарский переулок','новосибирск'];
    const rand = rand_question;
    const user_answer = prompt(question[rand], '').toLowerCase();
	if (user_answer === answer[rand]){
		alert('Код доступа: ' + key);
	} 
	else if (user_answer == null) {
		alert( 'Вы не ввели ответ на вопрос' );
	} 
	else {
		alert( 'Неправильный ответ' );
	}
}
