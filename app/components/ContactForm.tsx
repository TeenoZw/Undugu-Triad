"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      body.append(key, String(value));
    }

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      router.push("/success");
    } catch {
      setSubmitError("Something went wrong while sending your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} name="contact">
      <input type="hidden" name="form-name" value="contact" />

      <label>
        Full name
        <input type="text" name="name" placeholder="Your full name" required />
      </label>

      <label>
        Email address
        <input type="email" name="email" placeholder="you@example.com" required />
      </label>

      <label>
        Phone number
        <input type="tel" name="phone" placeholder="+263 ..." />
      </label>

      <label>
        Enquiry type
        <select name="enquiry_type" required defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option value="product-supply">Product supply</option>
          <option value="installation">Installation</option>
          <option value="interior-finishing-design">Interior finishing design</option>
          <option value="general-engineering">General engineering</option>
        </select>
      </label>

      <label>
        Project details
        <textarea
          name="message"
          rows={6}
          placeholder="Tell us what you need, the location, and your timeline."
          required
        />
      </label>

      {submitError ? <p className="form-error">{submitError}</p> : null}

      <button className="button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send enquiry"}
      </button>
    </form>
  );
}
