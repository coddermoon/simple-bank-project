// add all necessary variable

const dipositBtn = document.getElementById('btn-deposit');
const dipositInput = document.getElementById('input-deposit');
const withdrawBtn = document.getElementById('btn-withdraw');
const withdrawInput = document.getElementById('input-withdraw');
const balance = document.getElementById('balance')
const diposit = document.getElementById('diposit')
const withdraw = document.getElementById('withdraw')

// all main balances
// diposit calc 

const dipositCalc = ()=>{
   

    const totalBalance = parseFloat(dipositInput.value)+parseFloat(balance.innerText)
    balance.innerText= totalBalance;
    diposit.innerText= parseFloat(dipositInput.value)+parseFloat(diposit.innerText)
   
    dipositInput.value = ''
}

const withdrawCalc = ()=>{
    const totalBalance = parseFloat(balance.innerText) - parseFloat(withdrawInput.value)
    balance.innerText= totalBalance;
    withdraw.innerText= parseFloat(withdrawInput.value) + parseFloat(withdraw.innerText)
    withdrawInput.value = ''
}
// add event listener
dipositBtn.addEventListener('click',dipositCalc)
withdrawBtn.addEventListener('click',withdrawCalc)