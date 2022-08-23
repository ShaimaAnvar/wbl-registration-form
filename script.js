
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
    
/* form validation by using javascript */
 function validate(){
    var isValid = true;
    //validating name
    var name = document.getElementById('name');
    if (name.value.trim() ==""){
        name.style.border = "solid 3px red";
        document.getElementById('lblname').style.visibility="visible";
        isValid = false;
    } else {
        name.style.border = "none";
        document.getElementById('lblname').style.visibility="hidden";
    }
    //validating dob
    var dob = document.getElementById('dob');
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
    var country = document.getElementById('cntry');
    if (country.value.trim() ==""){
        cntry.style.border = "solid 3px red";
        document.getElementById('lblcntry').style.visibility="visible";
        isValid = false;
    } else {
        cntry.style.border = "none";
        document.getElementById('lblcntry').style.visibility="hidden";
    }
    //validating email
    var email = document.getElementById('email');
    if (email.value.trim() ==""){
        email.style.border = "solid 3px red";
        document.getElementById('lblemail').style.visibility="visible";
        isValid = false;
    } else {
        email.style.border = "none";
        document.getElementById('lblemail').style.visibility="hidden";
    }
    //validating phone number
    var phoneNum = document.getElementById('phone');
    if (phoneNum.value.trim() ==""){
        phone.style.border = "solid 3px red";
        document.getElementById('lblphone').style.visibility="visible";
        isValid = false;
    } else {
        phone.style.border = "none";
        document.getElementById('lblphone').style.visibility="hidden";
    }
    //validating password
    var password = document.getElementById('pswrd');
    if (password.value.trim() ==""){
        pswrd.style.border = "solid 3px red";
        document.getElementById('lblpswrd').style.visibility="visible";
        isValid = false;
    } else {
        pswrd.style.border = "none";
        document.getElementById('lblpswrd').style.visibility="hidden";
    }
    //validating confirm password
    var confirmPassword = document.getElementById('confirmPswrd');
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
 
