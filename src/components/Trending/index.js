import React, { useState, useRef } from 'react';
import data from './data.json'
function TrendingComponent() {
    const sliderRef = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [activeIndex, setActiveIndex] = useState(null); // State to track the active index

    const handleItemClick = (index) => {
        setActiveIndex(index); // Set the active index to the clicked div index
    };
    const handlePrevClick = () => {
        if (sliderRef.current) {
            const newScrollLeft = sliderRef.current.scrollLeft - 200; // Điều chỉnh khoảng cách scroll
            sliderRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth' // Tạo hiệu ứng cuộn mượt
            });
            setScrollLeft(newScrollLeft);
        }
    };

    const handleNextClick = () => {
        if (sliderRef.current) {
            const newScrollLeft = sliderRef.current.scrollLeft + 200; // Điều chỉnh khoảng cách scroll
            sliderRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth' // Tạo hiệu ứng cuộn mượt
            });
            setScrollLeft(newScrollLeft);
        }
    };

    return ( 
        <section className="container mc-my-10" data-testid="trending">
    <h2 className="mc-mt-11 mc-mb-10 mc-text-h1 mc-text--center">
    Một liều cảm hứng, <br />
bất cứ khi nào bạn cần.
    </h2>
    <div className="mc-my-5 mc-py-1 mc-mx-xl-5 d-flex flex-nowrap flex-sm-wrap justify-content-sm-center FilterPicker_categoryPicker__D7HvP">
     {
        data.map((key, index) => {

            return (
                <button
                type="button"
                className={"c-button c-button--secondary c-button--md d-sm-flex mc-p-2 mc-py-sm-3 mc-px-sm-4 FilterPicker_filterButton__Wmgzs FilterPicker_active__UD1wH"+ `${index == activeIndex ? ' active-button': ''}`}
                key={index}
                onClick={() => handleItemClick(index)}
             >
                <span className={"mc-mr-3 d-none d-lg-block FilterPicker_icon__4rb3p" + `${index == activeIndex ? ' active-svg': ''}`} dangerouslySetInnerHTML={{ __html: key.icon}}>
                  {/* {key.icon} */}
                </span>
                {key.text}
              </button>
            )
        })
     }
     
 
    </div>
    <div>
      <div className="row small-gutters justify-content-end align-items-center">
        <div className="col">
          <h3 className="mc-text-h6 d-inline mc-mr-3">Popular now</h3>
          <a
            className="mc-text--normal mc-opacity--muted"
            href="/categories/trending"
            target="_blank"
            rel="noreferrer"
          >
            See all
          </a>
        </div>
        <div className="d-flex">
          <div className="col-auto d-none d-sm-block ">
            <button
              type="button"
              className="c-button c-button--symmetrical c-button--symmetrical mc-corners--circle c-button--secondary c-button--xs Carousel_arrow__P9kr2 Carousel_prev__iCcoT Carousel_disabled__NBJBb"
              aria-label="Previous"
              id='prevButton'
              onClick={handlePrevClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
                role="img"
                className="mc-icon mc-icon--md "
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M15.155 5.47a.75.75 0 0 1 0 1.06L9.685 12l5.47 5.47a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="col-auto d-none d-sm-block ">
            <button
              type="button"
              className="c-button c-button--symmetrical c-button--symmetrical mc-corners--circle c-button--secondary c-button--xs Carousel_arrow__P9kr2 Carousel_next__XhDBy"
              aria-label="Next"
              id="nextButton"
              onClick={handleNextClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
                role="img"
                className="mc-icon mc-icon--md "
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M8.845 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l5.47-5.47-5.47-5.47a.75.75 0 0 1 0-1.06"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <section
      ref={sliderRef}
        aria-label="Trending courses"
        className="slider-container Carousel_content__1x9Bn CourseTileCarousel_carousel__DtJyz Carousel_scrollSnapAlignStart__ME5UY Carousel_overflow__B33vv"
      >
        <div
          className="CourseTileCarousel_tile__UtoLP "
          tabIndex={0}
          aria-hidden="false"
          role="group"
          aria-label="1 of 5 in Trending courses"
        >
          <div className="col">
            <span>
              <a
                className="d-block mc-corners--sm mc-overflow--hidden"
                href="#"
              >
                <div className="mc-tile mc-tile--9x16">
                  <div className="mc-tile__content content">
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-left mc-tile-caption--y-top">
                      <div className="mc-tile-caption__content mc-p-4">
                        <span className="mc-badge mc-text-x-small mc-badge--default">
                          <span className="mc-text--capitalize">new</span>
                        </span>
                      </div>
                    </div>
                    <div className="mc-tile__component mc-tile-overlay mc-tile-overlay--gradient-bottom " />
                    <img
                      alt=""
                      src="https://www.masterclass.com/course-images/attachments/7ekfdvcffgbw7gnhmhczwyfqx3wd?width=395&height=702&quality=75&dpr=1"
                      className="mc-tile-image  mc-animation mc-animation--zoom"
                      image="[object Object]"
                    />
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-center mc-tile-caption--y-bottom mc-tile-caption--flush">
                      <div className="mc-tile-caption__content mc-p-4">
                        <div className="mc-mt-4">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "inline-block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: "relative",
                              maxWidth: "100%"
                            }}
                          >
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                maxWidth: "100%"
                              }}
                            >
                              <img
                                alt=""
                                aria-hidden="true"
                                src="data:image/svg+xml,%3csvg%20
                                                                        xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27137%27%20height=%2712%27/%3e"
                                style={{
                                  display: "block",
                                  maxWidth: "100%",
                                  width: "initial",
                                  height: "initial",
                                  background: "none",
                                  opacity: 1,
                                  border: 0,
                                  margin: 0,
                                  padding: 0
                                }}
                              />
                            </span>
                            <img
                              alt="Original Series"
                              srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/series-logo.svg 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/series-logo.svg 2x"
                              src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/series-logo.svg"
                              decoding="async"
                              data-nimg="intrinsic"
                              style={{
                                position: "absolute",
                                inset: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%"
                              }}
                            />
                          </span>
                        </div>
                        <div
                          className="mc-nameplate mc-nameplate--small"
                          data-testid="nameplate"
                        >
                          <div className="mc-nameplate__inner">
                            <img
                              alt="With Renowned Instructors"
                              src="https://www.masterclass.com/course-images/attachments/4w516vd7xlkuz1iu945rizqznm54?width=200&quality=75&dpr=2"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                        <span className="mc-mt-3 mc-text-x-small">
                          3 episodes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </span>
          </div>
        </div>
        <div
          className="CourseTileCarousel_tile__UtoLP "
          tabIndex={0}
          aria-hidden="false"
          role="group"
          aria-label="2 of 5 in Trending courses"
        >
          <div className="col">
            <span>
              <a
                className="d-block mc-corners--sm mc-overflow--hidden"
                href="#"
              >
                <div className="mc-tile mc-tile--9x16">
                  <div className="mc-tile__content content">
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-left mc-tile-caption--y-top">
                      <div className="mc-tile-caption__content mc-p-4">
                        <span className="mc-badge mc-text-x-small mc-badge--default">
                          <span className="mc-text--capitalize">new</span>
                        </span>
                      </div>
                    </div>
                    <div className="mc-tile__component mc-tile-overlay mc-tile-overlay--gradient-bottom " />
                    <img
                      alt=""
                      src="https://www.masterclass.com/course-images/attachments/szextedr6bvpizv25m7854nso5iq?width=395&height=702&quality=75&dpr=1"
                      className="mc-tile-image  mc-animation mc-animation--zoom"
                      image="[object Object]"
                    />
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-center mc-tile-caption--y-bottom mc-tile-caption--flush">
                      <div className="mc-tile-caption__content mc-p-4">
                        <div
                          className="mc-nameplate mc-nameplate--small"
                          data-testid="nameplate"
                        >
                          <div className="mc-nameplate__inner">
                            <img
                              alt="Mark Cuban"
                              src="https://www.masterclass.com/course-images/attachments/jcytdrfly56gswdh8l6dy36jxhdl?width=200&quality=75&dpr=2"
                              style={{ width: "100%" }}
                            />
                            <div className="mc-nameplate__separator" />
                            <p
                              className="mc-text--2-lines mc-text-h6"
                              data-testid="nameplate__sub-text"
                            >
                              Win Big in Business
                            </p>
                          </div>
                        </div>
                        <span className="mc-mt-3 mc-text-x-small">
                          1 hour 31 minutes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </span>
          </div>
        </div>
        <div
          className="CourseTileCarousel_tile__UtoLP "
          tabIndex={0}
          aria-hidden="false"
          role="group"
          aria-label="3 of 5 in Trending courses"
        >
          <div className="col">
            <span>
              <a
                className="d-block mc-corners--sm mc-overflow--hidden"
                href="#"
              >
                <div className="mc-tile mc-tile--9x16">
                  <div className="mc-tile__content content">
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-left mc-tile-caption--y-top">
                      <div className="mc-tile-caption__content mc-p-4">
                        <span className="mc-badge mc-text-x-small mc-badge--default">
                          <span className="mc-text--capitalize">new</span>
                        </span>
                      </div>
                    </div>
                    <div className="mc-tile__component mc-tile-overlay mc-tile-overlay--gradient-bottom " />
                    <img
                      alt=""
                      src="https://www.masterclass.com/course-images/attachments/0pc1m94mq33dy83wtvo4y95lmtnt?width=395&height=702&quality=75&dpr=1"
                      className="mc-tile-image  mc-animation mc-animation--zoom"
                      image="[object Object]"
                    />
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-center mc-tile-caption--y-bottom mc-tile-caption--flush">
                      <div className="mc-tile-caption__content mc-p-4">
                        <div
                          className="mc-nameplate mc-nameplate--small"
                          data-testid="nameplate"
                        >
                          <div className="mc-nameplate__inner">
                            <img
                              alt="Ava DuVernay"
                              src="https://www.masterclass.com/course-images/attachments/rs2rlhchcmxgz20snjbmxkuej4sq?width=200&quality=75&dpr=2"
                              style={{ width: "100%" }}
                            />
                            <div className="mc-nameplate__separator" />
                            <p
                              className="mc-text--2-lines mc-text-h6"
                              data-testid="nameplate__sub-text"
                            >
                              Reframe Your Thinking
                            </p>
                          </div>
                        </div>
                        <span className="mc-mt-3 mc-text-x-small">
                          1 hour 22 minutes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </span>
          </div>
        </div>
        <div
          className="CourseTileCarousel_tile__UtoLP "
          tabIndex={0}
          aria-hidden="false"
          role="group"
          aria-label="4 of 5 in Trending courses"
        >
          <div className="col">
            <span>
              <a
                className="d-block mc-corners--sm mc-overflow--hidden"
                href="#"
              >
                <div className="mc-tile mc-tile--9x16">
                  <div className="mc-tile__content content">
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-left mc-tile-caption--y-top">
                      <div className="mc-tile-caption__content mc-p-4">
                        <span className="mc-badge mc-text-x-small mc-badge--default">
                          <span className="mc-text--capitalize">new</span>
                        </span>
                      </div>
                    </div>
                    <div className="mc-tile__component mc-tile-overlay mc-tile-overlay--gradient-bottom " />
                    <img
                      alt=""
                      src="https://www.masterclass.com/course-images/attachments/s0d49o0uk2o9rwmjwuzlpm6znorb?width=395&height=702&quality=75&dpr=1"
                      className="mc-tile-image  mc-animation mc-animation--zoom"
                      image="[object Object]"
                    />
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-center mc-tile-caption--y-bottom mc-tile-caption--flush">
                      <div className="mc-tile-caption__content mc-p-4">
                        <div className="mc-mt-4">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "inline-block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: "relative",
                              maxWidth: "100%"
                            }}
                          >
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                maxWidth: "100%"
                              }}
                            >
                              <img
                                alt=""
                                aria-hidden="true"
                                src="data:image/svg+xml,%3csvg%20
                                                                                                        xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27137%27%20height=%2712%27/%3e"
                                style={{
                                  display: "block",
                                  maxWidth: "100%",
                                  width: "initial",
                                  height: "initial",
                                  background: "none",
                                  opacity: 1,
                                  border: 0,
                                  margin: 0,
                                  padding: 0
                                }}
                              />
                            </span>
                            <img
                              alt="Original Series"
                              srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/series-logo.svg 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/series-logo.svg 2x"
                              src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/series-logo.svg"
                              decoding="async"
                              data-nimg="intrinsic"
                              style={{
                                position: "absolute",
                                inset: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%"
                              }}
                            />
                          </span>
                        </div>
                        <div
                          className="mc-nameplate mc-nameplate--small"
                          data-testid="nameplate"
                        >
                          <div className="mc-nameplate__inner">
                            <img
                              alt="Gut Health with Leading Experts"
                              src="https://www.masterclass.com/course-images/attachments/7114m5pefmw438z9m1iatr75vr9c?width=200&quality=75&dpr=2"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                        <span className="mc-mt-3 mc-text-x-small">
                          3 episodes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </span>
          </div>
        </div>
        <div
          className="CourseTileCarousel_tile__UtoLP "
          tabIndex={0}
          aria-hidden="false"
          role="group"
          aria-label="5 of 5 in Trending courses"
        >
          <div className="col">
            <span>
              <a
                className="d-block mc-corners--sm mc-overflow--hidden"
                href="#"
              >
                <div className="mc-tile mc-tile--9x16">
                  <div className="mc-tile__content content">
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-left mc-tile-caption--y-top">
                      <div className="mc-tile-caption__content mc-p-4">
                        <span className="mc-badge mc-text-x-small mc-badge--default">
                          <span className="mc-text--capitalize">new</span>
                        </span>
                      </div>
                    </div>
                    <div className="mc-tile__component mc-tile-overlay mc-tile-overlay--gradient-bottom " />
                    <img
                      alt=""
                      src="https://www.masterclass.com/course-images/attachments/fwih9xryibgindfr84wg8xo804o1?width=395&height=702&quality=75&dpr=1"
                      className="mc-tile-image  mc-animation mc-animation--zoom"
                      image="[object Object]"
                    />
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-center mc-tile-caption--y-bottom mc-tile-caption--flush">
                      <div className="mc-tile-caption__content mc-p-4">
                        <div
                          className="mc-nameplate mc-nameplate--small"
                          data-testid="nameplate"
                        >
                          <div className="mc-nameplate__inner">
                            <img
                              alt="Martha Stewart"
                              src="https://www.masterclass.com/course-images/attachments/gtgeihui4av3pbp6i8jcx4utdmnc?width=200&quality=75&dpr=2"
                              style={{ width: "100%" }}
                            />
                            <div className="mc-nameplate__separator" />
                            <p
                              className="mc-text--2-lines mc-text-h6"
                              data-testid="nameplate__sub-text"
                            >
                              Think Like a Boss, Live Like a Legend
                            </p>
                          </div>
                        </div>
                        <span className="mc-mt-3 mc-text-x-small">
                          1 hour 29 minutes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </span>
          </div>
        </div>
        <div
          className="CourseTileCarousel_tile__UtoLP "
          tabIndex={0}
          aria-hidden="false"
          role="group"
          aria-label="1 of 5 in Trending courses"
        >
          <div className="col">
            <span>
              <a
                className="d-block mc-corners--sm mc-overflow--hidden"
                href="#"
              >
                <div className="mc-tile mc-tile--9x16">
                  <div className="mc-tile__content content">
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-left mc-tile-caption--y-top">
                      <div className="mc-tile-caption__content mc-p-4">
                        <span className="mc-badge mc-text-x-small mc-badge--default">
                          <span className="mc-text--capitalize">new</span>
                        </span>
                      </div>
                    </div>
                    <div className="mc-tile__component mc-tile-overlay mc-tile-overlay--gradient-bottom " />
                    <img
                      alt=""
                      src="https://www.masterclass.com/course-images/attachments/cynrnlh6cg2nw2wsyg88q92ns7io?width=395&height=702&quality=75&dpr=1"
                      className="mc-tile-image  mc-animation mc-animation--zoom"
                      image="[object Object]"
                    />
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-center mc-tile-caption--y-bottom mc-tile-caption--flush">
                      <div className="mc-tile-caption__content mc-p-4">
                        <div
                          className="mc-nameplate mc-nameplate--small"
                          data-testid="nameplate"
                        >
                          <div className="mc-nameplate__inner">
                            <img
                              alt="Kevin Hart"
                              src="https://www.masterclass.com/course-images/attachments/haubpuee8n0zcpsapctax8qvoxb5?width=200&quality=75&dpr=2"
                              style={{ width: "100%" }}
                            />
                            <div className="mc-nameplate__separator" />
                            <p
                              className="mc-text--2-lines mc-text-h6"
                              data-testid="nameplate__sub-text"
                            >
                              Using Humor to Make Your Mark
                            </p>
                          </div>
                        </div>
                        <span className="mc-mt-3 mc-text-x-small">
                          60 minutes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </span>
          </div>
        </div>
        <div
          className="CourseTileCarousel_tile__UtoLP "
          tabIndex={-1}
          aria-hidden="true"
          role="group"
          aria-label="2 of 5 in Trending courses"
        >
          <div className="col">
            <span>
              <a
                className="d-block mc-corners--sm mc-overflow--hidden"
                href="#"
              >
                <div className="mc-tile mc-tile--9x16">
                  <div className="mc-tile__content content">
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-left mc-tile-caption--y-top">
                      <div className="mc-tile-caption__content mc-p-4">
                        <span className="mc-badge mc-text-x-small mc-badge--default">
                          <span className="mc-text--capitalize">new</span>
                        </span>
                      </div>
                    </div>
                    <div className="mc-tile__component mc-tile-overlay mc-tile-overlay--gradient-bottom " />
                    <img
                      alt=""
                      src="https://www.masterclass.com/course-images/attachments/65o20wi5sosv7txfk0ylueeehdet?width=395&height=702&quality=75&dpr=1"
                      className="mc-tile-image  mc-animation mc-animation--zoom"
                      image="[object Object]"
                    />
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-center mc-tile-caption--y-bottom mc-tile-caption--flush">
                      <div className="mc-tile-caption__content mc-p-4">
                        <div
                          className="mc-nameplate mc-nameplate--small"
                          data-testid="nameplate"
                        >
                          <div className="mc-nameplate__inner">
                            <img
                              alt="Amy Poehler"
                              src="https://www.masterclass.com/course-images/attachments/8splf752lenqg5azq4798k51y052?width=200&quality=75&dpr=2"
                              style={{ width: "100%" }}
                            />
                            <div className="mc-nameplate__separator" />
                            <p
                              className="mc-text--2-lines mc-text-h6"
                              data-testid="nameplate__sub-text"
                            >
                              Prepare to Be Unprepared
                            </p>
                          </div>
                        </div>
                        <span className="mc-mt-3 mc-text-x-small">
                          1 hour 16 minutes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </span>
          </div>
        </div>
        <div
          className="CourseTileCarousel_tile__UtoLP "
          tabIndex={-1}
          aria-hidden="true"
          role="group"
          aria-label="3 of 5 in Trending courses"
        >
          <div className="col">
            <span>
              <a
                className="d-block mc-corners--sm mc-overflow--hidden"
                href="#"
              >
                <div className="mc-tile mc-tile--9x16">
                  <div className="mc-tile__content content">
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-left mc-tile-caption--y-top">
                      <div className="mc-tile-caption__content mc-p-4">
                        <span className="mc-badge mc-text-x-small mc-badge--default">
                          <span className="mc-text--capitalize">new</span>
                        </span>
                      </div>
                    </div>
                    <div className="mc-tile__component mc-tile-overlay mc-tile-overlay--gradient-bottom " />
                    <img
                      alt=""
                      src="https://www.masterclass.com/course-images/attachments/ux1gq72m63zc00h73jenoxfbtwb7?width=395&height=702&quality=75&dpr=1"
                      className="mc-tile-image  mc-animation mc-animation--zoom"
                      image="[object Object]"
                    />
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-center mc-tile-caption--y-bottom mc-tile-caption--flush">
                      <div className="mc-tile-caption__content mc-p-4">
                        <div className="mc-mt-4">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "inline-block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: "relative",
                              maxWidth: "100%"
                            }}
                          >
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                maxWidth: "100%"
                              }}
                            >
                              <img
                                alt=""
                                aria-hidden="true"
                                src="data:image/svg+xml,%3csvg%20
                                                                                                                                                xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27137%27%20height=%2712%27/%3e"
                                style={{
                                  display: "block",
                                  maxWidth: "100%",
                                  width: "initial",
                                  height: "initial",
                                  background: "none",
                                  opacity: 1,
                                  border: 0,
                                  margin: 0,
                                  padding: 0
                                }}
                              />
                            </span>
                            <img
                              alt="Original Series"
                              srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/series-logo.svg 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/series-logo.svg 2x"
                              src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/series-logo.svg"
                              decoding="async"
                              data-nimg="intrinsic"
                              style={{
                                position: "absolute",
                                inset: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%"
                              }}
                            />
                          </span>
                        </div>
                        <div
                          className="mc-nameplate mc-nameplate--small"
                          data-testid="nameplate"
                        >
                          <div className="mc-nameplate__inner">
                            <img
                              alt="Tell a Great Story"
                              src="https://www.masterclass.com/course-images/attachments/6tlwswigdt4d75rlxbnmkjiuftc2?width=200&quality=75&dpr=2"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                        <span className="mc-mt-3 mc-text-x-small">
                          4 episodes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </span>
          </div>
        </div>
        <div
          className="CourseTileCarousel_tile__UtoLP "
          tabIndex={-1}
          aria-hidden="true"
          role="group"
          aria-label="4 of 5 in Trending courses"
        >
          <div className="col">
            <span>
              <a
                className="d-block mc-corners--sm mc-overflow--hidden"
                href="#"
              >
                <div className="mc-tile mc-tile--9x16">
                  <div className="mc-tile__content content">
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-left mc-tile-caption--y-top">
                      <div className="mc-tile-caption__content mc-p-4">
                        <span className="mc-badge mc-text-x-small mc-badge--default">
                          <span className="mc-text--capitalize">new</span>
                        </span>
                      </div>
                    </div>
                    <div className="mc-tile__component mc-tile-overlay mc-tile-overlay--gradient-bottom " />
                    <img
                      alt=""
                      src="https://www.masterclass.com/course-images/attachments/os4p0tykvbgg4fa26gdo67ea2ox2?width=395&height=702&quality=75&dpr=1"
                      className="mc-tile-image  mc-animation mc-animation--zoom"
                      image="[object Object]"
                    />
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-center mc-tile-caption--y-bottom mc-tile-caption--flush">
                      <div className="mc-tile-caption__content mc-p-4">
                        <div
                          className="mc-nameplate mc-nameplate--small"
                          data-testid="nameplate"
                        >
                          <div className="mc-nameplate__inner">
                            <img
                              alt="Jay Shetty"
                              src="https://www.masterclass.com/course-images/attachments/9vxy0civq2yvhga8xj7l10gz4iq3?width=200&quality=75&dpr=2"
                              style={{ width: "100%" }}
                            />
                            <div className="mc-nameplate__separator" />
                            <p
                              className="mc-text--2-lines mc-text-h6"
                              data-testid="nameplate__sub-text"
                            >
                              Navigating Change
                            </p>
                          </div>
                        </div>
                        <span className="mc-mt-3 mc-text-x-small">
                          1 hour 19 minutes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </span>
          </div>
        </div>
        <div
          className="CourseTileCarousel_tile__UtoLP "
          tabIndex={-1}
          aria-hidden="true"
          role="group"
          aria-label="5 of 5 in Trending courses"
        >
          <div className="col">
            <span>
              <a
                className="d-block mc-corners--sm mc-overflow--hidden"
                href="#"
              >
                <div className="mc-tile mc-tile--9x16">
                  <div className="mc-tile__content content">
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-left mc-tile-caption--y-top">
                      <div className="mc-tile-caption__content mc-p-4">
                        <span className="mc-badge mc-text-x-small mc-badge--default">
                          <span className="mc-text--capitalize">new</span>
                        </span>
                      </div>
                    </div>
                    <div className="mc-tile__component mc-tile-overlay mc-tile-overlay--gradient-bottom " />
                    <img
                      alt=""
                      src="https://www.masterclass.com/course-images/attachments/cqo9qbnh1ku0so463iqy3nyqi6ho?width=395&height=702&quality=75&dpr=1"
                      className="mc-tile-image  mc-animation mc-animation--zoom"
                      image="[object Object]"
                    />
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-center mc-tile-caption--y-bottom mc-tile-caption--flush">
                      <div className="mc-tile-caption__content mc-p-4">
                        <div className="mc-mt-4">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "inline-block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: "relative",
                              maxWidth: "100%"
                            }}
                          >
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                maxWidth: "100%"
                              }}
                            >
                              <img
                                alt=""
                                aria-hidden="true"
                                src="data:image/svg+xml,%3csvg%20
                                                                                                                                                                        xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27137%27%20height=%2712%27/%3e"
                                style={{
                                  display: "block",
                                  maxWidth: "100%",
                                  width: "initial",
                                  height: "initial",
                                  background: "none",
                                  opacity: 1,
                                  border: 0,
                                  margin: 0,
                                  padding: 0
                                }}
                              />
                            </span>
                            <img
                              alt="Original Series"
                              srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/series-logo.svg 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/series-logo.svg 2x"
                              src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/series-logo.svg"
                              decoding="async"
                              data-nimg="intrinsic"
                              style={{
                                position: "absolute",
                                inset: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%"
                              }}
                            />
                          </span>
                        </div>
                        <div
                          className="mc-nameplate mc-nameplate--small"
                          data-testid="nameplate"
                        >
                          <div className="mc-nameplate__inner">
                            <img
                              alt="Sohla El-Waylly with Special Guest Chefs"
                              src="https://www.masterclass.com/course-images/attachments/tmb0kcw18he8hefihfa5rmkllmwf?width=200&quality=75&dpr=2"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                        <span className="mc-mt-3 mc-text-x-small">
                          3 episodes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </span>
          </div>
        </div>
        <div
          className="CourseTileCarousel_tile__UtoLP "
          tabIndex={-1}
          aria-hidden="true"
          role="group"
          aria-label="1 of 5 in Trending courses"
        >
          <div className="col">
            <span>
              <a
                className="d-block mc-corners--sm mc-overflow--hidden"
                href="#"
              >
                <div className="mc-tile mc-tile--9x16">
                  <div className="mc-tile__content content">
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-left mc-tile-caption--y-top">
                      <div className="mc-tile-caption__content mc-p-4">
                        <span className="mc-badge mc-text-x-small mc-badge--default">
                          <span className="mc-text--capitalize">new</span>
                        </span>
                      </div>
                    </div>
                    <div className="mc-tile__component mc-tile-overlay mc-tile-overlay--gradient-bottom " />
                    <img
                      alt=""
                      src="https://www.masterclass.com/course-images/attachments/4ijggyhaow0ozjx0k00hrlwdj7sk?width=395&height=702&quality=75&dpr=1"
                      className="mc-tile-image  mc-animation mc-animation--zoom"
                      image="[object Object]"
                    />
                    <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-center mc-tile-caption--y-bottom mc-tile-caption--flush">
                      <div className="mc-tile-caption__content mc-p-4">
                        <div
                          className="mc-nameplate mc-nameplate--small"
                          data-testid="nameplate"
                        >
                          <div className="mc-nameplate__inner">
                            <img
                              alt="Whitney Wolfe Herd"
                              src="https://www.masterclass.com/course-images/attachments/d80cq7utboyf6lihpefw9x2wflmm?width=200&quality=75&dpr=2"
                              style={{ width: "100%" }}
                            />
                            <div className="mc-nameplate__separator" />
                            <p
                              className="mc-text--2-lines mc-text-h6"
                              data-testid="nameplate__sub-text"
                            >
                              Rewriting the Rules of Business and Life
                            </p>
                          </div>
                        </div>
                        <span className="mc-mt-3 mc-text-x-small">
                          1 hour 10 minutes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </span>
          </div>
        </div>
      </section>
      <div className="Carousel_pages__92ubv d-none d-sm-block">
        <button
          className="Carousel_page__QY60p Carousel_active__6zYQi"
          tabIndex={0}
          aria-current="true"
          aria-label="Page 1 of 3"
        />
        <button
          className="Carousel_page__QY60p "
          tabIndex={0}
          aria-current="false"
          aria-label="Page 2 of 3"
        />
        <button
          className="Carousel_page__QY60p "
          tabIndex={0}
          aria-current="false"
          aria-label="Page 3 of 3"
        />
      </div>
    </div>
    <div className="mc-mt-8 mc-text--center">
      <a
        className="c-button c-button--secondary c-button--md"
        href="#"
      >
        Tham gia lớp học
      </a>
    </div>
  </section>
     );
}

export default TrendingComponent;