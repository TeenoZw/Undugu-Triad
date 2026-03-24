import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="page-shell">
      <main className="section success-shell">
        <article className="contact-card success-card">
          <p className="eyebrow">Thank you</p>
          <h1>Your enquiry has been sent.</h1>
          <p>
            A member of the Undugu Triad team will review your message and respond
            through <strong>info@undugutriad.co.zw</strong>.
          </p>
          <Link className="button" href="/">
            Back to homepage
          </Link>
        </article>
      </main>
    </div>
  );
}
