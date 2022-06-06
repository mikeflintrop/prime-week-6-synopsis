$ (document).ready( readyNow );

const budget = 25000;
let purchases = [];

function addPurchase(){
    let newPurchase = {
        name: $( 'purchaseNameIn' ).val(),
        price: $( 'purchasePriceIn' ).val()
    }
    $( 'purchaseNameIn' ).val('');
    $( 'purchasePriceIn' ).val('')
}

function readyNow(){
   //display budget 
   let el = $( '#budgetOut' );
   el.empty();
   el.append( budget );
   //handle click event
   $( '#addPurchaseButton' ).on( 'click', addPurchase );
}

