<div align="center">
<h2>Post My Message</h2>
<h4>Send a Sms or a beautiful quote to your friend by a simple POST request.</h4>
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

## 🚀 Deployment

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 🙏 Support

If you liked the project, please consider giving it a ⭐️
