// declear all variable 
const loginBtn = document.getElementById('login');
const inputEmail = document.getElementById('email')
const inputPass = document.getElementById('password')

const login =(event)=>{
  event.preventDefault();

  const email = inputEmail.value
  const pass = inputPass.value
  //veryfied email and password 

  if (email === 'bap@sontan.com' && pass === 'fokinni') {
    console.log('sussessfully loged in');
  }else{
    console.log('try again')
  }


}





// add event listener 

loginBtn.addEventListener('click',login)