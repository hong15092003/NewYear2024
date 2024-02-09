function displayContent() {
    var content = document.getElementById('content')
    var i = 0
    setInterval(() => {
        if (i <= 3) {
            content.children[i].classList.remove('none')
            printEachCharacter(content.children[i].children[0].textContent, content.children[i].children[0].firstChild)
        }
        i++
    }, 3000)


}
displayContent()


function printEachCharacter(str, element) {
    element.textContent = "";
    for (let i = 0; i < str.length; i++) {
        setTimeout(function () {
            element.textContent += str[i];
        }, i * 50); // Thay đổi thời gian chờ ở đây để điều chỉnh tốc độ hiển thị
    }
}

