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