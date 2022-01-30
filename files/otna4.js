//Otn Analytics
//version 0.0.3
var otna_domain = window.location.host;
var otna_pathname = window.location.pathname;
var otna_url = "https://otna.thun888.xyz/index.php";
var otna_nowtime = new Date().getTime()
fetch(otna_url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: otna_domain, pathname: otna_pathname })
    }).then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        otna_res = myJson;
        var otna_delay = new Date().getTime() - otna_nowtime;
        if (otna_res.status == "200") {
            otna_write(otna_res.pagepv,otna_res.allpv,otna_res.alluv,otna_res.online,otna_delay + "ms");
        } else {
            otna_write("Error","Error","Error","Error","Error");
            console.log("Otn Analytics Error");
            console.log(otna_res);
        }
    })

function otna_write(a,b,c,d,e){
    if (document.getElementById("otna_value_page_pv")) {
        document.getElementById("otna_value_page_pv").innerHTML = a;
    }
    if (document.getElementById("otna_value_site_pv")) {
        document.getElementById("otna_value_site_pv").innerHTML = b;
    }
    if (document.getElementById("otna_value_site_uv")) {
        document.getElementById("otna_value_site_uv").innerHTML = c;
    }
    if (document.getElementById("otna_site_online")) {
        document.getElementById("otna_site_online").innerHTML = d;
    }
    if (document.getElementById("otna_delay")) {
        document.getElementById("otna_delay").innerHTML = e;
    }
}
