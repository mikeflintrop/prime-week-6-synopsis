$ (document).ready( readyNow );

const budget = 25000;
let purchases = [];

function addPurchase(){
    console.log( 'in addPurchase' )
    let purchase = {
        name: $( '#purchaseNameIn' ).val(),
        price: $( '#purchasePriceIn' ).val()
    }
    purchases.push( purchase );
    $( '#purchaseNameIn' ).val( '' );
    $( '#purchasePriceIn' ).val( '' );

    calculateRemainingBudget();
    displayPurchases();
}

function calculateRemainingBudget(){
    console.log( 'in calculateRemainingBudget' );
    let totalPrice = 0;
    for (let i = 0; i < purchases.length; i++) {
        totalPrice += Number(purchases[i].price);
    }
    console.log( 'totalPrice:', totalPrice);

    const remainingBudget = budget - totalPrice;
    let el = $( '#remainingBudgetOut' );
    el.empty();
    el.append( remainingBudget );
}

function displayPurchases(){
    console.log( 'in displayPurchases' );
    let el = $( '#purchasesOut' );
    el.empty();
    for ( purchase of purchases ) {
        el.append( '<li>' + purchase.name + ': $' + purchase.price + '</li>' )
    } 
}

function readyNow(){
   //display budget 
   let el = $( '#budgetOut' );
   el.empty();
   el.append( budget );
   //handle click event
   $( '#addPurchaseButton' ).on( 'click', addPurchase );
   calculateRemainingBudget();
}
