var projectile : Rigidbody;
var speed:float;
function Start(){
	speed=50;
	
	
}


function Update () {
	// Ctrl was pressed, launch a projectile
	if (Input.GetButtonDown("Fire1")) {
		// Instantiate the projectile at the position and rotation of this transform
		var clone : Rigidbody;
		clone = Instantiate(projectile, transform.position, transform.rotation);
		
		// Give the cloned object an initial velocity along the current
		// object's Z axis
		clone.velocity = transform.TransformDirection (Vector3.forward * speed);
	}
}