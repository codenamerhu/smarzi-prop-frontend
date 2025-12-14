import React from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function Banner() {
  return (
    <section className="section-appraisal pb-5">
      <div className="wg-appraisal style-2 pb-5">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <div className="heading-section mb-32">
                  <h2 className="title text_white split-text effect-right">
                    <SplitTextAnimation text="Are You Renting Out Your Property Or" />
                    <br />
                    <SplitTextAnimation text="Own A Guesthouse?" />
                  </h2>
                  <p
                    className="text-1 text-color3 wow animate__fadeInUp animate__animated text_white"
                    data-wow-duration="1.5s"
                  >
                    Smarzi isn’t just for rentals. BNB owners can now list their rooms, cottages, and full stays for <br /> 
                    travellers and locals looking for a comfortable stopover. 
                  </p>
                </div>
                <a
                  href="#"
                  className="tf-btn bg-color-white fw-7 pd-11 wow animate__fadeInUp animate__animated"
                  data-wow-duration="1s"
                >
                  Request For Free Listing
                </a>
                <div className="person">
                  <Image
                    className="wow animate__fadeInRight animate__animated"
                    data-wow-duration="2s"
                    data-wow-delay="0s "
                    alt="Agent for township bnb's and rentals"
                    width={346}
                    height={499}
                    src="/images/section/agent-lady.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
