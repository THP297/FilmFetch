// Define the strategy interface
var ShippingStrategy = function() {
    this.calculate = function(package) {
        // to be implemented by each strategy
    };
};

// Define concrete strategies
var UPS = function() {
    this.calculate = function(package) {
        // calculations...
        return "$45.95";
    };
};

var FedEx = function() {
    this.calculate = function(package) {
        // calculations...
        return "$39.40";
    };
};

var DHL = function() {
    this.calculate = function(package) {
        // calculations...
        return "$43.20";s
    };
};

// Define the context
var Shipping = function() {
    this.company = "";
    this.setStrategy = function(company) {
        this.company = company;
    };
    this.calculate = function(package) {
        return this.company.calculate(package);
    };
};

// Usage
var package = { from: "76712", to: "10012", weigth: "lkg" };

var ups = new UPS();
var fedex = new FedEx();
var dhl = new DHL();

var shipping = new Shipping();

shipping.setStrategy(ups);
console.log("UPS Strategy: " + shipping.calculate(package));
shipping.setStrategy(fedex);
console.log("FedEx Strategy: " + shipping.calculate(package));
shipping.setStrategy(dhl);
console.log("DHL Strategy: " + shipping.calculate(package));
