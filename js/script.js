//Business logic
function Order(){
    this.sizes=[];
    this.crusts=[];
    this.toppings=[];
    this.quantity=[];
    this.total;
}

Order.prototype.total=function(){
    var sz=0;
    this.sizes.map(function(size){
         sz += size
    });
    var cr=0;
    this.crusts.map(function(crust){
        cr += crust
    });
    var tp=0;
    this.toppings.map(function(topping) {
        tp += topping
      });
      var qnt=0;
      this.quantity.map(function(quantity){
          qnt += quantity
      });

      var total=(sz + cr + tp)* qnt
      this.total= "Your order is:" + "Ksh" + total();
}

//user interface logic
$(document).ready(function(){
    $("#pizza").submit(function(event){
        event.preventDefault();
        var newOrder=new Order();

        $("#checkout").click(function(){
            var selectsize = parseInt($("#sizes").val());
            if(selectsize===0){
                $(".error").show();
            }else if(selectsize===400 || 800 || 1200){
            Order.sizes.push(selectsize);          
            }
            var selectcrust = parseInt($("#crusts").val());
            if(selectcrust===0){
                $(".error").show();
            }else if(selectcrust===150 || 200 || 100){
                Order.crusts.push(selectcrust);
            }
            var selecttopping = parseInt($("#toppings").val());
            if(selecttopping===0){
                $(".error").show();
            }else if(selecttopping===50 || 70 || 60){
                Order.toppings.push(selecttopping);
            }
            var selectquantity = parseInt($("#quantity").val()); 
            if(selectquantity===0){
                $(".error").show();
            }else if(selectquantity>0){
                Order.quantity.push(selectquantity);
            }
            $("#confirm").text(Order.total);
            Order.total();
        })
    })
});