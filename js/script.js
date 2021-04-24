//Business logic
function Order(size, crust, topping) {
    this.size=size;
    this.crust=crust;
    this.topping=topping;
    this.quantity=quantity;
    this.total;
}

Order.prototype.total=function(){
    var sizes=size;
    var crusts=crust;
    var toppings=topping;
    var quantities=quantity;
    var total= (sizes + crusts + toppings) * quantities;
    this.total="Your order is" + total;
}

//user interface
$(document).ready(function(){
    $("form#pizza").submit(function(event){
        event.preventDefault();

        var selectsize = $("#size").val();
        var selectcrust=$("#crust").val();
        var selecttopping=$("#topping").val();
        var inputquantity=$("#quantity").val();

        var newOrder=new Order(selectsize, selectcrust, selecttopping, inputquantity);

        $("#confirm>p").append("<p>"+newOrder.total()+"<p>");

        $("#size").val();
        $("#crust").val();
        $("#topping").val();
        $("#quantity").val();

    });
});