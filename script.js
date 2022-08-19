// function submitFunction(){
//     window.alert('Form submitted successfully');
// }
$(document).ready(function(){
    $("#registration-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:10
            },
            lname:{
                required:true,
                minlength:4,
                maxlength:10
            },
            dob:{
                required:true,
            },
            gender:{
                required:true,
            },
            countryName:{
                required:true, 
               
            },
            emailAddress:{
                required:true,
                email:true
            },
            phoneNumber:{
                required:true,
                number:true
            },
            password:{
                required:true, 
                minlength:6
            },
            confirmPassword:{
                required:true,
                minlength:6
            },
            

            
        }
        
    })
})