// var express = require('express');
// const fs = require('fs');
// function verifyinscription(){
//     var fn,ln,email,passwd,passwd2;
//     fn=("firstname").val ();
//     ln=("lastname").val();
//     Email=("email").val();
//     passwd=("passwd").val();
//     passwd2=("password2").val();
    
//     var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,6}\.[a-z]{2,4}$/;
//     var regexpasswd = /^[a-zA-Z*'-_^"@$#]{8,30}$/;
//     var regexname = /^[a-zA-Z]{3,16}$/;
//     var cpt=0;
//      if(fn=="" || ln=="" || passwd=="" || passwd2=="" || Email=="")
//         {
//             window.alert(" Tous les champs doivent être remplis");
//             cpt++;
//             console.log(cpt);
//         }
       
//      if(fn!="" && ln!="" && passwd!="" && passwd2!="" && Email!="")
//     {
//         if(!regex.test(Email) || !regexpasswd.test(passwd) || !regexname.test(fn) || !regexname.test(ln))
//         {   
//             window.alert(" Respectez les formats des elements entrés ");
//             cpt++;
//             console.log(cpt);
//         }
//         else if(passwd!==passwd2){
//             window.alert(" les mots de passe ne sont pas identiques ");
//             cpt++;
//             console.log(cpt);
//         }
//     }
   
//    if(cpt==0)
//    {
//     window.confirm("l'inscription est valide. Nom : "+ln+" Prenom : "+fn+" email :"+Email);
//     console.log(cpt);
//    }

// }


// module.exports = (function() { 
//     var api = express.Router();
//     api.route("/SignUp").post(function(req, res) { 

//                                                 //Recuperation d'un fichier Json
                                                
                                                
//                                                 fs.readFile('Data/Login.json', 'utf8', (err, jsonString) => {
//                                                     if (err) {
//                                                         console.log("File read failed:", err)
//                                                         return
//                                                     }
//                                                 data =JSON.parse(jsonString);

//                                                 filtred=data.filter((e)=> {if(e.username===req.body.username || e.password===req.body.password && e.email===req.body.email  || e.cin===req.body.cin ){ return e ; }})
//                                                 if(filtred.length===1){
//                                                     res.send({
//                                                         request: false 
//                                                     });
//                                                 }   
//                                                   else{                                                      

//                                                 //Get parameters
//                                                 data.push(req.body);
//                                                 //update file data Login.json
//                                                 dataUpdated=JSON.stringify(data,null,4);
//                                                 fs.writeFileSync('Data/Login.json', dataUpdated);
//                                                 //Response to clients
//                                                 res.send({request:true,data});
//                                                 res.end();


//                                             }
//                                             }) 
//     });
//     return api;
// })();