
onmessage = function (e) {
  var event = e.data[0];

  if (event == 'start') {
    postMessage(factorize(e.data[1]));
  };
}


function prettyShow(stack) {
  var x, n, xnew;
  var output = new String();

  x = xnew = stack.shift();
  n = 1;

  while (stack.length) {
    xnew = stack.shift();

    if (xnew == x) {
      n += 1;
    } else {
      if (n != 1)
        output += x + "<sup>" + n + "</sup>&times;";
      else
        output += x + "&times;";
      x = xnew;
      n = 1;
    }
  }
  if (n != 1)
    output += xnew + "<sup>" + n + "</sup>";
  else
    output += xnew;

  return output;
}

function factorize(x){
  x = new Number(x);
  var i=new Number(2);
  var divisors = [];

  while (x > 1) {
    if (x%i == 0) {
      x = x/i;
      divisors.push(i);
    }else{
      i=i+1;
      if (i * i >= x) {
        if (i*i == x) {
          divisors.push(i);
          divisors.push(i);
          break;
        }else {
          divisors.push(x);
          break;
        }
      }
    }
  }
  return prettyShow(divisors);
}
