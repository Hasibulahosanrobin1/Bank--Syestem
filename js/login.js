document.getElementById('btn-submit').addEventListener('click',function(){
   const emailfelid = document.getElementById('user-email');
   const email = emailfelid.value;

   const passwordFlied = document.getElementById('user-password');
   const password = passwordFlied.value;
   console.log(email,password)
   if(email === "robin@gmail.com" && password === 'doit'){
   window.location.href = 'bank.html';
   }
   else{
    alert("why you dont rember  you password")
   }
})