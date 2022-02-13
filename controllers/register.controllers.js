
const registerContent = [];

export const createNewUser = (req, res) => {

    
    let user = req.body; 

   
    let index = registerContent.findIndex(u => u.email == user.email); 

    //Si no existe, lo agregamos
    if (index == -1) {
        registerContent.push(user);

        res.send({
            status: 'OK',
            registerContent
        });

         
    } else {
        res.send({
            status: 'NOT OK',
            registerContent
        })
    }
};

//Funcion que devuelve todo el carrito
export const getAllUser = (req, res) => {
    res.send(registerContent);
}