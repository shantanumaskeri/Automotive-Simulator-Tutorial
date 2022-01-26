var rag : GameObject;
//var r:Component[];
var myGame:GameObject;
var myScore:Score;


function Start () {
	myGame=GameObject.Find("Scorecard");
	
	
}
function Update () {
	
}

function OnCollisionEnter(theCollision : Collision){
	if(theCollision.gameObject.tag == "bomb"){
	myScore=myGame.GetComponent("Score");
		myScore.points +=1;
		 ;
		print(myScore);
		print("Collided" );
		dead();
	}
}

function dead(){
	
	
	Instantiate(rag, transform.position, transform.rotation) ;
	//var r:Component[]=ragd.GetComponentsInChildren(Rigidbody);
/*
	for(var rigbody:Rigidbody in r){
		print("inside fro loop");
		rigbody.AddExplosionForce(1000,rigbody.transform.position, 10);
	}
*/
	
	Destroy(gameObject);
	
	
	
}


