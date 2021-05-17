function f1(){
    document.getElementById('task1').style.textDecoration = "underline";
    document.getElementById('task1').style.fontStyle = "italic";
    document.getElementById('task1').style.fontWeight = "bolder";
} 
f1();

function f2(a, b) {
    return a + b;
}
document.getElementById("task2").innerHTML = f2(7, 6);

function f3(size){
    document.getElementById('task3').style.fontSize = size;
}
f3("35px");

function f4(w){
    t = "<table>";
    t += "<tr>";
    t += "<td>";
    t += "</td>";
    t += "<td>";
    t += "</td>";
    t += "</tr>";
    t += "<tr>";
    t += "<td>";
    t += "</td>";
    t += "<td>";
    t += "</td>";
    t += "</tr>";
    t += "</table>";
    document.getElementById('task4').style.width = w
    document.getElementById('task4').innerHTML = t;

}
f4("300px")


function f5(h){
    t = "<table>";
    t += "<tr>";
    t += "<td>";
    t += "</td>";
    t += "<td>";
    t += "</td>";
    t += "</tr>";
    t += "<tr>";
    t += "<td>";
    t += "</td>";
    t += "<td>";
    t += "</td>";
    t += "</tr>";
    t += "</table>";
    document.getElementById('task5').style.height = h;
    document.getElementById('task5').innerHTML = t;
    
}
f5("200px")

function f6(w, h){
    t = "<table>";
    t += "<tr>";
    t += "<td>";
    t += "</td>";
    t += "<td>";
    t += "</td>";
    t += "</tr>";
    t += "<tr>";
    t += "<td>";
    t += "</td>";
    t += "<td>";
    t += "</td>";
    t += "</tr>";
    t += "</table>";
    document.getElementById('task6').style.width = w
    document.getElementById('task6').style.height = h
    document.getElementById('task6').innerHTML = t;
}

f6("200px", '200px')


function f7(clr) {
    t = "<table>";
    t += "<tr>";
    t += "<td>";
    t += "</td>";
    t += "<td>";
    t += "</td>";
    t += "</tr>";
    t += "<tr>";
    t += "<td>";
    t += "</td>";
    t += "<td>";
    t += "</td>";
    t += "</tr>";
    t += "</table>";
    document.getElementById('task7').style.backgroundColor = clr
    document.getElementById('task7').innerHTML = t;   
}
f7("red")

function f8(bsize) {
    t = "<table>";
    t += "<tr>";
    t += "<td>";
    t += "</td>";
    t += "<td>";
    t += "</td>";
    t += "</tr>";
    t += "<tr>";
    t += "<td>";
    t += "</td>";
    t += "<td>";
    t += "</td>";
    t += "</tr>";
    t += "</table>";
    document.getElementById('task8').style.border = bsize
    document.getElementById('task8').innerHTML = t;   
}
f8("solid 5px")

function f9(w, h, bgclr, bsize){
    t = "<table>";
    t += "<tr>";
    t += "<td>";
    t += "</td>";
    t += "<td>";
    t += "</td>";
    t += "</tr>";
    t += "<tr>";
    t += "<td>";
    t += "</td>";
    t += "<td>";
    t += "</td>";
    t += "</tr>";
    t += "</table>";
    document.getElementById('task9').style.width = w
    document.getElementById('task9').style.height = h
    document.getElementById('task9').style.backgroundColor = bgclr
    document.getElementById('task9').style.border = bsize
    document.getElementById('task9').innerHTML = t;
}
f9("400px", "400px", "red", "5px")


function f11(){
    var text = ""
    for(var i = 1; i<=10; i++){
        text += i + "<br>"
    }
    document.getElementById('task11').innerHTML = text
}
f11()


function f12(n){
    text = ""
    for(var i = 0; i<=n; i++){
        text += i + "<br>"
    }
    document.getElementById('task12').innerHTML = text
}

f12(12)

function f13(m, n){
    text = ""
    for (var i=m; i<=n; i++){
        text += i + '<br>'
    }
    document.getElementById('task13').innerHTML = text
}

f13(4, 13)

function f14(m, n){
    text = ""
    if (m > n){
        document.getElementById('task141').innerHTML = "m > n"
    }else{
    for (var i=m; i<=n; i++){
        text += i + '<br>'
    }
    document.getElementById('task142').innerHTML = text
}
}

f14(5, 2)
f14(2, 5)


function f15(row, col){
    for(var r=0;r<row;r++){
        var x=document.getElementById('table15').insertRow(r)
        for(var c=0; c<col; c++){
            var y=x.insertCell(c)
            y.innerHTML="Row-"+(r+1)+" Column-"+(c+1)
        }
    }
}

f15(3,3)

function f16(row, col){
    for(var r=0;r<row;r++){
        var x=document.getElementById('table16').insertRow(r)
        for(var c=0; c<col; c++){
            var y=x.insertCell(c)
            y.innerHTML="Row-"+(r+1)+" Column-"+(c+1)
        }
    }
}

f16(5,5)


function f17(row, col, w, h, bgclr, bsize){
    for(var r=0;r<row;r++){
        var x=document.getElementById('table17').insertRow(r)
        for(var c=0; c<col; c++){
            var y=x.insertCell(c)
            y.innerHTML="Row-"+(r+1)+" Column-"+(c+1)
        }
    }

    document.getElementById('table17').style.width = w
    document.getElementById('table17').style.height = h
    document.getElementById('table17').style.backgroundColor = bgclr
    document.getElementById('table17').style.border = bsize
}
f17(5,5,"800px", "800px", "red", "5px")

