$(document).ready(function() {
    $("#order-details").hide();
    $("#deliver").hide();
    // Business Logic
    var totalPriceArray = [];
    function Order(size, crust, toppings, quantity) {
      this.sizes = size;
      this.crusts = crust;
      this.toppings = toppings;
      this.pizzaPrice = 0;
      this.quantity = quantity;
    }
    Order.prototype.total = function() {
      if (this.sizes === "400") {
        this.pizzaPrice += 400;
      } else if (this.sizes === "800") {
        this.pizzaPrice += 800;
      } else if (this.sizes === "1200") {
        this.pizzaPrice += 1200;
      }
      if (this.crusts === "150") {
        this.pizzaPrice += 150;
      } else if (this.crusts === "200") {
        this.pizzaPrice += 200;
      } else if (this.crusts === "100") {
        this.pizzaPrice += 100;
      } 
      if (this.toppings === "50") {
        this.pizzaPrice += 50;
      } else if (this.toppings === "70") {
        this.pizzaPrice += 70;
      } else if (this.toppings === "60") {
        this.pizzaPrice += 60;
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