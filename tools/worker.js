
onmessage = function (e) {
  var event = e.data[0];

  if (event == 'start') {
    postMessage(factorize(e.data[1]));
  };
}


function factorize(x){
  var input=new Number(x);
  var i=new Number(2);
  var cuenta=new Number(0);
  var output=new String();

  while(i<=input){
    if(input%i==0){
      cuenta++;
      input=input/i;
    }else{
      if(cuenta!=0) output+=i+"<sup>"+cuenta+"</sup>&times;";
      i=i+1;
      cuenta=0;
    }
    if(input==1){
      output+=i+"<sup>"+cuenta+"</sup>";
      break;
    }
  }
  return output;
}
