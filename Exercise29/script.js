let divContent = document.getElementById('content');
let link = document.getElementById('id1');

link.addEventListener('click', function (event) {
    event.preventDefault();
    if (divContent.style.display === 'block') {
        return;
    }
    divContent.style.display = 'block';
});
