function addIterm(data){

    var container = data.parentNode;
    var  buttonValue = container.getElementsByTagName('button');
    console.log(buttonValue)
    var buttonText = buttonValue.innerHTML;
    console.log(buttonText)


    // if(buttonText == 'Add'){
    //   buttonValue.innerHTML = 'Added';

    // }
    // else{

    // }

    var blankContainer = document.getElementById('blankContainer');
    var cloneContainer = container.cloneNode(true);


    var h2Tags = cloneContainer.getElementsByTagName('h4');
    var heading1 = h2Tags[0].textContent;
    var newHeading = ''+ heading1.slice(2);
    var heading2 = h2Tags[1].textContent;

    blankContainer.innerHTML += ` <li class="nav-item orderHistory">
    <h6>${newHeading}</h6>
    <h6>${heading2}</h6>
  </li>`;
  var totalValue = heading2.replace("Rs.","")
  var intValue = parseInt(totalValue)

  var total = document.getElementById('myTotal')
  var actulaTotal = total.textContent;
  var intActTotal = parseInt(actulaTotal)
  intActTotal += intValue
  


total.innerHTML = intActTotal





}

function updateTotal(valueT){
  var total = document.getElementById('myTotal')
  total.innerHTML = valueT

}