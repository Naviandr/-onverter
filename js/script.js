function res() {
    let a = document.querySelector('.course').value
    let b = document.querySelector('.how-much').value
    let c = b / a
    let res = document.querySelector('.resalt')
    console.log(c)
    res.innerHTML = c
}