function addRow() { 
  var rowlength = document.getElementById("order").rows.length;
  var order = document.getElementById("order").insertRow(rowlength - 1);
  order.id = rowlength - 1;
  var tempSum=parseInt(document.getElementById("sum").innerHTML)
  var cel1 = order.insertCell(0).innerHTML = "商品";
  var cel2 = order.insertCell(1).innerHTML = "1";
  var cel3 = order.insertCell(2).innerHTML = "5";
  var cel4 = order.insertCell(3).innerHTML = "<input type=\"button\"value=\"删除\" onclick=\"delRow('" + (rowlength - 1) + "')\"/>" 
  document.getElementById("sum").innerHTML=tempSum+5;
}
function delRow(qwe) {
  var ewq = document.getElementById(qwe).rowIndex;
  var tempSum=parseInt(document.getElementById("sum").innerHTML)
  document.getElementById("order").deleteRow(ewq);
  document.getElementById("sum").innerHTML=tempSum-5;

}


