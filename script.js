// Design a program that calculates discounts based on product categories (Electronics, Clothing, Grocery). Each category has specific discount rates for different products:

// Electronics: Mobile - 5%, Laptop - 10%

// Clothing: Men - 15%, Women - 20%

// Grocery: Fruits - 5%, Vegetables - 10%


const categorie=prompt("enter the categorie type Electronics/Clothing/Grocery: ").toLowerCase()
const products=["electronics","clothing","grocery"]
const item1=["mobiles","laptops"]
const item2=["mens","womens"]
const item3=["fruits","vegetables"]

if (categorie===products[0]){
    const items=prompt("enter item type Laptop/Mobile: ").toLowerCase()
    if (items===item1[0]){
        console.log("You will get 5% discount on Mobiles")
    }
    else if (items===item1[1]){
        console.log("You will get 10% discount on Laptops")

    } 
    else {
        console.log("No other Items are Available")
    }
}
else if (categorie===products[1]){
    const items=prompt("enter clothing type Men/Women: ").toLowerCase()
    if (items===item2[0]){
        console.log("You will get 15% discount on Mens Clothing")
    }
    else if (items===item2[1]){
              console.log("You will get 20% discount on Womens Clothing")

    } 
    else {
        console.log("No other Items  are availble")
    }
}
else {
    if (categorie===products[2]){
        const items=prompt("enter Grocery type fruits/vegetables: ").toLowerCase()
        if (items===item3[0]){
            console.log("You will get 5% discount on Fruits")
        }
        else if (items===item3[1]){
            console.log("You will get 10% discount on Vegetables")
    
        } 
        else {
            console.log("Other Items are Not Available")
        }
    }
    else {
        console.log("Other Products are  Neot available")
    }
}
