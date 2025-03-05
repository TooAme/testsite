const myHeading = document.querySelector("h1");

// alert("al");
//
// document.querySelector("html").addEventListener("click", ()=> {
//     alert("别戳我，我怕疼！");
// });

const myImage = document.querySelector("img");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/1.png") {
        myImage.setAttribute("src", "images/3.png");
    } else {
        myImage.setAttribute("src", "images/1.png");
    }
};

const myButton = document.querySelector("button");

function setUserName() {
    let myName = prompt("输入你的学号");
    if(myName>=20211212000 && myName<=20211212200) {
        localStorage.setItem("name", myName);
        myHeading.textContent = `欢迎我们亲爱的神仆${myName}`;
    }else {
        alert("学号错误");
        myName = null;
        setUserName();
    }
}

if ((!localStorage.getItem("name"))) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = `欢迎我们亲爱的神仆${storedName}`;
}

myButton.onclick = function () {
    storedName = null;
    myName = null;
    setUserName();
  };

setUserName();