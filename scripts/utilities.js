function getInputValueByID(id) {
  const funcValue = document.getElementById(id).value;
  const convertedfuncValue = parseFloat(funcValue);
  return convertedfuncValue;
}

function getInnerTextByID(id) {
  const funcValue = document.getElementById(id).innerText;
  const convertedfuncValue = parseFloat(funcValue);
  return convertedfuncValue;
}

function setInnerTextByIDandValue(id, value) {
  document.getElementById(id).innerText = value;
}
