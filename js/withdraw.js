/*
1. add event handeler with the withdraw button
2. get the withdraw ammount from the withdraw input filed
2.5.also make sure to convert the input  into a number by using parseof
3.get previous withdraw toatal
4.calculate total withdraw ammount
5.set the withdraw ammount
6.calculate new blance



*/
//step 1: 
document.getElementById('btn-whitdrew').addEventListener('click',function(){
    //step 2:
    const withdrawField = document.getElementById('withdraw-felid');
    const newWithdrawAmmountString = withdrawField.value;
    const newwithdrawAmmount = parseFloat(newWithdrawAmmountString);

          // step 7:
          withdrawField.value = " ";

    if(isNaN(newwithdrawAmmount)){
        alert('plase provied a vilide number');
        return;
    }

    //step 3 :
    const whitdrewElment = document.getElementById('Withdrew-total'); 
    const previousWithdrawTotalstring = whitdrewElment.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalstring);

    

    //step 5 :
    const BlanceTotalElment = document.getElementById('Blance-total');
    const previousBlanceTotalString = BlanceTotalElment.innerText;
    const BlanceTotal = parseFloat(previousBlanceTotalString);



    if(newwithdrawAmmount > BlanceTotal){
        alert('taka nai jayo muri khayo');
        return;
    }


    //step 4 :
    const currentwithdraeTotal =  previousWithdrawTotal + newwithdrawAmmount;
    whitdrewElment.innerText = currentwithdraeTotal;

   // step 6:
   const newBlanceTotal = BlanceTotal - newwithdrawAmmount;
   BlanceTotalElment.innerText = newBlanceTotal;

   


})