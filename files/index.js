var drawer = new mdui.Drawer('#drawer');
document.getElementById('toggle').addEventListener('click', function () {
    drawer.toggle();
  });
  document.getElementById('clean').addEventListener('click', function () {
    document.getElementById('webid').value = '';
    document.getElementById('pagekey').value = '';
  });
  document.getElementById('send').addEventListener('click', function () {
    var webid = document.getElementById("webid").value;
    var pagekey = document.getElementById("pagekey").value;
    window.location.href = "https://notes.thun888.xyz/notes?webid=" + webid + "&pagekey=" + pagekey;
  });