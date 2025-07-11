import { SES } from "aws-sdk";
import { APIGatewayProxyEvent } from "aws-lambda";

const ses = new SES({ region: "eu-central-1" });

export const sendEmail = async (event: APIGatewayProxyEvent) => {
  console.log("Received event:", event);

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  };

  try {
    const { name, email, subject, message } = JSON.parse(event.body || "{}");

    const params = {
      Destination: { ToAddresses: ["edielton.dantas@hotmail.com"] },
      Message: {
        Body: {
          Text: { Data: `Message from ${name} (${email}):\n\n${message}` },
        },
        Subject: { Data: subject || "New Contact Form Message" },
      },
      Source: "edielton.dantas@hotmail.com",
    };

    await ses.sendEmail(params).promise();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
