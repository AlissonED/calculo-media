
  function calcSum() {
    let num1 = document.getElementsByName("nt")[0].value;
    let num2 = document.getElementsByName("nq")[0].value;
    let num3 = document.getElementsByName("npart")[0].value;
    let num4 = document.getElementsByName("nprova")[0].value;
    let sum = ((Number(num1) + Number(num2) + Number(num3))/3)* 0.4 + (Number(num4)* 0.6);
    document.getElementsByName("media")[0].value = sum;

  if (sum>=6) {
    document.getElementsByName("ar")[0].value = "Aprovado";
    document.getElementById("ar").style.color = "green";
  } else {
    document.getElementsByName("ar")[0].value = "Reprovado";
    document.getElementById("ar").style.color = "red";
  }
}