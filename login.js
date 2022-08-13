usuario="Pruebafront@coex.com"
pass="BigMind"

function logIn(){
    let user=document.getElementById("user").value
    let password=document.getElementById("password").value

    console.log(user,password)

    if(user == usuario && password == pass){
        window.location.href = "index.html"   
    } else if(user == usuario && password != pass){
        alert("Usuario correcto. Contraseña Invalida")
        }else if(user != usuario && password == pass){
            alert("Usuario incorrecto. Contraseña valida")
            }else if(user != usuario && password != pass){
                 if(user=="" && password==""){
                    alert("Usuario y Contraseña Vacios")
                } else if(user==""){
                    alert("Usuario Vacio")
                    }else if(password==""){
                        alert("Contraseña Vacia")
                        }else if(user.length<6 && password.length<6){
                            alert("Usuario y Contraseña menor de 6 carácteres")
                            }else if(user.length<6){
                                alert("Usuario menor de 6 carácteres")
                                }else if( password.length<6 ){
                                    alert("Contraseña menor de 6 carácteres")
                                    }else {
                                        alert("Credenciales invalidas")
                                        }
    
    }
}
