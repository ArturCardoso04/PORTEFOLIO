import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "./config/env.js";
import contactRoutes from "./routes/contactRoutes.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { notFound } from "./middleware/notFound.js";
import { apiRateLimiter } from "./middleware/rateLimiter.js";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: env.clientOrigin,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(morgan(env.isProduction ? "combined" : "dev"));
app.use("/api", apiRateLimiter);

app.get("/health", (_request, response) => {
  response.status(200).json({
    status: "ok",
    service: "artur-portfolio-api",
    timestamp: new Date().toISOString()
  });
});

app.use("/api/contact", contactRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(env.port, () => {
  console.log(`API ready on http://localhost:${env.port}`);
});
