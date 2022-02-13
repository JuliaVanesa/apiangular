import {addToCart, getCart, removeFromCart, deleteAllMovies} from "./controllers/cart.controllers.js";

import { getTest } from "./controllers/test.controllers.js";

import { validateCredentials } from "./controllers/login.controllers.js";

import express from "express"

import jwt from 'jsonwebtoken';

import { SECRET_KEY} from './config/config.js';

import { createNewUser, getAllUser } from './controllers/register.controllers.js';



export const routes = (app) => {



  app.route("/api/test").get(getTest);

  //Para el carrito

  app.route("/api/cart")

    .get(checkToken, getCart);

  app.route("/api/cart")

    .post(checkToken, addToCart);

  app.route("/api/cart")

    .delete(checkToken, removeFromCart);

  app.route("/api/cart/deleteall")
    .delete(deleteAllMovies)



  //Para el login

  app.route("/api/login")

  .post( validateCredentials);

  //Registro
  app.route("/api/register")
        .post(createNewUser)
        .get(getAllUser)

};

const checkToken = express.Router();

checkToken.use((req, res, next) => {

  let token = req.headers["authorization"];

  token = token.replace('Bearer ', '');



  if (token) {

    jwt.verify(token, SECRET_KEY, (err, decode) => {

      //Si existe error

      if (err) {

        return res.json({

            status: "NOT - OK",

            mensaje: 'Invalid token'
            

        });
        

      } else {

        req.decode = decode;

        console.log("Agregado ok");

        next();

      }

    });

  } else {

    //Si no hay token

    res.send({

        status: "NOT - OK",

        mensaje: 'Token not given'

    });

  }

});