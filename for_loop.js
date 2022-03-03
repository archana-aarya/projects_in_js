function test(){
    var num=[1,3,4,43];
    var result=[];
    var i = 0;
    while(result.length<num.length){
        var temp=num[i];
        result[i]=temp*2
        i=i+1;
    }
    console.log(result)
}
test()
