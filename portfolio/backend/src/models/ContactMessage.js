export class ContactMessage {
  constructor({ name, email, subject, message, source }) {
    this.id = crypto.randomUUID();
    this.name = name.trim();
    this.email = email.trim().toLowerCase();
    this.subject = subject.trim();
    this.message = message.trim();
    this.source = source;
    this.createdAt = new Date().toISOString();
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message,
      source: this.source,
      createdAt: this.createdAt
    };
  }
}
