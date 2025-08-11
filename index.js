while(true){


var a=parseInt(prompt("enter first number"));
var b=parseInt(prompt("enter second number"));
var op=prompt("enter operator");
var res;

   

if(op==='+'){
    res=a+b;
    document.getElementById('output').innerHTML+='output is'+res;
break;
}
 else if(op==='-'){
    res=a-b;
    document.getElementById('output').innerHTML+='output is'+res;
   break;
}
else if(op==='*'){
    res=a*b;
    document.getElementById('output').innerHTML+='output is'+res;
    break;
}
else if(op==='/'){
    res=a/b;
    document.getElementById('output').innerHTML+='output is'+res;
    break;
}
else{
    res="Invalid operator";

}
}