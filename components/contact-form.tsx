"use client";
import { useState, type FormEvent } from "react";

export function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) { setStatus("Email enquiries will be available soon. Your message has not been sent."); return; }
    const data = new FormData(event.currentTarget);
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`Website enquiry from ${data.get("name")}`)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email draft is ready to open. Please send it from your email app. If it does not open, use the email link alongside this form.");
  }
  return <form onSubmit={submit}>
    <div className="form-row"><label>Name<input name="name" autoComplete="name" placeholder="First and last name" required maxLength={120}/></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254}/></label></div>
    <label>Message<textarea name="message" placeholder="Enter your message" rows={4} required maxLength={3000}/></label>
    <div className="form-bottom"><button className="button light" type="submit">Prepare an email <span aria-hidden="true">↗</span></button><p>{email ? "Opens in your email app." : "Email enquiries coming soon."}</p></div>
    <p className="form-status" role="status">{status}</p>
  </form>;
}
