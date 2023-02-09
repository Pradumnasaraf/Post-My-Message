<div align="center">
<h2>Post My Message</h2>
<h4>Send a sms or a beautiful quote to your friend by a simple POST request.</h4>
</div>

## 👨‍💻 Tech stack

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Twilio](https://www.twilio.com/)
- [Vercel](https://vercel.com/)

## 🛠️ Using the Routes

**Send a custom message to a number - `/sendsms` POST method.**

It sends a custom message to the number provided. The request body should have a `"phone"` and `"message"`property that contains the receiver's number and a message.

<!-- Note: Sender's number will be your Twilio number, which you configure in the [.env](/.env_sample) -->

```JSON
{
    "message": "Hey, this message is from Twilio",
    "phone": "+111111111111"
}
```

**Send a random quote to a number - `/sendquote` POST method.**

It sends a random quote to the number provided. The request body should have a `"phone"` property that contains the receiver's number.

```JSON
{
    "phone": "+111111111111"
}
```

## 👨‍💻 Developing the API

This section includes how to test and develop API at your end. You can either run it in the cloud using **Gitpod** or run it inside a container using **docker** or choose to set up the complete environment locally.

**GitPod**

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Pradumnasaraf/OpenSource-API)

**Docker Compose**

Prerequisites - Docker and Compose installed in your local system.

> NOTE: First add the the environment variables to the `.env.example` file.

You can run below command and you can access the API at `localhost:9009`

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

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 🙏 Support

If you liked the project, please consider giving it a ⭐️
