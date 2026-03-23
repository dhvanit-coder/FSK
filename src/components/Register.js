function Register() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Register</h2>

      <div className="card p-4 shadow">
        <input className="form-control mb-3" placeholder="Name" />
        <input className="form-control mb-3" placeholder="Email" />
        <input className="form-control mb-3" placeholder="Password" />
        <button className="btn btn-primary w-100">Register</button>
      </div>
    </div>
  );
}

export default Register;