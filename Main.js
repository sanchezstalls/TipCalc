// let btn = document.getElementById();

// btn.addEventListener('click',function(){
//     let billAmount = document.getElementById('bill_amount').value;
//     let tipPercentage = document.getElementById('tip_percentage').value;

//     let tipAmount = document.getElementById('tip_amount').value = billAmount/tipPercentage;

//     document.getElementById('total_bill').value = parseFloat(billAmount) + parseFloat(tipAmount);


// })

let btn = document.getElementById('btn');

btn.addEventListener('click', function()
{
    let billAmount = document.getElementById('billAmount').value;
    let tipPercentage = document.getElementById('tipPercentage').value;

    
    let tipAmount = document.getElementById('tipAmount').value = billAmount / tipPercentage;
    document.getElementById('totalBill').value = parseFloat(billAmount) + parseFloat(tipAmount);
}
)