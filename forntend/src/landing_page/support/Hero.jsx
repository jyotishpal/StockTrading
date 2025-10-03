function Hero() {
  return (
    <section className="container-fluid mt-5" id="supportSection">
      <div className="container mt-5" id="supportWraper">
        <h4 className="mt-4 ">Support Portal</h4>
        <a
          href="#"
          className="mt-4 mr-5"
          style={{ fontSize: "23px", color: "white" }}
        >
          Track Tickets
        </a>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <p className="mt-5 fs-4" id="supportParagraph">
              Search for an answer or browse help topics to create a ticket
            </p>
            <input id="inputSupport" type="text" placeholder="Eg. How do i activate F&O. Why is my order is getting rejected...." />
            <div className="mt-4 " id="linkSupport">
              <a href="#" style={{ fontSize: "14px", color: "white",marginRight:"5%" }}>Track Account Opening</a>
              <a href="#" style={{ fontSize: "14px", color: "white",marginRight:"5%" }}>Track Segment activation</a>
              <a href="#" style={{ fontSize: "14px", color: "white",marginRight:"5%" }}>Intraday Margins</a>
              <a href="#" style={{ fontSize: "14px", color: "white",marginRight:"5%" }}>Kite user manual</a>
            </div>
          </div>
          <div className="col-6">
            <p className="mt-5 fs-4" id="supportParagraph">Featured</p>
            <a href="#" style={{ fontSize: "14px", color: "white",marginLeft:"39%" }}>1.Current takeovers and Delistings-January 2024</a><br />
              <a href="#" style={{ fontSize: "14px", color: "white",marginLeft:"39%" }}>2.Latest Intraday leverage-MIS&CO</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
