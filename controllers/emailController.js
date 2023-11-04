const {request, response} = require('express');
const nodeMailer = require('nodemailer')


const envioEmail = (req = request, resp = response) => {
  let body = req.body;


  let config = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    post:587,
    auth: {
      user: 'testandoapigreja@gmail.com',
      pass: 'owce xdin eldb pajn'
    }
  });


  const opcoes = {
    from: 'Teste',
    subject: body.assunto,
    to: body.email,
    text: body.mensagem
  };



  config.sendMail(opcoes, function(error, result){

    if (error) return resp.json({ok:false, msg:error});

    return resp.json({
      ok:true,
      msg:result
    });
  })

}


module.exports = {
  envioEmail
}