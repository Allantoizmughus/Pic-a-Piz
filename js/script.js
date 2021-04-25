//Business logic
function Order(size, crust, topping) {
    this.size=size;
    this.crust=crust;
    this.topping=topping;
    this.quantity=quantity;
    this.total;
}



// Order.prototype.total=function(){
//     var sizes=this.size;
//     var crusts=this.crust;
//     var toppings=this.topping;
//     var quantities=this.quantity;
//     var total= (sizes + crusts + toppings) * quantities;
//     this.total="Your order is" + total;
// }

//user interface
$(document).ready(function(){
    $("form#pizza").submit(function(event){
        event.preventDefault();

        var newOrder=new Order();
        $("button#checkout").click(function(){
            
        })
     
})

//user interface
// $(document).ready(function(){
//     $("form#pizza").submit(function(event){
//         event.preventDefault();

//         var selectSize = parseInt($("#size").val());
//         var selectCrust=parseInt($("#crust").val());
//         var selectTopping=parseInt($("#topping").val());
//         var inputQuantity=parseInt($("#quantity").val());

//         var newOrder=new Order(selectSize, selectCrust, selectTopping, inputQuantity);

//         $("#confirm ul").append("<li>"+newOrder.total()+"<li>");

//         $("#checkout").click(function(){
//             $("#confirm").text(order.total);
//         });

//         //Order.total();

//         // $("#size").val("");
//         // $("#crust").val("");
//         // $("#topping").val("");
//         // $("#quantity").val("");

//     });
// });