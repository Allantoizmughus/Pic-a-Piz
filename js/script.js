//Business logic
function Order(size, crust, topping) {
    this.size=size;
    this.crust=crust;
    this.topping=topping;
    this.quantity=quantity;
}

Order.prototype.total=function(){
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

        var newOrder=new Order(selectsize, selectcrust, selecttopping, inputquan);

        $("#confirm>p").append("<p>"+newOrder.total()+"<p>");

        $("#size").val();
        $("#crust").val();
        $("#topping").val();
        $("#quan").val();

    });
});