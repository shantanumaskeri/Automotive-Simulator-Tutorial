

function Update () {
}

function OnCollisionEnter(theCollision : Collision){
	if(theCollision.gameObject.tag == "bomb"){
print("cube collision entered");
		dead();
	}
}

function dead(){
	
	var r:Rigidbody=this.GetComponent(Rigidbody);
	
	r.AddExplosionForce(1000,Vector3.forward, 3,3);
}


