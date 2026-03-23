function Login() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>

      <div className="card p-4 shadow">
        <input className="form-control mb-3" placeholder="Email" />
        <input className="form-control mb-3" placeholder="Password" />
        <button className="btn btn-success w-100">Login</button>
      </div>
    </div>
  );
}

export default Login;