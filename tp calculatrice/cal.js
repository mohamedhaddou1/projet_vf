function addition() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var C = Number(a) + Number(b);
    document.getElementById("t3").value = C;
}

function soustraction() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var C = Number(a) - Number(b);
    document.getElementById("t3").value = C;
}

function division() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var C = Number(a) / Number(b);
    document.getElementById("t3").value = C;
}

function multiplication() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var C = Number(a) * Number(b);
    document.getElementById("t3").value = C;
}

function permute() {
    var v3 = "";
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    v3 = a;
    a = b;
    b = v3;

    t1.value = a;
    t2.value = b;
}

function parite() {
    var v;
    v = Number(document.getElementById("t1").value);
    if (v % 2 == 0)
        t4.value = "Pair";
    else
        t4.value = "Impair";
    
}
