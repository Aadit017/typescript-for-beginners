class makingLoops{
	starPattern(n:number):void{
		for(let i=0;i<=n;i++){
			for(let j=0;j<=i;j++){
				console.log(' *')
			} 
			console.log("\n");
		} 
	}
}		
let objectForTheClass = new makingLoops();
objectForTheClass.starPattern(5)

