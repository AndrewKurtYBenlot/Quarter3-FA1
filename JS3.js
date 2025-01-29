function persInfo(){
	if(confirm("Do you agree to share your personal information with this site?")){
		console.log("Name: "+nickname +"\n"+"Height: "+newHeight+"\n"+"Weight: "+weightlbs+" lbs")
	} else {
		console.log("User does not wish to share his/her infromation")
	}				
}