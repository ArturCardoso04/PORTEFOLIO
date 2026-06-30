export function notFound(request, response) {
  response.status(404).json({
    message: `Rota nao encontrada: ${request.method} ${request.originalUrl}`
  });
}
