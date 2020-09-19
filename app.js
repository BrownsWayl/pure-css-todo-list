let submit = document.querySelector('#btn');
let txt = document.querySelector('input[type="text"]');
let p = document.querySelector('p');
let btnshow = document.querySelector('#btn-show');
const content = document.querySelector('.content');
const edit = document.querySelector('.edit');
const del = document.querySelector('.del');
let editNode = '';
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (txt.value) {
        btnshow.classList.contains('active') && btnshow.classList.remove('active');
        if (editNode) {
            submit.value = 'submit';
            editNode.textContent = txt.value;
            p.classList.add('ok');
            p.textContent = 'value changed';
            setTimeout(() => {
                p.classList.remove('ok');
            }, 1000);
            editNode = '';
            txt.value = '';
            return;
        }
        p.classList.add('ok');
        p.textContent = 'item added to the list';
        setTimeout(() => {
            p.classList.remove('ok');
        }, 1000);
        const htm = `<span>${txt.value}</span>
        <div class='btn-list'>
            <button onclick="editContent(event)" class='btn'><i class="fas fa-edit"></i></button>
            <button onclick="delList(event)" class='btn'><i class="fas fa-trash-alt"></i></button>
        </div>`
        const art = document.createElement('article');
        art.innerHTML = htm;
        content.appendChild(art);
        txt.value = '';
    } else {
        p.classList.add('error');
        p.textContent = 'please enter value';
        setTimeout(() => {
            p.classList.remove('error');
        }, 1000);
    }
});

btnshow.addEventListener('click', (e) => {
    content.innerHTML = '';
    e.target.classList.add('active');
    p.classList.add('warning');
    p.textContent = 'empty list';
    setTimeout(() => {
        p.classList.remove('warning');
    }, 1000);
})

function delList(e) {
    let parent = e.target.parentNode.parentNode.parentNode.parentNode;
    let child = e.target.parentNode.parentNode.parentNode;
    parent.removeChild(child);
    if (content.children.length === 0) {
        !btnshow.classList.contains('active') && btnshow.classList.add('active');
    }
    p.classList.add('ok');
    p.textContent = 'item removed';
    setTimeout(() => {
        p.classList.remove('ok');
    }, 1000);
}

function editContent(e) {
    editNode = e.target.parentNode.parentNode.parentNode.firstElementChild;
    submit.value = 'edit';
    txt.value = editNode.textContent;
    console.log(e);
}