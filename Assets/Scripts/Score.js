var points:float;
var myScoreText:GUIText;

function Start(){

points=0;

}


function Update () {
//myScoreText.pixelOffset=Vector2(Screen.width/2-400,Screen.height/2-50);
myScoreText.text="Ronak Gold Score " + points;
}