// import { SocialLinksTwo } from '@/src/common/social-links';
import team_data from '@/src/data/team-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const team_content = {
    sub_title: "Hot",
    title: "Join Communities",
    des: <>Our clients are the companies and startups who <br /> make the world go round,!</>,
}
const {sub_title, title, des}  = team_content


const TeamArea = ({bg_style}) => {
    return (
        <>
           <div className={`tp-team-area ${bg_style ? " pt-120" : "blue-bg"} pb-150`}>   
               <div className="container">
                  <div className={`tp-team-section-wrapper ${bg_style && "tp-team-inner-section"} mb-70`}>
                     <div className="row align-items-end">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                           <div className={`tp-team-section-box ${bg_style && "text-center text-sm-start"}`}> 
                              <h5 className={`${bg_style ? "inner-section-subtitle" : "tp-section-subtitle-4"} pb-10`}>{sub_title}<i className="fal fa-fire"></i></h5>
                              <h3 className={`${bg_style ? "tp-section-title mb-0 text-black" : "tp-section-title-4"}`}>{title}</h3>
                           </div>
                        </div>
                        {bg_style ?
                           <div className="col-xl-6 col-lg-6 col-md-6">
                              <div className="tp-team-top-content text-center text-md-end">
                                 <Link className="tp-btn-inner tp-btn-hover alt-color-orange" href="#">
                                    <span>View All</span>
                                    <b></b>
                                 </Link>
                              </div>
                           </div>
                           :
                           <div className="col-xl-6 col-lg-6 " data-wow-duration=".9s" data-wow-delay=".5s">
                              <div className="tp-team-top-content d-flex justify-content-md-start justify-content-end">
                                 <p>{des}</p>
                              </div>
                           </div>
                        }
                     </div>
                  </div>
                  <div className="row">
                    {team_data.slice(0, 4).map((item, i)  => 
                        <div key={i} 
                          className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 
                                      tp-team-border-right tp-border-after-${item.cls} 
                                      ${bg_style && "team-inner-border-right"}`}
                                      >                             
                           <div className={`tp-team-item text-center ${bg_style && "tp-team-inner-title-color"} z-index`}>    
                              <div className="tp-team-img">
                                 <Image src={item.img} alt="theme-pure" />
                              </div>
                              <div className="tp-team-content">
                                 <h4 className="tp-team-title-sm"><Link href={item.link}>{item.name}</Link></h4>
                                 <span>{item.job_title}</span>                                 
                              </div>
                              <div className='pb-10'><Image src={item.h_img} alt="theme-pure" /> </div>
                              <div className="tp-team-social">
                                 {/* <SocialLinksTwo /> */}
                                 <Link target='_blank' className='icon-color-1' href={item.x_link}>
                                    <i className='fab fa-twitter'></i><span></span>
                                 </Link>
                                 <Link target='_blank' className='icon-color-2' href={item.tg_link}>
                                    <i className='fab fa-telegram'></i><span></span>
                                 </Link>
                                 <Link target='_blank' className='icon-color-3' href={item.dc_link}>
                                    <i className='fab fa-discord'></i><span></span>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     )} 
                  </div>
               </div>
            </div> 
        </>
    );
};

export default TeamArea;
