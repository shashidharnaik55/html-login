$ (document).ready( function(){

    // Validate Username
    $('#usercheck').hide();     
    let usernameError = true; 
    $('#usernames').blur(function () { 
        validateUsername(); 
    }); 
      
    function validateUsername() { 
      let usernameValue = $('#usernames').val(); 
      if (usernameValue.length == '') { 
      $('#usercheck').show(); 
          usernameError = false; 
          return false; 
      }  
      else if((usernameValue.length < 5)||  
              (usernameValue.length > 8)) { 
          $('#usercheck').show(); 
          $('#usercheck').html 
("**length of username must be between 5 and 8"); 
          usernameError = false; 
          return false; 
      }  
      else { 
          $('#usercheck').hide(); 
      } 
    } 

    // Validate Email
    $('#mailcheck').hide();     
    let mailError = true; 
    $('#email').blur(function () { 
        validateEmail(); 
    }); 
    function validateEmail() {
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; 
               let mailText = $('#email').val(); 
               
               if(!regex.test(mailText)){ 
                $('#mailcheck').show();
                mailError = false; 
                return false;       
               }      
             else{  
                    $('#mailcheck').hide();       
                } 
         }

 
   // Validate Password 
   $('#passcheck').hide(); 
   let passwordError = true; 
   $('#password').blur(function () { 
       validatePassword(); 
   }); 
   function validatePassword() { 
       let passwrdValue =  
           $('#password').val(); 
       if (passwrdValue.length == '') { 
           $('#passcheck').show(); 
           passwordError = false; 
           return false; 
       }  
       if ((passwrdValue.length < 5)||  
           (passwrdValue.length > 10)) { 
           $('#passcheck').show(); 
           $('#passcheck').html 
("**length of your password must be between 5 and 10"); 
          
           passwordError = false; 
           return false; 
       } else { 
           $('#passcheck').hide(); 
       } 
   } 
         
// Validate Confirm Password 
   $('#conpasscheck').hide(); 
   let confirmPasswordError = true; 
   $('#conpassword').blur(function () { 
       validateConfirmPasswrd(); 
   }); 
   function validateConfirmPasswrd() { 
       let confirmPasswordValue =  
           $('#conpassword').val(); 
       let passwrdValue =  
           $('#password').val(); 
       if (passwrdValue != confirmPasswordValue) { 
           $('#conpasscheck').show(); 
           $('#conpasscheck').html( 
               "**Password didn't Match");  
           confirmPasswordError = false; 
           return false; 
       } else { 
           $('#conpasscheck').hide(); 
       } 
   } 
     
// Submitt button 
   $('#submitbtn').click(function () { 
       validateUsername(); 
       validatePassword(); 
       validateConfirmPasswrd(); 
       validateEmail();
       if ((usernameError == true) &&  
           (passwordError == true) &&  
           (confirmPasswordError == true) &&  
           (mailError == true)) { 
           return true; 
       } else { 
           return false; 
       } 
   }); 

   // Validate logUsername
   $('#logusercheck').hide();     
   let logusernameError = true; 
   $('#logusernames').blur(function () { 
       validatelogUsername(); 
   }); 
     
   function validatelogUsername() { 
     let logusernameValue = $('#logusernames').val(); 
     if (logusernameValue.length == '') { 
     $('#logusercheck').show(); 
         logusernameError = false; 
         return false; 
     }   
     else { 
         $('#logusercheck').hide(); 
     } 
   } 
   // Validate Log-Password 
   $('#logpasscheck').hide(); 
   let logpasswordError = true; 
   $('#logpassword').blur(function () { 
       validatelogPassword(); 
   }); 
   function validatelogPassword() { 
       let logpasswrdValue =  $('#logpassword').val(); 
       if (logpasswrdValue.length == '') { 
           $('#logpasscheck').show(); 
           logpasswordError = false; 
           return false; 
       }  
       else { 
           $('#logpasscheck').hide(); 
       } 
   } 
   // login button 
   $('#loginbtn').click(function () { 
    validatelogUsername(); 
    validatelogPassword(); 
    if ((logusernameError == true) &&  
        (logpasswordError == true)) { 
        return true;
         
    } else { 
        return false; 
    }    
    
}); 
   
}); 
