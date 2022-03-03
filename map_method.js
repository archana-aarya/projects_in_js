function test(){
    var num=[1,2,4,43];
    var result=num.map(
        function(n){
            return n*2
        }
    )
    console.log(result)
}
test()
output // [ 2, 4, 8, 86 ]


