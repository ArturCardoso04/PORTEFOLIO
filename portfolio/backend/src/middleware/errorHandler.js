export function errorHandler(error, _request, response, _next) {
  console.error(error);

  response.status(error.statusCode || 500).json({
    message: error.publicMessage || "Erro interno da API.",
    requestId: crypto.randomUUID()
  });
}
