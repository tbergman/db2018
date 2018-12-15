import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal'; // Flip, Rotate, Zoom
import RightArrow from '../img/arrow-r_1@2x.png'
import '../css/App.css';
import titleA from '../img/titleA.svg';
import titleB from '../img/titleB.svg';
import titleC from '../img/titleC.svg';

class Home extends Component {

  render() {
    return (
      <div className="Home">

        <Fade tag="div" delay={3550} duration={3000} >
          <div className="Img-float img-one">
            <img src="http://res.cloudinary.com/ddvn6aemk/image/upload/c_fill,h_272,w_272/v1513233061/dbrad2017/medium/best_songs_2017_migos.jpg" alt="Migos" />
          </div> 
        </Fade>

        <Fade tag="div" delay={1000} duration={3000} >
          <div className="Img-float img-two">
            <img src="http://res.cloudinary.com/ddvn6aemk/image/upload/c_fill,h_272,w_272/v1513233229/dbrad2017/medium/best_songs_2017_lorde_2.jpg" alt="Lorde" />
          </div>
        </Fade>

        <Fade tag="div" delay={200} duration={3000} >
          <div className="Img-float img-three">
            <img src="http://res.cloudinary.com/ddvn6aemk/image/upload/c_fill,h_272,w_272/v1513372384/dbrad2017/small/best_songs_2017_yaeji.png" alt="Yaeji" />
          </div>
        </Fade>

        <div className="Body">

          <Fade delay={300} duration={6000} tag="section">
            <div className="Section section-one">
              <div className="Home-title-wrapper">
                <div className="Home-title-a"><img src={titleA} alt="D-Brad's"/></div>
                <div className="Home-title-b"><img src={titleB} alt="Best Songs"/></div>
                <div className="Home-title-c"><img src={titleC} alt="of 2017"/></div>
              </div>
            </div>
          </Fade>
          <Fade delay={1750} duration={6000} tag="section">
            <div className="Section section-one">
              <p className="Home-text">
                {`2017 was a dark year in many respects, but music allows us to feel the gamut of emotions, 
                  regardless of what’s going on around us. A song can mirror and solidify what you’re feeling, 
                  or can change your mood altogether. A song can also inspire, surprise, or disappoint, 
                  depending on its context. Music subverted expectations in 2017 -- rap was dominated by 
                  flute samples, Calvin Harris made funk songs, Courtney Barnett and Kurt Vile teamed up for 
                  a whole album, Lorde and Kendrick Lamar got even better, and Harry Styles sounded like David 
                  Bowie.`}
              </p>
              <div className="home-image-wrapper">
                <img className="home-image image-2" src="http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_431/v1513233061/dbrad2017/medium/best_songs_2017_migos.jpg" alt="Migos" />
                <img className="home-image image-2" src="http://res.cloudinary.com/ddvn6aemk/image/upload/c_fill,h_272,w_272/v1513233229/dbrad2017/medium/best_songs_2017_lorde_2.jpg" alt="Lorde" />
              </div>
              <p className="Home-text">
                {`But nothing was more unexpected than the overall lukewarm reception of once-revered indie 
                bands. Music critics, who used to celebrated these bands, were not keen on what they had to 
                offer in 2017. The weirdest part is that oftentimes, their tepid reaction was justified! 
                Arcade Fire and the Shins released total duds. Beck’s album was vapid and the Dirty Projectors 
                album had interesting (and even `}
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=2IG5f50olZA">{`some `}</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=rUplxePolH4">{`good`}</a>
                {`) songs, but its pretentious and uncomfortable lyrics about Dave Longstreth’s ex-girlfriend
                 were off-putting. The Real Estate album was my least favorite of theirs (though it grew on me), 
                 the Japandroids album was my least favorite of `}
              <i>theirs </i> 
              {` (though it’s still pretty awesome), but neither of those bands had songs that made my top 50.`}
              </p>
              <p className="Home-text">
                {`Some of the bands of previous stature that went unrecognized or under appreciated 
                  by critics were unfairly forgotten or maligned though. A few of them released 
                  albums that I love, but none of the songs stood out enough on their own to make 
                  this list, such as LCD Soundsystem and Grizzly Bear. The xx, the National, Broken 
                  Social Scene, and Fleet Foxes released outstanding albums with outstanding songs. 
                  And then there’s Spoon, who always suffers from ‘consistency bias’ -- they’re so 
                  good all the time that they don’t have an interesting narrative that takes hold 
                  with critics, regardless of how great the music is.`}
              </p>
              <div className="home-image-wrapper">
                <img className="home-image image-1" src="http://res.cloudinary.com/ddvn6aemk/image/upload/c_fill,h_272,w_272/v1513372384/dbrad2017/small/best_songs_2017_yaeji.png" alt="Yaeji" />
              </div>
              <p className="Home-text">
                {`But of course, there was still an abundance of music rightly recognized -- excellent 
                  rap from Kendrick Lamar, Vince Staples, and Migos; sensational pop from Lorde, Carly 
                  Rae Jepsen, and Taylor Swift; brilliant R&B from SZA, Frank Ocean, and Sampha; jazz 
                  from Kamasi Washington; alternative riffs from Queens of the Stone Age; and a 
                  crossover hit from Portugal. The Man. And just because those indie bands previously 
                  mentioned were left out of the loop, that doesn’t mean indie wasn’t bursting with 
                  great music that was also beloved by critics -- rip-roaring rock from White Reaper, 
                  Sheer Mag, and Charly Bliss; throwback indie from Jay Som and Maggie Rogers; folk 
                  from Julie Byrne; and genre-bending roots from Hurray for the Riff Raff. And then 
                  there’s the War on Drugs, who released an absolutely spectacular album, front to 
                  back.`}
              </p>
              <p className="Home-text">{`Before proceeding, endless thanks to `}<a href="http://taypsl.com" target="_blank" rel="noopener noreferrer">taypsl </a>
                {`for her incredible work on this 
                  website, which she fully conceptualized and developed. My main requests for the site 
                  were ‘easy to listen to the songs’ and ‘looks good.’ I think you’ll find that both 
                  of those requests were met.`}
              </p>
            </div>
          </Fade>

          <Fade tag="section" delay={1000} duration={3000}>
            <div className="Section-links">
              <h2 className="Section-links-h2">PLAYLIST LINKS</h2>
              <p><a className="section-link" href="https://open.spotify.com/user/dbradford07/playlist/2D1TaklhRNx23qE39Sq21W" target="_blank" rel="noopener noreferrer">listen on SPOTIFY</a></p>
              <p><a className="section-link" href="https://www.youtube.com/watch?v=bvmEYgFsgyg&list=PLqpBLIvY2a6cRwgX_f06bpEtEBp08F2bo" target="_blank" rel="noopener noreferrer">listen on YOUTUBE</a></p>
            </div>
          </Fade>

          <Fade tag="section" delay={500} duration={3000}>
            <div className="Section-two">
              <h1>HONORABLE MENTIONS</h1>
              <Fade top cascade tag="ul" delay={500} duration={3000}>
                <div className="hm-text">
                  <li>Miguel ft. Travis Scott: <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=76O3w4pt0CA">'Sky Walker'</a></li>
                  <li>Kevin Morby: <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=7cKM3tfAsEo">'City Music'</a></li>
                  <li>Lorde: <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=OQsJ_FCCIMQ">'Homemade Dynamite'</a></li>
                  <li>Spoon: <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=6_yJYNF_Qas">'Can I Sit Next to You'</a></li>
                  <li>Migos: <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=1VUa99-tJqs">'T-Shirt'</a></li>
                  <li>Michelle Branch: <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=lN_Lxfeed9A">'Best You Ever'</a></li>
                  <li>Kendrick Lamar: <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=tvTRZJ-4EyI">'HUMBLE.'</a></li>
                  <li>Phoebe Bridgers: <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=9sfYpolGCu8">'Motion Sickness'</a></li>
                  <li>Slowdive: <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=BxwAPBxc0lU">'Sugar for the Pill'</a></li>
                  <li>HAIM: <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=Wzne4p0Bxu8">'Nothing’s Wrong'</a></li>
                  <li>Land of Talk: <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=vKvi7dmyXPI">'Loving'</a></li>
                  <li>Amine: <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=vKvi7dmyXPI">'Caroline'</a></li>
                  <li>Hoops: <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=7wl1IAO56jM">'On Top'</a></li>
                  <li>Taylor Swift: <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=y9Wg-X7UdtU">'I Did Something Bad'</a></li>
                  <li>The Courtneys: <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=Z8eDKxWBFwU">'Silver Velvet'</a></li>
                </div>
              </Fade>
            </div>
          </Fade>

          <div className="home-image-wrapper wrapper-3">
            <img className="home-image image-2" src="http://res.cloudinary.com/ddvn6aemk/image/upload/c_fill,h_272,w_272/v1513372283/dbrad2017/small/best_songs_2017_kamasi_washington.jpg" alt="Kamasi Washington" />
            <img className="home-image image-2" src="http://res.cloudinary.com/ddvn6aemk/image/upload/c_fill,h_272,w_272/v1513327541/dbrad2017/small/best_songs_2017_sheer_mag.jpg" alt="Sheer Mag" />
          </div>

          <Fade tag="section" delay={500} duration={2000}>
            <div className="Section Section-three">
              <p className="Home-text">
                {`I’ve been compiling and writing these “best songs” 
                  year-end lists for 12 years now, and I absolutely 
                  love it. Lists can be a reductive way of classifying 
                  music, judging certain songs as superior to others. 
                  It can also be arbitrary -- is the 38th song on this 
                  list really slightly worse than the 37th and better 
                  than the 39th? I actually kind of feel like, well, 
                  yes it is! You may not agree, but hopefully this 
                  list will introduce you to new music, or strengthen 
                  or change opinions you already had about some of the 
                  songs. Ranking art in a list is ridiculous, but it’s 
                  also really fun.
                  `}
              </p>
              <p className="Home-text">
                {`So, without further ado, I bring you the 50 best songs of 2017.`}
              </p>
            </div>
          </Fade>

          <Fade tag="div" delay={500} duration={2000}>
            <div className="page-navigation-home">
              <Link to="/50-21">
                <div className="page-link home-page-link">
                  <img src={RightArrow} alt="next page" />
                  <p>50-21</p>
                </div>
              </Link>
            </div>
          </Fade>
            
        </div>

      </div>
    );
  }
}

export default Home;