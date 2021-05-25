let a = document.getElementById('accountUser');
let mode = false;

function showAccount() {
    if (!mode) {
        a.style.display = 'block';
        mode = !mode;
    } else {
        a.style.display = 'none';
        mode = !mode;
    }
}
document.getElementById('fa').addEventListener('click', closeAccount);

function closeAccount() {
    document.getElementById('accountUser').style.display = 'none';
    mode = !mode;
}