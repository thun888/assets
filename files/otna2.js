//Otn Analytics
//version 0.0.1
var otna_domain = window.location.host;
var otna_pathname = window.location.pathname;
var url = "https://tongji.thun888.xyz/index.php";
fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ domain: otna_domain, pathname: otna_pathname })
  }).then(function(response) {
  return response.json();
})
.then(function(myJson) {
    otna_res = myJson;
    document.getElementById("otna_value_page_pv").innerHTML=otna_res.pagepv;
    document.getElementById("otna_value_site_pv").innerHTML=otna_res.allpv;
  })
