import React from 'react'
import FlipCountdown from '@rumess/react-flip-countdown';
import './ComingSoon.css';
import comingsoon from '../../assets/videos/comingsoon.mp4';

const ComingSoon = () => {
  return (
    <>
    <video src={comingsoon}  autoPlay loop muted/>
    <section className="comingsoon">
        <div className="clock_content">
            <h1>We are almost there</h1>
            <h3>Stay tuned for something amazing.</h3>
            <FlipCountdown className='flip-clock'
                    theme='dark'
                    size='medium'
                    hideYear
                    hideMonth
                    titlePosition='bottom'
                    endAt={new Date(
                        Date.now() +
                            1000 *
                                60 *
                                60 *
                                24*
                                2
                    ).toUTCString()}
                />
        </div>
    </section>
</>
  )
}

export default ComingSoon
