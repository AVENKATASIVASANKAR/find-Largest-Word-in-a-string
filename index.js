/*var output=[];
var count=1;
function fizzbuzz(){
    output.push(count);
    count++;
    console.log(output);
} */
// var num1=8.62345;
// var flt=Math.floor(num1);
// var fix=num1.toFixed(5);
// document.write(flt);
// document.write('<br>');
// document.write(fix);
var first=prompt("Hello to find the largest word in your string .Enter your string here:");
// document.write(first.length +" ");
// document.write(first.indexOf('sankar' +" "));
// document.write('<br>');
// document.write(first.indexOf('hello'));
// document.write('<br>')
// document.write(first.lastIndexOf('sankar'));
// var firsary=first.split(" ");
// document.write(firsary);

document.write('<br>'+'<br>')
var seperate= first.split(" ");
document.write(seperate)
document.write('<br>'+'<br>')
var length= seperate.map(x=>x.length);
document.write(length);
document.write('<br>'+'<br>')
let reducer = (arr) => arr.reduce((r, c) => r.length >= c.length ? r : c);
document.write(reducer(seperate));
