function addIterm(data){

    var container = data.parentNode;
    var blankContainer = document.getElementById('blankContainer');
    var cloneContainer = container.cloneNode(true);

    var h2Tags = cloneContainer.getElementsByTagName('h4');
    var heading1 = h2Tags[0].textContent;
    var heading2 = h2Tags[1].textContent;

    blankContainer.innerHTML += ` <li class="nav-item orderHistory">
    <h6>${heading1}</h6>
    <h6>${heading2}</h6>
  </li>`




}