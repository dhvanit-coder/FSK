function Contact() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contact Us</h1>

      <div className="card p-4 shadow">
        <input className="form-control mb-3" placeholder="Your Name" />
        <input className="form-control mb-3" placeholder="Your Email" />
        <textarea className="form-control mb-3" placeholder="Message"></textarea>
        <button className="btn btn-primary w-100">Send Message</button>
      </div>
    </div>
  );
}

export default Contact;