//Otn Analytics
//version 0.0.2
var otna_domain = window.location.host;
var otna_pathname = window.location.pathname;
var otna_url = "https://tongji.thun888.xyz:456/index.php";
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
        if (otna_res.status == "200") {
            if (document.getElementById("otna_value_page_pv")) {
                document.getElementById("otna_value_page_pv").innerHTML = otna_res.pagepv;
            }
            if (document.getElementById("otna_value_site_pv")) {
                document.getElementById("otna_value_site_pv").innerHTML = otna_res.allpv;
            }
            if (document.getElementById("otna_value_site_uv")) {
                document.getElementById("otna_value_site_uv").innerHTML = otna_res.alluv;
            }
            if (document.getElementById("otna_site_online")) {
                document.getElementById("otna_site_online").innerHTML = otna_res.online;
            }
            if (document.getElementById("otna_delay")) {
                document.getElementById("otna_delay").innerHTML = abs(otna_nowtime - otna_res.delay) + "ms";
            }
        } else {
            console.log("Otn Analytics Error");
            console.log(otna_res);
        }
    })
