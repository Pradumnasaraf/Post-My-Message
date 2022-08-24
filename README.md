<div align="center">
<h2>Twilio Messaging APP</h2>
<h4>This app delivers a message to your friend with a simple POST request.</h4>
</div>

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Pradumnasaraf/Twilio-messaging-app/)

---

## 👨‍💻 Tech stack

<!-- prettier-ignore -->
<img height="35px" src="https://user-images.githubusercontent.com/51878265/185637172-96ca680f-8d4f-4d7f-939b-e9978ccedb4e.png">  <img height="35px" src="https://user-images.githubusercontent.com/51878265/185637188-8f6888e6-9fd4-46fb-8f21-ad83c4d3537c.png">  <img height="35px" src="https://user-images.githubusercontent.com/51878265/185637193-86c58c70-d00e-42a3-9cc1-1f717f6f7309.png">

## 📷 Live Screenshot

<p align="center"><img src="https://user-images.githubusercontent.com/51878265/186444170-309fec99-454f-45b4-a11f-bfdb6655db20.png" height="500"></p>

## 🛣️ Routes

**GET:**

- `/` - Homepage

**POST:**

- `/sendsms` - Sends an SMS to a particular number with a custom message
- `/sendquote` - Send a SMS with a random quote to a particular number.

## 🛠️ Using the project.

> `/sendsms` POST method.

It sends a custom message to the number provided. The request body should have a `"phone"` and `"message"`property that contains the receiver's number and a message.

<!-- Note: Sender's number will be your Twilio number, which you configure in the [.env](/.env_sample) -->

```JSON
{
    "message": "Hey, this message is from Twilio",
    "phone": "+111111111111"
}
```

> `/sendquote` POST method.

It sends a random quote to the number provided. The request body should have a `"phone"` property that contains the receiver's number.

Note: Sender's number will be your Twilio number, which you configure in the [.env](/.env_sample)

```JSON
{
    "phone": "+111111111111"
}
```

## 🎥 API Testing Demo

https://user-images.githubusercontent.com/51878265/186445191-11da0678-a12d-4383-a918-e395e22c06aa.mp4
