function LeftSection({imgUrl,heading,description,link1,link2,link3,link4}) {
    return ( 
        <div className="container p-5">
            <div className="row mt-3">
             <div className="col-6">
              <img src={imgUrl} alt="ProductImage" />
             </div>
             <div className="col-1"></div>
             <div className="col-5 mt-3 mb-5" >
               <h1 className="fs-3 mb-3">{heading}</h1>
               <p className="mb-5" style={{lineHeight:"2rem"}}>{description}</p>
               <div className="mb-5">
                <a href="#" className="me-5">{link1}</a>
                <a href="#">{link2}</a>
               </div>
               <div className="mb-5" >
                <a href="#" className="me-5"><img src={link3} alt="" /></a>
                <a href="" className="mb-5"><img src={link4} alt="" /></a>
              </div>
             </div>
            </div>
        </div>
     );
}

export default LeftSection;