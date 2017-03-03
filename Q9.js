function CharOccurence(passString, original){
	var frequency =1; max=0; chr="";
	for(var i =1; i<passString.length;i++){
		if(passString[i]==passString[i-1]){
			frequency++;
			continue;
			}
		else if(frequency>max){
			max=frequency;
			chr=passString[i-1];
			}
			frequency=1;
		}
		if(frequency>max){
			max=frequency;
			chr=passString[i-1];		
		}
		if(max==1){
			alert("String is Unique: "+original.toString());
		}
		else{
		alert(chr+ " with high Occurence : "+max);}
}
var string = prompt("Enter a String: ");
var originString= string;
string = string.split("");
string.sort();
CharOccurence(string, originString);
