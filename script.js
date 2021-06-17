function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;

    if(parseInt(p)<=0 || p=="")
    {
        alert('Please enter a positive number');
        document.getElementById("principal").focus();
        return;
    }
        
    let ans = p*(1+(r*t));
    res = document.getElementById("result");
    
    let y = parseInt(t)+parseInt(2020);

    res.innerHTML ="<br>If you deposit <mark>"+p+"</mark>,<br>at an interest rate of <mark>"+r+"%</mark>.<br>You will recieve an amount of <mark>"+ans+"</mark>.<br>in the year <mark>"+y+"</mark><br>";
    
}

function edit()
{
    p = document.getElementById("noice");
    v = document.getElementById("rate").value;
    
    p.innerHTML = v+"%";
}
