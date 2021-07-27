function validateForm() {
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var cmt = document.getElementById("cmt").value;
    var male = document.getElementById("male").value;
    var female = document.getElementById("female").value;
    var other = document.getElementById("other").value;
    var hobby1 = document.getElementById("hobby1").value;
    var hobby2 = document.getElementById("hobby2").value;
    var hobby3 = document.getElementById("hobby3").value;
    var file = document.getElementById("filetoupload").value;
    var patt = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/;
    var res = patt.test(email);
    
    if (fname == "") {
     document.getElementById("err-fname").innerHTML="Please fill out name";
      return false;
    }
    if(email == ""){
        document.getElementById("err-email").innerHTML="Please provide a valid email";
        return false;
    }else if(!res){

      document.getElementById("err-email").innerHTML="Email format is not correct";
      return false; 
    }
    if (pass == "") {
     document.getElementById("err-pass").innerHTML="Please fill out password";
      return false;
    }else if(pass.length < 6){
        document.getElementById("err-pass").innerHTML="Password have to 6 character long";
    }
    
    if (cmt == "" || cmt.length < 5 ) {
        document.getElementById("err-cmt").innerHTML="Write something here";
        return false;
    }
   
    if (file == "") {
        document.getElementById("err-file").innerHTML="Upload your  file";
        return false;
    }
    
}