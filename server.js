const express = require('express')
const bodyParser =require("body-parser");
const cors = require('cors')
//import express, { response } from "express";
//import cors from "cors";
const app = express();

app.use(cors())

const jsonParser = bodyParser.json();

app.post("/validar", jsonParser, async (req, res) => {
    let dados = req.body
      console.log(dados)
      if(dados.login == 'joao' && dados.senha == 'senha'){
        res.send({response:"success"})
      }else{
        res.status(401).send({"error":"credenciais invalidas"});
      }
      
    
    
});

app.post("/validar2", jsonParser, async (req, res) => {
  let dados = req.headers
    console.log(dados)
    if(dados.login == 'joao' && dados.senha == 'senha'){
      res.send({response:"success"})
    }else{
      res.status(401).send({"error":"credenciais invalidas"});
    }
    
  
  
});


app.listen(9001, () => {
    console.log("it's over 9000!!!!!!!!!!");
  });