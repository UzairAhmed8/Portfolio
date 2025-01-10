function submit(){
    let fullName =document.getElementById("userName").Value;
    let email = document.getElementById("email").Value;
    let subject = document.getElementById("subject").Value;
    let message = document.getElementById("message").Value;

    let parans = {
        full_Name: fullName,
        subject: subject,
        email: email,
        message: message,
    }

    emailjs.send("service_i42yo9a" , "template_pw2s627" , parans).then((res) => {
        alert("Response Sent");
        console.log(res)
    })
    .catch((_error) => {
        alert("Failed to Send")
        console.log("error")})
}
