var mask = ["mask1","mask2","mask3","megaMask"];
var head = ["head1","nanoHead","BigHead","MegaHead"];
var hair = ["pink","yellow","red"];

var combinArr = [mask,head,hair];

function Combine(){
    var combinedArrLenght = combinArr.length;
    for(i=0;i<combinedArrLenght;i++){
        var element = combinArr[i];
        var randomNum = Math.floor(Math.random() * element.length);
        var result = element[randomNum];
        console.log(result);
    }
    
}
Combine();

