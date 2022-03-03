function test(){
    var num = [1,2,4,23];
    var result=[]
    num.forEach(
        function(n){
            result.push(n*2);
        }
    )
    console.log(result);
}
test()

// output [ 2, 4, 8, 46 ]
