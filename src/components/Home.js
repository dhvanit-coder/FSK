function Home() {
  return (
    <div className="container mt-4">

      {/* HERO SECTION */}
      <div className="bg-dark text-white text-center p-5 rounded hero">
        <h1>Welcome to My Website 🚀</h1>
        <p>Build amazing things with React & Bootstrap</p>
        <button className="btn btn-primary mt-3">Get Started</button>
      </div>

      {/* FEATURES */}
      <div className="row mt-5 text-center">
        <div className="col-md-4">
          <div className="card shadow p-4 feature-card">
            <h4>⚡ Fast</h4>
            <p>Lightning fast performance</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-4 feature-card">
            <h4>🎨 Design</h4>
            <p>Modern UI design</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-4 feature-card">
            <h4>🔒 Secure</h4>
            <p>Safe and secure system</p>
          </div>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="mt-5 text-center">
        <img 
          src="https://via.placeholder.com/800x300"
          className="img-fluid rounded shadow"
          alt="banner"
        />
      </div>

      {/* PRICING */}
      <h2 className="mt-5 text-center">Pricing</h2>

      <div className="row mt-4 text-center">
        <div className="col-md-4">
          <div className="card border-primary p-4 pricing-card">
            <h3>Basic</h3>
            <h4>₹99</h4>
            <button className="btn btn-outline-primary">Buy</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-success p-4 pricing-card">
            <h3>Pro</h3>
            <h4>₹199</h4>
            <button className="btn btn-success">Buy</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-danger p-4 pricing-card">
            <h3>Premium</h3>
            <h4>₹299</h4>
            <button className="btn btn-danger">Buy</button>
          </div>
        </div>
      </div>

      {/* BLOG */}
      <h2 className="mt-5 text-center">Blog</h2>
      <div className="card p-4 mt-3 shadow blog-card">
        Latest Updates Coming Soon...
      </div>

    </div>
  );
}

export default Home;