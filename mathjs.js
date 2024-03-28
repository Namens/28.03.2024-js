// 11
var op;
  function func() {
    var result;
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    switch (op) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2) {
          result = num1 / num2;
        } else {
          result = 'бесконечность';
        }
        break;
      default:
        result = 'выберите операцию';
    }

    document.getElementById("result").innerHTML = result;
  }


//   12
function funcs() {
    var result1;
    var num3 = Number(document.getElementById("num3").value);

    if (num3 % 2 === 0){
        result1 = 'Четное';
    } else{
        result1 = 'Нечетное';
    }
    document.getElementById("result1").innerHTML = result1;
}

// 13
var val
function funcval() {
  var result2;
  var num4 = Number(document.getElementById("num4").value);
  switch (val) {
    case 'F':
      result2 = num4 / 116.93;
      break;
    case 'D':
      result2 = num4 / 92.59;
      break;
    case 'E':
      result2 = num4 / 100.27;
      break;
    
    default:
      result2 = 'выберите операцию';
  }

  document.getElementById("result2").innerHTML = result2;
}


// 14
function funcprice() {
  var result3;
  var num5 = Number(document.getElementById("num5").value);
  var num6 = Number(document.getElementById("num6").value);

  result3 = num5 * num6
  
  document.getElementById("result3").innerHTML = result3;
}

// 15
function funcquad() {
  var result4;
  var result5;
  var counter;
  var num7 = Number(document.getElementById("num7").value);
  var num8 = Number(document.getElementById("num8").value);
  var num9 = Number(document.getElementById("num9").value);

  counter = (num8 * num8) - (4 * num7 * num9)
  result4 = (-num8 + (counter**(1/2))) / (2 * num7);
  result5 = (-num8 - (counter**(1/2))) / (2 * num7);
  
  document.getElementById("result4").innerHTML = result4;
  document.getElementById("result5").innerHTML = result5;
}

// 16
function funcsred() {
  var result6;
  var num10 = Number(document.getElementById("num10").value);
  var num11 = Number(document.getElementById("num11").value);
  var num12 = Number(document.getElementById("num12").value);

  result6 = (num10 + num11 + num12) / 3
  
  document.getElementById("result6").innerHTML = result6;

}

// 17
function funcsimple() {
  var result7;
  var num13 = Number(document.getElementById("num13").value);
  var snumber_sqrt = num13 ** (1/2);
  result7 = 'Простое';
  if (num13 == 2){
    result7 = 'Простое';
  } else{
  for (var i = 2; i < snumber_sqrt + 1; i++) {
      if (num13 % i === 0) {
        result7 = 'Составное';
      }
    }
  }

  
  document.getElementById("result7").innerHTML = result7;

}

// 18
function funcfact() {
  var result8;
  var num14 = Number(document.getElementById("num14").value);

  for (var i = num14 - 1; i >= 1; i--) {
    num14 *= i;
  }
  result8 = num14
  document.getElementById("result8").innerHTML = result8;

}

// 19
var nal
function funcnalog() {
  var result9;
  var num15 = Number(document.getElementById("num15").value);
  switch (nal) {
    case '13':
      result9 = num15 * 0.13 + num15;
      break;
    case '9':
      result9 = num15 * 0.09 + num15;
      break;
    case '15':
      result9 = num15 * 0.15 + num15;
      break;
    
    default:
      result9 = 'выберите операцию';
  }

  document.getElementById("result9").innerHTML = result9;
}

// 20
function funckrat() {
  var result10;
  var num16 = Number(document.getElementById("num16").value);
  var num17 = Number(document.getElementById("num17").value);

  if (num16 % num17 == 0) 
  {
    test = num16 / num17;
    result10 = 'Первое число кратно второму' + ' = ' + test;
  } else { result10 = 'Первое число некратно второму'}
  document.getElementById("result10").innerHTML = result10;
}