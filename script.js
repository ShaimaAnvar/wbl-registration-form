
// $(document).ready(function(){
//     $("#btn").click(function(event){
//         event.preventDefault();
//         // $("#registration-form").validate({
//         //     rules:{
//         //          fname:{
//         //             required:true,
//         //             minlength:4,
//         //             maxlength:10
//         //         },
//         //         lname:{
//         //             required:true,
//         //             minlength:4,
//         //             maxlength:10
//         //         },
//         //         dob:{
//         //             required:true,
//         //         },
//         //         gender:{
//         //             required:true,
//         //         },
//         //         countryName:{
//         //             required:true,    
//         //         },
//         //         emailAddress:{
//         //             required:true,
//         //             email:true
//         //         },
//         //         phoneNumber:{
//         //             required:true,
//         //             number:true
//         //         },
//         //         password:{
//         //             required:true, 
//         //             minlength:6
//         //         },
//         //         confirmPassword:{
//         //             required:true,
//         //             minlength:6
//         //         },
//         //     } 
//         // })
        
//         const firstName = $("#fname").val();
//         if(firstName == ""  || firstName== null) {
//             $("#error").text("First Name is mandatory.");
//         }
//     })
// })

    function submitFunction(){
        /* form validation by using javascript */
        var name = document.getElementById('name');
        var dob = document.getElementById('dob');
        var country = document.getElementById('cntry');
        var email = document.getElementById('email');
        var phoneNum = document.getElementById('phone');
        var password = document.getElementById('pswrd');
        var confirmPassword = document.getElementById('confirmPswrd');
        function validate(){
            var isValid = true;
            //validating name
            if (name.value.trim() ==""){
                name.style.border = "solid 3px red";
                document.getElementById('lblname').style.visibility="visible";
                isValid = false;
            } else {
                name.style.border = "none";
                document.getElementById('lblname').style.visibility="hidden";
            }
            //validating dob
            if (dob.value.trim() ==""){
                dob.style.border = "solid 3px red";
                document.getElementById('lbldob').style.visibility="visible";
                isValid = false;
            } else {
                dob.style.border = "none";
                document.getElementById('lbldob').style.visibility="hidden";
            }
            // validating gender type
            var radios = document.getElementsByName('gender');
            var isGenderSelected = false;
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].checked == true) {
                    isGenderSelected = true;
                    document.getElementById('lblgender').style.visibility="hidden";
                    break;
                }
            }
            if (isGenderSelected == false){
                document.getElementById('lblgender').style.visibility="visible";
                isValid = false;
            }
            //validating country
            if (country.value.trim() ==""){
                cntry.style.border = "solid 3px red";
                document.getElementById('lblcntry').style.visibility="visible";
                isValid = false;
            } else {
                cntry.style.border = "none";
                document.getElementById('lblcntry').style.visibility="hidden";
            }
            //validating email
            if (email.value.trim() ==""){
                email.style.border = "solid 3px red";
                document.getElementById('lblemail').style.visibility="visible";
                isValid = false;
            } else {
                email.style.border = "none";
                document.getElementById('lblemail').style.visibility="hidden";
            }
            //validating phone number
            if (phoneNum.value.trim() ==""){
                phone.style.border = "solid 3px red";
                document.getElementById('lblphone').style.visibility="visible";
                isValid = false;
            } else {
                phone.style.border = "none";
                document.getElementById('lblphone').style.visibility="hidden";
            }
            //validating password
            if (password.value.trim() ==""){
                pswrd.style.border = "solid 3px red";
                document.getElementById('lblpswrd').style.visibility="visible";
                isValid = false;
            }else {
                pswrd.style.border = "none";
                document.getElementById('lblpswrd').style.visibility="hidden";
            }
            //validating confirm password
            if (confirmPassword.value.trim() ==""){
                confirmPswrd.style.border = "solid 3px red";
                document.getElementById('lblconfirmpswrd').style.visibility="visible";
                isValid = false;
            } else {
                confirmPswrd.style.border = "none";
                document.getElementById('lblconfirmpswrd').style.visibility="hidden";
            }
            return isValid;
        }
        // Printing data in console..
        if(validate() == true){
            alert('Please verify the data you enterd');
            var genderSelected=document.querySelector('input[name="gender"]:checked').value;
            var result = "Name: "+ name.value +"\n"+ "Date of birth: "+ dob.value+"\n"+"Gender: "+ genderSelected+"\n"+"Country: "+country.value+"\n"+ 
            "Email: "+email.value+ "\n"+"Phone Nember: "+phoneNum.value+"\n"+ "Password: "+password.value+"\n"+"Confirm Password: "+confirmPassword.value;
            console.log(result);
            clearForm();
        }    
    }
    function checkName(){
        var name = document.getElementById('name');
        if(name.value.trim().length <= 1){
            name.style.border = "solid 3px red";
            document.getElementById('lblname').style.visibility="visible";
            document.getElementById('lblname').innerHTML = "Username should contain atleast 2 characters";
        }else if(name.value.trim().length > 1 && name.value.trim().length <= 10){
            name.style.border = "none";
            document.getElementById('lblname').style.visibility="hidden";
        }else{
            name.style.border = "solid 3px red";
            document.getElementById('lblname').style.visibility="visible";
            document.getElementById('lblname').innerHTML = "Username should not contain more than 10 characters"; 
        }
    }
    function checkdateOfBirth(){
        var dob = document.getElementById('dob');
        if (dob.value.trim() != ""){
            dob.style.border = "none";
            document.getElementById('lbldob').style.visibility="hidden";
        } 
    }
    function checkGender(){
        if(document.getElementById('male').checked || document.getElementById('female').checked ){
            document.getElementById('lblgender').style.visibility="hidden";
        }
    }
    function checkCountry(){
        var country = document.getElementById('cntry');
        if (country.value.trim() != ""){
            cntry.style.border = "none";
            document.getElementById('lblcntry').style.visibility="hidden";
        } 
    }
    function checkEmail(){
        var email = document.getElementById('email');
        if (email.value.trim() != ""){
            email.style.border = "none";
            document.getElementById('lblemail').style.visibility="hidden";
        } 
    }
    function checkPhoneNumber(){
        var phoneNum = document.getElementById('phone');
        if (phoneNum.value.trim() != ""){
            phone.style.border = "none";
            document.getElementById('lblphone').style.visibility="hidden";
        } 
    }
    function checkPassword(){
        var password = document.getElementById('pswrd');
        if (password.value.length <= 3){
            pswrd.style.border = "solid 3px red";
            document.getElementById('lblpswrd').style.visibility="visible";
            document.getElementById('lblpswrd').innerHTML = "Password too short";
        }else if(password.value.length >=4 &&  password.value.length <= 8){
            pswrd.style.border = "none";
            document.getElementById('lblpswrd').style.visibility="hidden";
        }else{
            pswrd.style.border = "solid 3px red";
            document.getElementById('lblpswrd').style.visibility="visible";
            document.getElementById('lblpswrd').innerHTML = "Password too long";
        }
    }
    function checkConfirmPassword(){
        var confirmPassword = document.getElementById('confirmPswrd');
        var password = document.getElementById('pswrd');
        if(password.value != confirmPassword.value){
            confirmPswrd.style.border = "solid 3px red";
            document.getElementById('lblconfirmpswrd').style.visibility="visible";
            document.getElementById('lblconfirmpswrd').innerHTML="Passwords does not match";
        }else{
            confirmPswrd.style.border = "none";
            document.getElementById('lblconfirmpswrd').style.visibility="hidden";
        }
    }
    // Adding cancel button functionality
    function clearForm(){
        document.getElementById("registration-form").reset();
    }

 
