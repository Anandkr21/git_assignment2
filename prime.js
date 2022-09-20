let num=13;

function check(num){
    let count=0; 

    for(let i=1; i<=num; i++){
        if(num%i==0){
            return true;
        }
    }
}