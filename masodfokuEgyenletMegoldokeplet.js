<script>
//a=2, b=3, c=4 ekkor nincs megoldás
//a=2, b=5, c=3 ekkor 2 megoldás -1 és -1.5
//a=3, b=6, c=3 ekkor 1 megoldás -1
//http://eprog.hu/oktatas/javascript/feladat05.html
let a=prompt("Add meg a négyzetes tag értékét:");
let b=prompt("Add meg az x-es tag értékét:");
let c=prompt("Add meg egész szám tag értékét:");
if(a==0){
	document.write(`A(z) ${a}x<sup>2</sup>+ (${b})x + (${c}) egyenlet nem másodfokú`);
}
else{
	let d=(b*b)-(4*a*c);
	if(d<0){
    	document.write(`A(z) ${a}x<sup>2</sup>+ (${b})x + (${c}) egyenletnek nincs megoldása`);    
    }
    
    else if(d==0){
    	document.write(`A(z) ${a}x<sup>2</sup>+ (${b})x + (${c}) egyenletnek 1 megoldása van<br>`);
    	let x1=-b/(2*a);
        document.write("A megoldás x1="+x1);
    }
    
    else{
    	document.write(`A(z) ${a}x<sup>2</sup>+ (${b})x + (${c}) egyenletnek 2 megoldása van<br>`);
    	let x1=(-b+Math.sqrt(d))/(2*a);
        let x2=(-b-Math.sqrt(d))/(2*a);
        document.write("Az első megoldás x1="+x1+"<br>");
        document.write("Az második megoldás x2="+x2);
    }
}
</script>
