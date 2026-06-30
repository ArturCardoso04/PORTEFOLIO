import { ContactMessage } from "../models/ContactMessage.js";
import { contactService } from "../services/contactService.js";
import { validateEmail } from "../utils/validateEmail.js";

export async function createContactMessage(request, response) {
  const { name, email, subject, message } = request.body || {};
  const errors = {};

  if (!name || name.trim().length < 2) errors.name = "Nome invalido.";
  if (!validateEmail(email)) errors.email = "Email invalido.";
  if (!subject || subject.trim().length < 4) errors.subject = "Assunto invalido.";
  if (!message || message.trim().length < 18) errors.message = "Mensagem demasiado curta.";

  if (Object.keys(errors).length) {
    return response.status(422).json({
      message: "Dados de contacto invalidos.",
      errors
    });
  }

  const contactMessage = new ContactMessage({
    name,
    email,
    subject,
    message,
    source: "portfolio"
  });

  const result = await contactService.send(contactMessage);

  return response.status(201).json({
    message: "Mensagem recebida com sucesso.",
    data: result
  });
}
