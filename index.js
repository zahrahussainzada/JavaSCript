let userName=prompt("Username:")
let password=prompt("Password:")
let yourOrder;
let name, age, quantity; 
let originalTotal;
let espresso= 2.5;
let latte = 3.5;
let cappuccino=4.0;
/*function Order(){
    if ((age > 18 && age < 60) && yourOrder === "latte")
        {
            originalTotal=quantity*latte;
            discount=originalTotal*0.1;
            tip=originalTotal*0.2;
            total=(tip+originalTotal)-discount;
            console.log(`Hello ${name}!
You ordered ${quantity} ${yourOrder}(s).
Original total: $${originalTotal.toFixed(2)}
Discount: $${discount.toFixed(2)}
Tip: $${tip.toFixed(2)}
Total with Tip: $${total.toFixed(2)}
Split between ${quantity} people: $${total/quantity} each`)
        }
        else if(yourOrder=="espresso")
        {   originalTotal=quantity*espresso;
            discount=originalTotal*0.1;
            tip=originalTotal*0.2;
            total=(tip+originalTotal)-discount;
            console.log(`Hello ${name}!
You ordered ${quantity} ${yourOrder}(s).
Original total: $${originalTotal.toFixed(2)}
Discount: $${discount.toFixed(2)}
Tip: $${tip.toFixed(2)}
Total with Tip: $${total.toFixed(2)}
Split between ${quantity} people: $${total/quantity} each`)
        }else if(yourOrder=="cappuccino"){
            originalTotal=quantity*cappuccino;
            discount=originalTotal*0.1;
            tip=originalTotal*0.2;
            total=(tip+originalTotal)-discount;
            console.log(`Hello ${name}!
You ordered ${quantity} ${yourOrder}(s).
Original total: $${originalTotal.toFixed(2)}
Discount: $${discount.toFixed(2)}
Tip: $${tip.toFixed(2)}
Total with Tip: $${total.toFixed(2)}
Split between ${quantity} people: $${total/quantity} each`)
        }else{
            discount=0;
            tip=originalTotal*0.2;
            total=tip+originalTotal;
            console.log(`Hello ${name}!
You ordered ${quantity} ${yourOrder}(s).
Original total: $${originalTotal.toFixed(2)}
Discount: $${discount.toFixed(2)}
Tip: $${tip.toFixed(2)}
Total with Tip: $${total .toFixed(2)}
Split between ${quantity} people: $${total/quantity} each`) 

            }}*/

function Order() {
    
    if (yourOrder === "latte") {
        originalTotal = quantity * latte;
    } else if (yourOrder === "espresso") {
        originalTotal = quantity * espresso;
    } else if (yourOrder === "cappuccino") {
        originalTotal = quantity * cappuccino;
    } else {
        console.log(`${yourOrder} isn't available at the moment`)
        return 0;
    }
    let tip = (age > 18 && age <60) ? originalTotal * 0.2:0;
    let discount = (age < 18 || age >60) ? originalTotal * 0.1:0;
    let total = originalTotal + tip - discount;

    console.log(`Hello ${name}!
You ordered ${quantity} ${yourOrder}(s).
Original total: $${originalTotal.toFixed(2)}
Discount: $${discount.toFixed(2)}
Tip: $${tip.toFixed(2)}
Total with Tip: $${total.toFixed(2)}
Split between ${quantity} people: $${(total / quantity).toFixed(2)} each`);
}

if(userName=='user' && password==1234)
{
    let securityLevel="Low";
    let Role="User";
    
console.log(`Welcome to the Coffee Hub.
            Please choose your order. 
            Coffees:
            ● espresso → $2.5
            ● latte → $3.5
            ● cappuccino → $4.0`) 
    alert(`Welcome to the Coffee Hub.
                Please choose your order. 
                Coffees:
                ● espresso → $2.5
                ● latte → $3.5
                ● cappuccino → $4.0`)
                name=prompt(`Your Name:`)
                age=prompt(`Your Age:`)
            yourOrder=prompt("What would like you to order?")
            quantity=prompt("How many glasses:")
            Order();
}else if(userName=='admin'  && password==1234)
{
    let securityLevel="High";
    let Role="admin";
   console.log(`Welcome to the Coffee Hub.  
        Please choose your order. 
        Coffees:
        ● espresso → $2.5
        ● latte → $3.5
        ● cappuccino → $4.0`)
        alert(`Welcome to the Coffee Hub.
            Please choose your order. 
            Coffees:
            ● espresso → $2.5
            ● latte → $3.5
            ● cappuccino → $4.0`)
            // Wanted to print both on the console and alert window
            name=prompt(`Your Name:`)
            age=prompt(`Your Age:`)
        yourOrder=prompt("What would you like to order?")
        quantity=prompt("How many glasses:")
        Order();
    }
    else{
        alert("Invalid password or username. Please refresh and try again!")
    }


