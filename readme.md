# MVP product generated with scalability in mind.

- To be used as scaffold.
- No framework used.
- main.js without HTTP logic.
- api folder in charge of that(endpoints, fetch, error management).
- Standard contact page with working contact email forms

### intended flow with Netlify (We use netlify so we can use the serverless functions):
- User sends mail > main.js > sendContactEmail(data) > email.ts > post('/api/contact', data) > client.ts > fetch() > Netlify Function > Nodemailer > email

the netlify function uses Nodemailer and is written in vanilla JS so we don't need to transpile it. Netlify can execute it directly in its Node.js runtime.

### Technologies
- Vanilla JS
- Typescript
- Vite
- Node
- Netlify serverless functions

### Things to improve
- Testing
- Styles
- accessibility
- Responsive elements
- Security/validations