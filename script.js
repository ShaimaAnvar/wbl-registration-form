
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
            //validating Name
            var nameValRes = checkName();

            //validating dob
            var dobValRes = checkdateOfBirth();

            // validating gender type
            var genderValRes = checkGender();

            // validating country 
            var countryValRes = checkCountry();

            //validating email
            var emailValRes = checkEmail();

            //validating phone number
            var phoneValRes = checkPhoneNumber();

            //validating password
            var passwordValRes = checkPassword();

            //validating confirm password
            var confirmPswrdValRes = checkConfirmPassword();

            var isValid = nameValRes && dobValRes && genderValRes 
                && countryValRes && emailValRes && phoneValRes 
                && passwordValRes && confirmPswrdValRes;
            return isValid;
        }

        // Printing data in console..
        if(validate()){
            alert('Please verify the data you entered');
            var genderSelected=document.querySelector('input[name="gender"]:checked').value;
            var result = "Name: "+ name.value +"\n"+ "Date of birth: "+ dob.value+"\n"+"Gender: "+ genderSelected+"\n"+"Country: "+country.value+"\n"+ 
            "Email: "+email.value+ "\n"+"Phone Nember: "+phoneNum.value+"\n"+ "Password: "+password.value+"\n"+"Confirm Password: "+confirmPassword.value;
            console.log(result);
            clearForm();
        }    
    }

    //oninput functions for each fields....
    function checkName(){
        var isNameValid= true;
        var name = document.getElementById('name');
        if (name.value.trim() ==""){
            name.style.border = "solid 3px red";
            document.getElementById('lblname').style.visibility="visible";
            document.getElementById('lblname').innerHTML = "Please fill out this field";
            isNameValid = false;
        }else if(name.value.trim().length <= 1){
            name.style.border = "solid 3px red";
            document.getElementById('lblname').style.visibility="visible";
            document.getElementById('lblname').innerHTML = "Username should contain atleast 2 characters";
            isNameValid = false;
        }else if(name.value.trim().length > 1 && name.value.trim().length <= 10){
            name.style.border = "none";
            document.getElementById('lblname').style.visibility="hidden";
            isNameValid = true;
        }else{
            name.style.border = "solid 3px red";
            document.getElementById('lblname').style.visibility="visible";
            document.getElementById('lblname').innerHTML = "Username should not contain more than 10 characters"; 
            isNameValid = false;
        }
        return isNameValid;
    }

    function checkdateOfBirth(){
        var isDOBValid =true;
        var dob = document.getElementById('dob');
        if (dob.value.trim() == ""){
            dob.style.border = "solid 3px red";
            document.getElementById('lbldob').style.visibility="visible";
            isDOBValid = false;
        }else{
            dob.style.border = "none";
            document.getElementById('lbldob').style.visibility="hidden";
        }
        return isDOBValid;
    }

    function checkGender(){
        var isGenderValid = true;
        if(document.getElementById('male').checked || document.getElementById('female').checked ){
            document.getElementById('lblgender').style.visibility="hidden";
        }else{
            document.getElementById('lblgender').style.visibility="visible";
            isGenderValid = false;
        }
        return isGenderValid;
    }

    function checkCountry(){
        var isCountryValid = true;
        var country = document.getElementById('cntry');
        if (country.value.trim() == ""){
            cntry.style.border = "solid 3px red";
            document.getElementById('lblcntry').style.visibility="visible";
            isCountryValid = false;
        }else{
            cntry.style.border = "none";
            document.getElementById('lblcntry').style.visibility="hidden";
        }
        return isCountryValid;
    }

    function checkEmail(){
        var isEmailValid = true;
        var email = document.getElementById('email');
        var regx = /^([a-z A-Z 0-9 \.\-]+)\@([a-z A-Z 0-9 \-]+)\.([a-z]{2,8})$/;
        if (email.value.trim() == ""){
            email.style.border = "solid 3px red";
            document.getElementById('lblemail').style.visibility="visible";
            document.getElementById('lblemail').innerHTML="Please fill out this field";
            isEmailValid = false;    
        }else if(regx.test(email.value)){
            email.style.border = "none";
            document.getElementById('lblemail').style.visibility="hidden";
            isEmailValid = true;  
        }
        else{
            email.style.border = "solid 3px red";
            document.getElementById('lblemail').style.visibility="visible";
            document.getElementById('lblemail').innerHTML="Invalid email";
            isEmailValid = false;
        }
        return isEmailValid;
    }

    function checkPhoneNumber(){
        var isphonevalid = true;
        var phoneNum = document.getElementById('phone');
        var regx = /^[+][1]\d{10}$/;
        if (phoneNum.value.trim() == ""){
            phone.style.border = "solid 3px red";
            document.getElementById('lblphone').style.visibility="visible";
            document.getElementById('lblphone').innerHTML="Please fill out this field";
            isphonevalid = false;
            } 
        else if(regx.test(phoneNum.value)){
            phone.style.border = "none";
            document.getElementById('lblphone').style.visibility="hidden";
            isphonevalid = true;
        }else{
            phone.style.border = "solid 3px red";
            document.getElementById('lblphone').innerHTML="Invalid phone number";
            document.getElementById('lblphone').style.visibility="visible";
            isphonevalid = false;
        }
        return isphonevalid;  
    }

    function checkPassword(){
        isPasswordValid = true;
        var password = document.getElementById('pswrd');
        if (password.value.length == ""){
            pswrd.style.border = "solid 3px red";
            document.getElementById('lblpswrd').style.visibility="visible";
            document.getElementById('lblpswrd').innerHTML = "Please fill out this field";
            isPasswordValid = false;
        }else if (password.value.length <= 3){
            pswrd.style.border = "solid 3px red";
            document.getElementById('lblpswrd').style.visibility="visible";
            document.getElementById('lblpswrd').innerHTML = "Password too short";
            isPasswordValid = false;
        }else if(password.value.length >=4 &&  password.value.length <= 8){
            pswrd.style.border = "none";
            document.getElementById('lblpswrd').style.visibility="hidden";
            isPasswordValid = true;
        }else{
            pswrd.style.border = "solid 3px red";
            document.getElementById('lblpswrd').style.visibility="visible";
            document.getElementById('lblpswrd').innerHTML = "Password too long";
            isPasswordValid = false;
        }
        return isPasswordValid;
    }

    function checkConfirmPassword(){
        var isConfirmPswrd = true;
        var confirmPassword = document.getElementById('confirmPswrd');
        var password = document.getElementById('pswrd');
        if(confirmPassword.value == ""){
            confirmPswrd.style.border = "solid 3px red";
            document.getElementById('lblconfirmpswrd').style.visibility="visible";
            document.getElementById('lblconfirmpswrd').innerHTML="Please fill out this field";
            isConfirmPswrd = false;
        }
        else if(password.value == confirmPassword.value){
            confirmPswrd.style.border = "none";
            document.getElementById('lblconfirmpswrd').style.visibility="hidden";
            isConfirmPswrd = true;
        }else{
            confirmPswrd.style.border = "solid 3px red";
            document.getElementById('lblconfirmpswrd').style.visibility="visible";
            document.getElementById('lblconfirmpswrd').innerHTML="Passwords does not match";
            isConfirmPswrd = false;
        }
        return isConfirmPswrd;
    }
    // Adding cancel button functionality
    function clearForm(){
        document.getElementById("registration-form").reset();
    }

 
