import React from "react";
import BG1 from "../../assets/images/Summit_Images/BG1.jpg";
import BG5 from "../../assets/images/Summit_Images/BG5.jpg";
import BG2 from "../../assets/images/Summit_Images/BG2.jpg";
import BG3 from "../../assets/images/Summit_Images/BG3.jpg";
import IdeaThon from "../../assets/images/Summit_Images/Ideathon.png";
import Sharktank from "../../assets/images/Summit_Images/Zenith Shark Tank.png";
import Startup from "../../assets/images/Summit_Images/Start-Up Showcase.png";
import Speaker from "../../assets/images/Summit_Images/Speaker-Session.png";
import Foodfest from "../../assets/images/Summit_Images/Food Fest.png";
import businessquiz from "../../assets/images/Summit_Images/Business Quiz.png";
import speaker1 from "../../assets/images/Summit_Images/1.jpg";
import speaker2 from "../../assets/images/Summit_Images/2-new.jpg";
import speaker3 from "../../assets/images/Summit_Images/3.jpg";
import speaker4 from "../../assets/images/Summit_Images/4.jpg";
import speaker5 from "../../assets/images/Summit_Images/5.jpg";
import speaker6 from "../../assets/images/Summit_Images/6.jpg";
import speaker7 from "../../assets/images/Summit_Images/7.png";
// import esummitdesign from "../../assets/images/Summit_Images/E-Summitdesign1.png";
import BGvideo from "../../assets/videos/comingsoon.mp4";

import "./ComingSoon.css";

