<div align="center">

<img src="https://user-images.githubusercontent.com/51878265/218022991-bf87fcdb-973f-4dd2-8c9f-1aa887c92ae4.png" alt = "post my message banner">

<h4>Send sms or a beautiful quote to your friend by a simple POST request.</h4>

[![Format](https://github.com/Pradumnasaraf/Post-My-Message/actions/workflows/prettier.yml/badge.svg)](https://github.com/Pradumnasaraf/Post-My-Message/actions/workflows/prettier.yml) [![Publish Image to GitHub Container Registry](https://github.com/Pradumnasaraf/Post-My-Message/actions/workflows/publish-ghcr.yml/badge.svg)](https://github.com/Pradumnasaraf/Post-My-Message/actions/workflows/publish-ghcr.yml) [![Releases](https://github.com/Pradumnasaraf/Post-My-Message/actions/workflows/releases.yml/badge.svg)](https://github.com/Pradumnasaraf/Post-My-Message/actions/workflows/releases.yml)

</div>

## 👨‍💻 Tech stack

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Twilio](https://www.twilio.com/)
- [Vercel](https://vercel.com/)

## 🛠️ Using the Routes

After deploying the API the request will be on {API_BASE_URL}/{route}. This project is deployed with the base URL as [https://post-my-message.vercel.app](https://post-my-message.vercel.app/)  

**Send a custom message to a number - `/sendsms` POST method.**

It sends a custom message to the number provided. The request body should have a `"phone"` and `"message"`property that contains the receiver's number and a message. The POST body should be in JSON format.

<!-- Note: Sender's number will be your Twilio number, which you configure in the [.env](/.env_sample) -->

```JSON
{
    "message": "Hey, this message is from Twilio",
    "phone": "+111111111111"
}
```

**Send a random quote to a number - `/sendquote` POST method.**

It sends a random quote to the number provided. The request body should have a `"phone"` property that contains the receiver's number. The POST body should be in JSON format.

```JSON
{
    "phone": "+111111111111"
}
```

## 👨‍💻 Developing the API

This section includes how to test and develop API at your end. You can either run it in the cloud using **Gitpod** or run it inside a container using **docker** or choose to set up the complete environment locally.

**GitPod**

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Pradumnasaraf/Post-My-Message)

**Docker Compose**

Prerequisites - Docker and Compose installed in your local system.

> NOTE: First add the the environment variables to the `.env.example` file.

You can run below command and you can access the API at `localhost:9001`

```bash
docker compose up
```

**Local setup**

Prerequisites- Node.js installed and a Mongo server on your localhost.

> NOTE: First add the the environment variables to the `.env.example` file.

Step 1: Copy `.env.example` to `.env`.

```
npm run env
```

Step 2: Run the app in development mode.

```
npm run dev
```

You can access the API at localhost:9001

## 🛡️ License

This project is licensed under the GPL-3.0 license - see the [LICENSE](LICENSE) file for details

## 🤝 Support

If you liked the project, please consider giving it a ⭐️
