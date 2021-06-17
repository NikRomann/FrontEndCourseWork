var box = document.getElementById("box");

function up(){
    box.style.top = (parseInt(box.style.top) - 30) + 'px';
}

function down(){
    box.style.top = (parseInt(box.style.top) + 30) + 'px';
}

function left(){
    box.style.left = (parseInt(box.style.left) - 30) + 'px';
}

function right(){
    box.style.left = (parseInt(box.style.left) + 30) + 'px';
}

function upleft(){
    box.style.top = (parseInt(box.style.top) - 30) + 'px';
    box.style.left = (parseInt(box.style.left) - 30) + 'px';
}

function upright(){
    box.style.top = (parseInt(box.style.top) -30) + 'px';
    box.style.left = (parseInt(box.style.left) + 30) + 'px';
}

function downleft(){
    box.style.top = (parseInt(box.style.top) + 30) + 'px';
    box.style.left = (parseInt(box.style.left) - 30) + 'px';
}

function downright(){
    box.style.top = (parseInt(box.style.top) + 30) + 'px';
    box.style.left = (parseInt(box.style.left) + 30) + 'px';
}

function growright(){
    box.style.width = (box.offsetWidth + 30) + 'px';
}

