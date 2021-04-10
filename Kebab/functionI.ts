let globalVariable : any= 23 ;
class Aadit { 
     addTwoVariables(x:number , y:number ):number {
        return x+y
    }
}
console.log("the global variable was "+globalVariable);
console.log(" lets make the sum of 2 variables using typescript ");
const objectForClass = new Aadit()
console.log(objectForClass.addTwoVariables(2,35));


