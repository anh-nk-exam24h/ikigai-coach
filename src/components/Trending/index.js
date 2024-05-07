import React, { useState, useRef, useEffect } from 'react';
import data from './data.json'
import axios from 'axios';
function TrendingComponent() {
    const sliderRef = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [activeIndex, setActiveIndex] = useState(null); // State to track the active index

    const [listMentor, setListMentor] = useState([])
    useEffect(() => {
      axios
      .post(`https://api.ikigai.ikigroup.vn/api/course/list-tutor`, {
        headers: {
          "X-Authorization": localStorage.getItem("loginStatus") || "",
        },
      })
      .then((res) => {
       setListMentor(res.data);
        // setFirstCourse(res.data[0])
      });
    }, [])
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
    ELITE CLUB <br /> Cộng đồng những con người tinh hoa
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
      {
        listMentor && listMentor.map((key) => (
            <div
  className="CourseTileCarousel_tile__UtoLP "
  tabIndex={0}
  aria-hidden="false"
  role="group"
  aria-label="5 of 5 in Trending courses"
  key={key._id}
>
  <div className="col">
    <span>
      <a className="d-block mc-corners--sm mc-overflow--hidden" href="#">
        <div className="mc-tile mc-tile--9x16">
          <div className="mc-tile__content content">
            <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-left mc-tile-caption--y-top">
              <div className="mc-tile-caption__content mc-p-4">
                {/* <span className="mc-badge mc-text-x-small mc-badge--default">
                  <span className="mc-text--capitalize">new</span>
                </span> */}
              </div>
            </div>
            <div className="mc-tile__component mc-tile-overlay mc-tile-overlay--gradient-bottom " />
            <img
              alt=""
              src={key.user_avatar_thumbnail}
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
                   
                    <p
                      className="mc-text--2-lines mc-text-h6"
                      data-testid="nameplate__sub-text"
                    >
                        Mentor {key.display_name}
                    </p>
                  </div>
                </div>
                <span className="mc-mt-3 mc-text-x-small">
                  {key.course_count} Khoá học - {key.student_count} Học viên
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </span>
  </div>
</div>
        ))
      }

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
        Explore mentor
      </a>
    </div>
  </section>
     );
}

export default TrendingComponent;