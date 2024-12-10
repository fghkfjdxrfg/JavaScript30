const timeleft = document.querySelector('.display__time-left');
const timeend = document.querySelector('.display__end-time');
const button = document.querySelectorAll('.timer__button');
let countid;
const form = document.querySelector('#custom');

function timer(seconds){
    clearInterval(countid)
const datenow = Date.now();
const then = datenow+seconds*1000;
displayTimeLeft(seconds);
displayEndTime(then)

countid = setInterval(() => {
    const timeleft = Math.round((then - Date.now())/1000);
    if(timeleft<0){
        clearInterval(countid);
        return;//??不返回不行嘛
    }
    displayTimeLeft(timeleft);
}, 1000);

}

function displayTimeLeft(time){
    const min = Math.floor(time/60);
    const sec =time%60;
    timeleft.textContent = `${min}:${sec<10?'0':''}${sec}`;
}
function displayEndTime(time){
    const date = new Date(time);
    const hour = date.getHours();
    const min = date.getMinutes();
    timeend.textContent = `go back at ${hour}:${min<10?'0':''}${min}`
}

function clicktime(){
    //dataset 是一个 DOM 属性，它允许访问元素的自定义数据属性（即以 data- 开头的属性）。例如，如果有一个元素 <div data-time="10s"></div>，那么 element.dataset.time 将返回字符串 "10s"。
    timer(this.dataset.time);
}

function submittime(e){
       
    e.preventDefault();
    //当用户点击表单中的提交按钮时，默认情况下浏览器会提交表单并刷新页面。如果在点击事件的处理函数中调用 e.preventDefault();，则可以阻止这个默认行为，让你可以在提交前执行一些自定义的逻辑，比如验证输入。
    const mins = this.minutes.value;
    // console.log(mins);
    timer(mins * 60);
    this.reset();
    //reset() 方法用于重置表单中所有输入元素的值为它们的默认值。
}

//按钮
button.forEach(button =>{
    button.addEventListener('click',clicktime);
})

document.customForm.addEventListener('submit',submittime);



