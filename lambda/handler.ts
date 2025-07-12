import { SES } from "aws-sdk";
import { APIGatewayProxyEventV2, APIGatewayProxyEvent } from "aws-lambda";

const ses = new SES({ region: "eu-central-1" });

export const sendEmail = async (
  event: APIGatewayProxyEventV2 | APIGatewayProxyEvent
) => {
  const headers = {
    "Access-Control-Allow-Origin":
      "https://contact-form-client-kappa.vercel.app",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "OPTIONS,POST",
    "Content-Type": "application/json",
  };

  // Handle preflight request for both HTTP API and REST API
  const method =
    (event as APIGatewayProxyEventV2).requestContext?.http?.method ||
    (event as APIGatewayProxyEvent).httpMethod;

  if (method === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "CORS preflight success" }),
    };
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body || "{}");

    const params = {
      Destination: { ToAddresses: [process.env.TO_EMAIL || ""] },
      Message: {
        Body: {
          Text: { Data: `Message from ${name} (${email}):\n\n${message}` },
        },
        Subject: { Data: subject || "New Contact Form Message" },
      },
      Source: process.env.FROM_EMAIL || "",
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
