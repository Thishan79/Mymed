function editTariffTable() {
  /* Write code to Edit Tariff */
  let myObj1 = GetData(); //retrive data from localstorage
  let unitBreak = myObj1[0];
  let unitCharge = myObj1[1];
  let fixedCharge = myObj1[2];

  var myTableObj = document.getElementById("myTable1");
  var myTable1Lenth = myTableObj.rows.length; // Existing table length
  var noOfRows = unitCharge.length;  // Length of the table to be created
  
  // Delete Existing table Data rows (Without Heading row)
  for (let i = 1; i < myTable1Lenth; i++)  myTableObj.deleteRow(1); 
  
  // Insert deleted row and cells
  var myTableRow = []; // create empty array to add elements of "myTr"
  for (let i = 1; i <= noOfRows; i++) myTableRow.push("myTr"+i);
  // setup an array for myTableRow = ["myTr1", "myTr2", etc . . .];
  // These are used to set Row id=myTr1 etc.
 
  for (let i = 0; i < noOfRows; i++) {
    var y = document.createElement("TR");
    y.setAttribute("id", myTableRow[i]);
    myTableObj.appendChild(y);
    var z = document.createElement("TD");
    var t = document.createTextNode("--");
    z.appendChild(t);
    document.getElementById(myTableRow[i]).appendChild(z);
    var z = document.createElement("TD");
    var t = document.createTextNode("--");
    z.appendChild(t);
    document.getElementById(myTableRow[i]).appendChild(z);
    var z = document.createElement("TD");
    var t = document.createTextNode("--");
    z.appendChild(t);
    document.getElementById(myTableRow[i]).appendChild(z);
  }

  myTableObj.rows[1].cells[0].innerHTML = "0 - " + unitBreak[0];
  for (let i = 2; i < noOfRows; i++) {
    myTableObj.rows[i].cells[0].innerHTML = unitBreak[i-2] + 1 + " - " + unitBreak[i-1];
    myTableObj.rows[i-1].cells[1].innerHTML = unitCharge[i-2];
    myTableObj.rows[i-1].cells[2].innerHTML = fixedCharge[i-2];
  }
  myTableObj.rows[noOfRows].cells[0].innerHTML = "Over " + unitBreak[noOfRows-2];
  myTableObj.rows[noOfRows-1].cells[1].innerHTML = unitCharge[noOfRows-2];
  myTableObj.rows[noOfRows].cells[1].innerHTML = unitCharge[noOfRows-1];
  myTableObj.rows[noOfRows-1].cells[2].innerHTML = fixedCharge[noOfRows-2];
  myTableObj.rows[noOfRows].cells[2].innerHTML = fixedCharge[noOfRows-1];

  document.getElementById("testData").innerHTML = myTable1Lenth ;
}

/* This function is auto load with <body onload> */
function displayTariffTable() {
    let unitBreak = [60,90,120,180];
    let unitCharge = [38,42,59,59,89];
    let fixedCharge = [480,1180,1770,2360];
    /* document.getElementById("demo").style.color = "red";  */
    allHeadings = document.getElementsByClassName("mainHeading");
    allHeadings[0].style.color = "lightgreen";
    allHeadings[1].style.backgroundColor = "blue";
    allHeadings[1].style.border = "5px solid darkred";
    editTariffTable()
}

function GetData() {
        
  //var text, obj;

  //Retrieving data:
  //text = localStorage.getItem("testJSON");
  //obj = JSON.parse(text);
  /* let unitBreak = obj[0];
  let unitCharge = obj[1];
  let fixedCharge = obj[2];

  document.getElementById("testData").innerHTML = text + "<br><br>" + unitBreak +"<br>"+unitCharge+"<br>"+fixedCharge;*/

  return JSON.parse(localStorage.getItem("testJSON"));
}

function StoreData() {    //store default data to json file localStorage.setItem
/*  Category 1  
    let unitBreak = [30,60];
    let unitCharge = [12,30];
    let fixedCharge = [180,360];*/
/*  Category 2  
    let unitBreak = [60,90,120,180];
    let unitCharge = [38,42,59,59,89];
    let fixedCharge = [480,1180,1770,2360];*/
/* Checking Category */
  let unitBreak = [60,90,120,180];
  let unitCharge = [38,42,59,59,89];
  let fixedCharge = [0,480,1180,1770,2360];

  var myObj, myJSON;

  //Storing data:
  myObj = [unitBreak, unitCharge, fixedCharge];
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("testJSON", myJSON);
  document.getElementById("testData").innerHTML = "Data Stored in Local Storage" + myObj;
}


function calculateTariff() {
  
  var x = document.getElementById("myNumber").value;
  let myObj1 = GetData(); //retrive data from localstorage
  let unitBreak = myObj1[0]; unitBreak.unshift(0); //add 0 to the first element
  let unitCharge = myObj1[1];
  let fixedCharge = myObj1[2];
  var y ; 
  let p=0;
  let noOfCycles=0;
  var cost=0;

  var amt1 = [];
  for (let i = 0; i < unitBreak.length-1; i++) amt1[i] = (unitBreak[i+1] - unitBreak[i]) * unitCharge[i];
  for (let i = 0; i < unitBreak.length; i++) if (x>unitBreak[i]) noOfCycles++;
  var extraUnits = x - unitBreak[noOfCycles-1];
  cost = extraUnits * unitCharge[noOfCycles-1];
  for (let i = 0; i < noOfCycles - 1; i++) cost=cost+amt1[i];
  cost = cost + fixedCharge[noOfCycles-1];

  let text1=document.getElementById("demo").innerHTML;
  if (x>0) { document.getElementById("demo").innerHTML = text1 +" is  Rs. "+ cost + "/=" }
    else { document.getElementById("demo").innerHTML = "Value should be Graterthan 0"; }
  document.getElementById(calc1.id).disabled = true;
  document.getElementById(myNumber.id).disabled = true;
    
   document.getElementById("testData").innerHTML = amt1 + " " + amt1.reduce((accumulator, currentValue) => {
     return accumulator + currentValue
  },0);
}


function resetTariffCalc() {
  document.getElementById(calc1.id).disabled = false;
  document.getElementById(myNumber.id).disabled = false;
  document.getElementById("demo").innerHTML = "Your Bill";
}


/* myInterval = setInterval(blinkButton,2000);
function blinkButton() {
  document.getElementById("StoreData").style.backgroundColor = "green";
  clearInterval(myInterval);
  
  
}*/



function myFunction2() {
  document.getElementById("button2").style.color = "green";
}