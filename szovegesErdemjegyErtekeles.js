<script>
//Szöveges érdemjegy értékelés jegyre:
let jegy=prompt("Add meg a jegyet amire a szöveges érdemjegy értékelést várod:");
if(jegy==5){
	document.write(`A(z) ${jegy} jegy szöveges érdemjegy értékelése: Jeles`);
}
else if(jegy==4){
	document.write(`A(z) ${jegy} jegy szöveges érdemjegy értékelése: Jó`);
}
else if(jegy==3){
	document.write(`A(z) ${jegy} jegy szöveges érdemjegy értékelése: Közepes`);
}
else if(jegy==2){
	document.write(`A(z) ${jegy} jegy szöveges érdemjegy értékelése: Elégséges`);
}
else if(jegy==1){
	document.write(`A(z) ${jegy} jegy szöveges érdemjegy értékelése: Elégtelen`);
}
else{
	document.write(`A(z) ${jegy} jegy nem létező érdemjegy értékelés!`);
}

</script>
