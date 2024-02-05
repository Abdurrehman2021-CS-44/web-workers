let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
    document.querySelector("#output").innerHTML = "";
    const workerObj = new Worker('worker.js')
    workerObj.postMessage("Start Working")
    workerObj.onmessage = function(e) {
        document.querySelector("#output").innerHTML = e.data;
    }
});

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
    document.querySelector("#output").innerHTML = "";
    let result = 0;
    for (let i = 0; i < 10000000000; i++) {
        result += i;
    }
    document.querySelector("#output").innerHTML = result;
});

let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    document.querySelector('#hi').innerHTML += "HI !!";
});