const ComingSoon = () => {
  return (
    <>
      <div className="bg-events">
        <div className="gallery">
          <img src={BG1} alt="Background-1" />
          <img src={BG5} alt="Background-5" />
          <img src={BG2} alt="Background-2" />
          <img src={BG3} alt="Background-3" />
        </div>
      </div>
      <div className="E-Summit-Photo"/>
      <div className="section_event">
        <h1 className="event-heading">"Pinnacle Moments: Recalling Past Entrepreneurial Feats"</h1>
      </div>
      <div className="card-container ">
        <video className="video-background2" autoPlay loop muted>
          <source src={BGvideo} type="video/mp4" />
        </video>
        <article className="card_event">
          <header className="card__thumb">
            <a href="javascript:void(0)">
              <img src={IdeaThon} alt={"Ideathonimg"} />
            </a>
          </header>
          <div className="card__body">
            <h2 className="card__title">
              <a href="javascript:void(0)">IDEATHON</a>
            </h2>
            <div className="card__subtitle">Ideas Unleashed, Futures Changed</div>
            <p className="card__description">IdeaThon is an major event during E-Summit'23. A competition in which entrepreneurs submit their ideas to a panel of judges. The MII Foundation funded the top five concepts, and the winner idea received a cash award of Rs 5,000.</p>
          </div>
        </article>
        <article className="card_event">
          <header className="card__thumb">
            <a href="javascript:void(0)">
              <img src={Sharktank} alt={"sharktankimg"} />
            </a>
          </header>
          <div className="card__body">
            <h2 className="card__title">
              <a href="javascript:void(0)">ZENITH SHARK TANK</a>
            </h2>
            <div className="card__subtitle">In the Tank, On Top</div>
            <p className="card__description">The Zenith shark tank was the most appealing competition at E-Summit'23. It is a recreation of the popular show Shark Tank. Young firms pitched their products and services in front of sharks(judges)for fundings.</p>
          </div>
        </article>
        <article className="card_event">
          <header className="card__thumb">
            <a href="javascript:void(0)">
              <img src={Startup} alt={"startupimg"} />
            </a>
          </header>
          <div className="card__body">
            <h2 className="card__title">
              <a href="javascript:void(0)">START-UP SHOWCASE</a>
            </h2>
            <div className="card__subtitle">Trailblazing Talents</div>
            <p className="card__description">A platform where budding enterprises showcased their concepts, products, and services to,customers, and investors.The event provides networking chances with some of the area's most creative businesses.</p>
          </div>
        </article>
        <article className="card_event">
          <header className="card__thumb">
            <a href="javascript:void(0)">
              <img src={Speaker} alt={"Speakerimg"} />
            </a>
          </header>
          <div className="card__body">
            <h2 className="card__title">
              <a href="javascript:void(0)">Inspirational Voices</a>
            </h2>
            <div className="card__subtitle">Influence through Ideas</div>
            <p className="card__description">This talk sessions's goal is to expose students to top-tier business thinkers who offered their experiences and advice throughout the day.</p>
          </div>
        </article>
        <article className="card_event">
          <header className="card__thumb">
            <a href="javascript:void(0)">
              <img src={businessquiz} alt={"businessquiz"} />
            </a>
          </header>
          <div className="card__body">
            <h2 className="card__title">
              <a href="javascript:void(0)">Business Quiz</a>
            </h2>
            <div className="card__subtitle">Business Brain Bash</div>
            <p className="card__description">A business quiz was conducted for all the participants. This competition's goal is to interact with individuals and introduce them to business.The individual with the most correct responses wins.</p>
          </div>
        </article>
        <article className="card_event">
          <header className="card__thumb">
            <a href="javascript:void(0)">
              <img src={Foodfest} alt={"foodfestimg"} />
            </a>
          </header>
          <div className="card__body">
            <h2 className="card__title">
              <a href="javascript:void(0)">FOOD FEST</a>
            </h2>
            <div className="card__subtitle">Eats and Treats Fiesta</div>
            <p className="card__description">The most mouth-wateringly delicious event is the food festival.In this young food market, businesses present their delicacies in front of food enthusiasts.The motto of conducting food festivals is good food,good mood.</p>
          </div>
        </article>
      </div>
      <div className="responsive-container-block container_speaker">
        <p className="text-blk team-head-text">Inspirational Voices</p>
        <div className="responsive-container-block">
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container_speaker">
            <div className="card_speaker">
              <div className="team-image-wrapper">
                <img className="team-member-image" src={speaker1} alt="Chirag Kulkarni"/>
              </div>
              <p className="text-blk name">Chirag Kulkarni</p>
              <p className="text-blk position">CMO - Medly</p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container_speaker">
            <div className="card_speaker">
              <div className="team-image-wrapper">
                <img className="team-member-image" src={speaker2} alt="Himeesh Madaan"/>
              </div>
              <p className="text-blk name">Himeesh Madaan</p>
              <p className="text-blk position">Entrepreneur | Youtuber</p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container_speaker">
            <div className="card_speaker">
              <div className="team-image-wrapper">
                <img className="team-member-image" src={speaker3} alt="Aditya Vyas"/>
              </div>
              <p className="text-blk name">Aditya Vyas</p>
              <p className="text-blk position">CEO-IITI Dirshti CPS</p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container_speaker">
            <div className="card_speaker">
              <div className="team-image-wrapper">
                <img className="team-member-image" src={speaker4} alt="Rajat Jain"/>
              </div>
              <p className="text-blk name">Rajat Jain</p>
              <p className="text-blk position">Co-Founder of Kimirica & Pataa App</p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container_speaker">
            <div className="card_speaker">
              <div className="team-image-wrapper">
                <img className="team-member-image" src={speaker5} alt="Narendra Sen" />
              </div>
              <p className="text-blk name">Narendra Sen</p>
              <p className="text-blk position">Founder & CEO | RackBank</p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container_speaker">
            <div className="card_speaker">
              <div className="team-image-wrapper">
                <img className="team-member-image" src={speaker6} alt="Ekagra Sharma"/>
              </div>
              <p className="text-blk name">Ekagra Sharma</p>
              <p className="text-blk position">Writer-Kapil Sharma | Super Dancer</p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container_speaker">
            <div className="card_speaker">
              <div className="team-image-wrapper">
                <img className="team-member-image" src={speaker7} alt="Shubham Chouhan"/>
              </div>
              <p className="text-blk name">Shubham Chouhan</p>
              <p className="text-blk position">CEO & Founder- IEEN India|Etimes Group</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
