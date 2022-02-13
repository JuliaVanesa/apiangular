import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config/config.js';

const arrayUser = [

    {
  
      id: "00",
  
      email: "admin@gmail.com",
  
      name: "Administrador",
  
      password: "12345678",
  
      role: "admin",
  
    },
  
  
  
    {
  
      id: "000",
  
      email: "user@gmail.com",
  
      name: "Gisella",
  
      password: "12345678",
  
      role: "user",
  
    },
  
  ];

  // Validación usuarios

export const validateCredentials = (req, res) => {

    const credentials = req.body;

    const indexUser = arrayUser.findIndex(

      (user) => user.name === credentials.user

    );

    if (indexUser >= 0) {

      const payload = {

        id: arrayUser[indexUser].id,

        email: arrayUser[indexUser].email,

        name: arrayUser[indexUser].name,

        password: arrayUser[indexUser].password,

        role: arrayUser[indexUser].role,

      };

      //me genera el token

      const token = jwt.sign(payload, SECRET_KEY);

      res.json({

        status: "OK",

        token: token,

        message: "Valid user",

      });

    } else {

      res.json({

        status: "NOT OK",

        message: "Invalid user or password",

      });

    }

  };

// export const validateCredentials = (req, res) => {
//     const credentials = req.body;

//     if(credentials.user === 'test' && credentials.password === 'test') {

//         const payload = {
//             user: credentials.user,
//             userName: 'test user',
//             mail: 'test_user@gmail.com',
//             role: 'admin'
//         };

//         const token = jwt.sign(payload, SECRET_KEY);
//         res.json({
//             status: 'OK',
//             token: token
//         })

//     } else {
//         res.json({
//             status: 'NOT OK',
//             msg: 'invalid user or password'
//         })
//     }
// }

// export const validarUsuario = (req, res) => {

//     const token = req.header('x-token');

//     if(!token) {
//         return res.status(401).json({
//             ok: false,
//             msg:'error en el token'
//         })
//     }


//     return res.json({
//         ok: true,
//         msg: 'validación',
//         token
//     });
// }

