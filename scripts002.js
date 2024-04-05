/* to display a tool tip on the screen */
/* .tooltip {
  position relative;
  display: inline-block;
  border-bottom: 70px dotted black;
}*/
  
.tooltip .tooltiptext {
  visibility: hidden;
  width: 200px;
  background-color: white;
  color: black;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}
  
.tooltip:hover .tooltiptext {
  visibility: visible;
}
/* --------------------------------------------*/
