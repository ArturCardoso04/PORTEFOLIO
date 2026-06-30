import dotenv from "dotenv";

dotenv.config();

export const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  isProduction: process.env.NODE_ENV === "production",
  port: Number(process.env.PORT || 3001),
  clientOrigin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
  contactRecipient: process.env.CONTACT_RECIPIENT || "arturfcardoso04@gmail.com"
};
