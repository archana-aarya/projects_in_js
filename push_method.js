function test(){
    var num=[1,2,3,43];
    var result=[];
    var i=0;
    while(result.length<num.length){
        var temp=num[i];
        result.push(temp*2);
        i=i+1
    }
    console.log(result)
}
test();     