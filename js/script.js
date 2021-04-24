//Business logic
function order(size, crust, topping) {
    this.size=size;
    this.crust=crust;
    this.topping=topping;
    this.quantity=quantity;
}

order.prototype.total=function(){
    return (this.size + this.crust + this.topping)*this.quantity;
}

//user interface
$(document).ready(function(){
    $("form#pizza").submit(function(event){
        event.preventDefault();

        var selectsize = $("#size").val();
        var selectcrust=$("#crust").val();
        var selecttopping=$("#topping").val();
        var inputquan=$("#quan").val();

    })
})