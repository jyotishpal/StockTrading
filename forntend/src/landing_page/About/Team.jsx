function Team() {
  return (
    <div className="container " style={{ paddingLeft: "6%" }}>
      <h1 className="text-center mt-5 mb-5 fs-3">People</h1>
      <div className="row">
        <div className="col-6 text-center">
          <img
            style={{ width: "50%", height: "60%", borderRadius: "100%" }}
            src="/media/images/jyotish.png"
            alt="TeamImage"
          />
          <p className="mt-2 fs-4">Jyotish Pal</p>
          <p>Founder,CEO</p>
        </div>
        <div className="col-6 fs-6" style={{ lineHeight: "2.0rem",paddingRight:"12%" }}>
          <p>
            Jyotish Pal bootstrapped and founded his journey in tech to overcome
            the hurdles faced during his learning and project building journey.
            Today, he is exploring and building impactful projects.
          </p>

          <p>
            He is passionate about software development, startups, and problem
            solving.
          </p>

          <p> Playing cricket is his zen.</p>

          <p>
            Connect on{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Homepage{" "}
            </a>{" "}
            /
            <a href="#" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /
            <a
              href="https://www.linkedin.com/in/jyotishpal123/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
