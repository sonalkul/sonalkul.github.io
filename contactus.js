var userid, description, addBtn, msg, email;


userid = document.getElementById("userName").value;

addBtn = document.getElementById("addBtn");


const database = firebase.database();

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("Message send successful!");
    userid = document.getElementById("userName").value;
    email = document.getElementById("useremail").value;
    msg = document.getElementById("usermsg").value
    if (userid !== ""){

    database.ref('/users/userid'+userid).set({
        username: userid,
        emailId: email,
        message: msg,
    });
}
});
