import { ErrorLogin } from "@/model/user";

export const validateLogin = (email: string, password: string): ErrorLogin => {
    const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
let vari: ErrorLogin = {email: null, password: null}
    if(!emailRegx.test(email)){
        vari.email = "Asegurate de ingresar un correo valido";
    }

    if(password.length === 0){
        vari.password = "Ingresa una contraseña"
    }

  return vari;
};
