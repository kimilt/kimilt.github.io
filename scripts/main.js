let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/stars-flags.jpg') {
      myImage.setAttribute('src', 'images/giant-flag.jpg');
    } else {
      myImage.setAttribute('src', 'images/stars-flags.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = '星星与旗帜，' + myName;
    }
  }
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '星星与旗帜，' + storedName;
}
myButton.onclick = function() {
    setUserName();
 }