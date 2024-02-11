window.onload=function(){
    render();
}
   
const firebaseConfig = {
    apiKey: "AIzaSyAYLwzpgJpip0ielFxkv1qqVDaItvApP_o",
    authDomain: "edukas1tutor.firebaseapp.com",
    databaseURL: "https://edukas1tutor-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "edukas1tutor",
    storageBucket: "edukas1tutor.appspot.com",
    messagingSenderId: "805920549337",
    appId: "1:805920549337:web:3bc3dacc6136536956d1c8",
    measurementId: "G-Y8B5CQYEWN"
  };


firebase.initializeApp(firebaseConfig); 
const auth = firebase.auth(); 
const database = firebase.database(); 
var database_ref = database.ref(); 

function render(){
    window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}


    function signup(){
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var mobilenum=document.getElementById("phone").value

        var user_data = {
            name: name,
            email: email,
            mobile: mobilenum
          }

        localStorage.setItem("userdata", JSON.stringify(user_data))

        if(name=="" || email=="" ||mobilenum.length<10){
            document.getElementById("error").innerHTML="Please fill all the fields!"
            return
        }
        document.getElementById("error").innerHTML=""
        var phonenumber= "+91"+mobilenum;
        console.log(phonenumber)

        firebase.auth().signInWithPhoneNumber(phonenumber,window.recaptchaVerifier).then(function(confirmResult){
        window.confirmResult=confirmResult;
        coderesult=confirmResult;
        console.log(coderesult);
        var a=document.getElementById("signupform");
        a.remove();
        var b=document.getElementById("otpverify").style.visibility="visible";
                
        }).catch(function(error){
        document.getElementById("error").innerHTML=error.message;
        })
                
        }
        
        
        function verify(){
            var storedData = localStorage.getItem("userdata");
            var userData = JSON.parse(storedData);  

            var user_data = {
                name: userData.name,
                email: userData.email,
                mobile: userData.mobile
            }
    
            var code=document.getElementById("otpenter").value;
            coderesult.confirm(code).then(function(result){
            var user=result.user;
              
            database_ref.child('users/' + user.uid).set(user_data)

            localStorage.removeItem("userdata")
            window.location.href = "index.html"
            }).catch(function(error){
            document.getElementById("errorotp").innerHTML=error.message;
            })
            }    


            function login(){

                var mobilenum = document.getElementById("loginphone").value
                var phonenumber= "+91"+mobilenum;
                console.log(phonenumber)
        
                firebase.auth().signInWithPhoneNumber(phonenumber,window.recaptchaVerifier).then(function(confirmResult){
                window.confirmResult=confirmResult;
                coderesult=confirmResult;
                console.log(coderesult);
                document.getElementById("successotp").innerHTML="OTP sent to your mobile number!"
                document.getElementById("btn-login").remove();
                document.getElementById("recaptcha-container").remove();
                        
                }).catch(function(error){
                document.getElementById("errorlogin").innerHTML=error.message;
                })
                        
            }

            function verify_login(){
        
                var code=document.getElementById("loginotp").value;
                coderesult.confirm(code).then(function(result){
                var user=result.user;

                firebase.database().ref('users/'+user.uid).once('value').then(function(snapshot){
                    var name=snapshot.val().name;
                    if(name=="" || name==undefined || name=="undefined"|| name==null){
                        document.getElementById("errorlogin").innerHTML="No Accounts found with this number! Sign up Now...!"
                        setTimeout(() => {
                            window.location.href = "signup.html"
                        }, 3000);
                    }
                    else{
                        window.location.href = "index.html"
                    }
                }).catch(function(err){
                    document.getElementById("errorlogin").innerHTML="No Accounts found with this number! Sign up Now...!"
                    setTimeout(() => {
                        window.location.href = "signup.html"
                    }, 3000);
                })
            
                }).catch(function(error){
                document.getElementById("errorlogin").innerHTML=error.message;
                })
                }    
    
    


            function checklogincutoff(){
                firebase.auth().onAuthStateChanged(function(user) {
                    if (user) {
                      var uid = user.uid;
                      var phoneNumber = user.phoneNumber;
                      console.log("User is logged in with UID:", uid);
                    
                    } else {
                      // User is signed out.
                      console.log("User is not logged in.");
                      document.getElementById("cutoffcalcform").style.display = "none";
                      document.getElementById("notlogged").style.display = "block";

                    }
                })
            }
    

            function checklogin(){
                firebase.auth().onAuthStateChanged(function(user) {
                    if (user) {
                      var uid = user.uid;
                      var phoneNumber = user.phoneNumber;
                      console.log("User is logged in with UID:", uid);
                      return true;
                    
                    } else {
                      // User is signed out.
                      console.log("User is not logged in.");
                      return false;

                    }
                })
            }

            function Calculatecutoff() {

                if(!checklogin){
                    window.alert("Not logged in")
                    return;
                }
                var maths = parseFloat(document.getElementById("maths").value);
                var chemistry = parseFloat(document.getElementById("chemistry").value);
                var physics = parseFloat(document.getElementById("physics").value);
            
                // Perform your cutoff calculation
                var cutoff = (maths / 2) + ((chemistry + physics) / 4);
            
                // Get the <p> element where you want to display the cutoff value
                var cutoffDisplay = document.getElementById("cutoffDisplay");
            
                // Update the content of the <p> element with the cutoff value
                cutoffDisplay.textContent = "Cutoff Value: " + cutoff;
            
                // Change the color of the cutoff value to red and adjust font weight and style
                cutoffDisplay.style.color = "red";
                cutoffDisplay.style.fontWeight = "bold"; // Adjusted to fontWeight
                //cutoffDisplay.style.fontStyle = "italic"; // Adjusted to fontStyle
                cutoffDisplay.style.backgroundColor = "sandle";
               
                cutoffDisplay.style.fontSize ="30px";
            }
            
            