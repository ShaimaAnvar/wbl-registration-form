
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
        name.style.border = "solid 3px red";
        document.getElementById('lblname').style.visibility="hidden";
    }
    //validating dob
    var dob = document.getElementById('dob');
    if (dob.value.trim() ==""){
        dob.style.border = "solid 3px red";
        document.getElementById('lbldob').style.visibility="visible";
        isValid = false;
    } else {
        dob.style.border = "solid 3px red";
        document.getElementById('lbldob').style.visibility="hidden";
    }
    // validating gender type
    

    var radios = document.getElementsByName('gender');
    var isGenderSelected = false;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked == true) {
            isGenderSelected = true;
            break;
        }
    }
    if (isGenderSelected == false){
        document.getElementById('lblgender').style.visibility="visible";
        isValid = false;
    }
    return isValid;

    
 }
//const fname = document.getElementById('#fname')