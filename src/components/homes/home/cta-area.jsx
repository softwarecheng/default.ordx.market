import Link from 'next/link';
import React from 'react';


const cta_content = {
    bg_img: "/assets/img/cta/cta-bg.png",
    title: "",
    info: <>To accelerate the growth of BTCName and strengthen its<br/> ecosystem, We are offering free BTC Name trading before block height 863,000! </>,
    btn_text: "Get Started Now",
}
const {bg_img, title, info, btn_text}  = cta_content


const CtaArea = () => {
    return (
        <>
             <div className="tp-cta-area p-relative">
               {/* <div className="tp-cta-grey-bg grey-bg-2"></div> */}
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="tp-cta-bg" style={{backgroundImage: `url(${bg_img})`}}>
                           <div className="tp-cta-content text-center">
                              <h3 className="tp-section-title-lg text-white">{title}</h3>
                              <p>{info}</p>
                              <Link className="tp-btn-green" href="https://app.ordx.market/market?type=ns">{btn_text}</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default CtaArea;