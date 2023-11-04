
# API de Envio de E-mail com Node.js e Express

Este é um exemplo de uma API Node.js que permite o envio de e-mails usando o framework Express e a biblioteca nodemailer. A API recebe dados sobre o e-mail a ser enviado e utiliza o serviço SMTP do Gmail para entregá-lo.

## Pré-requisitos

Antes de utilizar esta API, você precisará ter o Node.js instalado no seu sistema. Você também deve configurar corretamente as credenciais de e-mail e as informações do servidor SMTP no código.

## Instalação

1. Clone este repositório:

2. Acesse o diretório do projeto:

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure as credenciais de e-mail e o servidor SMTP no arquivo `app.js`:

   ```javascript
   // Configure as informações do servidor SMTP e as credenciais de e-mail
   let config = nodeMailer.createTransport({
     host: 'smtp.gmail.com',
     port: 587,
     auth: {
       user: 'seu-email@gmail.com',
       pass: 'sua-senha'
     }
   });
   ```

5. Inicie o servidor:

   ```bash
   node app.js
   ```

## Uso

Para enviar um e-mail, faça uma solicitação POST para a rota `/envio-email` com o corpo da solicitação contendo informações sobre o e-mail a ser enviado. Aqui está um exemplo de como você pode fazer isso usando o comando `curl`:

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "assunto": "Assunto do E-mail",
  "email": "destinatario@example.com",
  "mensagem": "Conteúdo do e-mail"
}' http://localhost:3000/envio-email
```

A API responderá com um JSON indicando se o e-mail foi enviado com sucesso ou se ocorreu algum erro.

## Contribuindo

Fique à vontade para contribuir para este projeto. Sinta-se à vontade para abrir problemas, solicitações de pull ou propor melhorias.
