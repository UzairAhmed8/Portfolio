function submit(){
    document.getElementById("userName").Value;
    document.getElementById("email").Value;
    document.getElementById("subject").Value;
    document.getElementById("message").Value;

    let parans = {
        full_name: fullName,
        subject: subject,
        email: userEmail,
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