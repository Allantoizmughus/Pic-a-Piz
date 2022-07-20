$(document).ready(function() {
    $("#order-details").hide();
    $("#deliver").hide();


    // slides logic start
    var counter=0;

    setInterval(function(){
      // make slide go to the next iamge
      document.getElementById('radio' +counter).checked=true;
      counter++;
  
      // make slide go back to the first image after the last
      if(counter>4){
          counter=1;
      }
  },5000);
  // slides logic end


    // Business Logic
    var totalPriceArray = [];
    var n= quantity;

    function Order(size, crust, topping, quantity) {
      this.sizes = size;
      this.crusts = crust;
      this.toppings = topping;
      this.pizzaPrice = 0;
      this.quantity = quantity;
    }
    Order.prototype.total = function() {
      if (this.sizes === "Small") {
        this.pizzaPrice += 400;
      } else if (this.sizes === "Medium") {
        this.pizzaPrice += 800;
      } else if (this.sizes === "Large") {
        this.pizzaPrice += 1200;
      }
      if (this.crusts === "Crispy") {
        this.pizzaPrice += 150;
      } else if (this.crusts === "Stuffed") {
        this.pizzaPrice += 200;
      } else if (this.crusts === "Gluten-free") {
        this.pizzaPrice += 100;
      } 
      if (this.toppings === "Cheese") {
        this.pizzaPrice += 50;
      } else if (this.toppings === "Veggies") {
        this.pizzaPrice += 70;
      } else if (this.toppings === "Pepperoni") {
        this.pizzaPrice += 60;
      } 
      if(this.quantity>"0"){
        this.pizzaPrice *quantity
      }
    };
    //Business logic
    function Address(address) {
      this.address = address;
      this.deliveryAddress = (address);
    }
    Order.prototype.totalCost = function() {
      var cartTotalPrice = [];
      for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement++) {
        cartTotalPrice += totalPriceArray[arrayElement];
      }
      return cartTotalPrice;
    };
    $(".btn.check-out").click(function() {
    });

    //Userinterface Logic
    $("form#pizza").submit(function(event) {
      event.preventDefault();
      var size = $("select#sizes").val(); 
      var crust = $("select#crusts").val();
      var toppings = $("select#toppings").val();
      //var quantity=$("#quantity").val();

      var pizzaDetails = (size + " - " + crust + " - " + toppings);
      var newOrder = new Order(size, crust, toppings);
      newOrder.total();
      totalPriceArray.push(newOrder.pizzaPrice);
      // $("#pizza-details").hide();
      $("#finalcost").text(newOrder.totalCost());
      $("#summary").append("<ul><li>" + pizzaDetails + "</li></ul>");
      // $("#size, #crust, #toppings,").val("");
    });
    $("#orderhere").click(function() {
      $("#deliver").toggle();
    });
  
    $("#checkout").click(function() {
      $("#orderdetails").toggle();
    });
    $("form#address").submit(function(event) {
      $(".address-form").toggle();
      event.preventDefault();
      var address = $("input#location").val();
      var newAddress = new Address(address);
      $("#delivery-message").text("Your pizza will be delivered to: " + newAddress.deliveryAddress);
    });
  });