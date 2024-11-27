### Live Demo

https://td-openai-codex-app.netlify.app/

<img width="1466" alt="Screenshot 2023-04-13 at 22 27 50" src="https://user-images.githubusercontent.com/34137087/231926715-9352d4f7-ce99-4a57-ba7f-350dea28b520.png">

# Setup

- Install [Node](https://nodejs.org/en/download/)
- Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Clone the repository `https://github.com/tddag/open_ai_codex_app`
- Install server dependencies `cd server && npm install`
- Install client dependencies `cd client && npm install`
- Setup [OpenAI](https://platform.openai.com/)
- Setup environment variables:
  - <table>
        <tr>
            <th>Variable</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>OPENAI_API_KEY</td>
            <td>sk-proj-pIq...</td>
            <td>OpenAI API Key</td>
        </tr>                                                 
    </table>
- Run server `cd server && npm run server`
- Run client `cd client && npm run dev`

# Technologies/Libraries

- ExpressJS: Web Server
- Vite: FrontEnd build tool
- OpenAI: AI models APIs
- nodemon: automatically restarts the server
- cors: enables Cross-Origin Resource Sharing, handle requests from different origins
- dotenv: load .env variables into process.env

## To run on local, follow below steps

### Navigate to server folder

`cd server`

### Install dependencies

`npm i`

### Run server

`npm run server`

### Navigate to client folder

`cd client`

### Install dependencies

`npm i`

### Run client app

`npm run dev`
