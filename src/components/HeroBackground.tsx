import { BackgroundHero, Overlay, AllElements } from "./StyledComponents"


const HeroBackground = ({ children: Element }) => {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <BackgroundHero image={'/images/img-1.jpg'} />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <BackgroundHero image={'/images/ebuka.jpg'} />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <BackgroundHero image={'/images/img-2.jpg'} />
          </div>
        </div>
      </div>

      <AllElements>
        {Element}
        <div className="text-center text-secondary fw-bold">
          <small>Copyright {new Date().getFullYear()} All rights reserved</small>
        </div>

      </AllElements>
      <Overlay />
    </>
  );
}

export default HeroBackground;