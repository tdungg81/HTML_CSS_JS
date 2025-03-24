let users= JSON.parse(localStorage.getItem("users"))||[];
        function login() {
            let email=document.getElementById("email").value;
            let pass= document.getElementById("password").value;
            for(let i=0; i<users.length;i++){
                if(users[i].email==email&&users[i].password==pass){
                    window.location="./home.html";
                    return; 
                }
            }
            alert("tên đăng nhập hoặc mật khẩu không đúng");
            
        }