function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;

    let ans = p*(1+(r*t));
    res = document.getElementById("result");
    
    let y = parseInt(t)+parseInt(2020);

    res.innerHTML ="<br>If you deposit "+p+",<br>at an interest rate of "+r+"%.<br>You will recieve an amount of "+ans+".<br>in the year "+y+"<br>";
    
}

function edit()
{
    p = document.getElementById("noice");
    v = document.getElementById("rate").value;
    
    p.innerHTML = v+"%";
}