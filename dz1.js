// ---♂Right MOOD♂ today---
var a=Math.round(Math.random()*11)

link = new Array();
link[0]="https://www.youtube.com/watch?v=jbnimrdt6Rc"
link[1]="https://www.youtube.com/watch?v=aLGnykSj_Ew"
link[2]="https://www.youtube.com/watch?v=c9JNp6kdKqU"
link[3]="https://www.youtube.com/watch?v=Q_n3n819dGI"
link[4]="https://www.youtube.com/watch?v=wVro3s6A8z8"
link[5]="https://www.youtube.com/watch?v=POb02mjj2zE"
link[6]="https://www.youtube.com/watch?v=2zWzaRXyfSc"
link[7]="https://www.youtube.com/watch?v=ql9TiOhGx0s"
link[8]="https://www.youtube.com/watch?v=5M9Hb32cdRw"
link[9]="https://www.youtube.com/watch?v=FCl6hNg-Vq4"
link[10]="https://www.youtube.com/watch?v=q3JKyqGXJc4"
link[11]="https://www.youtube.com/watch?v=Orx4Unq4MkE"

console.log('Your ♂Right MOOD♂ today: ' + link[a])

// ---search for a specific(your) remix---
function prompt(question, callback) {
     var stdin = process.stdin,
         stdout = process.stdout;
 
     stdin.resume();
     stdout.write(question);
 
     stdin.once('data', function (data) {
         callback(data.toString().trim());
     });
 }


prompt('What song do you want to find? ', function (input) { 
     Vashtext = 'https://www.youtube.com/results?search_query=' + input.replace(/\s/g,'+') + '+gachi+remix'
     console.log(Vashtext);
     process.exit();
 });
