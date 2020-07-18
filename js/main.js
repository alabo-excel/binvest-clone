var dashboard = document.getElementById('dashboard');
var plans = document.getElementById('plans');
var users = document.getElementById('users');
var investment = document.getElementById('investments')
var payment = document.getElementById('payment')
var withdraw = document.getElementById('withdraw')
var setting = document.getElementById('settings')

var dataToggle = document.getElementById('aside')
var toggle = document.getElementById('toggle')
var toggler = document.getElementById('img')
var main = document.getElementById('main');



toggle.addEventListener('click', function(){
    if(dataToggle.style.display === 'none'){
        dataToggle.style.display = 'block'
        main.style.marginLeft = '18%'
    }else{
        dataToggle.style.display = 'none'
        main.style.marginLeft = '0%'
    }
    
})
toggler.addEventListener('click', function(){
    if(dataToggle.style.display === 'block'){
        dataToggle.style.display = 'none'
    }else{
        dataToggle.style.display = 'block'
    }
    
})
// document.getElementsByTagName('body').onclick(function () {
//     if(dataToggle.style.display === 'block'){
//         dataToggle.style.display = 'none'
//     }else{
//         dataToggle.style.display = 'block'
//     }
// })


var dashboardBtn = document.getElementById('dashboard-btn');
var planBtn = document.getElementById('plan-btn');
var userBtn = document.getElementById('users-btn');
var investmentBnt = document.getElementById('investment-btn')
var paymentBtn = document.getElementById('payment-btn')
var settingBtn = document.getElementById('setting-btn')
var withdrawBtn = document.getElementById('withdraw-btn')

planBtn.addEventListener('click', function (){
    dashboard.style.display = 'none'
    plans.style.display = 'block'
    users.style.display = 'none'
    investment.style.display = 'none'
    payment.style.display = 'none'
    withdraw.style.display = 'none'
    setting.style.display = 'none'
    logOut.style.display = 'none'
})

userBtn.addEventListener('click', function (){
    dashboard.style.display = 'none'
    users.style.display = 'block'
    plans.style.display = 'none'
    investment.style.display = 'none'
    payment.style.display = 'none'
    withdraw.style.display = 'none'
    setting.style.display = 'none'
    logOut.style.display = 'none'
})

investmentBnt.addEventListener('click', function (){
    dashboard.style.display = 'none'
    users.style.display = 'none'
    plans.style.display = 'none'
    investment.style.display = 'block'
    payment.style.display = 'none'
    withdraw.style.display = 'none'
    setting.style.display = 'none'
    logOut.style.display = 'none'
})

dashboardBtn.addEventListener('click', function (){
    dashboard.style.display = 'block'
    users.style.display = 'none'
    plans.style.display = 'none'
    investment.style.display = 'none'
    payment.style.display = 'none'
    withdraw.style.display = 'none'
    setting.style.display = 'none'
    logOut.style.display = 'none'
})

paymentBtn.addEventListener('click', function (){
    dashboard.style.display = 'none'
    users.style.display = 'none'
    plans.style.display = 'none'
    investment.style.display = 'none'
    payment.style.display = 'block'
    withdraw.style.display = 'none'
    setting.style.display = 'none'
    logOut.style.display = 'none'
})

withdrawBtn.addEventListener('click', function (){
    dashboard.style.display = 'none'
    users.style.display = 'none'
    plans.style.display = 'none'
    investment.style.display = 'none'
    payment.style.display = 'none'
    withdraw.style.display = 'block'
    setting.style.display = 'none'
    logOut.style.display = 'none'
})

settingBtn.addEventListener('click', function (){
    dashboard.style.display = 'none'
    users.style.display = 'none'
    plans.style.display = 'none'
    investment.style.display = 'none'
    payment.style.display = 'none'
    withdraw.style.display = 'none'
    setting.style.display = 'block'
    logOut.style.display = 'none'
})