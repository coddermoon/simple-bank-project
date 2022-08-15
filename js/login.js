// declear all variable 
const loginBtn = document.getElementById('login');
const inputEmail = document.getElementById('email')
const inputPass = document.getElementById('password')
const massage = document.getElementById('massage')

const login =(event)=>{
  event.preventDefault();

  const email = inputEmail.value
  const pass = inputPass.value
  //veryfied email and password 

  if (email === 'bap@sontan.com' && pass === 'fokinni') {
    showMassage('successfully added', 'success')
  }else{
    showMassage('invalid email & password try again', 'danger')
  }


}

// show massage function

// show massage function

const showMassage = (text, status) => {
    massage.textContent = text
    massage.classList.add(`bg-${status}`)
    setTimeout(() => {
      massage.textContent = ''
      massage.classList.remove(`bg-${status}`)
    }, 1000)
  }



// add event listener 

loginBtn.addEventListener('click',login)