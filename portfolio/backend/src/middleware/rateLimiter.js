const WINDOW_MS = 60_000;
const MAX_REQUESTS = 80;
const clients = new Map();

export function apiRateLimiter(request, response, next) {
  const key = request.ip || "unknown";
  const now = Date.now();
  const current = clients.get(key) || { count: 0, resetAt: now + WINDOW_MS };

  if (current.resetAt < now) {
    current.count = 0;
    current.resetAt = now + WINDOW_MS;
  }

  current.count += 1;
  clients.set(key, current);

  if (current.count > MAX_REQUESTS) {
    return response.status(429).json({
      message: "Demasiados pedidos. Tenta novamente dentro de alguns instantes."
    });
  }

  return next();
}
