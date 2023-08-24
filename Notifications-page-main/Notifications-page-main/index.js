const allRead = document.getElementById('all-read');
unread = document.getElementsByClassName('unread')
allMessages = document.getElementsByClassName('message')
counter = document.getElementById('counter')
counter.innerHTML = unread.length - 1;
dots = document.getElementsByClassName('holder dot')
// console.log(dots.length);
// console.log(allMessages.length);


for (let i = 0; i < allMessages.length; i++) {
    allMessages[i].addEventListener("click", () => {
        allMessages[i].classList.forEach(cls => {
            if (cls == "unread")
                counter.innerHTML = unread.length - 2;
        });
        console.log('messgae clicked');
        allMessages[i].classList.remove("unread");
        dots[i].style.display = 'none';
    })
}

allRead.addEventListener('click', () => {
    for (let i = 0; i < allMessages.length; i++) {
        allMessages[i].classList.forEach(cls => {
            if (cls == "unread") {
                allMessages[i].classList.remove('unread');
                dots[i].style.display = 'none';
            }
        })
    }
    counter.innerHTML = 0;
})