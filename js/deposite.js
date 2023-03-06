document.getElementById('btn-deposite').addEventListener('click',function(){
       //step 2: get the deposite ammount from the deposit field
       // for input fielduse .value to the value inside the input filed;
       const depostfelid = document.getElementById('deposite-flide');
       const newdepositAmouuntstring = depostfelid.value;
       const newdpoditeAmouunt = parseFloat(newdepositAmouuntstring);
        
          //step 7 : clear the deposit number
     depostfelid.value =" ";
      
       if(isNaN(newdpoditeAmouunt)){
        alert('plase provied a vilide number');
        return;
    }

     //step 3 : get the current deposite total
     //fot non-input(element othert than input , textarea) use the inntext get the text;
     const deposiTotalElment =document.getElementById('deposite-total');
     const perviousdeposinumberstring = deposiTotalElment.innerText;
     const priviousTotal =parseFloat(perviousdeposinumberstring);
    
     //step 4 : add numbers to set the total deposit
     const currebtDepositTotal =priviousTotal + newdpoditeAmouunt;
     //set the deposite total
     deposiTotalElment.innerText = currebtDepositTotal;

     //step 5 : get ballance current toatal
     const blanceTotalElement = document.getElementById('Blance-total');
     const previousBlanceTotalString = blanceTotalElement .innerText;
     const periousBlanctotal = parseFloat(previousBlanceTotalString);


     //step 6 : calculate current total blance

     const currentBlanceTotal = periousBlanctotal + newdpoditeAmouunt;
     // set the total 
     blanceTotalElement.innerText = currentBlanceTotal;







  

})