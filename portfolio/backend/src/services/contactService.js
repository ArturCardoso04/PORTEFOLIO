import { env } from "../config/env.js";

export const contactService = {
  async send(message) {
    const payload = message.toJSON();

    console.info("New portfolio contact message", {
      id: payload.id,
      to: env.contactRecipient,
      from: payload.email,
      subject: payload.subject
    });

    return {
      id: payload.id,
      recipient: env.contactRecipient,
      receivedAt: payload.createdAt
    };
  }
};
