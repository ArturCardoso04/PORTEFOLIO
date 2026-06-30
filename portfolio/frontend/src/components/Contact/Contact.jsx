import { useMemo, useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaTiktok
} from "react-icons/fa";
import Button from "../Buttons/Button.jsx";
import Reveal from "../Animations/Reveal.jsx";
import GlassCard from "../Cards/GlassCard.jsx";
import { contactChannels, personalInfo } from "../../utils/portfolioData.js";

const channelIcons = {
  Email: FaEnvelope,
  Telefone: FaPhone,
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
  TikTok: FaTiktok,
  Localizacao: FaMapMarkerAlt
};

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

function validate(form) {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = "Indica o teu nome.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Indica um email valido.";
  if (form.subject.trim().length < 4) errors.subject = "Escreve um assunto claro.";
  if (form.message.trim().length < 18) errors.message = "A mensagem deve ter pelo menos 18 caracteres.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const mailtoFallback = useMemo(() => {
    const subject = encodeURIComponent(form.subject || "Contacto via portefolio");
    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  }, [form]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      setStatus({ type: "error", message: "Revê os campos assinalados antes de enviar." });
      return;
    }

    setStatus({ type: "loading", message: "A enviar mensagem..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) throw new Error("contact_request_failed");

      setForm(initialForm);
      setStatus({
        type: "success",
        message: "Mensagem enviada com sucesso. Obrigado pelo contacto."
      });
    } catch {
      setStatus({
        type: "error",
        message: "Nao consegui ligar a API neste momento. Podes enviar por email com o botao abaixo."
      });
    }
  };

  return (
    <section className="section contact-section" id="contacto" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <Reveal className="contact-copy">
          <span className="section-kicker">Contacto</span>
          <h2 id="contact-title">Vamos transformar uma boa ideia em algo real.</h2>
          <p>
            Estou aberto a oportunidades, estagios, colaboracoes e projetos ligados a
            frontend, tecnologia, redes, sistemas, inteligencia artificial e automacao.
          </p>

          <div className="contact-channels">
            {contactChannels.map((channel) => {
              const Icon = channelIcons[channel.label] || FaEnvelope;
              return (
                <a key={channel.label} href={channel.href} target={channel.href.startsWith("http") ? "_blank" : undefined} rel={channel.href.startsWith("http") ? "noreferrer" : undefined}>
                  <Icon aria-hidden="true" />
                  <span>{channel.label}</span>
                  <strong>{channel.value}</strong>
                </a>
              );
            })}
          </div>
        </Reveal>

        <GlassCard className="contact-card" as="div">
          <form className="contact-form" onSubmit={submitForm} noValidate>
            <div className="form-row">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={updateField}
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name ? <span id="name-error">{errors.name}</span> : null}
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email ? <span id="email-error">{errors.email}</span> : null}
            </div>

            <div className="form-row">
              <label htmlFor="subject">Assunto</label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={updateField}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              />
              {errors.subject ? <span id="subject-error">{errors.subject}</span> : null}
            </div>

            <div className="form-row">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={updateField}
                rows="5"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message ? <span id="message-error">{errors.message}</span> : null}
            </div>

            <div className={`form-status form-status--${status.type}`} role="status">
              {status.message}
            </div>

            <div className="contact-form__actions">
              <Button type="submit" icon={FaPaperPlane} disabled={status.type === "loading"}>
                Enviar mensagem
              </Button>
              {status.type === "error" ? (
                <Button href={mailtoFallback} variant="secondary" icon={FaEnvelope}>
                  Enviar email
                </Button>
              ) : null}
            </div>
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
