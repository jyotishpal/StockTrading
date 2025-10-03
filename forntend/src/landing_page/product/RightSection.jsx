function RightSection({ imgUrl, heading, description, link1 }) {
  return (
    <div className="container px-5">
        <div className="row d-flex align-items-center">
        <div className="col-6 ">
          <h1 className="fs-3 mb-3  ">{heading}</h1>
          <p className="mb-5" style={{ lineHeight: "2rem" }}>
            {description}
          </p>

          <a href="#" className="me-5">
            {link1}
          </a>
        </div>
        <div className="col-1"></div>
         <div className="col-5 d-flex align-items-start">
          <img src={imgUrl} alt="ProductImage" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
