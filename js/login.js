$("form").submit(function(e){
    e.preventDefault()

    
    var email = $("#email").val()
    var password = $("#password").val()


    //Sign In User with Email and Password
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if(error) {
            $("#info").html(errorMessage)
        } 
        
    });
});

firebase.auth().onAuthStateChanged(user => {
  if(user) {
    window.location = 'admin.html'; //After successful login, user will be redirected to admin.html
  }
});

