import { useEffect, useState } from 'react';
import ChoiceTypeLearningComponent from './components/ChoiceTypeLearning';
import FAQComponent from './components/FAQ';
import FeedbackComponent from './components/Feedback';
import TrendingComponent from './components/Trending';
import logo from './ikigaicoach.svg'
import axios from 'axios';
import ModalComponent from './components/ModalPreview';
function App() {
  const [firstCourse, setFirstCourse] = useState({})
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
    .post(`https://api.ikigai.ikigroup.vn/api/course/list`, {
      headers: {
        "X-Authorization": localStorage.getItem("loginStatus") || "",
      },
    })
    .then((res) => {
      // console.log(res.data);
      setFirstCourse(res.data[0])
    });
  }, [])
  return (
    <div className="mc-page ">
      <header className="mc-background--color-dark mc-theme-dark mc-page__header mc-theme-dark ">
        <div className="container">
          <div className="Navigation_height__DbhgG flex-nowrap row no-gutters-vertical align-items-center justify-content-between">
            <div className="col-auto d-flex align-items-center ">
              <a
                className="d-none d-sm-flex mc-sr-only mc-sr-only-focusable mc-text-h7 mc-mr-4"
                href="#mc-main"
              >
                Skip To Main Content
              </a>
              <a href="index.html">
                <span className="mc-sr-only">MasterClass logo</span>
                <div className="d-flex">
                  <div className="d-flex">
                    <img src={logo} />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-auto d-flex align-items-center flex-grow-1 flex-shrink-1 justify-content-end justify-content-sm-start">
              <div className="d-block d-lg-none ">
                <button
                  type="button"
                  className="c-button c-button--secondary c-button--sm mc-mr-2 mc-py-3 Browse_browseBtn__UsvnB"
                >
                  Browse{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={25}
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="img"
                    className="mc-icon mc-icon--sm mc-ml-2 "
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M2.325 7.322a1.12 1.12 0 0 1 1.572 0L12 15.344l8.103-8.022a1.12 1.12 0 0 1 1.572 0c.433.43.433 1.126 0 1.556l-8.89 8.8a1.12 1.12 0 0 1-1.57 0l-8.89-8.8a1.092 1.092 0 0 1 0-1.556"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
             
              <div className="d-none d-sm-flex flex-grow-1">
                <div className="mc-search-input Search_searchInput__Fx8GF  ">
                  <div className="d-block d-xl-none ">
                    <label htmlFor="searchInput" className="mc-sr-only">
                      Search
                    </label>
                    <div className="mc-form-input mc-form-element mc-form-element--default mc-form-element--md">
                      <div className="mc-form-prepend">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={25}
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          role="img"
                          className="mc-icon mc-icon--md mc-ml-4 mc-mr-2 mc-my-2 mc-text-color--light"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M10.519 4.722a6.296 6.296 0 1 0 0 12.593 6.296 6.296 0 0 0 0-12.593M2 11.018a8.519 8.519 0 1 1 17.037 0 8.519 8.519 0 0 1-17.037 0"
                            clipRule="evenodd"
                          />
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M15.66 16.157a1.111 1.111 0 0 1 1.57 0l4.445 4.445a1.111 1.111 0 0 1-1.571 1.571l-4.445-4.444a1.111 1.111 0 0 1 0-1.572"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        id="searchInput"
                        type="text"
                        className="mc-form-element__element"
                        placeholder="Search"
                        aria-invalid="false"
                        defaultValue=""
                      />
                      <div className="mc-form-append" />
                    </div>
                  </div>
                  <div className="d-none d-xl-block undefined">
                    <label htmlFor="searchInput" className="mc-sr-only">
                    Hôm nay bạn muốn học gì?
                    </label>
                    <div className="mc-form-input mc-form-element mc-form-element--default mc-form-element--md">
                      <div className="mc-form-prepend">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={25}
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          role="img"
                          className="mc-icon mc-icon--md mc-ml-4 mc-mr-2 mc-my-2 mc-text-color--light"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M10.519 4.722a6.296 6.296 0 1 0 0 12.593 6.296 6.296 0 0 0 0-12.593M2 11.018a8.519 8.519 0 1 1 17.037 0 8.519 8.519 0 0 1-17.037 0"
                            clipRule="evenodd"
                          />
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M15.66 16.157a1.111 1.111 0 0 1 1.57 0l4.445 4.445a1.111 1.111 0 0 1-1.571 1.571l-4.445-4.444a1.111 1.111 0 0 1 0-1.572"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        id="searchInput"
                        type="text"
                        className="mc-form-element__element"
                        placeholder="Hôm nay bạn muốn học gì?"
                        aria-invalid="false"
                        defaultValue=""
                      />
                      <div className="mc-form-append" />
                    </div>
                  </div>
                </div>
                <div />
              </div>
            </div>
            <div className="col-auto d-flex align-items-center">
              <a className="mc-ml-4 d-none d-md-block" href="#">
               Bài viết
              </a>
              <a className="d-none d-md-block mc-ml-4 " href="#">
                Blog
              </a>
              <div className="d-none d-md-block">
                <a className="mc-ml-4 " href="#">
                 Đăng nhập
                </a>
              </div>
              <div className="d-block d-md-none">
                <button
                  className="mc-clickable mc-py-2 Menu_item__BwKx2 "
                  aria-controls="dropdown-:R9jd6:"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="d-flex align-items-center">
                    <h6 className="mc-text-h6 mc-text--capitalize mc-pr-1 d-none d-md-block">
                      Menu
                    </h6>
                    <svg
                      width="2em"
                      height="2em"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="mc-icon mc-icon--3"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M5.25 6.75A.75.75 0 0 1 6 6h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 5.25a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 5.25A.75.75 0 0 1 6 16.5h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
                <div />
              </div>
              <a
                type="button"
                className="c-button c-button--primary c-button--md d-none d-md-block mc-ml-4"
                href="#"
              >
                Đăng ký
              </a>
            </div>
          </div>
        </div>
      </header>
    <ChoiceTypeLearningComponent />

      <>
  <section className="container mc-my-10" data-testid="featured-instructor">
    <div className="mc-text--center">
      <h2 className="mc-text-h1 mc-mt-11 mc-mb-10">
      Gặp gỡ những người giỏi nhất <br />
      Trong lĩnh vực của bạn.
      </h2>
      <div>
        <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
          <div className="d-none d-md-block">
          <div className="mc-py-10 mc-tile mc-tile--21x9">
                <div className="mc-tile__content content">
                  <div
                    color="0, 0, 0"
                    className="mc-tile__component mc-tile-overlay mc-tile-overlay--gradient-right "
                    style={{
                      background:
                        "linear-gradient(to left, rgb(0, 0, 0) 12%, rgba(0, 0, 0, 0.9) 20%, rgba(0, 0, 0, 0) 45%) center center no-repeat"
                    }}
                  />
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "absolute",
                      inset: 0
                    }}
                  >
                    <img
                      alt=""
                      image="[object Object]"
                      data-testid="instructor-image"
                      src={firstCourse?.avatar?.media_url}
                      decoding="async"
                      data-nimg="fill"
                      className="mc-tile-image mc-corners--rounded"
                      sizes="100vw"
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
                    <noscript />
                  </span>
                  <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-right mc-tile-caption--y-center">
                    <div className="mc-tile-caption__content mc-p-3">
                      <div className="mc-text--center d-inline-block">
                        <span className="mc-badge mc-text-x-small mc-badge--default mx-text--bold justify-self-center mc-text--capitalize mc-mb-4">
                          new
                        </span>
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
                                maxWidth: "100%",

                                  fontSize: 17,
                                  fontWeight: '600'
                              }}
                            >
                              <img
                                alt=""
                                aria-hidden="true"
                                src="data:image/svg+xml,%3csvg%20
                                                                                        xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27182%27%20height=%2715.94160583941606%27/%3e"
                                style={{
                                  display: "block",
                                  maxWidth: "100%",
                                  width: "initial",
                                  height: "initial",
                                  background: "none",
                                  opacity: 1,
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 17,
                                  fontWeight: '600'
                                }}
                              />
                            </span>
                           <h3 style={{
                           
                                  fontSize: 17,
                                  fontWeight: '600'
                           }}>{firstCourse?.title}</h3>
                            <noscript />
                          </span>
                        </div>
                        <span
                          className="mc-mt-4 mc-text--2-lines mc-text-medium mc-text-light mc-opacity--hinted mc-text--center"
                          style={{ maxWidth: 400 }}
                        >
                         {firstCourse?.description}
                        </span>
                        <button
                          className="c-button c-button--play c-button--md mc-mb-3 mc-mt-6"
                          onClick={() => setIsOpen(true)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={25}
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            role="img"
                            className="mc-icon mc-icon--md mc-mr-2"
                          >
                            <path
                              fill="currentColor"
                              d="M7.791 2.695a1.25 1.25 0 0 0-1.92 1.055v17.5a1.25 1.25 0 0 0 1.92 1.055l13.75-8.75a1.25 1.25 0 0 0 0-2.11z"
                            />
                          </svg>
                          Watch Trailer{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <ModalComponent video={firstCourse?.media_id?.media_url} setIsOpen={setIsOpen} isOpen={isOpen} />
          <div className="d-block d-md-none">
            <a
              className="col-12"
              href="/series/tell-a-great-story"
              tabIndex={-1}
            >
              <div className="mc-py-10 mc-tile mc-tile--2x3">
                <div className="mc-tile__content content">
                  <div
                    color="0, 0, 0"
                    className="mc-tile__component mc-tile-overlay mc-tile-overlay--gradient-bottom "
                    style={{
                      background:
                        "linear-gradient(to top, rgb(0, 0, 0) 0px, rgba(0, 0, 0, 0.6) 25%, rgba(0, 0, 0, 0) 45%) center center no-repeat"
                    }}
                  />
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "absolute",
                      inset: 0
                    }}
                  >
                    <img
                      alt=""
                      image="[object Object]"
                      data-testid="instructor-image"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="fill"
                      className="mc-tile-image mc-corners--rounded"
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
                    <noscript />
                  </span>
                  <div className="mc-tile__component mc-tile-caption mc-tile-caption--x-center mc-tile-caption--y-bottom">
                    <div className="mc-tile-caption__content mc-p-3">
                      <div className="mc-text--center d-inline-block">
                        <span className="mc-badge mc-text-x-small mc-badge--default mx-text--bold justify-self-center mc-text--capitalize mc-mb-4">
                          new
                        </span>
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
                                                                                                        xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27182%27%20height=%2715.94160583941606%27/%3e"
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
                              alt={firstCourse.title}
                              src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/series-logo.svg"
                              decoding="async"
                              data-nimg="intrinsic"
                              srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/series-logo.svg 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/series-logo.svg 2x"
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
                            <div className="NameplateImage_container__pWC1H">
                              <span
                                style={{
                                  boxSizing: "border-box",
                                  display: "block",
                                  overflow: "hidden",
                                  width: "initial",
                                  height: "initial",
                                  background: "none",
                                  opacity: 1,
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  position: "absolute",
                                  inset: 0
                                }}
                              >
                                <img
                                  alt="Michael Lewis"
                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                  decoding="async"
                                  data-nimg="fill"
                                  className="NameplateImage_image__Hq_f5"
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
                                <noscript />
                              </span>
                            </div>
                          </div>
                        </div>
                        <span
                          className="mc-mt-4 mc-text--2-lines mc-text-medium mc-text-light mc-opacity--hinted mc-text--center"
                          style={{ maxWidth: 400 }}
                        >
                          On MasterClass, Michael Lewis, the author of
                          “Moneyball,” “Liar’s Poker,” and other NYT #1
                          bestsellers, shares how to nail narratives. Take his
                          tips and make just about anything—from a speech to a
                          job interview to cocktail party conversation—more
                          interesting.
                        </span>
                        <button
                          type="button"
                          className="c-button c-button--play c-button--md mc-mb-3 mc-mt-6"
                          tabIndex={-1}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={25}
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            role="img"
                            className="mc-icon mc-icon--md mc-mr-2"
                          >
                            <path
                              fill="currentColor"
                              d="M7.791 2.695a1.25 1.25 0 0 0-1.92 1.055v17.5a1.25 1.25 0 0 0 1.92 1.055l13.75-8.75a1.25 1.25 0 0 0 0-2.11z"
                            />
                          </svg>
                          Watch Trailer{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <TrendingComponent />
  <section
    className="container mc-my-12"
    data-testid="start-journey-section"
    aria-label="Start your journey"
  >
    <div className="d-flex flex-column">
      <div className="d-block d-md-none">
        <p className="mc-text--center mc-pt-10 mc-pb-8 mc-text-h1">
        Bắt đầu chuyến đi của bạn ngay hôm nay.
        </p>
        <div className="mc-mb-8 mc-text--center">
          <div className="flex-column flex-md-row justify-content-center d-flex">
            <p className="mc-text--center mc-opacity--hinted">
            Chọn từ 3 gói dịch vụ.
            </p>
            <div className="justify-content-center d-flex flex-row">
              <p className="mc-pl-1 mc-text--center mc-opacity--hinted">
               Bắt đầu chỉ với
              </p>
              <div className="tracking-container ">
                <p className="mc-pl-1 mc-text--center mc-text--bold">
                  $10/tháng,
                </p>
              </div>
              <p className="mc-pl-1 mc-text--center mc-opacity--hinted">
              Thanh toán hàng năm.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex mc-px-4 flex-column">
          <a
            className="c-button c-button--primary c-button--md mc-mb-3"
            href="#"
          >
            Đăng ký
          </a>
          <a
            className="c-button c-button--secondary c-button--md"
            href="/find-my-classes"
          >
            Tham gia lớp học
          </a>
        </div>
      </div>
      <div className="d-none d-md-block">
        <p className="mc-text--center mc-pt-10 mc-pb-8 mc-text-h1">
        Bắt đầu chuyến đi của bạn ngay hôm nay.
        </p>
        <div className="mc-mb-8 mc-text--center">
          <div className="flex-column flex-md-row justify-content-center d-flex">
            <p className="mc-text--center mc-opacity--hinted">
            Chọn từ 3 gói dịch vụ.
            </p>
            <div className="justify-content-center d-flex flex-row">
              <p className="mc-pl-1 mc-text--center mc-opacity--hinted">
                Bắt đầu chỉ với
              </p>
              <div className="tracking-container ">
                <p className="mc-pl-1 mc-text--center mc-text--bold">
                  $10/tháng,
                </p>
              </div>
              <p className="mc-pl-1 mc-text--center mc-opacity--hinted">
               Thanh toán hằng năm.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <a
            className="c-button c-button--primary c-button--md mc-mr-3"
            href="/find-my-classes"
          >
           Đăng ký
          </a>
          <a
            className="c-button c-button--secondary c-button--md"
            href="/find-my-classes"
          >
            Tham gia lớp học
          </a>
        </div>
      </div>
    </div>
  </section>
  <div className="tracking-container ">
    <section data-testid="business-section" className="container mc-my-10 ">
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center flex-column flex-md-row mc-p-0 mc-m-0 flex-md-nowrap BusinessBanner">
          <div className="mc-bg-neutral-900 mc-corners--md BusinessBanner_background__P_KbA" />
          <div className="position-relative mc-corners--lg mc-overflow--hidden BusinessBanner_img__FnmMa">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "absolute",
                inset: 0
              }}
            >
              <img
                alt=""
                data-testid="maw-banner-l&d-img"
                sizes="100vw"
                src="https://res.cloudinary.com/dhdfr7p4h/image/upload/v1715072344/photo1715070438_oiasg7.jpg"
                decoding="async"
                data-nimg="fill"
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
                  maxHeight: "100%",
                  objectFit: "cover"
                }}
              />
            </span>
          </div>
          <div className="mc-mx-md-9 mc-mx-4 mc-mr-xl-0 d-flex flex-column align-items-center align-items-md-start mc-my-6 mc-my-md-0 BusinessBanner_info__GIVcx">
            <div className="position-relative BusinessBanner_logo__eP0CK">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "absolute",
                  inset: 0
                }}
              >
                <img
                  alt="MasterClass Logo"
                  data-testid="maw-banner-logo"
                  sizes="100vw"
                  src="https://res.cloudinary.com/dhdfr7p4h/image/upload/v1715072344/photo1715070438_oiasg7.jpg"
                  decoding="async"
                  data-nimg="fill"
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
                    maxHeight: "100%",
                    objectFit: "cover"
                  }}
                />
              </span>
            </div>
            <h1 className="mc-text-h2 mc-text--uppercase mc-text-d1 mc-mt-2 mc-mb-6 BusinessBanner_title__zdFui ">
            Nâng cao trình độ team của bạn
            </h1>
            <p className="mc-text--2-lines-max mc-opacity--hinted mc-text--center mc-text-md--left BusinessBanner_description__ANrJV">
            Xem tại sao các tổ chức hàng đầu tin dùng Ikigai Coach cho việc học tập và phát triển.
            </p>
            <div className="mc-mt-8 d-flex flex-md-row flex-column align-items-center">
              <a
                className="c-button c-button--primary c-button--md mc-mr-4"
                href="#"
              >
                Liên hệ CSKH
              </a>
              <a
                className="c-button c-button--link c-button--md mc-mt-4 mc-mt-md-0"
                href="#"
              >
                Tìm hiểu thêm
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={25}
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="img"
                  className="mc-icon mc-icon--2 mc-ml-3"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12.87 2.825a1.094 1.094 0 0 0-1.557 0 1.118 1.118 0 0 0 0 1.572l6.961 7.025H3.101c-.608 0-1.101.498-1.101 1.111 0 .614.493 1.112 1.1 1.112h15.108l-6.895 6.958a1.119 1.119 0 0 0 0 1.572c.43.433 1.127.433 1.557 0l8.808-8.89c.43-.433.43-1.137 0-1.57z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</>
<>
  <section className="container mc-my-12 mc-pb-6" data-testid="stories-section">
    <h2 className="mc-text-h2 mc-mb-10 mc-text--center">
      Chia sẻ của học viên
    </h2>
   <FeedbackComponent />
  </section>
  <div className="lazyload-wrapper " style={{ display: "none" }}>
    <section className="mc-my-12" data-testid="category-samples-section">
      <div className=" d-md-block">
        <div className="mc-tile mc-tile--1x1">
          <div className="mc-tile__content content">
            <div className="mc-opacity--muted mc-tile__component mc-tile-video mc-tile-video--show">
              <div
                className="mc-tile-video__video"
                style={{ pointerEvents: "none" }}
              >
                <div className="mc-video mc-h-100 mc-w-100 mc-video--fit-cover mc-video--state-playing mc-video--16x9 mc-h-100">
                  <video
                    className="mc-video__video"
                    autoPlay="true"
                    src="https://res.cloudinary.com/dhdfr7p4h/video/upload/v1714725768/1061926687-preview_jvnvni.mp4"
                  ></video>
                </div>
              </div>
            </div>
            <div className="CategoriesTile_StickyCaption__M09Md  mc-tile__component mc-tile-caption mc-tile-caption--x-left mc-tile-caption--y-top">
              <div className="mc-tile-caption__content mc-p-3">
                <div className="container">
                  <h2 className="mc-text-h2 mc-pr-9">
                    Choose a category to watch a class highlight
                  </h2>
                  <div className="mc-mt-4">
                    <div className="mc-mt-3">
                      <button
                        type="button"
                        className="c-button c-button--link c-button--md mc-text--bare-link-parent mc-text--capitalize mc-p-0"
                      >
                        <span className="mc-text--bare-link mc-text-h4">
                          Acting &amp; Performing Arts
                        </span>
                      </button>
                    </div>
                    <div className="mc-mt-3">
                      <button
                        type="button"
                        className="c-button c-button--link c-button--md mc-text--bare-link-parent mc-text--capitalize mc-p-0"
                      >
                        <span className="mc-text--bare-link mc-text-h4">
                          Business &amp; Entrepreneurship
                        </span>
                      </button>
                    </div>
                    <div className="mc-mt-3">
                      <button
                        type="button"
                        className="c-button c-button--link c-button--md mc-text--bare-link-parent mc-text--capitalize mc-p-0"
                      >
                        <span className="mc-text--bare-link mc-text-h4">
                          Community &amp; Government
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="CategoriesTile_StickyCaption__M09Md mc-py-6 mc-tile__component mc-tile-caption mc-tile-caption--x-right mc-tile-caption--y-top">
              <div className="mc-tile-caption__content mc-p-3">
                <button
                  type="button"
                  className="c-button c-button--tertiary c-button--md mc-corners--circle mc-p-3"
                  aria-label="Pause background video"
                >
                  <svg
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="mc-icon"
                    role="img"
                  >
                    <path d="M7.5 17.25V6.75H9v10.5H7.5z" fill="currentColor" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.75 6.75A.75.75 0 017.5 6H9a.75.75 0 01.75.75v10.5A.75.75 0 019 18H7.5a.75.75 0 01-.75-.75V6.75z"
                      fill="currentColor"
                    />
                    <path d="M15 17.25V6.75h1.5v10.5H15z" fill="currentColor" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.25 6.75A.75.75 0 0115 6h1.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V6.75z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <section
    className="container mc-my-12 mc-pt-4 position-relative"
    data-testid="email-capture"
    id="email-capture"
  >
    <div className="mc-theme-dark mc-bg-dark">
      <div className="position-absolute EmailCapture_thankYou__k2cy_ EmailCapture_hidden__fCpKE"></div>
      <div className="">
        <form className="row flex-column flex-md-row">
          <div className="col-md-4 d-flex flex-column justify-content-center mc-text--center mc-text-md--left">
            <h2 className="mc-text-h4">Học thử lớp học của chúng tôi</h2>
            <p className="mc-opacity--muted mc-my-4">
            Điền email của bạn và chúng tôi sẽ gửi cho bạn một số mẫu lớp học mà chúng tôi yêu thích.
            </p>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="mc-form-group mc-form-group--default">
              <div className="row no-gutters justify-content-between align-items-center">
                <div className="col align-self-end">
                  <label
                    htmlFor="email"
                    className="d-block mc-text-h8 mc-text--left mc-mb-1"
                  >
                    Email
                  </label>
                </div>
                <div className="col-12">
                  <div className="">
                    <div className="mc-form-input mc-form-element mc-form-element--default mc-form-element--md">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="mc-form-element__element"
                        aria-describedby="email-help-text email-info-text"
                        autoComplete="email"
                        placeholder="Nhập địa chỉ Email"
                        aria-invalid="true"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col align-self-start">
                  <p
                    id="email-help-text"
                    className="mc-text-x-small mc-opacity--muted mc-text--left mc-mt-1"
                  />
                </div>
                <div className="col-auto align-self-start mc-ml-auto" />
              </div>
            </div>
            <div className="mc-form-group mc-form-group--default">
              <div className="row no-gutters justify-content-between align-items-center">
                <div className="col align-self-end" />
                <div className="col-12">
                  {/* <div className="">
                    <div className="mc-mt-2 align-items-center mc-text-x-small mc-input-checkbox">
                      <input
                        type="checkbox"
                        name="terms"
                        id="terms"
                        className="mc-input-checkbox__realbox"
                        aria-checked="false"
                        aria-labelledby="terms-label"
                        readOnly=""
                      />
                      <span className="mc-input-checkbox__fauxbox mc-mr-3 flex-shrink-0" />
                      <label id="terms-label">
                        <label className="mc-opacity--muted">
                          I agree to receive email updates
                        </label>
                      </label>
                    </div>
                  </div> */}
                </div>
                <div className="col align-self-start">
                  <p
                    id="terms-help-text"
                    className="mc-text-x-small mc-opacity--muted mc-text--left mc-mt-1"
                  />
                </div>
                <div className="col-auto align-self-start mc-ml-auto" />
              </div>
            </div>
            <p className="mc-mt-2 mc-text-x-small mc-opacity--muted mc-mb-4 mc-text-small">
              
Bằng cách chia sẻ địa chỉ email của bạn, bạn đồng ý với
              <a
                className="mc-text--link"
                href="/terms"
                target="_blank"
                rel="noreferrer"
              >
                Điều khoản Dịch vụ{" "}
               </a>
               {" "} và
              <a
                className="mc-text--link"
                href="//privacy.masterclass.com"
                target="_blank"
                rel="noreferrer"
              >
                {" "}Chính sách Bảo mật
              </a>{" "}
               của chúng tôi.
            </p>
          </div>
          <div className="col-md-2">
            <button
              type="submit"
              className="c-button c-button--full-width c-button--tertiary c-button--md mc-mt-md-5"
            >
              Gửi
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</>
<FAQComponent />
<footer className="footer mc-bg-dark mc-theme-dark">
  <hr className="mc-separator mc-m-0 mc-separator--subtle" aria-hidden="true" />
  <div className="container mc-mt-10">
    <div className="row">
      <div className="col" aria-labelledby="footer-explore">
        <h3
          id="footer-explore"
          className="mc-text-h7 mc-opacity--muted mc-mb-6"
        >
          Explore
        </h3>
        <ul className="mc-text-small mc-mb-9">
          <li className="mc-mb-5 mc-pb-1">
            <a className="mc-text--bare-link" href="articles.html">
              Articles
            </a>
          </li>
          <li className="mc-mb-5 mc-pb-1">
            <a className="mc-text--bare-link" href="sitemap.html">
              Sitemap
            </a>
          </li>
          <li className="mc-mb-5 mc-pb-1">
            <a className="mc-text--bare-link" href="gift.html">
              Gifts
            </a>
          </li>
        </ul>
      </div>
      <div className="col" aria-labelledby="footer-about">
        <h3 id="footer-about" className="mc-text-h7 mc-opacity--muted mc-mb-6">
          About
        </h3>
        <ul className="mc-text-small mc-mb-9">
          <li className="mc-mb-5 mc-pb-1">
            <a
              className="mc-text--bare-link"
              href="https://learn.masterclass.com/dei"
            >
              Diversity, Equity, and Inclusion
            </a>
          </li>
          <li className="mc-mb-5 mc-pb-1">
            <a className="mc-text--bare-link" href="careers.html">
              Careers
            </a>
          </li>
          <li className="mc-mb-5 mc-pb-1">
            <a className="mc-text--bare-link" href="newsroom.html">
              Newsroom
            </a>
          </li>
          <li className="mc-mb-5 mc-pb-1">
            <a
              className="mc-text--bare-link"
              href="https://learn.masterclass.com/security"
            >
              Security
            </a>
          </li>
          <li className="mc-mb-5 mc-pb-1">
            <a
              className="mc-text--bare-link"
              href="https://privacy.masterclass.com/"
            >
              Privacy
            </a>
          </li>
          <li className="mc-mb-5 mc-pb-1">
            <a className="mc-text--bare-link" href="terms.html">
              Terms
            </a>
          </li>
          <li className="mc-mb-5 mc-pb-1">
            <a
              className="mc-text--bare-link"
              href="https://learn.masterclass.com/grants"
              target="_blank"
              rel="noopener noreferrer"
            >
              Social Impact
            </a>
          </li>
          <li className="mc-mb-5 mc-pb-1">
            <a className="mc-text--bare-link" href="for-business.html">
              MasterClass at Work
            </a>
          </li>
          <li className="mc-mb-5 mc-pb-1">
            <a
              className="mc-text--bare-link"
              href="https://masterclasshelp.zendesk.com/hc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support
            </a>
          </li>
        </ul>
      </div>
      <div className="col d-none d-md-block" aria-labelledby="footer-social">
        <h3 id="footer-social" className="mc-text-h7 mc-opacity--muted mc-mb-6">
          Social
        </h3>
        <ul className="mc-text-small mc-mb-9">
          <li className="mc-mb-4">
            <a
              href="https://twitter.com/masterclass"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                aria-hidden="true"
                className="mc-icon mc-icon--3 mc-opacity--muted mc-mr-4 mc-icon--placeholder"
                role="img"
              />
              <span className="mc-text--bare-link">Twitter</span>
            </a>
          </li>
          <li className="mc-mb-4">
            <a
              href="https://www.instagram.com/masterclass"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                aria-hidden="true"
                className="mc-icon mc-icon--3 mc-opacity--muted mc-mr-4 mc-icon--placeholder"
                role="img"
              />
              <span className="mc-text--bare-link">Instagram</span>
            </a>
          </li>
          <li className="mc-mb-4">
            <a
              href="https://www.facebook.com/masterclassofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                aria-hidden="true"
                className="mc-icon mc-icon--3 mc-opacity--muted mc-mr-4 mc-icon--placeholder"
                role="img"
              />
              <span className="mc-text--bare-link">Facebook</span>
            </a>
          </li>
          <li className="mc-mb-4">
            <a
              href="https://youtube.com/c/masterclass"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                aria-hidden="true"
                className="mc-icon mc-icon--3 mc-opacity--muted mc-mr-4 mc-icon--placeholder"
                role="img"
              />
              <span className="mc-text--bare-link">YouTube</span>
            </a>
          </li>
          <li className="mc-mb-4">
            <a
              href="https://www.linkedin.com/company/masterclassinc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                aria-hidden="true"
                className="mc-icon mc-icon--3 mc-opacity--muted mc-mr-4 mc-icon--placeholder"
                role="img"
              />
              <span className="mc-text--bare-link">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="d-none d-md-block">
        <div className="col" aria-labelledby="footer-download">
          <h3
            id="footer-download"
            className="mc-text-h7 mc-opacity--muted mc-mb-6"
          >
            Download
          </h3>
          <ul className="mc-mb-9">
            <li className="mc-mb-4">
              <a
                href="https://itunes.apple.com/US/app/id1273867416"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mc-sr-only">Download on the App Store</span>
                <svg
                  width={136}
                  height={48}
                  viewBox="0 0 136 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width={135}
                    height={47}
                    rx="7.5"
                    fill="black"
                    stroke="#949AA4"
                  />
                  <path
                    d="M26.3164 10C26.4891 11.5229 25.8558 13.0525 24.9162 14.1516C23.976 15.2514 22.4348 16.105 20.924 15.992C20.7183 14.4994 21.4804 12.9429 22.3519 11.9702C23.3231 10.8717 24.9614 10.0525 26.3164 10Z"
                    fill="white"
                  />
                  <path
                    d="M31.9085 29.0709C31.7417 29.0055 28.3397 27.6724 28.3027 23.8131C28.2723 20.5914 30.9692 19.0081 31.2005 18.8724C31.2053 18.8696 31.2091 18.8673 31.2117 18.8658C29.63 16.6292 27.1669 16.3224 26.29 16.2868C25.0072 16.1613 23.7628 16.6354 22.7468 17.0225C22.102 17.2681 21.5492 17.4787 21.137 17.4787C20.6767 17.4787 20.108 17.2609 19.47 17.0165C18.6346 16.6966 17.6804 16.3311 16.6949 16.3494C14.4091 16.381 12.3041 17.6321 11.1258 19.6077C8.75359 23.5858 10.5201 29.4782 12.8315 32.707C13.9626 34.285 15.3109 36.0628 17.0807 35.9983C17.8726 35.968 18.4357 35.7364 19.0179 35.497C19.6897 35.2208 20.3869 34.9341 21.4904 34.9341C22.5448 34.9341 23.2113 35.2126 23.852 35.4803C24.4638 35.7359 25.0522 35.9818 25.9326 35.966C27.7665 35.933 28.9306 34.355 30.053 32.7715C31.3141 30.9899 31.8547 29.2643 31.9109 29.0848C31.9125 29.0797 31.9137 29.0759 31.9145 29.0733C31.9138 29.073 31.9117 29.0722 31.9085 29.0709Z"
                    fill="white"
                  />
                  <path
                    d="M48.3882 32.2248H43.061L41.7817 36.2132H39.5254L44.5711 21.457H46.9154L51.9612 36.2132H49.6663L48.3882 32.2248ZM43.6128 30.3843H47.8354L45.7538 23.9114H45.6955L43.6128 30.3843Z"
                    fill="white"
                  />
                  <path
                    d="M62.8578 30.8342C62.8578 34.1774 61.1631 36.3254 58.6056 36.3254C57.9577 36.3612 57.3134 36.2036 56.7464 35.8707C56.1795 35.5379 55.7127 35.0431 55.3997 34.4432H55.3513V39.7719H53.2598V25.4544H55.2843V27.2438H55.3227C55.6502 26.6467 56.1248 26.1545 56.6961 25.8196C57.2674 25.4847 57.914 25.3196 58.5671 25.3418C61.1532 25.3418 62.8578 27.5003 62.8578 30.8342ZM60.7081 30.8342C60.7081 28.6561 59.642 27.2241 58.0154 27.2241C56.4174 27.2241 55.3425 28.6862 55.3425 30.8342C55.3425 33.0019 56.4174 34.4536 58.0154 34.4536C59.642 34.4536 60.7081 33.0321 60.7081 30.8342Z"
                    fill="white"
                  />
                  <path
                    d="M74.0727 30.8342C74.0727 34.1774 72.3779 36.3254 69.8204 36.3254C69.1726 36.3612 68.5283 36.2036 67.9613 35.8707C67.3943 35.5378 66.9276 35.0431 66.6145 34.4432H66.5661V39.7719H64.4746V25.4544H66.4991V27.2438H66.5375C66.865 26.6467 67.3396 26.1545 67.9109 25.8196C68.4822 25.4847 69.1288 25.3196 69.7819 25.3418C72.368 25.3418 74.0727 27.5002 74.0727 30.8342ZM71.9229 30.8342C71.9229 28.6561 70.8568 27.2241 69.2302 27.2241C67.6322 27.2241 66.5573 28.6862 66.5573 30.8342C66.5573 33.0019 67.6322 34.4536 69.2302 34.4536C70.8568 34.4536 71.9229 33.0321 71.9229 30.8342H71.9229Z"
                    fill="white"
                  />
                  <path
                    d="M81.4847 32.1017C81.6397 33.5651 82.9861 34.5259 84.8259 34.5259C86.5887 34.5259 87.8571 33.565 87.8571 32.2456C87.8571 31.1002 87.0921 30.4144 85.2809 29.9444L83.4696 29.4837C80.9034 28.8292 79.712 27.562 79.712 25.5057C79.712 22.9597 81.8134 21.2109 84.7973 21.2109C87.7504 21.2109 89.7749 22.9597 89.843 25.5057H87.7317C87.6053 24.0331 86.4524 23.1442 84.7676 23.1442C83.0827 23.1442 81.9298 24.0436 81.9298 25.3526C81.9298 26.3958 82.6662 27.0097 84.4675 27.4796L86.0073 27.8788C88.8747 28.5948 90.0661 29.811 90.0661 31.9694C90.0661 34.73 87.9834 36.4591 84.6709 36.4591C81.5715 36.4591 79.4789 34.7707 79.3438 32.1016L81.4847 32.1017Z"
                    fill="white"
                  />
                  <path
                    d="M94.579 22.9082V25.4542H96.5166V27.203H94.579V33.134C94.579 34.0554 94.967 34.4848 95.8187 34.4848C96.0488 34.4805 96.2784 34.4635 96.5067 34.4337V36.172C96.1238 36.2476 95.7346 36.2818 95.345 36.2741C93.2821 36.2741 92.4776 35.456 92.4776 33.3695V27.203H90.9961V25.4542H92.4776V22.9082H94.579Z"
                    fill="white"
                  />
                  <path
                    d="M97.6387 30.8344C97.6387 27.4494 99.5268 25.3223 102.471 25.3223C105.425 25.3223 107.305 27.4493 107.305 30.8344C107.305 34.2287 105.435 36.3465 102.471 36.3465C99.5081 36.3465 97.6387 34.2286 97.6387 30.8344ZM105.174 30.8344C105.174 28.5123 104.166 27.1418 102.471 27.1418C100.776 27.1418 99.7697 28.5228 99.7697 30.8344C99.7697 33.1657 100.776 34.5257 102.471 34.5257C104.166 34.5257 105.174 33.1657 105.174 30.8344H105.174Z"
                    fill="white"
                  />
                  <path
                    d="M109.031 25.4553H111.026V27.2864H111.074C111.209 26.7145 111.527 26.2091 111.973 25.8551C112.419 25.5012 112.968 25.3202 113.525 25.3427C113.766 25.3418 114.007 25.3694 114.242 25.4251V27.4907C113.938 27.3925 113.62 27.3474 113.302 27.3572C112.998 27.3442 112.695 27.4008 112.414 27.523C112.133 27.6453 111.88 27.8304 111.673 28.0655C111.466 28.3007 111.31 28.5803 111.215 28.8853C111.12 29.1903 111.088 29.5134 111.123 29.8324V36.2137H109.031L109.031 25.4553Z"
                    fill="white"
                  />
                  <path
                    d="M123.883 33.0531C123.601 35.0061 121.8 36.3465 119.495 36.3465C116.531 36.3465 114.691 34.2495 114.691 30.8854C114.691 27.5109 116.541 25.3223 119.407 25.3223C122.227 25.3223 123.999 27.367 123.999 30.629V31.3856H116.803V31.519C116.769 31.915 116.816 32.3138 116.94 32.6891C117.064 33.0645 117.263 33.4076 117.522 33.6958C117.781 33.984 118.095 34.2107 118.444 34.3608C118.793 34.5109 119.168 34.581 119.544 34.5663C120.038 34.6152 120.534 34.4944 120.958 34.2217C121.382 33.9491 121.711 33.5392 121.897 33.0531L123.883 33.0531ZM116.813 29.8422H121.907C121.925 29.4862 121.874 29.1299 121.757 28.7958C121.639 28.4616 121.457 28.1568 121.222 27.9004C120.987 27.644 120.705 27.4416 120.393 27.3058C120.081 27.1701 119.745 27.104 119.407 27.1117C119.067 27.1095 118.729 27.1786 118.414 27.315C118.099 27.4513 117.812 27.6522 117.571 27.9061C117.33 28.1599 117.139 28.4617 117.008 28.794C116.878 29.1263 116.812 29.4826 116.813 29.8422V29.8422Z"
                    fill="white"
                  />
                  <path
                    d="M43.3475 10.3489C43.786 10.3156 44.226 10.3856 44.6357 10.5536C45.0455 10.7217 45.4149 10.9837 45.7172 11.3207C46.0194 11.6578 46.2471 12.0614 46.3837 12.5026C46.5204 12.9438 46.5625 13.4115 46.5073 13.872C46.5073 16.1371 45.3478 17.4392 43.3475 17.4392H40.9219V10.3489H43.3475ZM41.9649 16.4365H43.231C43.5443 16.4563 43.8579 16.402 44.1488 16.2777C44.4398 16.1534 44.7009 15.9621 44.913 15.7179C45.1251 15.4736 45.283 15.1825 45.3751 14.8656C45.4673 14.5488 45.4913 14.2143 45.4456 13.8864C45.488 13.5598 45.4615 13.2274 45.368 12.9129C45.2744 12.5984 45.1161 12.3096 44.9045 12.0673C44.6928 11.825 44.433 11.6351 44.1437 11.5112C43.8544 11.3873 43.5427 11.3326 43.231 11.3508H41.9649V16.4365Z"
                    fill="white"
                  />
                  <path
                    d="M47.6851 14.7617C47.6533 14.41 47.6914 14.0552 47.797 13.72C47.9026 13.3849 48.0734 13.0767 48.2984 12.8153C48.5234 12.5539 48.7977 12.345 49.1037 12.2021C49.4096 12.0592 49.7405 11.9854 50.075 11.9854C50.4096 11.9854 50.7404 12.0592 51.0464 12.2021C51.3523 12.345 51.6266 12.5539 51.8516 12.8153C52.0767 13.0767 52.2475 13.3849 52.3531 13.72C52.4587 14.0552 52.4968 14.41 52.4649 14.7617C52.4974 15.1137 52.4597 15.4689 52.3544 15.8047C52.2491 16.1404 52.0784 16.4491 51.8533 16.711C51.6282 16.9729 51.3537 17.1822 51.0475 17.3255C50.7412 17.4687 50.41 17.5427 50.075 17.5427C49.7401 17.5427 49.4088 17.4687 49.1026 17.3255C48.7963 17.1822 48.5218 16.9729 48.2967 16.711C48.0717 16.4491 47.901 16.1404 47.7956 15.8047C47.6903 15.4689 47.6527 15.1137 47.6851 14.7617ZM51.4362 14.7617C51.4362 13.6018 50.9427 12.9235 50.0767 12.9235C49.2073 12.9235 48.7183 13.6018 48.7183 14.7617C48.7183 15.9308 49.2074 16.6039 50.0767 16.6039C50.9427 16.6039 51.4362 15.9262 51.4362 14.7617H51.4362Z"
                    fill="white"
                  />
                  <path
                    d="M58.819 17.4397H57.7815L56.7341 13.4988H56.655L55.612 17.4397H54.5844L53.1875 12.0889H54.2019L55.1097 16.1718H55.1845L56.2264 12.0889H57.1859L58.2278 16.1718H58.3069L59.2103 12.0889H60.2104L58.819 17.4397Z"
                    fill="white"
                  />
                  <path
                    d="M61.3828 12.089H62.3456V12.939H62.4203C62.5471 12.6337 62.7609 12.3778 63.032 12.2069C63.3031 12.0361 63.6179 11.9587 63.9326 11.9857C64.1792 11.9662 64.4268 12.0054 64.6571 12.1006C64.8873 12.1958 65.0943 12.3444 65.2628 12.5356C65.4313 12.7267 65.5568 12.9554 65.6302 13.2047C65.7036 13.454 65.7229 13.7176 65.6867 13.9759V17.4398H64.6866V14.2411C64.6866 13.3812 64.3327 12.9536 63.593 12.9536C63.4256 12.9453 63.2585 12.9754 63.1031 13.0417C62.9477 13.1081 62.8078 13.2091 62.6928 13.3379C62.5779 13.4667 62.4907 13.6202 62.4372 13.7879C62.3837 13.9556 62.3652 14.1336 62.3829 14.3095V17.4398H61.3828L61.3828 12.089Z"
                    fill="white"
                  />
                  <path
                    d="M67.2832 10H68.2833V17.4396H67.2832V10Z"
                    fill="white"
                  />
                  <path
                    d="M69.6734 14.7618C69.6416 14.4101 69.6797 14.0553 69.7853 13.7201C69.8909 13.3849 70.0618 13.0767 70.2868 12.8153C70.5119 12.5539 70.7862 12.345 71.0921 12.2021C71.3981 12.0592 71.729 11.9854 72.0636 11.9854C72.3981 11.9854 72.729 12.0592 73.035 12.2021C73.341 12.345 73.6153 12.5539 73.8403 12.8153C74.0653 13.0767 74.2362 13.3849 74.3418 13.7201C74.4474 14.0553 74.4856 14.4101 74.4537 14.7618C74.4861 15.1138 74.4485 15.469 74.3431 15.8048C74.2377 16.1405 74.067 16.4492 73.8419 16.7111C73.6168 16.973 73.3423 17.1823 73.036 17.3256C72.7298 17.4688 72.3985 17.5428 72.0636 17.5428C71.7286 17.5428 71.3973 17.4688 71.0911 17.3256C70.7848 17.1823 70.5103 16.973 70.2852 16.7111C70.0601 16.4492 69.8894 16.1405 69.784 15.8048C69.6786 15.469 69.641 15.1138 69.6734 14.7618ZM73.4244 14.7618C73.4244 13.6019 72.931 12.9236 72.0649 12.9236C71.1956 12.9236 70.7065 13.6019 70.7065 14.7618C70.7065 15.9309 71.1956 16.604 72.0649 16.604C72.931 16.6039 73.4245 15.9263 73.4245 14.7618H73.4244Z"
                    fill="white"
                  />
                  <path
                    d="M75.5059 15.9262C75.5059 14.963 76.1851 14.4078 77.3907 14.3289L78.7635 14.2453V13.7835C78.7635 13.2183 78.4096 12.8992 77.7259 12.8992C77.1676 12.8992 76.7808 13.1156 76.6698 13.4939H75.7015C75.8037 12.5749 76.6225 11.9854 77.7721 11.9854C79.0426 11.9854 79.7592 12.6532 79.7592 13.7835V17.4394H78.7964V16.6875H78.7173C78.5567 16.9572 78.3311 17.1771 78.0637 17.3247C77.7963 17.4723 77.4965 17.5423 77.1951 17.5276C76.9824 17.5509 76.7673 17.527 76.5639 17.4572C76.3605 17.3875 76.1731 17.2735 76.014 17.1226C75.8548 16.9717 75.7274 16.7873 75.6399 16.5813C75.5523 16.3752 75.5067 16.152 75.5059 15.9262ZM78.7635 15.469V15.0216L77.5259 15.1052C76.828 15.1545 76.5115 15.4052 76.5115 15.8769C76.5115 16.3585 76.9071 16.6387 77.4512 16.6387C77.6106 16.6557 77.7717 16.6387 77.9247 16.5887C78.0778 16.5387 78.2198 16.4567 78.3422 16.3476C78.4646 16.2384 78.565 16.1044 78.6374 15.9535C78.7097 15.8025 78.7526 15.6378 78.7635 15.469Z"
                    fill="white"
                  />
                  <path
                    d="M81.0723 14.7619C81.0723 13.0711 81.8955 12 83.1759 12C83.4926 11.9846 83.8069 12.0647 84.0821 12.231C84.3573 12.3972 84.582 12.6427 84.7299 12.9388H84.8047V10H85.8048V17.4396H84.8464V16.5942H84.7673C84.6079 16.8883 84.3754 17.1307 84.0949 17.2953C83.8144 17.4599 83.4965 17.5403 83.1759 17.5278C81.8867 17.5278 81.0723 16.4567 81.0723 14.7619ZM82.1054 14.7619C82.1054 15.8968 82.6121 16.5797 83.4595 16.5797C84.3024 16.5797 84.8234 15.887 84.8234 14.7665C84.8234 13.6513 84.2969 12.9487 83.4595 12.9487C82.6175 12.9487 82.1054 13.6363 82.1054 14.7619H82.1054Z"
                    fill="white"
                  />
                  <path
                    d="M89.9429 14.7617C89.9111 14.41 89.9492 14.0552 90.0548 13.72C90.1604 13.3849 90.3312 13.0767 90.5562 12.8153C90.7812 12.5539 91.0555 12.345 91.3615 12.2021C91.6674 12.0592 91.9983 11.9854 92.3328 11.9854C92.6674 11.9854 92.9983 12.0592 93.3042 12.2021C93.6102 12.345 93.8844 12.5539 94.1094 12.8153C94.3345 13.0767 94.5053 13.3849 94.6109 13.72C94.7165 14.0552 94.7546 14.41 94.7227 14.7617C94.7552 15.1137 94.7175 15.4689 94.6122 15.8047C94.5069 16.1404 94.3362 16.4491 94.1111 16.711C93.886 16.9729 93.6115 17.1822 93.3053 17.3255C92.999 17.4687 92.6678 17.5427 92.3328 17.5427C91.9979 17.5427 91.6666 17.4687 91.3604 17.3255C91.0541 17.1822 90.7796 16.9729 90.5546 16.711C90.3295 16.4491 90.1588 16.1404 90.0535 15.8047C89.9481 15.4689 89.9105 15.1137 89.9429 14.7617ZM93.694 14.7617C93.694 13.6018 93.2005 12.9235 92.3345 12.9235C91.4651 12.9235 90.9761 13.6018 90.9761 14.7617C90.9761 15.9308 91.4652 16.6039 92.3345 16.6039C93.2005 16.6039 93.694 15.9262 93.694 14.7617Z"
                    fill="white"
                  />
                  <path
                    d="M96.0645 12.089H97.0272V12.939H97.102C97.2288 12.6337 97.4426 12.3778 97.7137 12.2069C97.9848 12.0361 98.2996 11.9587 98.6143 11.9857C98.8608 11.9662 99.1084 12.0054 99.3387 12.1006C99.569 12.1958 99.776 12.3444 99.9444 12.5356C100.113 12.7267 100.238 12.9554 100.312 13.2047C100.385 13.454 100.405 13.7176 100.368 13.9759V17.4398H99.3682V14.2411C99.3682 13.3812 99.0143 12.9536 98.2747 12.9536C98.1072 12.9453 97.9401 12.9754 97.7847 13.0417C97.6294 13.1081 97.4894 13.2091 97.3745 13.3379C97.2595 13.4667 97.1723 13.6202 97.1189 13.7879C97.0654 13.9556 97.0469 14.1336 97.0646 14.3095V17.4398H96.0645V12.089Z"
                    fill="white"
                  />
                  <path
                    d="M106.021 10.7568V12.1134H107.119V13.0029H106.021V15.7543C106.021 16.3148 106.239 16.5602 106.737 16.5602C106.865 16.5598 106.992 16.5516 107.119 16.5358V17.4154C106.939 17.4494 106.757 17.4674 106.575 17.4694C105.462 17.4694 105.019 17.0563 105.019 16.0247V13.0028H104.215V12.1133H105.019V10.7568H106.021Z"
                    fill="white"
                  />
                  <path
                    d="M108.486 10H109.478V12.9487H109.557C109.69 12.6405 109.909 12.3832 110.186 12.2116C110.462 12.0401 110.782 11.9628 111.102 11.9902C111.347 11.9761 111.593 12.0193 111.82 12.1168C112.048 12.2143 112.252 12.3636 112.419 12.5542C112.586 12.7447 112.711 12.9717 112.785 13.219C112.859 13.4664 112.88 13.7279 112.847 13.985V17.4396H111.846V14.2455C111.846 13.3908 111.469 12.958 110.763 12.958C110.591 12.9431 110.418 12.968 110.256 13.0311C110.094 13.0941 109.947 13.1937 109.826 13.3229C109.704 13.4521 109.611 13.6078 109.552 13.7791C109.494 13.9504 109.471 14.1331 109.487 14.3145V17.4396H108.486L108.486 10Z"
                    fill="white"
                  />
                  <path
                    d="M118.68 15.9948C118.544 16.4838 118.249 16.9068 117.848 17.1898C117.446 17.4728 116.964 17.5977 116.484 17.5428C116.15 17.5521 115.818 17.4846 115.511 17.3449C115.205 17.2053 114.93 16.9968 114.708 16.734C114.485 16.4713 114.319 16.1604 114.221 15.8232C114.124 15.4859 114.097 15.1303 114.143 14.7809C114.098 14.4305 114.126 14.0741 114.223 13.7359C114.32 13.3976 114.485 13.0853 114.707 12.8203C114.928 12.5552 115.201 12.3435 115.507 12.1994C115.813 12.0554 116.144 11.9824 116.479 11.9854C117.889 11.9854 118.74 13.0026 118.74 14.6829V15.0513H115.162V15.1105C115.146 15.3069 115.169 15.5045 115.23 15.6908C115.291 15.8771 115.388 16.0478 115.515 16.1922C115.642 16.3365 115.797 16.4512 115.968 16.5289C116.14 16.6066 116.325 16.6456 116.511 16.6434C116.75 16.6737 116.993 16.6283 117.207 16.5127C117.422 16.3972 117.599 16.2169 117.717 15.9947L118.68 15.9948ZM115.161 14.2703H117.721C117.734 14.0908 117.711 13.9104 117.653 13.7408C117.596 13.5712 117.506 13.4162 117.388 13.2856C117.271 13.1551 117.129 13.0519 116.971 12.9828C116.814 12.9137 116.644 12.8801 116.474 12.8842C116.301 12.8819 116.129 12.9162 115.969 12.9851C115.809 13.0539 115.663 13.1559 115.541 13.2851C115.419 13.4143 115.322 13.568 115.257 13.7372C115.192 13.9064 115.159 14.0877 115.162 14.2703H115.161Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li className="mc-mb-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.yanka.mc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mc-sr-only">Get it on Google Play</span>
                <svg
                  width={144}
                  height={48}
                  viewBox="0 0 144 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width={143}
                    height={47}
                    rx="7.5"
                    fill="black"
                    stroke="#949AA4"
                  />
                  <path
                    d="M50.7441 13.4095C50.7441 14.2361 50.5374 14.9593 50.0208 15.4759C49.4009 16.0958 48.6777 16.4058 47.7478 16.4058C46.8179 16.4058 46.0947 16.0958 45.4748 15.4759C44.8549 14.856 44.5449 14.1328 44.5449 13.2029C44.5449 12.273 44.8549 11.5498 45.4748 10.9299C46.0947 10.31 46.8179 10 47.7478 10C48.1611 10 48.5744 10.1033 48.9877 10.31C49.4009 10.5166 49.7109 10.7232 49.9175 11.0332L49.4009 11.5498C48.9877 11.0332 48.4711 10.8266 47.7478 10.8266C47.1279 10.8266 46.508 11.0332 46.0947 11.5498C45.5781 11.9631 45.3715 12.583 45.3715 13.3062C45.3715 14.0295 45.5781 14.6494 46.0947 15.0626C46.6113 15.4759 47.1279 15.7859 47.7478 15.7859C48.4711 15.7859 48.9877 15.5792 49.5042 15.0626C49.8142 14.7527 50.0208 14.3394 50.0208 13.8228H47.7478V13.0996H50.7441C50.7441 13.0996 50.7441 13.3062 50.7441 13.4095Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="0.281869"
                    strokeMiterlimit={10}
                  />
                  <path
                    d="M55.497 10.8268H52.7074V12.7898H55.2904V13.5131H52.7074V15.4761H55.497V16.3027H51.8809V10.1035H55.497V10.8268Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="0.281869"
                    strokeMiterlimit={10}
                  />
                  <path
                    d="M58.9072 16.3027H58.0806V10.8268H56.3242V10.1035H60.6636V10.8268H58.9072V16.3027Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="0.281869"
                    strokeMiterlimit={10}
                  />
                  <path
                    d="M63.6602 16.3027V10.1035H64.4867V16.3027H63.6602Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="0.281869"
                    strokeMiterlimit={10}
                  />
                  <path
                    d="M67.999 16.3027H67.1725V10.8268H65.416V10.1035H69.6521V10.8268H67.8957V16.3027H67.999Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="0.281869"
                    strokeMiterlimit={10}
                  />
                  <path
                    d="M77.8138 15.4759C77.1939 16.0958 76.4707 16.4058 75.5408 16.4058C74.6109 16.4058 73.8877 16.0958 73.2678 15.4759C72.6478 14.856 72.3379 14.1328 72.3379 13.2029C72.3379 12.273 72.6478 11.5498 73.2678 10.9299C73.8877 10.31 74.6109 10 75.5408 10C76.4707 10 77.1939 10.31 77.8138 10.9299C78.4337 11.5498 78.7437 12.273 78.7437 13.2029C78.7437 14.1328 78.4337 14.856 77.8138 15.4759ZM73.8877 14.9593C74.301 15.3726 74.9209 15.6826 75.5408 15.6826C76.1607 15.6826 76.7806 15.4759 77.1939 14.9593C77.6072 14.5461 77.9171 13.9261 77.9171 13.2029C77.9171 12.4797 77.7105 11.8597 77.1939 11.4465C76.7806 11.0332 76.1607 10.7232 75.5408 10.7232C74.9209 10.7232 74.301 10.9299 73.8877 11.4465C73.4744 11.8597 73.1644 12.4797 73.1644 13.2029C73.1644 13.9261 73.3711 14.5461 73.8877 14.9593Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="0.281869"
                    strokeMiterlimit={10}
                  />
                  <path
                    d="M79.8789 16.3027V10.1035H80.8088L83.805 14.9595V13.7197V10.1035H84.6316V16.3027H83.805L80.6021 11.24V12.4799V16.3027H79.8789Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="0.281869"
                    strokeMiterlimit={10}
                  />
                  <path
                    d="M72.1286 25.3951C69.649 25.3951 67.6859 27.2548 67.6859 29.8378C67.6859 32.3175 69.649 34.2805 72.1286 34.2805C74.6083 34.2805 76.5714 32.4208 76.5714 29.8378C76.5714 27.1515 74.6083 25.3951 72.1286 25.3951ZM72.1286 32.4208C70.7855 32.4208 69.649 31.2843 69.649 29.7345C69.649 28.1847 70.7855 27.0482 72.1286 27.0482C73.4718 27.0482 74.6083 28.0814 74.6083 29.7345C74.6083 31.2843 73.4718 32.4208 72.1286 32.4208ZM62.52 25.3951C60.0403 25.3951 58.0772 27.2548 58.0772 29.8378C58.0772 32.3175 60.0403 34.2805 62.52 34.2805C64.9996 34.2805 66.9627 32.4208 66.9627 29.8378C66.9627 27.1515 64.9996 25.3951 62.52 25.3951ZM62.52 32.4208C61.1768 32.4208 60.0403 31.2843 60.0403 29.7345C60.0403 28.1847 61.1768 27.0482 62.52 27.0482C63.8631 27.0482 64.9996 28.0814 64.9996 29.7345C64.9996 31.2843 63.8631 32.4208 62.52 32.4208ZM51.0515 26.7382V28.598H55.4942C55.3909 29.6312 54.9776 30.4577 54.461 30.9743C53.8411 31.5942 52.8079 32.3175 51.0515 32.3175C48.2619 32.3175 46.1955 30.1478 46.1955 27.3581C46.1955 24.5685 48.3652 22.3988 51.0515 22.3988C52.498 22.3988 53.6345 23.0187 54.461 23.742L55.8042 22.3988C54.6677 21.3656 53.2212 20.5391 51.1548 20.5391C47.4353 20.5391 44.2324 23.6386 44.2324 27.3581C44.2324 31.0776 47.4353 34.1772 51.1548 34.1772C53.2212 34.1772 54.6677 33.5573 55.9075 32.2142C57.1473 30.9743 57.5606 29.2179 57.5606 27.8747C57.5606 27.4615 57.5606 27.0482 57.4573 26.7382H51.0515ZM97.9585 28.1847C97.5452 27.1515 96.512 25.3951 94.239 25.3951C91.966 25.3951 90.1062 27.1515 90.1062 29.8378C90.1062 32.3175 91.966 34.2805 94.4456 34.2805C96.4087 34.2805 97.6485 33.0407 98.0618 32.3175L96.6153 31.2843C96.0987 32.0075 95.4788 32.5241 94.4456 32.5241C93.4124 32.5241 92.7925 32.1108 92.2759 31.181L98.1651 28.7013L97.9585 28.1847ZM91.966 29.6312C91.966 27.9781 93.3091 27.0482 94.239 27.0482C94.9622 27.0482 95.6855 27.4615 95.8921 27.9781L91.966 29.6312ZM87.11 33.8673H89.073V20.9523H87.11V33.8673ZM84.0104 26.3249C83.4938 25.8084 82.6672 25.2918 81.634 25.2918C79.4643 25.2918 77.3979 27.2548 77.3979 29.7345C77.3979 32.2142 79.361 34.0739 81.634 34.0739C82.6672 34.0739 83.4938 33.5573 83.9071 33.0407H84.0104V33.6606C84.0104 35.3137 83.0805 36.2436 81.634 36.2436C80.4975 36.2436 79.671 35.4171 79.4643 34.6938L77.8112 35.4171C78.3278 36.5536 79.5676 38 81.7373 38C84.0104 38 85.8701 36.6569 85.8701 33.454V25.6017H84.0104V26.3249ZM81.7373 32.4208C80.3942 32.4208 79.2577 31.2843 79.2577 29.7345C79.2577 28.1847 80.3942 27.0482 81.7373 27.0482C83.0805 27.0482 84.1137 28.1847 84.1137 29.7345C84.1137 31.2843 83.0805 32.4208 81.7373 32.4208ZM106.947 20.9523H102.298V33.8673H104.261V29.0112H106.947C109.117 29.0112 111.183 27.4615 111.183 24.9818C111.183 22.5021 109.117 20.9523 106.947 20.9523ZM107.051 27.1515H104.261V22.7088H107.051C108.497 22.7088 109.324 23.9486 109.324 24.8785C109.22 26.015 108.394 27.1515 107.051 27.1515ZM118.932 25.2918C117.486 25.2918 116.039 25.9117 115.523 27.2548L117.279 27.9781C117.692 27.2548 118.312 27.0482 119.036 27.0482C120.069 27.0482 120.999 27.6681 121.102 28.7013V28.8046C120.792 28.598 119.965 28.288 119.139 28.288C117.279 28.288 115.419 29.3212 115.419 31.181C115.419 32.9374 116.969 34.0739 118.622 34.0739C119.965 34.0739 120.585 33.454 121.102 32.8341H121.205V33.8673H123.065V28.9079C122.858 26.6349 121.102 25.2918 118.932 25.2918ZM118.726 32.4208C118.106 32.4208 117.176 32.1108 117.176 31.2843C117.176 30.2511 118.312 29.9411 119.242 29.9411C120.069 29.9411 120.482 30.1478 120.999 30.3544C120.792 31.5942 119.759 32.4208 118.726 32.4208ZM129.574 25.6017L127.405 31.181H127.301L125.028 25.6017H122.962L126.371 33.454L124.408 37.7934H126.371L131.641 25.6017H129.574ZM112.217 33.8673H114.18V20.9523H112.217V33.8673Z"
                    fill="white"
                  />
                  <path
                    d="M12.5166 10.6191C12.2066 10.9291 12 11.4457 12 12.0656V34.8992C12 35.5191 12.2066 36.0357 12.5166 36.3457L12.6199 36.449L25.4315 23.6374V23.5341V23.4307L12.5166 10.6191Z"
                    fill="url(#paint0_linear_)"
                  />
                  <path
                    d="M29.6677 27.9775L25.4316 23.7414V23.5347V23.4314L29.6677 19.1953L29.771 19.2986L34.8337 22.1916C36.2802 23.0181 36.2802 24.3613 34.8337 25.1878L29.6677 27.9775Z"
                    fill="url(#paint1_linear_)"
                  />
                  <path
                    d="M29.77 27.8746L25.4305 23.5352L12.5156 36.4501C13.0322 36.9667 13.7555 36.9667 14.6853 36.5534L29.77 27.8746Z"
                    fill="url(#paint2_linear_)"
                  />
                  <path
                    d="M29.77 19.1954L14.6853 10.6199C13.7555 10.1033 13.0322 10.2066 12.5156 10.7232L25.4305 23.5348L29.77 19.1954Z"
                    fill="url(#paint3_linear_)"
                  />
                  <path
                    opacity="0.2"
                    d="M29.6686 27.7705L14.6873 36.2427C13.8607 36.7593 13.1375 36.656 12.6209 36.2427L12.5176 36.346L12.6209 36.4493C13.1375 36.8626 13.8607 36.9659 14.6873 36.4493L29.6686 27.7705Z"
                    fill="black"
                  />
                  <path
                    opacity="0.12"
                    d="M12.5168 36.2433C12.2068 35.9334 12.1035 35.4168 12.1035 34.7969V34.9002C12.1035 35.5201 12.3102 36.0367 12.6201 36.3467V36.2433H12.5168Z"
                    fill="black"
                  />
                  <path
                    opacity="0.12"
                    d="M34.832 24.8783L29.666 27.7712L29.7693 27.8746L34.832 24.9816C35.5552 24.5683 35.8652 24.0518 35.8652 23.5352C35.8652 24.0518 35.4519 24.465 34.832 24.8783Z"
                    fill="black"
                  />
                  <path
                    opacity="0.25"
                    d="M14.6865 10.7231L34.8338 22.1916C35.4537 22.6048 35.867 23.0181 35.867 23.5347C35.867 23.0181 35.557 22.5015 34.8338 22.0882L14.6865 10.6198C13.24 9.79324 12.1035 10.5165 12.1035 12.1696V12.2729C12.1035 10.6198 13.24 9.89656 14.6865 10.7231Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_"
                      x1="24.2947"
                      y1="11.869"
                      x2="6.95523"
                      y2="29.2085"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0FF" />
                      <stop offset="0.00657445" stopColor="#00A1FF" />
                      <stop offset="0.2601" stopColor="#00BEFF" />
                      <stop offset="0.5122" stopColor="#00D2FF" />
                      <stop offset="0.7604" stopColor="#00DFFF" />
                      <stop offset={1} stopColor="#00E3FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_"
                      x1="36.729"
                      y1="23.5362"
                      x2="11.7289"
                      y2="23.5362"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFE000" />
                      <stop offset="0.4087" stopColor="#FFBD00" />
                      <stop offset="0.7754" stopColor="#FFA500" />
                      <stop offset={1} stopColor="#FF9C00" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_"
                      x1="27.4215"
                      y1="25.9075"
                      x2="3.90779"
                      y2="49.4212"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF3A44" />
                      <stop offset={1} stopColor="#C31162" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_"
                      x1="9.30994"
                      y1="3.05301"
                      x2="19.8099"
                      y2="13.5528"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#32A071" />
                      <stop offset="0.0685" stopColor="#2DA771" />
                      <stop offset="0.4762" stopColor="#15CF74" />
                      <stop offset="0.8009" stopColor="#06E775" />
                      <stop offset={1} stopColor="#00F076" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </li>
            <li className="mc-mb-4">
              <a
                href="https://www.amazon.com/MasterClass-Learn-from-the-best/dp/B081QX5R8T/ref=sr_1_1?keywords=masterclass&qid=1575500772&s=mobile-apps&sr=1-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mc-sr-only">
                  Available at amazon app store
                </span>
                <svg
                  width={171}
                  height={48}
                  viewBox="0 0 171 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width={170}
                    height={47}
                    rx="7.5"
                    fill="black"
                    stroke="#949AA4"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M51.5994 36.2202C47.8884 38.9682 42.5135 40.4202 37.8928 40.4202C31.4046 40.4202 25.5629 38.0202 21.1456 34.0122C20.7985 33.7002 21.1097 33.2682 21.5287 33.5082C26.2931 36.2922 32.1947 37.9602 38.2878 37.9602C42.3938 37.9602 46.9188 37.1082 51.0726 35.3442C51.6832 35.0802 52.2099 35.7642 51.5994 36.2202Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M53.1307 34.4558C52.6519 33.8438 49.9944 34.1678 48.7973 34.3118C48.4382 34.3598 48.3783 34.0358 48.7015 33.8078C50.8204 32.3078 54.3039 32.7398 54.6989 33.2438C55.1059 33.7478 54.5912 37.2398 52.604 38.9078C52.2928 39.1598 52.0055 39.0278 52.1372 38.6918C52.604 37.5638 53.6096 35.0558 53.1307 34.4558Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M48.8948 23.2478V21.7958C48.8948 21.5798 49.0624 21.4238 49.2659 21.4238H55.754C55.9576 21.4238 56.1251 21.5798 56.1251 21.7958V23.0438C56.1251 23.2478 55.9456 23.5238 55.6343 23.9558L52.2705 28.7678C53.5155 28.7438 54.8443 28.9238 55.9695 29.5598C56.2209 29.7038 56.2927 29.9198 56.3167 30.1238V31.6718C56.3167 31.8878 56.0892 32.1278 55.8378 32.0078C53.8387 30.9638 51.1932 30.8438 48.9786 32.0198C48.7511 32.1398 48.5117 31.8998 48.5117 31.6838V30.2078C48.5117 29.9678 48.5117 29.5718 48.7511 29.2118L52.6416 23.6078H49.2539C49.0624 23.6078 48.8948 23.4638 48.8948 23.2478Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.2152 32.3201H23.24C23.0484 32.3081 22.9048 32.1641 22.8809 31.9841V21.8201C22.8809 21.6161 23.0485 21.4601 23.2639 21.4601H25.1074C25.299 21.4721 25.4546 21.6161 25.4666 21.7961V23.1281H25.5025C25.9813 21.8441 26.8791 21.2441 28.1001 21.2441C29.3331 21.2441 30.1112 21.8441 30.6619 23.1281C31.1407 21.8441 32.2301 21.2441 33.3912 21.2441C34.2172 21.2441 35.127 21.5921 35.6776 22.3601C36.3001 23.2121 36.1804 24.4601 36.1804 25.5401V31.9481C36.1804 32.1521 36.0128 32.3081 35.7974 32.3081H33.8222C33.6187 32.2961 33.463 32.1401 33.463 31.9481V26.5601C33.463 26.1281 33.499 25.0601 33.4032 24.6521C33.2595 23.9681 32.8166 23.7761 32.242 23.7761C31.7632 23.7761 31.2604 24.1001 31.0569 24.6041C30.8534 25.1201 30.8774 25.9721 30.8774 26.5481V31.9361C30.8774 32.1401 30.7098 32.2961 30.4943 32.2961H28.5311C28.3276 32.2841 28.172 32.1281 28.172 31.9361V26.5481C28.172 25.4201 28.3515 23.7521 26.9509 23.7521C25.5264 23.7521 25.5863 25.3721 25.5863 26.5481V31.9361C25.5982 32.1521 25.4306 32.3201 25.2152 32.3201Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M61.7146 21.2441C64.6475 21.2441 66.2276 23.7641 66.2276 26.9681C66.2276 30.0641 64.4799 32.5241 61.7146 32.5241C58.8416 32.5241 57.2734 30.0041 57.2734 26.8601C57.2734 23.7041 58.8536 21.2441 61.7146 21.2441ZM61.7266 23.3201C60.2661 23.3201 60.1823 25.3121 60.1823 26.5481C60.1823 27.7841 60.1584 30.4361 61.7146 30.4361C63.2469 30.4361 63.3187 28.3001 63.3187 26.9921C63.3187 26.1401 63.2828 25.1081 63.0194 24.2921C62.8039 23.5961 62.361 23.3201 61.7266 23.3201Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M70.0352 32.3199H68.072C67.8685 32.3079 67.7129 32.1519 67.7129 31.9599V21.7959C67.7249 21.6039 67.8925 21.4599 68.096 21.4599H69.9275C70.0951 21.4719 70.2387 21.5919 70.2746 21.7479V23.3079H70.3106C70.8612 21.9159 71.6393 21.2559 73.004 21.2559C73.8898 21.2559 74.7517 21.5799 75.3024 22.4559C75.8171 23.2719 75.8171 24.6399 75.8171 25.6239V32.0199C75.7932 32.1759 75.6376 32.3199 75.4341 32.3199H73.4589C73.2793 32.3079 73.1237 32.1759 73.1117 31.9959V26.4759C73.1117 25.3599 73.2434 23.7399 71.8787 23.7399C71.3999 23.7399 70.957 24.0639 70.7415 24.5559C70.4662 25.1799 70.4303 25.7919 70.4303 26.4759V31.9479C70.4063 32.1519 70.2387 32.3199 70.0352 32.3199Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M43.7224 27.46C43.7224 28.228 43.7463 28.876 43.3513 29.56C43.04 30.112 42.5372 30.46 41.9866 30.46C41.2324 30.46 40.7895 29.884 40.7895 29.02C40.7895 27.34 42.2978 27.028 43.7224 27.028V27.46ZM45.7095 32.284C45.5778 32.404 45.3863 32.404 45.2426 32.332C44.5843 31.78 44.4645 31.528 44.1054 31.012C43.0161 32.116 42.2499 32.452 40.8494 32.452C39.1854 32.452 37.8926 31.42 37.8926 29.368C37.8926 27.76 38.7664 26.668 39.9994 26.128C41.0648 25.66 42.5732 25.576 43.7104 25.444V25.192C43.7104 24.724 43.7463 24.16 43.471 23.752C43.2316 23.392 42.7647 23.236 42.3577 23.236C41.6035 23.236 40.9332 23.62 40.7656 24.424C40.7297 24.604 40.598 24.784 40.4184 24.784L38.5031 24.58C38.3355 24.544 38.1679 24.412 38.2038 24.16C38.6467 21.832 40.7416 21.124 42.621 21.124C43.5787 21.124 44.8356 21.376 45.5898 22.108C46.5475 23.008 46.4637 24.208 46.4637 25.516V28.6C46.4637 29.524 46.8467 29.932 47.2059 30.436C47.3375 30.616 47.3615 30.832 47.1939 30.964C46.8228 31.324 46.1045 31.948 45.7095 32.284Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.8298 27.46C17.8298 28.228 17.8537 28.876 17.4587 29.56C17.1474 30.112 16.6447 30.46 16.094 30.46C15.3399 30.46 14.8969 29.884 14.8969 29.02C14.8969 27.34 16.4053 27.028 17.8298 27.028V27.46ZM19.8169 32.284C19.6853 32.404 19.4937 32.404 19.3501 32.332C18.6917 31.78 18.572 31.528 18.2128 31.012C17.1235 32.116 16.3574 32.452 14.9568 32.452C13.2928 32.452 12 31.42 12 29.368C12 27.76 12.8739 26.668 14.1069 26.128C15.1723 25.66 16.6806 25.576 17.8178 25.444V25.192C17.8178 24.724 17.8537 24.16 17.5784 23.752C17.339 23.392 16.8721 23.236 16.4651 23.236C15.7109 23.236 15.0406 23.62 14.873 24.424C14.8371 24.604 14.7054 24.784 14.5258 24.784L12.6105 24.58C12.4429 24.544 12.2634 24.412 12.3112 24.16C12.7542 21.832 14.8491 21.124 16.7285 21.124C17.6861 21.124 18.9431 21.376 19.6972 22.108C20.6549 23.008 20.5711 24.208 20.5711 25.516V28.6C20.5711 29.524 20.9542 29.932 21.3133 30.436C21.445 30.616 21.4689 30.832 21.3013 30.964C20.9422 31.324 20.2239 31.948 19.8169 32.284Z"
                    fill="white"
                  />
                  <path
                    d="M83.8242 32.428C82.8665 32.428 82.0764 32.14 81.4779 31.564C80.8793 30.988 80.5801 30.232 80.5801 29.308C80.5801 28.288 80.9512 27.472 81.6814 26.872C82.4116 26.26 83.4052 25.96 84.6382 25.96C85.3684 25.96 86.1585 26.068 87.0323 26.272V25.048C87.0323 24.352 86.8767 23.86 86.5775 23.584C86.2782 23.308 85.7515 23.176 84.9853 23.176C84.5304 23.176 84.0277 23.224 83.477 23.308C82.9264 23.404 82.3996 23.524 81.9088 23.692C81.7772 23.728 81.6575 23.752 81.5617 23.752C81.3821 23.752 81.2983 23.62 81.2983 23.356V22.588C81.2983 22.396 81.3223 22.252 81.3821 22.18C81.442 22.096 81.5856 22.012 81.8131 21.916C82.8904 21.508 84.0756 21.292 85.3804 21.292C86.7331 21.292 87.7147 21.568 88.3611 22.12C89.0075 22.672 89.3188 23.536 89.3188 24.7V31.66C89.3188 31.96 89.1631 32.116 88.8639 32.116H87.7865C87.4872 32.116 87.3077 31.984 87.2718 31.708L87.164 31.108C86.6852 31.516 86.1465 31.84 85.5719 32.08C84.9853 32.32 84.3988 32.428 83.8242 32.428ZM84.5065 30.7C84.9015 30.7 85.3205 30.616 85.7634 30.436C86.2064 30.268 86.6253 30.016 87.0443 29.704V27.724C86.3141 27.568 85.6677 27.496 85.105 27.496C83.6805 27.496 82.9623 28.048 82.9623 29.176C82.9623 29.656 83.0939 30.028 83.3693 30.304C83.6446 30.556 84.0277 30.7 84.5065 30.7Z"
                    fill="white"
                  />
                  <path
                    d="M91.9764 36.376C91.6771 36.376 91.5215 36.22 91.5215 35.92V22.06C91.5215 21.76 91.6771 21.604 91.9764 21.604H93.1136C93.4129 21.604 93.5924 21.736 93.6523 22.012L93.772 22.648C94.2508 22.204 94.7895 21.868 95.3641 21.64C95.9507 21.4 96.5612 21.292 97.1837 21.292C98.4885 21.292 99.5299 21.784 100.308 22.756C101.086 23.74 101.469 25.048 101.469 26.704C101.469 27.844 101.278 28.852 100.907 29.704C100.524 30.556 99.9968 31.216 99.3264 31.672C98.6561 32.128 97.878 32.356 97.0161 32.356C96.4415 32.356 95.8789 32.26 95.3402 32.056C94.8015 31.852 94.3346 31.576 93.9396 31.216V35.92C93.9396 36.22 93.784 36.376 93.4847 36.376H91.9764ZM96.4056 30.424C97.2794 30.424 97.9378 30.124 98.3688 29.524C98.7997 28.924 99.0032 28.012 99.0032 26.788C99.0032 25.576 98.7997 24.676 98.3688 24.088C97.9378 23.5 97.3034 23.212 96.4175 23.212C95.5197 23.212 94.6937 23.476 93.9396 23.992V29.62C94.7297 30.16 95.5437 30.424 96.4056 30.424Z"
                    fill="white"
                  />
                  <path
                    d="M103.683 36.376C103.384 36.376 103.229 36.22 103.229 35.92V22.06C103.229 21.76 103.384 21.604 103.683 21.604H104.821C105.12 21.604 105.299 21.736 105.359 22.012L105.479 22.648C105.958 22.204 106.497 21.868 107.071 21.64C107.658 21.4 108.268 21.292 108.891 21.292C110.196 21.292 111.237 21.784 112.015 22.756C112.793 23.74 113.176 25.048 113.176 26.704C113.176 27.844 112.985 28.852 112.614 29.704C112.231 30.556 111.704 31.216 111.033 31.672C110.363 32.128 109.585 32.356 108.723 32.356C108.149 32.356 107.586 32.26 107.047 32.056C106.509 31.852 106.042 31.576 105.647 31.216V35.92C105.647 36.22 105.491 36.376 105.192 36.376H103.683ZM108.125 30.424C108.998 30.424 109.657 30.124 110.088 29.524C110.519 28.924 110.722 28.012 110.722 26.788C110.722 25.576 110.519 24.676 110.088 24.088C109.657 23.5 109.022 23.212 108.137 23.212C107.239 23.212 106.413 23.476 105.659 23.992V29.62C106.437 30.16 107.251 30.424 108.125 30.424Z"
                    fill="white"
                  />
                  <path
                    d="M117.762 32.4283C116.672 32.4283 115.667 32.2483 114.757 31.8883C114.541 31.8043 114.398 31.7203 114.338 31.6243C114.278 31.5403 114.242 31.3843 114.242 31.1803V30.4363C114.242 30.1603 114.338 30.0283 114.529 30.0283C114.625 30.0283 114.817 30.0763 115.104 30.1483C116.086 30.4243 116.96 30.5563 117.75 30.5563C118.432 30.5563 118.935 30.4483 119.258 30.2323C119.569 30.0163 119.737 29.6923 119.737 29.2483C119.737 28.9483 119.641 28.6963 119.449 28.5163C119.258 28.3243 118.899 28.1443 118.372 27.9523L116.66 27.2923C115.116 26.7043 114.35 25.7323 114.35 24.4003C114.35 23.4403 114.709 22.6723 115.427 22.1203C116.146 21.5683 117.103 21.2803 118.288 21.2803C119.138 21.2803 120 21.4243 120.862 21.7123C121.066 21.7843 121.209 21.8563 121.269 21.9523C121.341 22.0483 121.377 22.1923 121.377 22.4203V23.1403C121.377 23.2963 121.353 23.3923 121.305 23.4643C121.257 23.5363 121.173 23.5603 121.054 23.5603C120.982 23.5603 120.814 23.5243 120.539 23.4523C119.677 23.2483 118.971 23.1403 118.432 23.1403C117.798 23.1403 117.331 23.2363 117.043 23.4163C116.744 23.5963 116.6 23.8963 116.6 24.2923C116.6 24.5923 116.708 24.8443 116.924 25.0243C117.139 25.2043 117.522 25.4083 118.073 25.6363L119.665 26.2603C120.491 26.5723 121.089 26.9563 121.449 27.4003C121.808 27.8443 121.999 28.3963 121.999 29.0803C121.999 30.1123 121.628 30.9283 120.886 31.5283C120.108 32.1283 119.078 32.4283 117.762 32.4283Z"
                    fill="white"
                  />
                  <path
                    d="M127.734 32.2602C126.644 32.2602 125.842 32.0082 125.327 31.4922C124.801 30.9882 124.537 30.2082 124.537 29.1522V23.4522H123.221C122.921 23.4522 122.766 23.2962 122.766 22.9962V22.3962C122.766 22.2162 122.802 22.0842 122.873 22.0122C122.945 21.9402 123.053 21.8802 123.209 21.8562L124.633 21.6522L124.944 19.1562C124.956 18.9882 125.004 18.8682 125.088 18.8082C125.172 18.7362 125.291 18.7002 125.459 18.7002H126.536C126.836 18.7002 126.991 18.8562 126.991 19.1562V21.5922H129.529C129.828 21.5922 129.984 21.7482 129.984 22.0482V22.9962C129.984 23.2962 129.828 23.4522 129.529 23.4522H126.991V29.0322C126.991 29.5002 127.099 29.8362 127.326 30.0282C127.554 30.2322 127.937 30.3282 128.476 30.3282C128.787 30.3282 129.05 30.3042 129.242 30.2682C129.433 30.2322 129.589 30.2082 129.721 30.2082C129.96 30.2082 130.068 30.3402 130.068 30.6042V31.3482C130.068 31.5642 130.032 31.7202 129.96 31.8162C129.888 31.9122 129.745 31.9842 129.541 32.0322C128.931 32.1882 128.344 32.2602 127.734 32.2602Z"
                    fill="white"
                  />
                  <path
                    d="M135.765 32.428C134.173 32.428 132.928 31.936 132.03 30.952C131.132 29.968 130.689 28.6 130.689 26.848C130.689 25.096 131.132 23.74 132.03 22.756C132.928 21.784 134.173 21.292 135.765 21.292C137.357 21.292 138.602 21.784 139.5 22.756C140.398 23.74 140.841 25.096 140.841 26.848C140.841 28.6 140.398 29.968 139.5 30.952C138.602 31.936 137.357 32.428 135.765 32.428ZM135.765 30.508C137.501 30.508 138.363 29.284 138.363 26.848C138.363 24.424 137.501 23.212 135.765 23.212C134.029 23.212 133.167 24.424 133.167 26.848C133.167 29.284 134.029 30.508 135.765 30.508Z"
                    fill="white"
                  />
                  <path
                    d="M143.019 32.1158C142.72 32.1158 142.564 31.9598 142.564 31.6598V22.0478C142.564 21.7478 142.72 21.5918 143.019 21.5918H144.109C144.3 21.5918 144.432 21.6158 144.516 21.6758C144.588 21.7358 144.647 21.8318 144.671 21.9878L144.923 23.1638C145.473 22.5638 145.988 22.1318 146.467 21.8798C146.946 21.6278 147.472 21.5078 148.035 21.5078H148.119C148.298 21.5078 148.442 21.5198 148.562 21.5558C148.682 21.5918 148.765 21.6518 148.813 21.7358C148.861 21.8198 148.885 21.9758 148.885 22.1918V23.3078C148.885 23.5958 148.765 23.7398 148.514 23.7398C148.43 23.7398 148.322 23.7278 148.179 23.7158C148.035 23.7038 147.879 23.6918 147.712 23.6918C146.694 23.6918 145.797 23.9558 145.006 24.4718V31.6478C145.006 31.9478 144.851 32.1038 144.552 32.1038H143.019V32.1158Z"
                    fill="white"
                  />
                  <path
                    d="M154.703 32.428C152.967 32.428 151.662 31.96 150.765 31.024C149.867 30.088 149.424 28.72 149.424 26.932C149.424 25.156 149.867 23.764 150.729 22.78C151.603 21.784 152.824 21.292 154.392 21.292C155.744 21.292 156.774 21.664 157.492 22.396C158.21 23.128 158.57 24.172 158.57 25.528C158.57 25.996 158.534 26.488 158.462 26.992C158.438 27.172 158.378 27.292 158.306 27.352C158.234 27.412 158.127 27.448 158.007 27.448H151.65C151.686 28.492 151.986 29.26 152.524 29.752C153.063 30.244 153.901 30.484 155.026 30.484C155.852 30.484 156.714 30.352 157.624 30.088C157.732 30.064 157.815 30.04 157.875 30.028C157.935 30.016 157.983 30.004 158.019 30.004C158.222 30.004 158.33 30.136 158.33 30.412V31.156C158.33 31.36 158.294 31.504 158.234 31.6C158.174 31.684 158.031 31.78 157.815 31.852C156.918 32.248 155.876 32.428 154.703 32.428ZM156.439 25.816V25.648C156.439 24.808 156.259 24.172 155.888 23.728C155.529 23.284 154.99 23.068 154.296 23.068C153.554 23.068 152.955 23.32 152.476 23.812C151.998 24.304 151.746 24.976 151.674 25.816H156.439Z"
                    fill="white"
                  />
                  <path
                    d="M60.1466 15.1356C59.6319 15.1356 59.2249 14.9916 58.9256 14.7036C58.6143 14.4156 58.4707 14.0196 58.4707 13.5276C58.4707 12.9996 58.6622 12.5796 59.0333 12.2676C59.4044 11.9556 59.9072 11.7996 60.5417 11.7996C60.9487 11.7996 61.3916 11.8596 61.8944 11.9796V11.2596C61.8944 10.8756 61.8106 10.5996 61.631 10.4436C61.4514 10.2876 61.1522 10.2036 60.7332 10.2036C60.2424 10.2036 59.7516 10.2756 59.2847 10.4196C59.1171 10.4676 59.0094 10.4916 58.9735 10.4916C58.8897 10.4916 58.8418 10.4316 58.8418 10.2996V10.0116C58.8418 9.91556 58.8538 9.84356 58.8897 9.80756C58.9136 9.75956 58.9735 9.72356 59.0573 9.68756C59.2847 9.59156 59.56 9.50756 59.9072 9.44756C60.2544 9.38756 60.5895 9.35156 60.9247 9.35156C61.6071 9.35156 62.1098 9.49556 62.433 9.78356C62.7563 10.0716 62.9119 10.5036 62.9119 11.0796V14.7756C62.9119 14.9196 62.8401 14.9916 62.6964 14.9916H62.2295C62.0979 14.9916 62.0141 14.9196 61.9901 14.7876L61.9422 14.4276C61.6789 14.6556 61.4036 14.8236 61.0803 14.9436C60.7691 15.0636 60.4579 15.1356 60.1466 15.1356ZM60.41 14.3196C60.6494 14.3196 60.8888 14.2716 61.1522 14.1756C61.4155 14.0796 61.6549 13.9476 61.8944 13.7676V12.6636C61.5113 12.5676 61.1282 12.5196 60.7571 12.5196C59.9431 12.5196 59.5361 12.8316 59.5361 13.4556C59.5361 13.7316 59.6079 13.9356 59.7635 14.0916C59.9072 14.2476 60.1227 14.3196 60.41 14.3196Z"
                    fill="white"
                  />
                  <path
                    d="M65.8558 14.9921C65.76 14.9921 65.6762 14.9801 65.6403 14.9441C65.5924 14.9201 65.5446 14.8361 65.4967 14.6921L63.5933 9.89209C63.5813 9.84409 63.5574 9.80809 63.5454 9.76009C63.5215 9.71209 63.5215 9.67609 63.5215 9.64009C63.5215 9.54409 63.5694 9.49609 63.6771 9.49609H64.3116C64.4193 9.49609 64.4911 9.50809 64.539 9.54409C64.5869 9.56809 64.6228 9.65209 64.6827 9.79609L66.1551 14.0081L67.6275 9.79609C67.6754 9.66409 67.7232 9.58009 67.7711 9.54409C67.807 9.53209 67.8789 9.52009 67.9866 9.52009H68.5851C68.6929 9.52009 68.7527 9.56809 68.7527 9.66409C68.7527 9.70009 68.7408 9.73609 68.7288 9.78409C68.7168 9.83209 68.6929 9.86809 68.6809 9.91609L66.7895 14.7161C66.7416 14.8481 66.6938 14.9321 66.6459 14.9681C66.598 14.9921 66.5262 15.0161 66.4304 15.0161H65.8558V14.9921Z"
                    fill="white"
                  />
                  <path
                    d="M70.8595 15.1356C70.3448 15.1356 69.9378 14.9916 69.6385 14.7036C69.3272 14.4156 69.1836 14.0196 69.1836 13.5276C69.1836 12.9996 69.3751 12.5796 69.7462 12.2676C70.1173 11.9556 70.6201 11.7996 71.2545 11.7996C71.6615 11.7996 72.1045 11.8596 72.6072 11.9796V11.2596C72.6072 10.8756 72.5234 10.5996 72.3439 10.4436C72.1643 10.2876 71.8651 10.2036 71.4461 10.2036C70.9553 10.2036 70.4645 10.2756 69.9976 10.4196C69.83 10.4676 69.7223 10.4916 69.6864 10.4916C69.6026 10.4916 69.5547 10.4316 69.5547 10.2996V10.0116C69.5547 9.91556 69.5667 9.84356 69.6026 9.80756C69.6265 9.75956 69.6864 9.72356 69.7702 9.68756C69.9976 9.59156 70.2729 9.50756 70.6201 9.44756C70.9672 9.38756 71.3024 9.35156 71.6376 9.35156C72.3199 9.35156 72.8227 9.49556 73.1459 9.78356C73.4691 10.0716 73.6248 10.5036 73.6248 11.0796V14.7756C73.6248 14.9196 73.5529 14.9916 73.4093 14.9916H72.9424C72.8107 14.9916 72.7269 14.9196 72.703 14.7876L72.6551 14.4276C72.3918 14.6556 72.1164 14.8236 71.7932 14.9436C71.47 15.0636 71.1588 15.1356 70.8595 15.1356ZM71.1109 14.3196C71.3503 14.3196 71.5897 14.2716 71.8531 14.1756C72.1164 14.0796 72.3559 13.9476 72.5953 13.7676V12.6636C72.2122 12.5676 71.8291 12.5196 71.458 12.5196C70.644 12.5196 70.237 12.8316 70.237 13.4556C70.237 13.7316 70.3089 13.9356 70.4645 14.0916C70.6201 14.2476 70.8356 14.3196 71.1109 14.3196Z"
                    fill="white"
                  />
                  <path
                    d="M75.6137 8.54795C75.4102 8.54795 75.2426 8.48795 75.1229 8.36795C75.0032 8.24795 74.9434 8.09195 74.9434 7.89995C74.9434 7.70795 75.0032 7.55195 75.1229 7.43195C75.2426 7.31195 75.4102 7.25195 75.6137 7.25195C75.8172 7.25195 75.9848 7.31195 76.1045 7.43195C76.2242 7.55195 76.2841 7.70795 76.2841 7.89995C76.2841 8.09195 76.2242 8.24795 76.1045 8.36795C75.9848 8.48795 75.8292 8.54795 75.6137 8.54795ZM75.2905 14.992C75.1469 14.992 75.075 14.92 75.075 14.776V9.73595C75.075 9.59195 75.1469 9.51995 75.2905 9.51995H75.925C76.0686 9.51995 76.1404 9.59195 76.1404 9.73595V14.776C76.1404 14.92 76.0686 14.992 75.925 14.992H75.2905Z"
                    fill="white"
                  />
                  <path
                    d="M78.7962 15.04C78.4131 15.04 78.1258 14.932 77.9223 14.716C77.7188 14.5 77.623 14.176 77.623 13.768V7.216C77.623 7.072 77.6949 7 77.8385 7H78.473C78.6166 7 78.6884 7.072 78.6884 7.216V13.708C78.6884 13.876 78.7244 13.996 78.7962 14.068C78.868 14.14 78.9757 14.176 79.1314 14.176C79.1793 14.176 79.2152 14.176 79.263 14.164C79.3109 14.152 79.3468 14.152 79.3828 14.152C79.4546 14.152 79.5025 14.176 79.5264 14.2C79.5503 14.236 79.5623 14.296 79.5623 14.356V14.704C79.5623 14.776 79.5503 14.836 79.5144 14.872C79.4785 14.908 79.4306 14.944 79.3468 14.968C79.1793 15.028 78.9877 15.04 78.7962 15.04Z"
                    fill="white"
                  />
                  <path
                    d="M81.8615 15.1356C81.3467 15.1356 80.9397 14.9916 80.6404 14.7036C80.3292 14.4156 80.1855 14.0196 80.1855 13.5276C80.1855 12.9996 80.3771 12.5796 80.7482 12.2676C81.1193 11.9556 81.622 11.7996 82.2565 11.7996C82.6635 11.7996 83.1064 11.8596 83.6092 11.9796V11.2596C83.6092 10.8756 83.5254 10.5996 83.3458 10.4436C83.1663 10.2876 82.867 10.2036 82.448 10.2036C81.9572 10.2036 81.4664 10.2756 80.9996 10.4196C80.832 10.4676 80.7242 10.4916 80.6883 10.4916C80.6045 10.4916 80.5566 10.4316 80.5566 10.2996V10.0116C80.5566 9.91556 80.5686 9.84356 80.6045 9.80756C80.6285 9.75956 80.6883 9.72356 80.7721 9.68756C80.9996 9.59156 81.2749 9.50756 81.622 9.44756C81.9692 9.38756 82.3044 9.35156 82.6396 9.35156C83.3219 9.35156 83.8247 9.49556 84.1479 9.78356C84.4711 10.0716 84.6387 10.5036 84.6387 11.0796V14.7756C84.6387 14.9196 84.5669 14.9916 84.4232 14.9916H83.9564C83.8247 14.9916 83.7409 14.9196 83.7169 14.7876L83.6691 14.4276C83.4057 14.6556 83.1304 14.8236 82.8072 14.9436C82.4839 15.0636 82.1727 15.1356 81.8615 15.1356ZM82.1248 14.3196C82.3642 14.3196 82.6037 14.2716 82.867 14.1756C83.1304 14.0796 83.3698 13.9476 83.6092 13.7676V12.6636C83.2261 12.5676 82.8431 12.5196 82.472 12.5196C81.658 12.5196 81.2509 12.8316 81.2509 13.4556C81.2509 13.7316 81.3228 13.9356 81.4784 14.0916C81.634 14.2476 81.8495 14.3196 82.1248 14.3196Z"
                    fill="white"
                  />
                  <path
                    d="M88.7804 15.112C88.122 15.112 87.5354 14.884 87.0446 14.416L86.9728 14.776C86.9489 14.92 86.8651 14.992 86.7214 14.992H86.2545C86.1109 14.992 86.0391 14.92 86.0391 14.776V7.216C86.0391 7.072 86.1109 7 86.2545 7H86.889C87.0326 7 87.1045 7.072 87.1045 7.216V10.036C87.6432 9.58 88.2297 9.352 88.8522 9.352C89.5465 9.352 90.0972 9.604 90.5042 10.108C90.9112 10.612 91.1027 11.308 91.1027 12.184C91.1027 13.072 90.8872 13.78 90.4683 14.308C90.0493 14.848 89.4867 15.112 88.7804 15.112ZM88.529 14.248C89.5226 14.248 90.0134 13.576 90.0134 12.244C90.0134 11.56 89.8937 11.056 89.6543 10.72C89.4148 10.384 89.0437 10.228 88.5529 10.228C88.0382 10.228 87.5594 10.396 87.1045 10.72V13.732C87.5594 14.068 88.0382 14.248 88.529 14.248Z"
                    fill="white"
                  />
                  <path
                    d="M93.4368 15.04C93.0537 15.04 92.7664 14.932 92.5629 14.716C92.3594 14.5 92.2637 14.176 92.2637 13.768V7.216C92.2637 7.072 92.3355 7 92.4791 7H93.1136C93.2572 7 93.3291 7.072 93.3291 7.216V13.708C93.3291 13.876 93.365 13.996 93.4368 14.068C93.5086 14.14 93.6164 14.176 93.772 14.176C93.8199 14.176 93.8558 14.176 93.9037 14.164C93.9516 14.152 93.9875 14.152 94.0234 14.152C94.0952 14.152 94.1431 14.176 94.167 14.2C94.191 14.236 94.2029 14.296 94.2029 14.356V14.704C94.2029 14.776 94.191 14.836 94.1551 14.872C94.1192 14.908 94.0713 14.944 93.9875 14.968C93.8199 15.028 93.6283 15.04 93.4368 15.04Z"
                    fill="white"
                  />
                  <path
                    d="M97.5799 15.1476C96.6941 15.1476 96.0237 14.9076 95.5808 14.4156C95.1259 13.9236 94.8984 13.2036 94.8984 12.2436C94.8984 11.3316 95.1259 10.6236 95.5808 10.1076C96.0357 9.59156 96.6701 9.35156 97.4722 9.35156C98.1545 9.35156 98.6812 9.54356 99.0403 9.92756C99.4114 10.3116 99.591 10.8636 99.591 11.5596C99.591 11.7876 99.5671 12.0276 99.5311 12.2556C99.5192 12.3396 99.4952 12.3996 99.4593 12.4236C99.4234 12.4476 99.3755 12.4716 99.3037 12.4716H95.9279C95.9399 13.0956 96.0955 13.5516 96.3828 13.8396C96.6701 14.1276 97.125 14.2836 97.7355 14.2836C97.951 14.2836 98.1545 14.2716 98.358 14.2356C98.5615 14.1996 98.8009 14.1396 99.1122 14.0556C99.1601 14.0436 99.2079 14.0316 99.2438 14.0196C99.2798 14.0076 99.3157 14.0076 99.3396 14.0076C99.4354 14.0076 99.4833 14.0676 99.4833 14.1996V14.4996C99.4833 14.5956 99.4713 14.6556 99.4354 14.7036C99.4114 14.7396 99.3396 14.7876 99.2558 14.8236C99.0403 14.9196 98.789 14.9916 98.4897 15.0516C98.1904 15.1116 97.8792 15.1476 97.5799 15.1476ZM98.6094 11.7756C98.6214 11.7156 98.6214 11.6196 98.6214 11.4996C98.6214 11.0556 98.5256 10.7316 98.3101 10.5036C98.1066 10.2756 97.8073 10.1676 97.4123 10.1676C96.9574 10.1676 96.6103 10.2996 96.3589 10.5756C96.1075 10.8516 95.9638 11.2476 95.9279 11.7756H98.6094Z"
                    fill="white"
                  />
                  <path
                    d="M104.701 15.1356C104.187 15.1356 103.78 14.9916 103.48 14.7036C103.181 14.4156 103.025 14.0196 103.025 13.5276C103.025 12.9996 103.217 12.5796 103.588 12.2676C103.959 11.9556 104.462 11.7996 105.096 11.7996C105.503 11.7996 105.946 11.8596 106.449 11.9796V11.2596C106.449 10.8756 106.365 10.5996 106.186 10.4436C106.006 10.2876 105.707 10.2036 105.288 10.2036C104.797 10.2036 104.306 10.2756 103.839 10.4196C103.672 10.4676 103.576 10.4916 103.528 10.4916C103.444 10.4916 103.396 10.4316 103.396 10.2996V10.0116C103.396 9.91556 103.408 9.84356 103.444 9.80756C103.468 9.75956 103.528 9.72356 103.612 9.68756C103.839 9.59156 104.115 9.50756 104.462 9.44756C104.809 9.38756 105.144 9.35156 105.479 9.35156C106.162 9.35156 106.665 9.49556 106.988 9.78356C107.311 10.0716 107.479 10.5036 107.479 11.0796V14.7756C107.479 14.9196 107.407 14.9916 107.263 14.9916H106.796C106.665 14.9916 106.581 14.9196 106.557 14.7876L106.509 14.4276C106.246 14.6556 105.958 14.8236 105.647 14.9436C105.336 15.0636 105.013 15.1356 104.701 15.1356ZM104.965 14.3196C105.204 14.3196 105.455 14.2716 105.707 14.1756C105.97 14.0796 106.21 13.9476 106.449 13.7676V12.6636C106.066 12.5676 105.683 12.5196 105.312 12.5196C104.498 12.5196 104.091 12.8316 104.091 13.4556C104.091 13.7316 104.163 13.9356 104.318 14.0916C104.474 14.2476 104.677 14.3196 104.965 14.3196Z"
                    fill="white"
                  />
                  <path
                    d="M110.758 15.0644C109.741 15.0644 109.226 14.5484 109.226 13.5284V10.3604H108.448C108.304 10.3604 108.232 10.2884 108.232 10.1444V9.86838C108.232 9.79638 108.244 9.74837 108.28 9.71237C108.316 9.67637 108.376 9.65238 108.472 9.64038L109.262 9.54438L109.406 8.20038C109.418 8.05638 109.501 7.98438 109.633 7.98438H110.088C110.232 7.98438 110.303 8.05638 110.303 8.20038V9.52038H111.704C111.848 9.52038 111.919 9.59238 111.919 9.73638V10.1444C111.919 10.2884 111.848 10.3604 111.704 10.3604H110.291V13.4804C110.291 13.7444 110.351 13.9364 110.471 14.0444C110.591 14.1524 110.794 14.2004 111.081 14.2004C111.213 14.2004 111.381 14.1884 111.584 14.1524C111.692 14.1284 111.764 14.1164 111.8 14.1164C111.86 14.1164 111.895 14.1284 111.919 14.1644C111.943 14.2004 111.955 14.2484 111.955 14.3204V14.6084C111.955 14.7044 111.943 14.7764 111.907 14.8244C111.884 14.8724 111.824 14.9084 111.74 14.9324C111.465 15.0284 111.129 15.0644 110.758 15.0644Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li className="mc-mb-4">
              <a
                href="https://channelstore.roku.com/details/579323/masterclass-learn-new-skills"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mc-sr-only">Available on Roku</span>
                <svg
                  width={132}
                  height={48}
                  viewBox="0 0 132 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width={131}
                    height={47}
                    rx="7.5"
                    fill="black"
                    stroke="#949AA4"
                  />
                  <path
                    d="M69.9786 22.6624C71.6968 22.6624 73.38 22.6624 75.0782 22.6624C75.0782 27.6675 75.0782 32.659 75.0782 37.6635C74.7151 37.6635 74.3638 37.6635 74.0075 37.6635C73.2469 37.0109 72.4837 36.3564 71.7062 35.69C71.6343 35.7585 71.5743 35.8114 71.5193 35.868C70.5205 36.8951 69.2955 37.5216 67.9129 37.8501C67.3148 37.992 66.6991 38.0293 66.0853 37.9783C65.2259 37.908 64.3796 37.7755 63.5746 37.4389C62.1952 36.8622 61.2376 35.8879 60.7239 34.4875C60.5526 34.0202 60.4345 33.5399 60.4051 33.041C60.3863 32.7218 60.3557 32.402 60.3551 32.0823C60.3513 29.3038 60.3526 26.5253 60.3526 23.7468C60.3526 23.6348 60.3526 23.5235 60.3526 23.4208C58.1869 25.5765 56.0337 27.7198 53.8573 29.8861C54.2011 30.2376 54.578 30.6059 54.9505 30.978C55.318 31.345 55.6868 31.7115 56.0549 32.0779C56.4306 32.4518 56.8062 32.8257 57.1818 33.1996C57.55 33.5661 57.9181 33.9325 58.2863 34.2989C58.6619 34.6728 59.0375 35.0468 59.4132 35.4207C59.7813 35.7871 60.1495 36.1535 60.5176 36.52C60.8926 36.8933 61.267 37.2659 61.667 37.6641C59.4982 37.6641 57.3669 37.6641 55.2205 37.6641C53.1779 35.6527 51.1285 33.6351 49.064 31.602C48.999 31.7177 49.0253 31.8303 49.0246 31.9348C49.0228 33.7284 49.0234 35.5221 49.0234 37.3157C49.0234 37.4277 49.0234 37.5397 49.0234 37.6635C47.3139 37.6635 45.6301 37.6635 43.9476 37.6635C43.9376 37.6554 43.9282 37.6504 43.9219 37.6423C43.9163 37.6349 43.9113 37.6243 43.9113 37.615C43.9107 32.6391 43.9107 27.6632 43.9107 22.6699C44.1863 22.6102 44.4651 22.6518 44.7407 22.6444C45.022 22.6369 45.3032 22.6425 45.5845 22.6425C45.8764 22.6425 46.1676 22.6425 46.4595 22.6425C46.7408 22.6425 47.0221 22.6425 47.3033 22.6425C47.5846 22.6425 47.8658 22.6425 48.1471 22.6425C48.4271 22.6425 48.7071 22.6425 49.0196 22.6425C49.0259 23.1421 49.0221 23.6255 49.0228 24.1095C49.0234 24.6072 49.0228 25.1049 49.0228 25.6027C49.0228 26.0898 49.0228 26.5769 49.0228 27.0647C49.0228 27.5481 49.0221 28.0321 49.0234 28.5348C51.0216 26.5558 52.991 24.6047 54.9511 22.663C58.4625 22.663 61.9489 22.663 65.4666 22.663C65.4666 22.7862 65.4666 22.8976 65.4666 23.0083C65.4666 25.714 65.4578 28.4197 65.4734 31.1248C65.4772 31.7619 65.5253 32.402 65.7603 33.0124C66.0047 33.6476 66.4772 33.9879 67.1497 34.0258C67.7685 34.0607 68.346 33.9375 68.8736 33.6028C69.333 33.3116 69.6605 32.9022 69.9361 32.4456C69.9661 32.3958 69.9699 32.328 69.9755 32.2677C69.9817 32.1955 69.9774 32.1227 69.9774 32.0499C69.9774 29.0437 69.9774 26.0369 69.9774 23.0307C69.9786 22.9163 69.9786 22.803 69.9786 22.6624ZM23.723 30.1704C23.8424 30.0926 23.9455 30.0255 24.0492 29.9583C24.7536 29.5047 25.3637 28.9479 25.8756 28.2866C26.5925 27.3608 26.9894 26.3125 27.0731 25.1473C27.1031 24.7317 27.0431 24.3235 26.9706 23.916C26.7675 22.7694 26.2262 21.797 25.4337 20.9571C24.7193 20.2 23.8724 19.6314 22.9161 19.2151C21.836 18.7448 20.7029 18.5003 19.5341 18.4885C17.1077 18.463 14.6814 18.4804 12.255 18.4816C12.175 18.4816 12.095 18.4947 12 18.5034C12 24.9009 12 31.2803 12 37.6678C12.0781 37.6716 12.1394 37.6765 12.2006 37.6765C13.8251 37.6747 15.4495 37.6722 17.074 37.6691C17.0833 37.6691 17.094 37.6641 17.1021 37.6585C17.1102 37.6529 17.1165 37.6436 17.1358 37.6224C17.1358 37.2118 17.1358 36.7875 17.1358 36.3632C17.1358 35.9383 17.1358 35.5134 17.1358 35.0884C17.1358 34.6741 17.1358 34.2591 17.1358 33.8448C17.1358 33.4199 17.1346 32.9949 17.1358 32.57C17.1371 32.1482 17.1302 31.7264 17.1408 31.2903C17.679 31.2903 18.1846 31.2903 18.7021 31.2903C20.2447 33.4211 21.7873 35.5513 23.323 37.6728C25.268 37.6728 27.1925 37.6728 29.1444 37.6728C27.3312 35.1631 25.5324 32.6739 23.723 30.1704ZM17.1452 21.7074C17.2308 21.6981 17.3102 21.6826 17.389 21.6819C17.8465 21.6794 18.3046 21.6913 18.7622 21.6788C20.1291 21.6421 21.5035 22.6599 21.8404 24.107C22.0835 25.151 21.891 26.119 21.1754 26.9521C20.6504 27.563 19.9991 27.9407 19.1909 28.0651C18.7647 28.131 18.3409 28.0956 17.9165 28.1105C17.6696 28.1192 17.4215 28.1118 17.1458 28.1118C17.1452 25.9504 17.1452 23.8401 17.1452 21.7074ZM35.7566 37.9372C36.2891 37.9105 36.8029 37.7885 37.3085 37.6342C39.0842 37.0917 40.4899 36.0447 41.5406 34.5248C42.4 33.2817 42.8063 31.8881 42.885 30.3931C42.9138 29.8544 42.8519 29.3181 42.7575 28.7899C42.5906 27.8567 42.2656 26.9788 41.7712 26.1632C40.9937 24.8791 39.9318 23.8992 38.6005 23.2112C37.5735 22.6798 36.4697 22.4123 35.3178 22.3402C34.7141 22.3022 34.1115 22.3607 33.5209 22.4727C32.6615 22.6357 31.8408 22.9206 31.0752 23.3561C30.1782 23.8656 29.397 24.5096 28.7651 25.3202C27.8681 26.4712 27.3169 27.769 27.1512 29.2248C27.0794 29.855 27.0781 30.4809 27.1506 31.1111C27.2219 31.7301 27.3706 32.3261 27.5869 32.9103C28.0969 34.2871 28.9382 35.4256 30.0932 36.3259C31.5158 37.4345 33.1509 37.9571 35.0753 37.9982C35.2203 37.9833 35.4878 37.9509 35.7566 37.9372ZM33.0471 27.5151C33.2521 27.1194 33.5103 26.7623 33.8646 26.4712C34.6209 25.8497 35.4953 25.9224 36.2029 26.5657C36.6666 26.9875 36.9616 27.5164 37.1698 28.1006C37.341 28.5796 37.4304 29.0717 37.4904 29.5775C37.586 30.3826 37.4867 31.1652 37.2729 31.9329C37.0879 32.5961 36.7891 33.2133 36.2691 33.6911C36.096 33.8504 35.896 33.9904 35.6878 34.1005C35.0941 34.414 34.524 34.3195 33.9865 33.9505C33.4621 33.5903 33.1446 33.0708 32.9015 32.5028C32.5846 31.7619 32.4321 30.986 32.4558 30.2028C32.4371 29.2428 32.6152 28.3488 33.0471 27.5151ZM84.4167 37.4221C85.0517 37.7002 85.7124 37.8507 86.4112 37.7462C86.6355 37.7126 86.8668 37.6853 87.0774 37.6081C87.6806 37.386 88.1062 36.9878 88.22 36.3296C88.255 36.128 88.2844 35.9171 88.2631 35.7156C88.2187 35.2894 88.045 34.9267 87.6725 34.6704C87.3599 34.4557 87.0206 34.3101 86.658 34.21C86.3487 34.1247 86.0343 34.0557 85.7293 33.9574C85.5136 33.8883 85.2974 33.805 85.1036 33.6905C84.7736 33.4958 84.698 33.138 84.8786 32.8027C85.0023 32.5737 85.208 32.4412 85.4461 32.4058C85.763 32.3591 86.0862 32.3541 86.4049 32.4437C86.8081 32.5576 87.1631 32.7635 87.5112 32.9987C87.7068 32.7199 87.8943 32.4524 88.08 32.188C87.3687 31.5752 86.2037 31.2803 85.2774 31.4707C84.318 31.6679 83.5998 32.3255 83.731 33.5163C83.7648 33.8193 83.8823 34.0899 84.1042 34.3157C84.3367 34.5528 84.6167 34.7077 84.923 34.8103C85.2861 34.9317 85.6593 35.0231 86.0274 35.1283C86.3162 35.2104 86.6024 35.2937 86.8687 35.4437C87.3299 35.7031 87.2506 36.4366 86.843 36.6351C86.7499 36.6805 86.6574 36.7328 86.5587 36.7595C86.0355 36.9007 85.5299 36.8261 85.0405 36.6139C84.7055 36.4683 84.3998 36.2742 84.1142 36.0192C83.9029 36.2711 83.6967 36.5169 83.4717 36.7863C83.7617 37.0662 84.0729 37.2715 84.4167 37.4221ZM87.865 27.68C87.3849 27.9575 86.8605 27.9985 86.3274 27.8803C85.8305 27.7702 85.4405 27.489 85.1467 27.0746C84.8549 26.6628 84.728 26.19 84.7286 25.7022C84.7298 25.212 84.8723 24.7422 85.1749 24.3391C85.5899 23.7854 86.1668 23.516 86.8418 23.5141C87.2881 23.5129 87.7225 23.6498 88.0925 23.9291C88.2475 24.0461 88.4037 24.1624 88.56 24.28C88.7869 24.0143 89.0069 23.7568 89.2275 23.498C88.9925 23.2311 88.7262 23.0469 88.4381 22.9051C87.5506 22.4677 86.623 22.3986 85.6918 22.7234C84.7198 23.0625 84.0723 23.745 83.7623 24.7273C83.5917 25.268 83.5535 25.8179 83.6629 26.3791C83.8298 27.2345 84.2673 27.917 84.9899 28.4017C85.8355 28.9697 86.7706 29.0406 87.7381 28.8079C88.35 28.6611 88.8425 28.309 89.2769 27.8461C89.0456 27.6234 88.8231 27.4094 88.5881 27.1835C88.3425 27.354 88.1143 27.5363 87.865 27.68ZM94.639 28.4788C94.639 27.629 94.6427 26.7791 94.6365 25.9299C94.6346 25.7246 94.619 25.5156 94.5746 25.3159C94.4696 24.8387 94.2134 24.4679 93.7621 24.2408C93.1589 23.9372 92.2276 24.0168 91.7045 24.6184C91.6464 24.685 91.5839 24.7472 91.4726 24.8654C91.4632 24.0031 91.4745 23.2105 91.4657 22.4005C91.1051 22.3868 90.7682 22.3744 90.4338 22.4061C90.3913 22.9747 90.4082 28.5759 90.452 28.8229C90.7807 28.8229 91.1101 28.8229 91.4689 28.8229C91.4689 28.709 91.4689 28.6076 91.4689 28.5068C91.4689 27.9058 91.4639 27.3048 91.4714 26.7038C91.4745 26.4469 91.4914 26.1881 91.522 25.933C91.567 25.5579 91.7639 25.281 92.1089 25.1124C92.2958 25.0216 92.4945 25.0365 92.6908 25.0465C93.1133 25.0676 93.4839 25.4042 93.5346 25.8223C93.5677 26.0985 93.5871 26.3772 93.5908 26.6553C93.599 27.298 93.5927 27.94 93.5939 28.5827C93.5939 28.6617 93.6058 28.7407 93.6121 28.8216C93.954 28.8216 94.2727 28.8216 94.6384 28.8216C94.639 28.6829 94.639 28.5808 94.639 28.4788ZM105.327 36.9225C104.781 37.0189 104.244 36.8087 103.936 36.362C103.815 36.1878 103.721 35.9937 103.733 35.7411C104.03 35.7411 104.309 35.7411 104.588 35.7411C104.869 35.7411 105.15 35.7411 105.431 35.7411C105.723 35.7411 106.014 35.7417 106.306 35.7411C106.583 35.7398 106.861 35.7373 107.14 35.7348C107.193 35.2135 107.145 34.7369 106.96 34.2753C106.71 33.6519 106.278 33.222 105.625 33.0292C105.263 32.9221 104.895 32.8935 104.523 32.9676C103.997 33.0727 103.549 33.311 103.209 33.7328C102.638 34.4427 102.542 35.2496 102.745 36.1056C102.844 36.5262 103.062 36.8958 103.389 37.1832C104.224 37.9154 105.436 37.9957 106.376 37.4401C106.601 37.307 106.816 37.1483 106.94 36.9138C106.736 36.7309 106.551 36.5654 106.339 36.3763C106.046 36.6699 105.719 36.8528 105.327 36.9225ZM103.757 35.0219C103.691 34.6965 103.907 34.2523 104.267 34.0003C104.641 33.739 105.057 33.7278 105.447 33.9188C105.875 34.1285 106.081 34.5098 106.103 35.0212C105.289 35.0219 104.523 35.0219 103.757 35.0219ZM97.5335 34.065C96.8653 33.0161 95.494 32.6378 94.3552 33.1542C93.4096 33.5829 92.9083 34.335 92.9145 35.384C92.9208 36.3868 93.3796 37.1259 94.2921 37.5565C94.7777 37.786 95.2909 37.8458 95.8365 37.7562C97.0003 37.5646 97.8935 36.5946 97.896 35.206C97.886 34.8974 97.7841 34.4588 97.5335 34.065ZM96.8041 35.048C96.8828 35.5047 96.8022 35.9047 96.5591 36.2861C96.1484 36.9287 95.0259 37.1888 94.3246 36.3775C93.8071 35.779 93.8352 34.8788 94.3496 34.2971C94.624 33.9866 94.9859 33.8404 95.394 33.8765C96.0653 33.8106 96.696 34.4196 96.8041 35.048ZM100.021 28.5099C100.021 27.6812 100.025 26.8519 100.018 26.0232C100.016 25.8285 99.998 25.63 99.9536 25.4409C99.7973 24.7771 99.3904 24.3397 98.7135 24.196C98.0966 24.0654 97.476 24.0797 96.8647 24.2458C96.6466 24.3049 96.4253 24.3609 96.2184 24.4878C96.3047 24.7659 96.3741 25.0415 96.5122 25.3015C97.0491 25.0583 97.5929 24.9799 98.1604 25.0483C98.7267 25.1161 99.0873 25.6207 98.9367 26.157C98.4373 25.9747 97.9179 25.9822 97.3972 25.9946C97.1116 26.0015 96.8397 26.0693 96.5872 26.1924C96.024 26.4668 95.7609 26.9328 95.7947 27.5493C95.8272 28.1385 96.1141 28.5634 96.7116 28.7918C97.0097 28.9056 97.3172 28.9236 97.6304 28.91C98.0735 28.8913 98.4554 28.7271 98.7867 28.4384C98.8367 28.3948 98.8873 28.3525 98.9654 28.2866C98.9748 28.4881 98.9817 28.6499 98.9898 28.8235C99.3336 28.8235 99.6623 28.8235 100.02 28.8235C100.021 28.7115 100.021 28.6107 100.021 28.5099ZM98.9704 27.4237C98.8854 27.6669 98.7392 27.8585 98.5016 27.978C98.146 28.1572 97.7816 28.2269 97.3897 28.1136C97.0978 28.029 96.8703 27.8007 96.8372 27.545C96.7947 27.2202 96.9266 26.9571 97.2191 26.7947C97.356 26.7188 97.4979 26.6634 97.661 26.6634C98.0135 26.6634 98.3673 26.6298 98.7123 26.7325C98.8098 26.7617 98.9054 26.7972 99.0029 26.8301C99.056 27.0634 99.0329 27.2457 98.9704 27.4237ZM116.985 25.5454C116.856 25.1697 116.662 24.83 116.35 24.568C115.859 24.1562 115.284 24.0131 114.662 24.079C113.972 24.1518 113.415 24.4878 113.043 25.0682C112.553 25.831 112.483 26.6584 112.807 27.5014C113.033 28.0881 113.454 28.495 114.045 28.7432C114.423 28.9019 114.809 28.9199 115.205 28.9156C115.843 28.9081 116.369 28.6493 116.814 28.2082C116.855 28.1677 116.882 28.113 116.923 28.0545C116.717 27.8729 116.524 27.7036 116.341 27.5425C116.299 27.5568 116.277 27.5599 116.26 27.5705C116.226 27.5941 116.194 27.6203 116.163 27.6476C115.828 27.9432 115.439 28.0663 114.99 28.0657C114.405 28.0645 113.926 27.7018 113.735 27.1275C113.712 27.0554 113.723 26.972 113.717 26.8706C114.865 26.8706 115.987 26.8706 117.133 26.8706C117.186 26.3866 117.127 25.9591 116.985 25.5454ZM113.694 26.1688C113.776 25.2449 114.472 24.8922 114.988 24.927C115.587 24.9675 116.082 25.5149 116.076 26.1688C115.267 26.1688 114.481 26.1688 113.694 26.1688ZM107.175 24.4063C107.178 25.8565 107.182 27.3067 107.187 28.7569C107.187 28.7662 107.193 28.7762 107.2 28.7849C107.205 28.793 107.214 28.7998 107.249 28.8347C107.559 28.8235 107.897 28.8614 108.265 28.8073C108.265 28.6916 108.265 28.5902 108.265 28.4888C108.265 27.9705 108.265 27.4523 108.265 26.9347C108.266 26.6342 108.265 26.3337 108.273 26.0332C108.28 25.7769 108.373 25.5535 108.55 25.3606C108.796 25.0906 109.103 25.0185 109.453 25.0421C109.838 25.0676 110.103 25.2561 110.228 25.6101C110.296 25.8011 110.337 26.0114 110.34 26.2136C110.352 27.0012 110.344 27.7889 110.345 28.5759C110.345 28.6555 110.356 28.7351 110.362 28.8241C110.71 28.8241 111.038 28.8241 111.397 28.8241C111.397 28.7121 111.397 28.6107 111.397 28.5099C111.397 27.629 111.402 26.748 111.394 25.8677C111.392 25.6524 111.367 25.4341 111.319 25.2238C111.259 24.9587 111.133 24.7155 110.939 24.5214C110.401 23.9826 109.48 23.9515 108.913 24.2713C108.678 24.4044 108.476 24.5768 108.278 24.8598C108.27 24.5979 108.264 24.4057 108.258 24.201C107.898 24.201 107.558 24.201 107.176 24.201C107.175 24.2856 107.175 24.3459 107.175 24.4063ZM105.708 28.6667C105.709 27.6924 105.719 26.7182 105.701 25.7445C105.697 25.4925 105.631 25.2312 105.541 24.9942C105.471 24.8063 105.347 24.6209 105.201 24.4822C104.663 23.9702 103.728 23.9503 103.2 24.2931C102.988 24.4312 102.803 24.6103 102.589 24.7833C102.581 24.5942 102.572 24.4026 102.563 24.1854C102.198 24.1954 101.851 24.1668 101.486 24.2078C101.486 25.6674 101.486 27.1064 101.487 28.546C101.487 28.6182 101.495 28.6903 101.501 28.7619C101.501 28.7712 101.509 28.7806 101.515 28.7886C101.521 28.7967 101.529 28.8036 101.562 28.8353C101.702 28.8353 101.867 28.8409 102.032 28.8341C102.204 28.8272 102.382 28.8664 102.577 28.7949C102.577 28.6872 102.577 28.5858 102.577 28.4838C102.577 27.7273 102.574 26.9707 102.579 26.2142C102.581 26.0512 102.588 25.8789 102.641 25.7271C102.787 25.3034 103.127 24.9911 103.762 25.0415C104.145 25.072 104.413 25.2543 104.538 25.6083C104.606 25.7993 104.648 26.0095 104.651 26.2117C104.664 26.9994 104.656 27.787 104.657 28.5746C104.657 28.6543 104.667 28.7345 104.673 28.8247C105.02 28.8247 105.349 28.8247 105.694 28.8247C105.7 28.7656 105.708 28.7165 105.708 28.6667ZM90.7832 33.0049C90.7832 32.5812 90.7832 32.1712 90.7832 31.7457C90.4176 31.7264 90.0807 31.7258 89.7394 31.7426C89.7094 32.1787 89.7538 32.5912 89.7113 33.0142C89.5213 33.0242 89.3488 33.0329 89.1556 33.0422C89.1556 33.2755 89.155 33.4914 89.1563 33.7073C89.1569 33.7776 89.1631 33.8479 89.1669 33.9325C89.3531 33.9412 89.5263 33.9487 89.7288 33.958C89.7288 34.0756 89.7288 34.1764 89.7288 34.2772C89.7288 34.9709 89.7238 35.6652 89.7319 36.3588C89.7344 36.5536 89.7507 36.7545 89.8026 36.9405C89.9026 37.2958 90.1088 37.5733 90.4882 37.6803C90.8657 37.7867 91.247 37.7823 91.6264 37.6965C91.7639 37.6653 91.8933 37.6013 92.0308 37.5509C92.0308 37.3897 92.037 37.2554 92.0289 37.1222C92.0208 36.9853 92.0645 36.841 92.0001 36.7122C91.8389 36.7527 91.7008 36.8037 91.5589 36.8199C91.0457 36.8777 90.787 36.7097 90.782 36.1268C90.7763 35.4742 90.7801 34.8215 90.782 34.1689C90.782 34.0999 90.7988 34.0314 90.8107 33.9362C91.237 33.9362 91.6489 33.9362 92.0676 33.9362C92.0676 33.6295 92.0676 33.352 92.0676 33.0416C91.6345 33.0024 91.2201 33.0565 90.7832 33.0049ZM101.3 33.0111C100.8 33.153 100.527 33.5468 100.23 33.9854C100.19 33.6301 100.245 33.3303 100.191 33.0435C99.8423 33.0435 99.5129 33.0435 99.1729 33.0435C99.1686 33.1094 99.1629 33.1592 99.1629 33.2096C99.1648 34.6803 99.1673 36.1511 99.1704 37.6212C99.1704 37.6299 99.1773 37.6398 99.1836 37.6473C99.1898 37.6554 99.1979 37.6622 99.2004 37.6647C99.5348 37.6647 99.8642 37.6647 100.214 37.6647C100.214 37.5465 100.214 37.4445 100.214 37.3425C100.214 36.8559 100.207 36.3688 100.217 35.8823C100.22 35.6776 100.235 35.4673 100.286 35.2695C100.44 34.6641 100.792 34.233 101.432 34.0949C101.58 34.0632 101.733 34.0607 101.881 34.0451C101.881 33.6812 101.881 33.3408 101.881 32.9707C101.666 32.9576 101.486 32.9582 101.3 33.0111ZM119.497 28.8235C119.507 28.7837 119.52 28.755 119.52 28.7258C119.519 26.6323 119.517 24.5388 119.514 22.4453C119.514 22.4366 119.506 22.4273 119.499 22.4198C119.493 22.4117 119.485 22.4055 119.466 22.3881C119.147 22.3999 118.817 22.3675 118.479 22.4086C118.479 24.5481 118.479 26.6709 118.479 28.8241C118.836 28.8235 119.165 28.8235 119.497 28.8235ZM17.6309 15.8973C17.7846 15.8973 17.9184 15.8973 18.0802 15.8973C17.194 13.9873 16.3158 12.0972 15.4395 10.2097C15.2908 10.2097 15.1589 10.2097 15.0164 10.2097C14.137 12.0972 13.2601 13.9767 12.3788 15.8886C12.5506 15.8886 12.6794 15.8886 12.8 15.8886C13.0413 15.3653 13.2738 14.8602 13.5076 14.3525C14.6526 14.3525 15.7845 14.3525 16.9233 14.3525C17.1627 14.8751 17.3983 15.389 17.6309 15.8973ZM16.7114 13.8971C16.4514 13.9506 14.0426 13.9556 13.7169 13.9027C14.2088 12.8301 14.697 11.7656 15.2195 10.6265C15.7364 11.7607 16.2227 12.827 16.7114 13.8971ZM36.6485 11.7743C36.6485 11.4739 36.6541 11.1734 36.6466 10.8729C36.6398 10.5867 36.6766 10.2986 36.6204 10C36.5054 10.0056 36.4054 10.0106 36.2997 10.0156C36.2935 10.0759 36.2854 10.1157 36.2854 10.1562C36.2872 12.0518 36.2891 13.9481 36.2922 15.8438C36.2922 15.8531 36.2979 15.8631 36.3035 15.8711C36.3091 15.8798 36.3179 15.8861 36.3235 15.8917C36.426 15.8917 36.526 15.8917 36.6554 15.8917C36.6554 15.6241 36.6554 15.3716 36.6554 15.1034C36.8073 15.2453 36.9373 15.3622 37.0623 15.4848C37.7986 16.2021 38.9173 16.1922 39.6886 15.5203C40.2249 15.053 40.4287 14.4415 40.4018 13.7422C40.368 12.8693 39.9811 12.2254 39.1755 11.8496C38.5423 11.5541 37.6604 11.6331 37.1216 12.1781C36.9716 12.3299 36.8273 12.4873 36.6485 12.6752C36.6485 12.3504 36.6485 12.0624 36.6485 11.7743ZM39.7999 14.7612C39.5555 15.2328 39.1792 15.5041 38.653 15.6217C37.691 15.8357 36.6473 14.9771 36.6379 13.9394C36.6323 13.3403 36.8191 12.8469 37.2717 12.455C38.1386 11.7047 39.4067 12.0182 39.848 13.0734C39.9536 13.326 39.998 13.5879 39.983 13.8367C39.9899 14.1746 39.9468 14.4769 39.7999 14.7612ZM26.5712 13.5275C26.5693 13.3117 26.56 13.0908 26.5125 12.8818C26.3887 12.3361 26.0718 11.9523 25.5087 11.8098C25.1562 11.7208 24.8049 11.6792 24.4336 11.737C24.0599 11.7949 23.7117 11.9031 23.3536 12.068C23.403 12.1781 23.4467 12.2752 23.4848 12.361C23.5298 12.361 23.5411 12.3641 23.5505 12.3604C23.628 12.3318 23.7049 12.3007 23.7824 12.2721C24.2349 12.1066 24.6899 12.0176 25.1805 12.1016C25.8687 12.2198 26.2975 12.8283 26.1337 13.5263C25.6612 13.4062 25.1812 13.354 24.6918 13.3645C24.3749 13.3714 24.073 13.4261 23.7824 13.5456C23.298 13.7453 23.0117 14.0993 22.9773 14.6269C22.9398 15.1893 23.2167 15.593 23.7055 15.8226C24.2861 16.0945 24.8886 16.1001 25.4799 15.8151C25.7318 15.6938 25.9399 15.5171 26.1543 15.2708C26.1668 15.5128 26.1768 15.7038 26.1875 15.896C26.3212 15.896 26.4331 15.896 26.5743 15.896C26.5737 15.0823 26.5775 14.3046 26.5712 13.5275ZM25.2412 15.5514C24.7661 15.7156 24.3149 15.6994 23.8586 15.4717C23.3092 15.1974 23.1598 14.3108 23.8274 13.922C24.0161 13.8119 24.2186 13.7335 24.443 13.7248C24.9837 13.7036 25.5212 13.7086 26.0481 13.8542C26.0781 13.8622 26.1081 13.8697 26.1362 13.8828C26.1543 13.8909 26.1681 13.9089 26.1831 13.922C26.3168 14.7824 25.9068 15.3212 25.2412 15.5514ZM33.8859 13.4149C33.389 13.3303 32.8871 13.3235 32.4015 13.4473C31.8258 13.5941 31.3627 13.9126 31.327 14.643C31.307 15.058 31.4452 15.4083 31.7939 15.6658C32.4002 16.1138 33.3515 16.1455 33.9946 15.7168C34.174 15.5974 34.3315 15.4456 34.5309 15.2832C34.5309 15.4985 34.5309 15.6895 34.5309 15.8854C34.6709 15.8854 34.7778 15.8854 34.8959 15.8854C34.8959 14.9429 34.9284 14.0196 34.8859 13.0995C34.8516 12.3498 34.3815 11.8888 33.6153 11.747C33.2934 11.6872 32.9765 11.6872 32.6583 11.7532C32.3352 11.8198 32.0133 11.8932 31.7127 12.0798C31.7552 12.1831 31.7927 12.2733 31.8239 12.3511C31.8583 12.3585 31.8702 12.3654 31.8783 12.3623C31.9664 12.3324 32.0552 12.3025 32.1421 12.2689C32.604 12.0873 33.0771 12.002 33.5709 12.1115C33.9953 12.2055 34.3178 12.4295 34.4565 12.8544C34.5234 13.0591 34.5722 13.2743 34.514 13.5194C34.2947 13.4827 34.0903 13.4498 33.8859 13.4149ZM34.4772 14.7208C34.2909 15.2067 33.9146 15.473 33.4277 15.6036C33.1334 15.6826 32.8371 15.6876 32.5377 15.6092C32.2646 15.5383 32.0414 15.3983 31.8783 15.1731C31.6052 14.7967 31.6946 14.2617 32.0708 13.9873C32.2933 13.8249 32.5396 13.731 32.8202 13.7229C33.3909 13.7061 33.9571 13.7154 34.5247 13.894C34.5253 14.1739 34.5809 14.4508 34.4772 14.7208ZM44.5295 13.9842C44.8107 13.9842 45.092 13.9842 45.3732 13.9842C45.6651 13.9842 45.9564 13.9904 46.2483 13.9823C46.5239 13.9749 46.8033 14.0178 47.1089 13.9487C47.0771 13.6887 47.0671 13.4392 47.0133 13.2003C46.9083 12.7349 46.6852 12.3324 46.2926 12.0388C45.9464 11.7793 45.557 11.6704 45.1251 11.6866C44.5151 11.7096 44.0238 11.956 43.6575 12.4419C43.2969 12.9203 43.1825 13.4647 43.2206 14.0526C43.2638 14.7239 43.5438 15.2714 44.0976 15.6546C44.6395 16.0298 45.2382 16.1088 45.8795 15.9321C46.3139 15.8127 46.657 15.5775 46.9558 15.244C46.8839 15.1781 46.8327 15.1271 46.777 15.081C46.7539 15.0624 46.722 15.0543 46.6789 15.0344C46.0039 15.6602 45.2395 15.9128 44.3951 15.4002C43.9025 15.1016 43.6369 14.6256 43.6425 13.9836C43.9694 13.9842 44.2494 13.9842 44.5295 13.9842ZM43.6932 13.6625C43.5794 13.2886 43.8357 12.7107 44.2432 12.3629C44.6901 11.9815 45.3945 11.9541 45.8501 12.1924C46.2451 12.399 46.6752 12.995 46.6358 13.6625C45.6395 13.6625 44.6651 13.6625 43.6932 13.6625ZM50.0365 13.851C50.0359 15.0337 50.896 16.0198 52.1654 16.018C53.4229 16.0161 54.3048 15.0848 54.3123 13.8641C54.3205 12.511 53.2879 11.6655 52.1991 11.6885C50.9972 11.653 50.0372 12.6292 50.0365 13.851ZM51.1716 12.3629C51.8435 11.849 52.936 11.9293 53.5229 12.7188C54.0211 13.3894 54.0248 14.2977 53.5392 14.9728C53.0892 15.5993 52.2204 15.8357 51.5172 15.5147C50.796 15.1849 50.4897 14.5964 50.4497 13.9176C50.4616 13.2326 50.6835 12.7362 51.1716 12.3629ZM55.8424 15.57C55.8424 14.9274 55.8374 14.2847 55.8443 13.642C55.8474 13.3303 55.8924 13.0211 56.058 12.748C56.3656 12.2409 56.8181 12.007 57.4162 12.0394C57.9306 12.0668 58.3081 12.2864 58.52 12.7635C58.6181 12.9844 58.6625 13.2146 58.6619 13.4566C58.6588 14.1926 58.66 14.9286 58.6619 15.6646C58.6619 15.743 58.6763 15.8207 58.685 15.9103C58.8094 15.9035 58.91 15.8973 59.0157 15.8917C59.0219 15.8332 59.0294 15.7928 59.0294 15.7529C59.0294 14.9342 59.0244 14.1148 59.0288 13.2961C59.03 13.0634 58.9794 12.8457 58.8975 12.6317C58.7219 12.1719 58.3869 11.8795 57.9156 11.7563C57.7181 11.7047 57.5056 11.6897 57.3006 11.691C56.7706 11.6941 56.3331 11.895 56.0168 12.3318C55.9793 12.384 55.9249 12.4239 55.8349 12.5128C55.8349 12.2304 55.8349 12.0064 55.8349 11.7837C55.6993 11.7837 55.5924 11.7837 55.4874 11.7837C55.4355 12.59 55.458 15.6646 55.5174 15.901C55.6093 15.901 55.7018 15.901 55.8424 15.901C55.8424 15.7735 55.8424 15.6721 55.8424 15.57ZM20.5241 15.9421C20.7879 15.4804 22.321 12.0083 22.3648 11.7737C22.2417 11.7737 22.1198 11.7737 21.9829 11.7737C21.8748 12.0232 21.7679 12.2683 21.6616 12.5134C21.5548 12.7598 21.4485 13.0062 21.3423 13.2532C21.2404 13.4902 21.1404 13.7279 21.0385 13.9655C20.9329 14.2125 20.8354 14.4632 20.7172 14.704C20.6029 14.9379 20.5491 15.2036 20.3528 15.4412C19.8216 14.1963 19.304 12.9838 18.7884 11.7768C18.6303 11.7768 18.499 11.7768 18.3396 11.7768C18.964 13.1742 19.5778 14.5491 20.2003 15.9427C20.331 15.9421 20.4322 15.9421 20.5241 15.9421ZM41.6093 10.2532C41.6118 12.1184 41.6143 13.9842 41.6168 15.8494C41.6168 15.8581 41.6256 15.8674 41.6318 15.8749C41.6381 15.8823 41.6468 15.8879 41.6693 15.9072C41.7162 15.9072 41.7787 15.911 41.8406 15.906C41.8981 15.9016 41.9556 15.8886 42.0025 15.8811C42.0025 13.9139 42.0025 11.9685 42.0025 10.0124C41.875 10.0124 41.7625 10.0124 41.6087 10.0124C41.6093 10.1107 41.6093 10.1823 41.6093 10.2532ZM29.7964 10.2209C29.7989 12.0966 29.8007 13.9724 29.8039 15.8481C29.8039 15.8568 29.812 15.8662 29.8182 15.8736C29.8245 15.8811 29.8332 15.8873 29.8489 15.901C29.9614 15.8998 30.0839 15.9327 30.1901 15.878C30.1901 13.9145 30.1901 11.9691 30.1901 10.0131C30.0632 10.0131 29.9507 10.0131 29.7964 10.0131C29.7964 10.0995 29.7964 10.1599 29.7964 10.2209ZM28.32 15.8917C28.32 14.513 28.32 13.1493 28.32 11.7712C28.2557 11.7675 28.205 11.76 28.155 11.7625C28.0963 11.7656 28.0375 11.7775 27.9763 11.7855C27.9763 13.1586 27.9763 14.5149 27.9763 15.891C28.1113 15.8917 28.2119 15.8917 28.32 15.8917ZM78.334 23.3518C78.3283 22.7788 77.8914 22.3607 77.3489 22.3794C76.7964 22.398 76.3389 22.826 76.3589 23.3605C76.3801 23.9266 76.8533 24.3646 77.3389 24.3123C77.9639 24.359 78.3383 23.8022 78.334 23.3518ZM77.3477 24.2476C76.8289 24.2364 76.4714 23.8383 76.4632 23.3561C76.4545 22.8615 76.882 22.4335 77.3639 22.4453C77.8489 22.4571 78.2308 22.859 78.229 23.3549C78.2264 23.8445 77.8277 24.2576 77.3477 24.2476ZM27.9256 10.1549C27.9256 10.3341 27.9256 10.4952 27.9256 10.6638C28.0838 10.6638 28.225 10.6638 28.38 10.6638C28.38 10.4909 28.38 10.3291 28.38 10.1549C28.2075 10.1549 28.0663 10.1549 27.9256 10.1549ZM76.9833 23.7543C76.9833 23.7705 77.0058 23.786 77.0201 23.8047C77.0489 23.8047 77.0795 23.8047 77.1264 23.8047C77.142 23.7064 77.1583 23.6081 77.1727 23.5191C77.2858 23.4675 77.3702 23.4793 77.4358 23.5683C77.4852 23.6348 77.527 23.7076 77.5839 23.7667C77.637 23.8227 77.7052 23.8408 77.7727 23.7611C77.7145 23.6653 77.657 23.5695 77.5927 23.4625C77.7927 23.3312 77.8271 23.1558 77.7402 22.9461C77.5195 22.7632 77.262 22.8484 76.9827 22.8304C76.982 23.1576 76.9814 23.4557 76.9833 23.7543ZM77.1652 23.0046C77.2789 23.0046 77.3795 22.9946 77.477 23.0077C77.5533 23.0183 77.6008 23.0786 77.6002 23.1614C77.5996 23.2441 77.5521 23.3026 77.4752 23.3138C77.3852 23.3262 77.292 23.3169 77.1652 23.3169C77.1652 23.2031 77.1652 23.1166 77.1652 23.0046Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row d-md-none mc-my-9 justify-content-center">
      <div className="col-2">
        <a
          href="https://twitter.com/masterclass"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mc-sr-only">Twitter</span>
          <span
            aria-hidden="true"
            className="mc-icon mc-icon--4 mc-opacity--muted mc-mr-4 mc-icon--placeholder"
            role="img"
          />
        </a>
      </div>
      <div className="col-2">
        <a
          href="https://www.facebook.com/masterclassofficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mc-sr-only">Facebook</span>
          <span
            aria-hidden="true"
            className="mc-icon mc-icon--4 mc-opacity--muted mc-mr-4 mc-icon--placeholder"
            role="img"
          />
        </a>
      </div>
      <div className="col-2">
        <a
          href="https://www.instagram.com/masterclass"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mc-sr-only">Instagram</span>
          <span
            aria-hidden="true"
            className="mc-icon mc-icon--4 mc-opacity--muted mc-mr-4 mc-icon--placeholder"
            role="img"
          />
        </a>
      </div>
      <div className="col-2">
        <a
          href="https://youtube.com/c/masterclass"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mc-sr-only">YouTube</span>
          <span
            aria-hidden="true"
            className="mc-icon mc-icon--4 mc-opacity--muted mc-mr-4 mc-icon--placeholder"
            role="img"
          />
        </a>
      </div>
      <div className="col-2">
        <a
          href="https://www.linkedin.com/company/masterclassinc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mc-sr-only">LinkedIn</span>
          <span
            aria-hidden="true"
            className="mc-icon mc-icon--4 mc-opacity--muted mc-mr-4 mc-icon--placeholder"
            role="img"
          />
        </a>
      </div>
    </div>
    <div className="d-block d-md-none">
      <div className="row justify-content-center">
        <div className="mc-mr-2">
          <a
            href="https://itunes.apple.com/US/app/id1273867416"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mc-sr-only">Download on the App Store</span>
            <svg
              width={136}
              height={48}
              viewBox="0 0 136 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="0.5"
                y="0.5"
                width={135}
                height={47}
                rx="7.5"
                fill="black"
                stroke="#949AA4"
              />
              <path
                d="M26.3164 10C26.4891 11.5229 25.8558 13.0525 24.9162 14.1516C23.976 15.2514 22.4348 16.105 20.924 15.992C20.7183 14.4994 21.4804 12.9429 22.3519 11.9702C23.3231 10.8717 24.9614 10.0525 26.3164 10Z"
                fill="white"
              />
              <path
                d="M31.9085 29.0709C31.7417 29.0055 28.3397 27.6724 28.3027 23.8131C28.2723 20.5914 30.9692 19.0081 31.2005 18.8724C31.2053 18.8696 31.2091 18.8673 31.2117 18.8658C29.63 16.6292 27.1669 16.3224 26.29 16.2868C25.0072 16.1613 23.7628 16.6354 22.7468 17.0225C22.102 17.2681 21.5492 17.4787 21.137 17.4787C20.6767 17.4787 20.108 17.2609 19.47 17.0165C18.6346 16.6966 17.6804 16.3311 16.6949 16.3494C14.4091 16.381 12.3041 17.6321 11.1258 19.6077C8.75359 23.5858 10.5201 29.4782 12.8315 32.707C13.9626 34.285 15.3109 36.0628 17.0807 35.9983C17.8726 35.968 18.4357 35.7364 19.0179 35.497C19.6897 35.2208 20.3869 34.9341 21.4904 34.9341C22.5448 34.9341 23.2113 35.2126 23.852 35.4803C24.4638 35.7359 25.0522 35.9818 25.9326 35.966C27.7665 35.933 28.9306 34.355 30.053 32.7715C31.3141 30.9899 31.8547 29.2643 31.9109 29.0848C31.9125 29.0797 31.9137 29.0759 31.9145 29.0733C31.9138 29.073 31.9117 29.0722 31.9085 29.0709Z"
                fill="white"
              />
              <path
                d="M48.3882 32.2248H43.061L41.7817 36.2132H39.5254L44.5711 21.457H46.9154L51.9612 36.2132H49.6663L48.3882 32.2248ZM43.6128 30.3843H47.8354L45.7538 23.9114H45.6955L43.6128 30.3843Z"
                fill="white"
              />
              <path
                d="M62.8578 30.8342C62.8578 34.1774 61.1631 36.3254 58.6056 36.3254C57.9577 36.3612 57.3134 36.2036 56.7464 35.8707C56.1795 35.5379 55.7127 35.0431 55.3997 34.4432H55.3513V39.7719H53.2598V25.4544H55.2843V27.2438H55.3227C55.6502 26.6467 56.1248 26.1545 56.6961 25.8196C57.2674 25.4847 57.914 25.3196 58.5671 25.3418C61.1532 25.3418 62.8578 27.5003 62.8578 30.8342ZM60.7081 30.8342C60.7081 28.6561 59.642 27.2241 58.0154 27.2241C56.4174 27.2241 55.3425 28.6862 55.3425 30.8342C55.3425 33.0019 56.4174 34.4536 58.0154 34.4536C59.642 34.4536 60.7081 33.0321 60.7081 30.8342Z"
                fill="white"
              />
              <path
                d="M74.0727 30.8342C74.0727 34.1774 72.3779 36.3254 69.8204 36.3254C69.1726 36.3612 68.5283 36.2036 67.9613 35.8707C67.3943 35.5378 66.9276 35.0431 66.6145 34.4432H66.5661V39.7719H64.4746V25.4544H66.4991V27.2438H66.5375C66.865 26.6467 67.3396 26.1545 67.9109 25.8196C68.4822 25.4847 69.1288 25.3196 69.7819 25.3418C72.368 25.3418 74.0727 27.5002 74.0727 30.8342ZM71.9229 30.8342C71.9229 28.6561 70.8568 27.2241 69.2302 27.2241C67.6322 27.2241 66.5573 28.6862 66.5573 30.8342C66.5573 33.0019 67.6322 34.4536 69.2302 34.4536C70.8568 34.4536 71.9229 33.0321 71.9229 30.8342H71.9229Z"
                fill="white"
              />
              <path
                d="M81.4847 32.1017C81.6397 33.5651 82.9861 34.5259 84.8259 34.5259C86.5887 34.5259 87.8571 33.565 87.8571 32.2456C87.8571 31.1002 87.0921 30.4144 85.2809 29.9444L83.4696 29.4837C80.9034 28.8292 79.712 27.562 79.712 25.5057C79.712 22.9597 81.8134 21.2109 84.7973 21.2109C87.7504 21.2109 89.7749 22.9597 89.843 25.5057H87.7317C87.6053 24.0331 86.4524 23.1442 84.7676 23.1442C83.0827 23.1442 81.9298 24.0436 81.9298 25.3526C81.9298 26.3958 82.6662 27.0097 84.4675 27.4796L86.0073 27.8788C88.8747 28.5948 90.0661 29.811 90.0661 31.9694C90.0661 34.73 87.9834 36.4591 84.6709 36.4591C81.5715 36.4591 79.4789 34.7707 79.3438 32.1016L81.4847 32.1017Z"
                fill="white"
              />
              <path
                d="M94.579 22.9082V25.4542H96.5166V27.203H94.579V33.134C94.579 34.0554 94.967 34.4848 95.8187 34.4848C96.0488 34.4805 96.2784 34.4635 96.5067 34.4337V36.172C96.1238 36.2476 95.7346 36.2818 95.345 36.2741C93.2821 36.2741 92.4776 35.456 92.4776 33.3695V27.203H90.9961V25.4542H92.4776V22.9082H94.579Z"
                fill="white"
              />
              <path
                d="M97.6387 30.8344C97.6387 27.4494 99.5268 25.3223 102.471 25.3223C105.425 25.3223 107.305 27.4493 107.305 30.8344C107.305 34.2287 105.435 36.3465 102.471 36.3465C99.5081 36.3465 97.6387 34.2286 97.6387 30.8344ZM105.174 30.8344C105.174 28.5123 104.166 27.1418 102.471 27.1418C100.776 27.1418 99.7697 28.5228 99.7697 30.8344C99.7697 33.1657 100.776 34.5257 102.471 34.5257C104.166 34.5257 105.174 33.1657 105.174 30.8344H105.174Z"
                fill="white"
              />
              <path
                d="M109.031 25.4553H111.026V27.2864H111.074C111.209 26.7145 111.527 26.2091 111.973 25.8551C112.419 25.5012 112.968 25.3202 113.525 25.3427C113.766 25.3418 114.007 25.3694 114.242 25.4251V27.4907C113.938 27.3925 113.62 27.3474 113.302 27.3572C112.998 27.3442 112.695 27.4008 112.414 27.523C112.133 27.6453 111.88 27.8304 111.673 28.0655C111.466 28.3007 111.31 28.5803 111.215 28.8853C111.12 29.1903 111.088 29.5134 111.123 29.8324V36.2137H109.031L109.031 25.4553Z"
                fill="white"
              />
              <path
                d="M123.883 33.0531C123.601 35.0061 121.8 36.3465 119.495 36.3465C116.531 36.3465 114.691 34.2495 114.691 30.8854C114.691 27.5109 116.541 25.3223 119.407 25.3223C122.227 25.3223 123.999 27.367 123.999 30.629V31.3856H116.803V31.519C116.769 31.915 116.816 32.3138 116.94 32.6891C117.064 33.0645 117.263 33.4076 117.522 33.6958C117.781 33.984 118.095 34.2107 118.444 34.3608C118.793 34.5109 119.168 34.581 119.544 34.5663C120.038 34.6152 120.534 34.4944 120.958 34.2217C121.382 33.9491 121.711 33.5392 121.897 33.0531L123.883 33.0531ZM116.813 29.8422H121.907C121.925 29.4862 121.874 29.1299 121.757 28.7958C121.639 28.4616 121.457 28.1568 121.222 27.9004C120.987 27.644 120.705 27.4416 120.393 27.3058C120.081 27.1701 119.745 27.104 119.407 27.1117C119.067 27.1095 118.729 27.1786 118.414 27.315C118.099 27.4513 117.812 27.6522 117.571 27.9061C117.33 28.1599 117.139 28.4617 117.008 28.794C116.878 29.1263 116.812 29.4826 116.813 29.8422V29.8422Z"
                fill="white"
              />
              <path
                d="M43.3475 10.3489C43.786 10.3156 44.226 10.3856 44.6357 10.5536C45.0455 10.7217 45.4149 10.9837 45.7172 11.3207C46.0194 11.6578 46.2471 12.0614 46.3837 12.5026C46.5204 12.9438 46.5625 13.4115 46.5073 13.872C46.5073 16.1371 45.3478 17.4392 43.3475 17.4392H40.9219V10.3489H43.3475ZM41.9649 16.4365H43.231C43.5443 16.4563 43.8579 16.402 44.1488 16.2777C44.4398 16.1534 44.7009 15.9621 44.913 15.7179C45.1251 15.4736 45.283 15.1825 45.3751 14.8656C45.4673 14.5488 45.4913 14.2143 45.4456 13.8864C45.488 13.5598 45.4615 13.2274 45.368 12.9129C45.2744 12.5984 45.1161 12.3096 44.9045 12.0673C44.6928 11.825 44.433 11.6351 44.1437 11.5112C43.8544 11.3873 43.5427 11.3326 43.231 11.3508H41.9649V16.4365Z"
                fill="white"
              />
              <path
                d="M47.6851 14.7617C47.6533 14.41 47.6914 14.0552 47.797 13.72C47.9026 13.3849 48.0734 13.0767 48.2984 12.8153C48.5234 12.5539 48.7977 12.345 49.1037 12.2021C49.4096 12.0592 49.7405 11.9854 50.075 11.9854C50.4096 11.9854 50.7404 12.0592 51.0464 12.2021C51.3523 12.345 51.6266 12.5539 51.8516 12.8153C52.0767 13.0767 52.2475 13.3849 52.3531 13.72C52.4587 14.0552 52.4968 14.41 52.4649 14.7617C52.4974 15.1137 52.4597 15.4689 52.3544 15.8047C52.2491 16.1404 52.0784 16.4491 51.8533 16.711C51.6282 16.9729 51.3537 17.1822 51.0475 17.3255C50.7412 17.4687 50.41 17.5427 50.075 17.5427C49.7401 17.5427 49.4088 17.4687 49.1026 17.3255C48.7963 17.1822 48.5218 16.9729 48.2967 16.711C48.0717 16.4491 47.901 16.1404 47.7956 15.8047C47.6903 15.4689 47.6527 15.1137 47.6851 14.7617ZM51.4362 14.7617C51.4362 13.6018 50.9427 12.9235 50.0767 12.9235C49.2073 12.9235 48.7183 13.6018 48.7183 14.7617C48.7183 15.9308 49.2074 16.6039 50.0767 16.6039C50.9427 16.6039 51.4362 15.9262 51.4362 14.7617H51.4362Z"
                fill="white"
              />
              <path
                d="M58.819 17.4397H57.7815L56.7341 13.4988H56.655L55.612 17.4397H54.5844L53.1875 12.0889H54.2019L55.1097 16.1718H55.1845L56.2264 12.0889H57.1859L58.2278 16.1718H58.3069L59.2103 12.0889H60.2104L58.819 17.4397Z"
                fill="white"
              />
              <path
                d="M61.3828 12.089H62.3456V12.939H62.4203C62.5471 12.6337 62.7609 12.3778 63.032 12.2069C63.3031 12.0361 63.6179 11.9587 63.9326 11.9857C64.1792 11.9662 64.4268 12.0054 64.6571 12.1006C64.8873 12.1958 65.0943 12.3444 65.2628 12.5356C65.4313 12.7267 65.5568 12.9554 65.6302 13.2047C65.7036 13.454 65.7229 13.7176 65.6867 13.9759V17.4398H64.6866V14.2411C64.6866 13.3812 64.3327 12.9536 63.593 12.9536C63.4256 12.9453 63.2585 12.9754 63.1031 13.0417C62.9477 13.1081 62.8078 13.2091 62.6928 13.3379C62.5779 13.4667 62.4907 13.6202 62.4372 13.7879C62.3837 13.9556 62.3652 14.1336 62.3829 14.3095V17.4398H61.3828L61.3828 12.089Z"
                fill="white"
              />
              <path d="M67.2832 10H68.2833V17.4396H67.2832V10Z" fill="white" />
              <path
                d="M69.6734 14.7618C69.6416 14.4101 69.6797 14.0553 69.7853 13.7201C69.8909 13.3849 70.0618 13.0767 70.2868 12.8153C70.5119 12.5539 70.7862 12.345 71.0921 12.2021C71.3981 12.0592 71.729 11.9854 72.0636 11.9854C72.3981 11.9854 72.729 12.0592 73.035 12.2021C73.341 12.345 73.6153 12.5539 73.8403 12.8153C74.0653 13.0767 74.2362 13.3849 74.3418 13.7201C74.4474 14.0553 74.4856 14.4101 74.4537 14.7618C74.4861 15.1138 74.4485 15.469 74.3431 15.8048C74.2377 16.1405 74.067 16.4492 73.8419 16.7111C73.6168 16.973 73.3423 17.1823 73.036 17.3256C72.7298 17.4688 72.3985 17.5428 72.0636 17.5428C71.7286 17.5428 71.3973 17.4688 71.0911 17.3256C70.7848 17.1823 70.5103 16.973 70.2852 16.7111C70.0601 16.4492 69.8894 16.1405 69.784 15.8048C69.6786 15.469 69.641 15.1138 69.6734 14.7618ZM73.4244 14.7618C73.4244 13.6019 72.931 12.9236 72.0649 12.9236C71.1956 12.9236 70.7065 13.6019 70.7065 14.7618C70.7065 15.9309 71.1956 16.604 72.0649 16.604C72.931 16.6039 73.4245 15.9263 73.4245 14.7618H73.4244Z"
                fill="white"
              />
              <path
                d="M75.5059 15.9262C75.5059 14.963 76.1851 14.4078 77.3907 14.3289L78.7635 14.2453V13.7835C78.7635 13.2183 78.4096 12.8992 77.7259 12.8992C77.1676 12.8992 76.7808 13.1156 76.6698 13.4939H75.7015C75.8037 12.5749 76.6225 11.9854 77.7721 11.9854C79.0426 11.9854 79.7592 12.6532 79.7592 13.7835V17.4394H78.7964V16.6875H78.7173C78.5567 16.9572 78.3311 17.1771 78.0637 17.3247C77.7963 17.4723 77.4965 17.5423 77.1951 17.5276C76.9824 17.5509 76.7673 17.527 76.5639 17.4572C76.3605 17.3875 76.1731 17.2735 76.014 17.1226C75.8548 16.9717 75.7274 16.7873 75.6399 16.5813C75.5523 16.3752 75.5067 16.152 75.5059 15.9262ZM78.7635 15.469V15.0216L77.5259 15.1052C76.828 15.1545 76.5115 15.4052 76.5115 15.8769C76.5115 16.3585 76.9071 16.6387 77.4512 16.6387C77.6106 16.6557 77.7717 16.6387 77.9247 16.5887C78.0778 16.5387 78.2198 16.4567 78.3422 16.3476C78.4646 16.2384 78.565 16.1044 78.6374 15.9535C78.7097 15.8025 78.7526 15.6378 78.7635 15.469Z"
                fill="white"
              />
              <path
                d="M81.0723 14.7619C81.0723 13.0711 81.8955 12 83.1759 12C83.4926 11.9846 83.8069 12.0647 84.0821 12.231C84.3573 12.3972 84.582 12.6427 84.7299 12.9388H84.8047V10H85.8048V17.4396H84.8464V16.5942H84.7673C84.6079 16.8883 84.3754 17.1307 84.0949 17.2953C83.8144 17.4599 83.4965 17.5403 83.1759 17.5278C81.8867 17.5278 81.0723 16.4567 81.0723 14.7619ZM82.1054 14.7619C82.1054 15.8968 82.6121 16.5797 83.4595 16.5797C84.3024 16.5797 84.8234 15.887 84.8234 14.7665C84.8234 13.6513 84.2969 12.9487 83.4595 12.9487C82.6175 12.9487 82.1054 13.6363 82.1054 14.7619H82.1054Z"
                fill="white"
              />
              <path
                d="M89.9429 14.7617C89.9111 14.41 89.9492 14.0552 90.0548 13.72C90.1604 13.3849 90.3312 13.0767 90.5562 12.8153C90.7812 12.5539 91.0555 12.345 91.3615 12.2021C91.6674 12.0592 91.9983 11.9854 92.3328 11.9854C92.6674 11.9854 92.9983 12.0592 93.3042 12.2021C93.6102 12.345 93.8844 12.5539 94.1094 12.8153C94.3345 13.0767 94.5053 13.3849 94.6109 13.72C94.7165 14.0552 94.7546 14.41 94.7227 14.7617C94.7552 15.1137 94.7175 15.4689 94.6122 15.8047C94.5069 16.1404 94.3362 16.4491 94.1111 16.711C93.886 16.9729 93.6115 17.1822 93.3053 17.3255C92.999 17.4687 92.6678 17.5427 92.3328 17.5427C91.9979 17.5427 91.6666 17.4687 91.3604 17.3255C91.0541 17.1822 90.7796 16.9729 90.5546 16.711C90.3295 16.4491 90.1588 16.1404 90.0535 15.8047C89.9481 15.4689 89.9105 15.1137 89.9429 14.7617ZM93.694 14.7617C93.694 13.6018 93.2005 12.9235 92.3345 12.9235C91.4651 12.9235 90.9761 13.6018 90.9761 14.7617C90.9761 15.9308 91.4652 16.6039 92.3345 16.6039C93.2005 16.6039 93.694 15.9262 93.694 14.7617Z"
                fill="white"
              />
              <path
                d="M96.0645 12.089H97.0272V12.939H97.102C97.2288 12.6337 97.4426 12.3778 97.7137 12.2069C97.9848 12.0361 98.2996 11.9587 98.6143 11.9857C98.8608 11.9662 99.1084 12.0054 99.3387 12.1006C99.569 12.1958 99.776 12.3444 99.9444 12.5356C100.113 12.7267 100.238 12.9554 100.312 13.2047C100.385 13.454 100.405 13.7176 100.368 13.9759V17.4398H99.3682V14.2411C99.3682 13.3812 99.0143 12.9536 98.2747 12.9536C98.1072 12.9453 97.9401 12.9754 97.7847 13.0417C97.6294 13.1081 97.4894 13.2091 97.3745 13.3379C97.2595 13.4667 97.1723 13.6202 97.1189 13.7879C97.0654 13.9556 97.0469 14.1336 97.0646 14.3095V17.4398H96.0645V12.089Z"
                fill="white"
              />
              <path
                d="M106.021 10.7568V12.1134H107.119V13.0029H106.021V15.7543C106.021 16.3148 106.239 16.5602 106.737 16.5602C106.865 16.5598 106.992 16.5516 107.119 16.5358V17.4154C106.939 17.4494 106.757 17.4674 106.575 17.4694C105.462 17.4694 105.019 17.0563 105.019 16.0247V13.0028H104.215V12.1133H105.019V10.7568H106.021Z"
                fill="white"
              />
              <path
                d="M108.486 10H109.478V12.9487H109.557C109.69 12.6405 109.909 12.3832 110.186 12.2116C110.462 12.0401 110.782 11.9628 111.102 11.9902C111.347 11.9761 111.593 12.0193 111.82 12.1168C112.048 12.2143 112.252 12.3636 112.419 12.5542C112.586 12.7447 112.711 12.9717 112.785 13.219C112.859 13.4664 112.88 13.7279 112.847 13.985V17.4396H111.846V14.2455C111.846 13.3908 111.469 12.958 110.763 12.958C110.591 12.9431 110.418 12.968 110.256 13.0311C110.094 13.0941 109.947 13.1937 109.826 13.3229C109.704 13.4521 109.611 13.6078 109.552 13.7791C109.494 13.9504 109.471 14.1331 109.487 14.3145V17.4396H108.486L108.486 10Z"
                fill="white"
              />
              <path
                d="M118.68 15.9948C118.544 16.4838 118.249 16.9068 117.848 17.1898C117.446 17.4728 116.964 17.5977 116.484 17.5428C116.15 17.5521 115.818 17.4846 115.511 17.3449C115.205 17.2053 114.93 16.9968 114.708 16.734C114.485 16.4713 114.319 16.1604 114.221 15.8232C114.124 15.4859 114.097 15.1303 114.143 14.7809C114.098 14.4305 114.126 14.0741 114.223 13.7359C114.32 13.3976 114.485 13.0853 114.707 12.8203C114.928 12.5552 115.201 12.3435 115.507 12.1994C115.813 12.0554 116.144 11.9824 116.479 11.9854C117.889 11.9854 118.74 13.0026 118.74 14.6829V15.0513H115.162V15.1105C115.146 15.3069 115.169 15.5045 115.23 15.6908C115.291 15.8771 115.388 16.0478 115.515 16.1922C115.642 16.3365 115.797 16.4512 115.968 16.5289C116.14 16.6066 116.325 16.6456 116.511 16.6434C116.75 16.6737 116.993 16.6283 117.207 16.5127C117.422 16.3972 117.599 16.2169 117.717 15.9947L118.68 15.9948ZM115.161 14.2703H117.721C117.734 14.0908 117.711 13.9104 117.653 13.7408C117.596 13.5712 117.506 13.4162 117.388 13.2856C117.271 13.1551 117.129 13.0519 116.971 12.9828C116.814 12.9137 116.644 12.8801 116.474 12.8842C116.301 12.8819 116.129 12.9162 115.969 12.9851C115.809 13.0539 115.663 13.1559 115.541 13.2851C115.419 13.4143 115.322 13.568 115.257 13.7372C115.192 13.9064 115.159 14.0877 115.162 14.2703H115.161Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
        <div className="mc-ml-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.yanka.mc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mc-sr-only">Get it on Google Play</span>
            <svg
              width={144}
              height={48}
              viewBox="0 0 144 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="0.5"
                y="0.5"
                width={143}
                height={47}
                rx="7.5"
                fill="black"
                stroke="#949AA4"
              />
              <path
                d="M50.7441 13.4095C50.7441 14.2361 50.5374 14.9593 50.0208 15.4759C49.4009 16.0958 48.6777 16.4058 47.7478 16.4058C46.8179 16.4058 46.0947 16.0958 45.4748 15.4759C44.8549 14.856 44.5449 14.1328 44.5449 13.2029C44.5449 12.273 44.8549 11.5498 45.4748 10.9299C46.0947 10.31 46.8179 10 47.7478 10C48.1611 10 48.5744 10.1033 48.9877 10.31C49.4009 10.5166 49.7109 10.7232 49.9175 11.0332L49.4009 11.5498C48.9877 11.0332 48.4711 10.8266 47.7478 10.8266C47.1279 10.8266 46.508 11.0332 46.0947 11.5498C45.5781 11.9631 45.3715 12.583 45.3715 13.3062C45.3715 14.0295 45.5781 14.6494 46.0947 15.0626C46.6113 15.4759 47.1279 15.7859 47.7478 15.7859C48.4711 15.7859 48.9877 15.5792 49.5042 15.0626C49.8142 14.7527 50.0208 14.3394 50.0208 13.8228H47.7478V13.0996H50.7441C50.7441 13.0996 50.7441 13.3062 50.7441 13.4095Z"
                fill="white"
                stroke="white"
                strokeWidth="0.281869"
                strokeMiterlimit={10}
              />
              <path
                d="M55.497 10.8268H52.7074V12.7898H55.2904V13.5131H52.7074V15.4761H55.497V16.3027H51.8809V10.1035H55.497V10.8268Z"
                fill="white"
                stroke="white"
                strokeWidth="0.281869"
                strokeMiterlimit={10}
              />
              <path
                d="M58.9072 16.3027H58.0806V10.8268H56.3242V10.1035H60.6636V10.8268H58.9072V16.3027Z"
                fill="white"
                stroke="white"
                strokeWidth="0.281869"
                strokeMiterlimit={10}
              />
              <path
                d="M63.6602 16.3027V10.1035H64.4867V16.3027H63.6602Z"
                fill="white"
                stroke="white"
                strokeWidth="0.281869"
                strokeMiterlimit={10}
              />
              <path
                d="M67.999 16.3027H67.1725V10.8268H65.416V10.1035H69.6521V10.8268H67.8957V16.3027H67.999Z"
                fill="white"
                stroke="white"
                strokeWidth="0.281869"
                strokeMiterlimit={10}
              />
              <path
                d="M77.8138 15.4759C77.1939 16.0958 76.4707 16.4058 75.5408 16.4058C74.6109 16.4058 73.8877 16.0958 73.2678 15.4759C72.6478 14.856 72.3379 14.1328 72.3379 13.2029C72.3379 12.273 72.6478 11.5498 73.2678 10.9299C73.8877 10.31 74.6109 10 75.5408 10C76.4707 10 77.1939 10.31 77.8138 10.9299C78.4337 11.5498 78.7437 12.273 78.7437 13.2029C78.7437 14.1328 78.4337 14.856 77.8138 15.4759ZM73.8877 14.9593C74.301 15.3726 74.9209 15.6826 75.5408 15.6826C76.1607 15.6826 76.7806 15.4759 77.1939 14.9593C77.6072 14.5461 77.9171 13.9261 77.9171 13.2029C77.9171 12.4797 77.7105 11.8597 77.1939 11.4465C76.7806 11.0332 76.1607 10.7232 75.5408 10.7232C74.9209 10.7232 74.301 10.9299 73.8877 11.4465C73.4744 11.8597 73.1644 12.4797 73.1644 13.2029C73.1644 13.9261 73.3711 14.5461 73.8877 14.9593Z"
                fill="white"
                stroke="white"
                strokeWidth="0.281869"
                strokeMiterlimit={10}
              />
              <path
                d="M79.8789 16.3027V10.1035H80.8088L83.805 14.9595V13.7197V10.1035H84.6316V16.3027H83.805L80.6021 11.24V12.4799V16.3027H79.8789Z"
                fill="white"
                stroke="white"
                strokeWidth="0.281869"
                strokeMiterlimit={10}
              />
              <path
                d="M72.1286 25.3951C69.649 25.3951 67.6859 27.2548 67.6859 29.8378C67.6859 32.3175 69.649 34.2805 72.1286 34.2805C74.6083 34.2805 76.5714 32.4208 76.5714 29.8378C76.5714 27.1515 74.6083 25.3951 72.1286 25.3951ZM72.1286 32.4208C70.7855 32.4208 69.649 31.2843 69.649 29.7345C69.649 28.1847 70.7855 27.0482 72.1286 27.0482C73.4718 27.0482 74.6083 28.0814 74.6083 29.7345C74.6083 31.2843 73.4718 32.4208 72.1286 32.4208ZM62.52 25.3951C60.0403 25.3951 58.0772 27.2548 58.0772 29.8378C58.0772 32.3175 60.0403 34.2805 62.52 34.2805C64.9996 34.2805 66.9627 32.4208 66.9627 29.8378C66.9627 27.1515 64.9996 25.3951 62.52 25.3951ZM62.52 32.4208C61.1768 32.4208 60.0403 31.2843 60.0403 29.7345C60.0403 28.1847 61.1768 27.0482 62.52 27.0482C63.8631 27.0482 64.9996 28.0814 64.9996 29.7345C64.9996 31.2843 63.8631 32.4208 62.52 32.4208ZM51.0515 26.7382V28.598H55.4942C55.3909 29.6312 54.9776 30.4577 54.461 30.9743C53.8411 31.5942 52.8079 32.3175 51.0515 32.3175C48.2619 32.3175 46.1955 30.1478 46.1955 27.3581C46.1955 24.5685 48.3652 22.3988 51.0515 22.3988C52.498 22.3988 53.6345 23.0187 54.461 23.742L55.8042 22.3988C54.6677 21.3656 53.2212 20.5391 51.1548 20.5391C47.4353 20.5391 44.2324 23.6386 44.2324 27.3581C44.2324 31.0776 47.4353 34.1772 51.1548 34.1772C53.2212 34.1772 54.6677 33.5573 55.9075 32.2142C57.1473 30.9743 57.5606 29.2179 57.5606 27.8747C57.5606 27.4615 57.5606 27.0482 57.4573 26.7382H51.0515ZM97.9585 28.1847C97.5452 27.1515 96.512 25.3951 94.239 25.3951C91.966 25.3951 90.1062 27.1515 90.1062 29.8378C90.1062 32.3175 91.966 34.2805 94.4456 34.2805C96.4087 34.2805 97.6485 33.0407 98.0618 32.3175L96.6153 31.2843C96.0987 32.0075 95.4788 32.5241 94.4456 32.5241C93.4124 32.5241 92.7925 32.1108 92.2759 31.181L98.1651 28.7013L97.9585 28.1847ZM91.966 29.6312C91.966 27.9781 93.3091 27.0482 94.239 27.0482C94.9622 27.0482 95.6855 27.4615 95.8921 27.9781L91.966 29.6312ZM87.11 33.8673H89.073V20.9523H87.11V33.8673ZM84.0104 26.3249C83.4938 25.8084 82.6672 25.2918 81.634 25.2918C79.4643 25.2918 77.3979 27.2548 77.3979 29.7345C77.3979 32.2142 79.361 34.0739 81.634 34.0739C82.6672 34.0739 83.4938 33.5573 83.9071 33.0407H84.0104V33.6606C84.0104 35.3137 83.0805 36.2436 81.634 36.2436C80.4975 36.2436 79.671 35.4171 79.4643 34.6938L77.8112 35.4171C78.3278 36.5536 79.5676 38 81.7373 38C84.0104 38 85.8701 36.6569 85.8701 33.454V25.6017H84.0104V26.3249ZM81.7373 32.4208C80.3942 32.4208 79.2577 31.2843 79.2577 29.7345C79.2577 28.1847 80.3942 27.0482 81.7373 27.0482C83.0805 27.0482 84.1137 28.1847 84.1137 29.7345C84.1137 31.2843 83.0805 32.4208 81.7373 32.4208ZM106.947 20.9523H102.298V33.8673H104.261V29.0112H106.947C109.117 29.0112 111.183 27.4615 111.183 24.9818C111.183 22.5021 109.117 20.9523 106.947 20.9523ZM107.051 27.1515H104.261V22.7088H107.051C108.497 22.7088 109.324 23.9486 109.324 24.8785C109.22 26.015 108.394 27.1515 107.051 27.1515ZM118.932 25.2918C117.486 25.2918 116.039 25.9117 115.523 27.2548L117.279 27.9781C117.692 27.2548 118.312 27.0482 119.036 27.0482C120.069 27.0482 120.999 27.6681 121.102 28.7013V28.8046C120.792 28.598 119.965 28.288 119.139 28.288C117.279 28.288 115.419 29.3212 115.419 31.181C115.419 32.9374 116.969 34.0739 118.622 34.0739C119.965 34.0739 120.585 33.454 121.102 32.8341H121.205V33.8673H123.065V28.9079C122.858 26.6349 121.102 25.2918 118.932 25.2918ZM118.726 32.4208C118.106 32.4208 117.176 32.1108 117.176 31.2843C117.176 30.2511 118.312 29.9411 119.242 29.9411C120.069 29.9411 120.482 30.1478 120.999 30.3544C120.792 31.5942 119.759 32.4208 118.726 32.4208ZM129.574 25.6017L127.405 31.181H127.301L125.028 25.6017H122.962L126.371 33.454L124.408 37.7934H126.371L131.641 25.6017H129.574ZM112.217 33.8673H114.18V20.9523H112.217V33.8673Z"
                fill="white"
              />
              <path
                d="M12.5166 10.6191C12.2066 10.9291 12 11.4457 12 12.0656V34.8992C12 35.5191 12.2066 36.0357 12.5166 36.3457L12.6199 36.449L25.4315 23.6374V23.5341V23.4307L12.5166 10.6191Z"
                fill="url(#paint0_linear_)"
              />
              <path
                d="M29.6677 27.9775L25.4316 23.7414V23.5347V23.4314L29.6677 19.1953L29.771 19.2986L34.8337 22.1916C36.2802 23.0181 36.2802 24.3613 34.8337 25.1878L29.6677 27.9775Z"
                fill="url(#paint1_linear_)"
              />
              <path
                d="M29.77 27.8746L25.4305 23.5352L12.5156 36.4501C13.0322 36.9667 13.7555 36.9667 14.6853 36.5534L29.77 27.8746Z"
                fill="url(#paint2_linear_)"
              />
              <path
                d="M29.77 19.1954L14.6853 10.6199C13.7555 10.1033 13.0322 10.2066 12.5156 10.7232L25.4305 23.5348L29.77 19.1954Z"
                fill="url(#paint3_linear_)"
              />
              <path
                opacity="0.2"
                d="M29.6686 27.7705L14.6873 36.2427C13.8607 36.7593 13.1375 36.656 12.6209 36.2427L12.5176 36.346L12.6209 36.4493C13.1375 36.8626 13.8607 36.9659 14.6873 36.4493L29.6686 27.7705Z"
                fill="black"
              />
              <path
                opacity="0.12"
                d="M12.5168 36.2433C12.2068 35.9334 12.1035 35.4168 12.1035 34.7969V34.9002C12.1035 35.5201 12.3102 36.0367 12.6201 36.3467V36.2433H12.5168Z"
                fill="black"
              />
              <path
                opacity="0.12"
                d="M34.832 24.8783L29.666 27.7712L29.7693 27.8746L34.832 24.9816C35.5552 24.5683 35.8652 24.0518 35.8652 23.5352C35.8652 24.0518 35.4519 24.465 34.832 24.8783Z"
                fill="black"
              />
              <path
                opacity="0.25"
                d="M14.6865 10.7231L34.8338 22.1916C35.4537 22.6048 35.867 23.0181 35.867 23.5347C35.867 23.0181 35.557 22.5015 34.8338 22.0882L14.6865 10.6198C13.24 9.79324 12.1035 10.5165 12.1035 12.1696V12.2729C12.1035 10.6198 13.24 9.89656 14.6865 10.7231Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_"
                  x1="24.2947"
                  y1="11.869"
                  x2="6.95523"
                  y2="29.2085"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00A0FF" />
                  <stop offset="0.00657445" stopColor="#00A1FF" />
                  <stop offset="0.2601" stopColor="#00BEFF" />
                  <stop offset="0.5122" stopColor="#00D2FF" />
                  <stop offset="0.7604" stopColor="#00DFFF" />
                  <stop offset={1} stopColor="#00E3FF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_"
                  x1="36.729"
                  y1="23.5362"
                  x2="11.7289"
                  y2="23.5362"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFE000" />
                  <stop offset="0.4087" stopColor="#FFBD00" />
                  <stop offset="0.7754" stopColor="#FFA500" />
                  <stop offset={1} stopColor="#FF9C00" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_"
                  x1="27.4215"
                  y1="25.9075"
                  x2="3.90779"
                  y2="49.4212"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF3A44" />
                  <stop offset={1} stopColor="#C31162" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_"
                  x1="9.30994"
                  y1="3.05301"
                  x2="19.8099"
                  y2="13.5528"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#32A071" />
                  <stop offset="0.0685" stopColor="#2DA771" />
                  <stop offset="0.4762" stopColor="#15CF74" />
                  <stop offset="0.8009" stopColor="#06E775" />
                  <stop offset={1} stopColor="#00F076" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </div>
      </div>
      <div className="row mc-mt-4 justify-content-center">
        <div className="mc-mr-2">
          <a
            href="https://www.amazon.com/MasterClass-Learn-from-the-best/dp/B081QX5R8T/ref=sr_1_1?keywords=masterclass&qid=1575500772&s=mobile-apps&sr=1-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mc-sr-only">Available at amazon app store</span>
            <svg
              width={171}
              height={48}
              viewBox="0 0 171 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="0.5"
                y="0.5"
                width={170}
                height={47}
                rx="7.5"
                fill="black"
                stroke="#949AA4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M51.5994 36.2202C47.8884 38.9682 42.5135 40.4202 37.8928 40.4202C31.4046 40.4202 25.5629 38.0202 21.1456 34.0122C20.7985 33.7002 21.1097 33.2682 21.5287 33.5082C26.2931 36.2922 32.1947 37.9602 38.2878 37.9602C42.3938 37.9602 46.9188 37.1082 51.0726 35.3442C51.6832 35.0802 52.2099 35.7642 51.5994 36.2202Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M53.1307 34.4558C52.6519 33.8438 49.9944 34.1678 48.7973 34.3118C48.4382 34.3598 48.3783 34.0358 48.7015 33.8078C50.8204 32.3078 54.3039 32.7398 54.6989 33.2438C55.1059 33.7478 54.5912 37.2398 52.604 38.9078C52.2928 39.1598 52.0055 39.0278 52.1372 38.6918C52.604 37.5638 53.6096 35.0558 53.1307 34.4558Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.8948 23.2478V21.7958C48.8948 21.5798 49.0624 21.4238 49.2659 21.4238H55.754C55.9576 21.4238 56.1251 21.5798 56.1251 21.7958V23.0438C56.1251 23.2478 55.9456 23.5238 55.6343 23.9558L52.2705 28.7678C53.5155 28.7438 54.8443 28.9238 55.9695 29.5598C56.2209 29.7038 56.2927 29.9198 56.3167 30.1238V31.6718C56.3167 31.8878 56.0892 32.1278 55.8378 32.0078C53.8387 30.9638 51.1932 30.8438 48.9786 32.0198C48.7511 32.1398 48.5117 31.8998 48.5117 31.6838V30.2078C48.5117 29.9678 48.5117 29.5718 48.7511 29.2118L52.6416 23.6078H49.2539C49.0624 23.6078 48.8948 23.4638 48.8948 23.2478Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.2152 32.3201H23.24C23.0484 32.3081 22.9048 32.1641 22.8809 31.9841V21.8201C22.8809 21.6161 23.0485 21.4601 23.2639 21.4601H25.1074C25.299 21.4721 25.4546 21.6161 25.4666 21.7961V23.1281H25.5025C25.9813 21.8441 26.8791 21.2441 28.1001 21.2441C29.3331 21.2441 30.1112 21.8441 30.6619 23.1281C31.1407 21.8441 32.2301 21.2441 33.3912 21.2441C34.2172 21.2441 35.127 21.5921 35.6776 22.3601C36.3001 23.2121 36.1804 24.4601 36.1804 25.5401V31.9481C36.1804 32.1521 36.0128 32.3081 35.7974 32.3081H33.8222C33.6187 32.2961 33.463 32.1401 33.463 31.9481V26.5601C33.463 26.1281 33.499 25.0601 33.4032 24.6521C33.2595 23.9681 32.8166 23.7761 32.242 23.7761C31.7632 23.7761 31.2604 24.1001 31.0569 24.6041C30.8534 25.1201 30.8774 25.9721 30.8774 26.5481V31.9361C30.8774 32.1401 30.7098 32.2961 30.4943 32.2961H28.5311C28.3276 32.2841 28.172 32.1281 28.172 31.9361V26.5481C28.172 25.4201 28.3515 23.7521 26.9509 23.7521C25.5264 23.7521 25.5863 25.3721 25.5863 26.5481V31.9361C25.5982 32.1521 25.4306 32.3201 25.2152 32.3201Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M61.7146 21.2441C64.6475 21.2441 66.2276 23.7641 66.2276 26.9681C66.2276 30.0641 64.4799 32.5241 61.7146 32.5241C58.8416 32.5241 57.2734 30.0041 57.2734 26.8601C57.2734 23.7041 58.8536 21.2441 61.7146 21.2441ZM61.7266 23.3201C60.2661 23.3201 60.1823 25.3121 60.1823 26.5481C60.1823 27.7841 60.1584 30.4361 61.7146 30.4361C63.2469 30.4361 63.3187 28.3001 63.3187 26.9921C63.3187 26.1401 63.2828 25.1081 63.0194 24.2921C62.8039 23.5961 62.361 23.3201 61.7266 23.3201Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M70.0352 32.3199H68.072C67.8685 32.3079 67.7129 32.1519 67.7129 31.9599V21.7959C67.7249 21.6039 67.8925 21.4599 68.096 21.4599H69.9275C70.0951 21.4719 70.2387 21.5919 70.2746 21.7479V23.3079H70.3106C70.8612 21.9159 71.6393 21.2559 73.004 21.2559C73.8898 21.2559 74.7517 21.5799 75.3024 22.4559C75.8171 23.2719 75.8171 24.6399 75.8171 25.6239V32.0199C75.7932 32.1759 75.6376 32.3199 75.4341 32.3199H73.4589C73.2793 32.3079 73.1237 32.1759 73.1117 31.9959V26.4759C73.1117 25.3599 73.2434 23.7399 71.8787 23.7399C71.3999 23.7399 70.957 24.0639 70.7415 24.5559C70.4662 25.1799 70.4303 25.7919 70.4303 26.4759V31.9479C70.4063 32.1519 70.2387 32.3199 70.0352 32.3199Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M43.7224 27.46C43.7224 28.228 43.7463 28.876 43.3513 29.56C43.04 30.112 42.5372 30.46 41.9866 30.46C41.2324 30.46 40.7895 29.884 40.7895 29.02C40.7895 27.34 42.2978 27.028 43.7224 27.028V27.46ZM45.7095 32.284C45.5778 32.404 45.3863 32.404 45.2426 32.332C44.5843 31.78 44.4645 31.528 44.1054 31.012C43.0161 32.116 42.2499 32.452 40.8494 32.452C39.1854 32.452 37.8926 31.42 37.8926 29.368C37.8926 27.76 38.7664 26.668 39.9994 26.128C41.0648 25.66 42.5732 25.576 43.7104 25.444V25.192C43.7104 24.724 43.7463 24.16 43.471 23.752C43.2316 23.392 42.7647 23.236 42.3577 23.236C41.6035 23.236 40.9332 23.62 40.7656 24.424C40.7297 24.604 40.598 24.784 40.4184 24.784L38.5031 24.58C38.3355 24.544 38.1679 24.412 38.2038 24.16C38.6467 21.832 40.7416 21.124 42.621 21.124C43.5787 21.124 44.8356 21.376 45.5898 22.108C46.5475 23.008 46.4637 24.208 46.4637 25.516V28.6C46.4637 29.524 46.8467 29.932 47.2059 30.436C47.3375 30.616 47.3615 30.832 47.1939 30.964C46.8228 31.324 46.1045 31.948 45.7095 32.284Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.8298 27.46C17.8298 28.228 17.8537 28.876 17.4587 29.56C17.1474 30.112 16.6447 30.46 16.094 30.46C15.3399 30.46 14.8969 29.884 14.8969 29.02C14.8969 27.34 16.4053 27.028 17.8298 27.028V27.46ZM19.8169 32.284C19.6853 32.404 19.4937 32.404 19.3501 32.332C18.6917 31.78 18.572 31.528 18.2128 31.012C17.1235 32.116 16.3574 32.452 14.9568 32.452C13.2928 32.452 12 31.42 12 29.368C12 27.76 12.8739 26.668 14.1069 26.128C15.1723 25.66 16.6806 25.576 17.8178 25.444V25.192C17.8178 24.724 17.8537 24.16 17.5784 23.752C17.339 23.392 16.8721 23.236 16.4651 23.236C15.7109 23.236 15.0406 23.62 14.873 24.424C14.8371 24.604 14.7054 24.784 14.5258 24.784L12.6105 24.58C12.4429 24.544 12.2634 24.412 12.3112 24.16C12.7542 21.832 14.8491 21.124 16.7285 21.124C17.6861 21.124 18.9431 21.376 19.6972 22.108C20.6549 23.008 20.5711 24.208 20.5711 25.516V28.6C20.5711 29.524 20.9542 29.932 21.3133 30.436C21.445 30.616 21.4689 30.832 21.3013 30.964C20.9422 31.324 20.2239 31.948 19.8169 32.284Z"
                fill="white"
              />
              <path
                d="M83.8242 32.428C82.8665 32.428 82.0764 32.14 81.4779 31.564C80.8793 30.988 80.5801 30.232 80.5801 29.308C80.5801 28.288 80.9512 27.472 81.6814 26.872C82.4116 26.26 83.4052 25.96 84.6382 25.96C85.3684 25.96 86.1585 26.068 87.0323 26.272V25.048C87.0323 24.352 86.8767 23.86 86.5775 23.584C86.2782 23.308 85.7515 23.176 84.9853 23.176C84.5304 23.176 84.0277 23.224 83.477 23.308C82.9264 23.404 82.3996 23.524 81.9088 23.692C81.7772 23.728 81.6575 23.752 81.5617 23.752C81.3821 23.752 81.2983 23.62 81.2983 23.356V22.588C81.2983 22.396 81.3223 22.252 81.3821 22.18C81.442 22.096 81.5856 22.012 81.8131 21.916C82.8904 21.508 84.0756 21.292 85.3804 21.292C86.7331 21.292 87.7147 21.568 88.3611 22.12C89.0075 22.672 89.3188 23.536 89.3188 24.7V31.66C89.3188 31.96 89.1631 32.116 88.8639 32.116H87.7865C87.4872 32.116 87.3077 31.984 87.2718 31.708L87.164 31.108C86.6852 31.516 86.1465 31.84 85.5719 32.08C84.9853 32.32 84.3988 32.428 83.8242 32.428ZM84.5065 30.7C84.9015 30.7 85.3205 30.616 85.7634 30.436C86.2064 30.268 86.6253 30.016 87.0443 29.704V27.724C86.3141 27.568 85.6677 27.496 85.105 27.496C83.6805 27.496 82.9623 28.048 82.9623 29.176C82.9623 29.656 83.0939 30.028 83.3693 30.304C83.6446 30.556 84.0277 30.7 84.5065 30.7Z"
                fill="white"
              />
              <path
                d="M91.9764 36.376C91.6771 36.376 91.5215 36.22 91.5215 35.92V22.06C91.5215 21.76 91.6771 21.604 91.9764 21.604H93.1136C93.4129 21.604 93.5924 21.736 93.6523 22.012L93.772 22.648C94.2508 22.204 94.7895 21.868 95.3641 21.64C95.9507 21.4 96.5612 21.292 97.1837 21.292C98.4885 21.292 99.5299 21.784 100.308 22.756C101.086 23.74 101.469 25.048 101.469 26.704C101.469 27.844 101.278 28.852 100.907 29.704C100.524 30.556 99.9968 31.216 99.3264 31.672C98.6561 32.128 97.878 32.356 97.0161 32.356C96.4415 32.356 95.8789 32.26 95.3402 32.056C94.8015 31.852 94.3346 31.576 93.9396 31.216V35.92C93.9396 36.22 93.784 36.376 93.4847 36.376H91.9764ZM96.4056 30.424C97.2794 30.424 97.9378 30.124 98.3688 29.524C98.7997 28.924 99.0032 28.012 99.0032 26.788C99.0032 25.576 98.7997 24.676 98.3688 24.088C97.9378 23.5 97.3034 23.212 96.4175 23.212C95.5197 23.212 94.6937 23.476 93.9396 23.992V29.62C94.7297 30.16 95.5437 30.424 96.4056 30.424Z"
                fill="white"
              />
              <path
                d="M103.683 36.376C103.384 36.376 103.229 36.22 103.229 35.92V22.06C103.229 21.76 103.384 21.604 103.683 21.604H104.821C105.12 21.604 105.299 21.736 105.359 22.012L105.479 22.648C105.958 22.204 106.497 21.868 107.071 21.64C107.658 21.4 108.268 21.292 108.891 21.292C110.196 21.292 111.237 21.784 112.015 22.756C112.793 23.74 113.176 25.048 113.176 26.704C113.176 27.844 112.985 28.852 112.614 29.704C112.231 30.556 111.704 31.216 111.033 31.672C110.363 32.128 109.585 32.356 108.723 32.356C108.149 32.356 107.586 32.26 107.047 32.056C106.509 31.852 106.042 31.576 105.647 31.216V35.92C105.647 36.22 105.491 36.376 105.192 36.376H103.683ZM108.125 30.424C108.998 30.424 109.657 30.124 110.088 29.524C110.519 28.924 110.722 28.012 110.722 26.788C110.722 25.576 110.519 24.676 110.088 24.088C109.657 23.5 109.022 23.212 108.137 23.212C107.239 23.212 106.413 23.476 105.659 23.992V29.62C106.437 30.16 107.251 30.424 108.125 30.424Z"
                fill="white"
              />
              <path
                d="M117.762 32.4283C116.672 32.4283 115.667 32.2483 114.757 31.8883C114.541 31.8043 114.398 31.7203 114.338 31.6243C114.278 31.5403 114.242 31.3843 114.242 31.1803V30.4363C114.242 30.1603 114.338 30.0283 114.529 30.0283C114.625 30.0283 114.817 30.0763 115.104 30.1483C116.086 30.4243 116.96 30.5563 117.75 30.5563C118.432 30.5563 118.935 30.4483 119.258 30.2323C119.569 30.0163 119.737 29.6923 119.737 29.2483C119.737 28.9483 119.641 28.6963 119.449 28.5163C119.258 28.3243 118.899 28.1443 118.372 27.9523L116.66 27.2923C115.116 26.7043 114.35 25.7323 114.35 24.4003C114.35 23.4403 114.709 22.6723 115.427 22.1203C116.146 21.5683 117.103 21.2803 118.288 21.2803C119.138 21.2803 120 21.4243 120.862 21.7123C121.066 21.7843 121.209 21.8563 121.269 21.9523C121.341 22.0483 121.377 22.1923 121.377 22.4203V23.1403C121.377 23.2963 121.353 23.3923 121.305 23.4643C121.257 23.5363 121.173 23.5603 121.054 23.5603C120.982 23.5603 120.814 23.5243 120.539 23.4523C119.677 23.2483 118.971 23.1403 118.432 23.1403C117.798 23.1403 117.331 23.2363 117.043 23.4163C116.744 23.5963 116.6 23.8963 116.6 24.2923C116.6 24.5923 116.708 24.8443 116.924 25.0243C117.139 25.2043 117.522 25.4083 118.073 25.6363L119.665 26.2603C120.491 26.5723 121.089 26.9563 121.449 27.4003C121.808 27.8443 121.999 28.3963 121.999 29.0803C121.999 30.1123 121.628 30.9283 120.886 31.5283C120.108 32.1283 119.078 32.4283 117.762 32.4283Z"
                fill="white"
              />
              <path
                d="M127.734 32.2602C126.644 32.2602 125.842 32.0082 125.327 31.4922C124.801 30.9882 124.537 30.2082 124.537 29.1522V23.4522H123.221C122.921 23.4522 122.766 23.2962 122.766 22.9962V22.3962C122.766 22.2162 122.802 22.0842 122.873 22.0122C122.945 21.9402 123.053 21.8802 123.209 21.8562L124.633 21.6522L124.944 19.1562C124.956 18.9882 125.004 18.8682 125.088 18.8082C125.172 18.7362 125.291 18.7002 125.459 18.7002H126.536C126.836 18.7002 126.991 18.8562 126.991 19.1562V21.5922H129.529C129.828 21.5922 129.984 21.7482 129.984 22.0482V22.9962C129.984 23.2962 129.828 23.4522 129.529 23.4522H126.991V29.0322C126.991 29.5002 127.099 29.8362 127.326 30.0282C127.554 30.2322 127.937 30.3282 128.476 30.3282C128.787 30.3282 129.05 30.3042 129.242 30.2682C129.433 30.2322 129.589 30.2082 129.721 30.2082C129.96 30.2082 130.068 30.3402 130.068 30.6042V31.3482C130.068 31.5642 130.032 31.7202 129.96 31.8162C129.888 31.9122 129.745 31.9842 129.541 32.0322C128.931 32.1882 128.344 32.2602 127.734 32.2602Z"
                fill="white"
              />
              <path
                d="M135.765 32.428C134.173 32.428 132.928 31.936 132.03 30.952C131.132 29.968 130.689 28.6 130.689 26.848C130.689 25.096 131.132 23.74 132.03 22.756C132.928 21.784 134.173 21.292 135.765 21.292C137.357 21.292 138.602 21.784 139.5 22.756C140.398 23.74 140.841 25.096 140.841 26.848C140.841 28.6 140.398 29.968 139.5 30.952C138.602 31.936 137.357 32.428 135.765 32.428ZM135.765 30.508C137.501 30.508 138.363 29.284 138.363 26.848C138.363 24.424 137.501 23.212 135.765 23.212C134.029 23.212 133.167 24.424 133.167 26.848C133.167 29.284 134.029 30.508 135.765 30.508Z"
                fill="white"
              />
              <path
                d="M143.019 32.1158C142.72 32.1158 142.564 31.9598 142.564 31.6598V22.0478C142.564 21.7478 142.72 21.5918 143.019 21.5918H144.109C144.3 21.5918 144.432 21.6158 144.516 21.6758C144.588 21.7358 144.647 21.8318 144.671 21.9878L144.923 23.1638C145.473 22.5638 145.988 22.1318 146.467 21.8798C146.946 21.6278 147.472 21.5078 148.035 21.5078H148.119C148.298 21.5078 148.442 21.5198 148.562 21.5558C148.682 21.5918 148.765 21.6518 148.813 21.7358C148.861 21.8198 148.885 21.9758 148.885 22.1918V23.3078C148.885 23.5958 148.765 23.7398 148.514 23.7398C148.43 23.7398 148.322 23.7278 148.179 23.7158C148.035 23.7038 147.879 23.6918 147.712 23.6918C146.694 23.6918 145.797 23.9558 145.006 24.4718V31.6478C145.006 31.9478 144.851 32.1038 144.552 32.1038H143.019V32.1158Z"
                fill="white"
              />
              <path
                d="M154.703 32.428C152.967 32.428 151.662 31.96 150.765 31.024C149.867 30.088 149.424 28.72 149.424 26.932C149.424 25.156 149.867 23.764 150.729 22.78C151.603 21.784 152.824 21.292 154.392 21.292C155.744 21.292 156.774 21.664 157.492 22.396C158.21 23.128 158.57 24.172 158.57 25.528C158.57 25.996 158.534 26.488 158.462 26.992C158.438 27.172 158.378 27.292 158.306 27.352C158.234 27.412 158.127 27.448 158.007 27.448H151.65C151.686 28.492 151.986 29.26 152.524 29.752C153.063 30.244 153.901 30.484 155.026 30.484C155.852 30.484 156.714 30.352 157.624 30.088C157.732 30.064 157.815 30.04 157.875 30.028C157.935 30.016 157.983 30.004 158.019 30.004C158.222 30.004 158.33 30.136 158.33 30.412V31.156C158.33 31.36 158.294 31.504 158.234 31.6C158.174 31.684 158.031 31.78 157.815 31.852C156.918 32.248 155.876 32.428 154.703 32.428ZM156.439 25.816V25.648C156.439 24.808 156.259 24.172 155.888 23.728C155.529 23.284 154.99 23.068 154.296 23.068C153.554 23.068 152.955 23.32 152.476 23.812C151.998 24.304 151.746 24.976 151.674 25.816H156.439Z"
                fill="white"
              />
              <path
                d="M60.1466 15.1356C59.6319 15.1356 59.2249 14.9916 58.9256 14.7036C58.6143 14.4156 58.4707 14.0196 58.4707 13.5276C58.4707 12.9996 58.6622 12.5796 59.0333 12.2676C59.4044 11.9556 59.9072 11.7996 60.5417 11.7996C60.9487 11.7996 61.3916 11.8596 61.8944 11.9796V11.2596C61.8944 10.8756 61.8106 10.5996 61.631 10.4436C61.4514 10.2876 61.1522 10.2036 60.7332 10.2036C60.2424 10.2036 59.7516 10.2756 59.2847 10.4196C59.1171 10.4676 59.0094 10.4916 58.9735 10.4916C58.8897 10.4916 58.8418 10.4316 58.8418 10.2996V10.0116C58.8418 9.91556 58.8538 9.84356 58.8897 9.80756C58.9136 9.75956 58.9735 9.72356 59.0573 9.68756C59.2847 9.59156 59.56 9.50756 59.9072 9.44756C60.2544 9.38756 60.5895 9.35156 60.9247 9.35156C61.6071 9.35156 62.1098 9.49556 62.433 9.78356C62.7563 10.0716 62.9119 10.5036 62.9119 11.0796V14.7756C62.9119 14.9196 62.8401 14.9916 62.6964 14.9916H62.2295C62.0979 14.9916 62.0141 14.9196 61.9901 14.7876L61.9422 14.4276C61.6789 14.6556 61.4036 14.8236 61.0803 14.9436C60.7691 15.0636 60.4579 15.1356 60.1466 15.1356ZM60.41 14.3196C60.6494 14.3196 60.8888 14.2716 61.1522 14.1756C61.4155 14.0796 61.6549 13.9476 61.8944 13.7676V12.6636C61.5113 12.5676 61.1282 12.5196 60.7571 12.5196C59.9431 12.5196 59.5361 12.8316 59.5361 13.4556C59.5361 13.7316 59.6079 13.9356 59.7635 14.0916C59.9072 14.2476 60.1227 14.3196 60.41 14.3196Z"
                fill="white"
              />
              <path
                d="M65.8558 14.9921C65.76 14.9921 65.6762 14.9801 65.6403 14.9441C65.5924 14.9201 65.5446 14.8361 65.4967 14.6921L63.5933 9.89209C63.5813 9.84409 63.5574 9.80809 63.5454 9.76009C63.5215 9.71209 63.5215 9.67609 63.5215 9.64009C63.5215 9.54409 63.5694 9.49609 63.6771 9.49609H64.3116C64.4193 9.49609 64.4911 9.50809 64.539 9.54409C64.5869 9.56809 64.6228 9.65209 64.6827 9.79609L66.1551 14.0081L67.6275 9.79609C67.6754 9.66409 67.7232 9.58009 67.7711 9.54409C67.807 9.53209 67.8789 9.52009 67.9866 9.52009H68.5851C68.6929 9.52009 68.7527 9.56809 68.7527 9.66409C68.7527 9.70009 68.7408 9.73609 68.7288 9.78409C68.7168 9.83209 68.6929 9.86809 68.6809 9.91609L66.7895 14.7161C66.7416 14.8481 66.6938 14.9321 66.6459 14.9681C66.598 14.9921 66.5262 15.0161 66.4304 15.0161H65.8558V14.9921Z"
                fill="white"
              />
              <path
                d="M70.8595 15.1356C70.3448 15.1356 69.9378 14.9916 69.6385 14.7036C69.3272 14.4156 69.1836 14.0196 69.1836 13.5276C69.1836 12.9996 69.3751 12.5796 69.7462 12.2676C70.1173 11.9556 70.6201 11.7996 71.2545 11.7996C71.6615 11.7996 72.1045 11.8596 72.6072 11.9796V11.2596C72.6072 10.8756 72.5234 10.5996 72.3439 10.4436C72.1643 10.2876 71.8651 10.2036 71.4461 10.2036C70.9553 10.2036 70.4645 10.2756 69.9976 10.4196C69.83 10.4676 69.7223 10.4916 69.6864 10.4916C69.6026 10.4916 69.5547 10.4316 69.5547 10.2996V10.0116C69.5547 9.91556 69.5667 9.84356 69.6026 9.80756C69.6265 9.75956 69.6864 9.72356 69.7702 9.68756C69.9976 9.59156 70.2729 9.50756 70.6201 9.44756C70.9672 9.38756 71.3024 9.35156 71.6376 9.35156C72.3199 9.35156 72.8227 9.49556 73.1459 9.78356C73.4691 10.0716 73.6248 10.5036 73.6248 11.0796V14.7756C73.6248 14.9196 73.5529 14.9916 73.4093 14.9916H72.9424C72.8107 14.9916 72.7269 14.9196 72.703 14.7876L72.6551 14.4276C72.3918 14.6556 72.1164 14.8236 71.7932 14.9436C71.47 15.0636 71.1588 15.1356 70.8595 15.1356ZM71.1109 14.3196C71.3503 14.3196 71.5897 14.2716 71.8531 14.1756C72.1164 14.0796 72.3559 13.9476 72.5953 13.7676V12.6636C72.2122 12.5676 71.8291 12.5196 71.458 12.5196C70.644 12.5196 70.237 12.8316 70.237 13.4556C70.237 13.7316 70.3089 13.9356 70.4645 14.0916C70.6201 14.2476 70.8356 14.3196 71.1109 14.3196Z"
                fill="white"
              />
              <path
                d="M75.6137 8.54795C75.4102 8.54795 75.2426 8.48795 75.1229 8.36795C75.0032 8.24795 74.9434 8.09195 74.9434 7.89995C74.9434 7.70795 75.0032 7.55195 75.1229 7.43195C75.2426 7.31195 75.4102 7.25195 75.6137 7.25195C75.8172 7.25195 75.9848 7.31195 76.1045 7.43195C76.2242 7.55195 76.2841 7.70795 76.2841 7.89995C76.2841 8.09195 76.2242 8.24795 76.1045 8.36795C75.9848 8.48795 75.8292 8.54795 75.6137 8.54795ZM75.2905 14.992C75.1469 14.992 75.075 14.92 75.075 14.776V9.73595C75.075 9.59195 75.1469 9.51995 75.2905 9.51995H75.925C76.0686 9.51995 76.1404 9.59195 76.1404 9.73595V14.776C76.1404 14.92 76.0686 14.992 75.925 14.992H75.2905Z"
                fill="white"
              />
              <path
                d="M78.7962 15.04C78.4131 15.04 78.1258 14.932 77.9223 14.716C77.7188 14.5 77.623 14.176 77.623 13.768V7.216C77.623 7.072 77.6949 7 77.8385 7H78.473C78.6166 7 78.6884 7.072 78.6884 7.216V13.708C78.6884 13.876 78.7244 13.996 78.7962 14.068C78.868 14.14 78.9757 14.176 79.1314 14.176C79.1793 14.176 79.2152 14.176 79.263 14.164C79.3109 14.152 79.3468 14.152 79.3828 14.152C79.4546 14.152 79.5025 14.176 79.5264 14.2C79.5503 14.236 79.5623 14.296 79.5623 14.356V14.704C79.5623 14.776 79.5503 14.836 79.5144 14.872C79.4785 14.908 79.4306 14.944 79.3468 14.968C79.1793 15.028 78.9877 15.04 78.7962 15.04Z"
                fill="white"
              />
              <path
                d="M81.8615 15.1356C81.3467 15.1356 80.9397 14.9916 80.6404 14.7036C80.3292 14.4156 80.1855 14.0196 80.1855 13.5276C80.1855 12.9996 80.3771 12.5796 80.7482 12.2676C81.1193 11.9556 81.622 11.7996 82.2565 11.7996C82.6635 11.7996 83.1064 11.8596 83.6092 11.9796V11.2596C83.6092 10.8756 83.5254 10.5996 83.3458 10.4436C83.1663 10.2876 82.867 10.2036 82.448 10.2036C81.9572 10.2036 81.4664 10.2756 80.9996 10.4196C80.832 10.4676 80.7242 10.4916 80.6883 10.4916C80.6045 10.4916 80.5566 10.4316 80.5566 10.2996V10.0116C80.5566 9.91556 80.5686 9.84356 80.6045 9.80756C80.6285 9.75956 80.6883 9.72356 80.7721 9.68756C80.9996 9.59156 81.2749 9.50756 81.622 9.44756C81.9692 9.38756 82.3044 9.35156 82.6396 9.35156C83.3219 9.35156 83.8247 9.49556 84.1479 9.78356C84.4711 10.0716 84.6387 10.5036 84.6387 11.0796V14.7756C84.6387 14.9196 84.5669 14.9916 84.4232 14.9916H83.9564C83.8247 14.9916 83.7409 14.9196 83.7169 14.7876L83.6691 14.4276C83.4057 14.6556 83.1304 14.8236 82.8072 14.9436C82.4839 15.0636 82.1727 15.1356 81.8615 15.1356ZM82.1248 14.3196C82.3642 14.3196 82.6037 14.2716 82.867 14.1756C83.1304 14.0796 83.3698 13.9476 83.6092 13.7676V12.6636C83.2261 12.5676 82.8431 12.5196 82.472 12.5196C81.658 12.5196 81.2509 12.8316 81.2509 13.4556C81.2509 13.7316 81.3228 13.9356 81.4784 14.0916C81.634 14.2476 81.8495 14.3196 82.1248 14.3196Z"
                fill="white"
              />
              <path
                d="M88.7804 15.112C88.122 15.112 87.5354 14.884 87.0446 14.416L86.9728 14.776C86.9489 14.92 86.8651 14.992 86.7214 14.992H86.2545C86.1109 14.992 86.0391 14.92 86.0391 14.776V7.216C86.0391 7.072 86.1109 7 86.2545 7H86.889C87.0326 7 87.1045 7.072 87.1045 7.216V10.036C87.6432 9.58 88.2297 9.352 88.8522 9.352C89.5465 9.352 90.0972 9.604 90.5042 10.108C90.9112 10.612 91.1027 11.308 91.1027 12.184C91.1027 13.072 90.8872 13.78 90.4683 14.308C90.0493 14.848 89.4867 15.112 88.7804 15.112ZM88.529 14.248C89.5226 14.248 90.0134 13.576 90.0134 12.244C90.0134 11.56 89.8937 11.056 89.6543 10.72C89.4148 10.384 89.0437 10.228 88.5529 10.228C88.0382 10.228 87.5594 10.396 87.1045 10.72V13.732C87.5594 14.068 88.0382 14.248 88.529 14.248Z"
                fill="white"
              />
              <path
                d="M93.4368 15.04C93.0537 15.04 92.7664 14.932 92.5629 14.716C92.3594 14.5 92.2637 14.176 92.2637 13.768V7.216C92.2637 7.072 92.3355 7 92.4791 7H93.1136C93.2572 7 93.3291 7.072 93.3291 7.216V13.708C93.3291 13.876 93.365 13.996 93.4368 14.068C93.5086 14.14 93.6164 14.176 93.772 14.176C93.8199 14.176 93.8558 14.176 93.9037 14.164C93.9516 14.152 93.9875 14.152 94.0234 14.152C94.0952 14.152 94.1431 14.176 94.167 14.2C94.191 14.236 94.2029 14.296 94.2029 14.356V14.704C94.2029 14.776 94.191 14.836 94.1551 14.872C94.1192 14.908 94.0713 14.944 93.9875 14.968C93.8199 15.028 93.6283 15.04 93.4368 15.04Z"
                fill="white"
              />
              <path
                d="M97.5799 15.1476C96.6941 15.1476 96.0237 14.9076 95.5808 14.4156C95.1259 13.9236 94.8984 13.2036 94.8984 12.2436C94.8984 11.3316 95.1259 10.6236 95.5808 10.1076C96.0357 9.59156 96.6701 9.35156 97.4722 9.35156C98.1545 9.35156 98.6812 9.54356 99.0403 9.92756C99.4114 10.3116 99.591 10.8636 99.591 11.5596C99.591 11.7876 99.5671 12.0276 99.5311 12.2556C99.5192 12.3396 99.4952 12.3996 99.4593 12.4236C99.4234 12.4476 99.3755 12.4716 99.3037 12.4716H95.9279C95.9399 13.0956 96.0955 13.5516 96.3828 13.8396C96.6701 14.1276 97.125 14.2836 97.7355 14.2836C97.951 14.2836 98.1545 14.2716 98.358 14.2356C98.5615 14.1996 98.8009 14.1396 99.1122 14.0556C99.1601 14.0436 99.2079 14.0316 99.2438 14.0196C99.2798 14.0076 99.3157 14.0076 99.3396 14.0076C99.4354 14.0076 99.4833 14.0676 99.4833 14.1996V14.4996C99.4833 14.5956 99.4713 14.6556 99.4354 14.7036C99.4114 14.7396 99.3396 14.7876 99.2558 14.8236C99.0403 14.9196 98.789 14.9916 98.4897 15.0516C98.1904 15.1116 97.8792 15.1476 97.5799 15.1476ZM98.6094 11.7756C98.6214 11.7156 98.6214 11.6196 98.6214 11.4996C98.6214 11.0556 98.5256 10.7316 98.3101 10.5036C98.1066 10.2756 97.8073 10.1676 97.4123 10.1676C96.9574 10.1676 96.6103 10.2996 96.3589 10.5756C96.1075 10.8516 95.9638 11.2476 95.9279 11.7756H98.6094Z"
                fill="white"
              />
              <path
                d="M104.701 15.1356C104.187 15.1356 103.78 14.9916 103.48 14.7036C103.181 14.4156 103.025 14.0196 103.025 13.5276C103.025 12.9996 103.217 12.5796 103.588 12.2676C103.959 11.9556 104.462 11.7996 105.096 11.7996C105.503 11.7996 105.946 11.8596 106.449 11.9796V11.2596C106.449 10.8756 106.365 10.5996 106.186 10.4436C106.006 10.2876 105.707 10.2036 105.288 10.2036C104.797 10.2036 104.306 10.2756 103.839 10.4196C103.672 10.4676 103.576 10.4916 103.528 10.4916C103.444 10.4916 103.396 10.4316 103.396 10.2996V10.0116C103.396 9.91556 103.408 9.84356 103.444 9.80756C103.468 9.75956 103.528 9.72356 103.612 9.68756C103.839 9.59156 104.115 9.50756 104.462 9.44756C104.809 9.38756 105.144 9.35156 105.479 9.35156C106.162 9.35156 106.665 9.49556 106.988 9.78356C107.311 10.0716 107.479 10.5036 107.479 11.0796V14.7756C107.479 14.9196 107.407 14.9916 107.263 14.9916H106.796C106.665 14.9916 106.581 14.9196 106.557 14.7876L106.509 14.4276C106.246 14.6556 105.958 14.8236 105.647 14.9436C105.336 15.0636 105.013 15.1356 104.701 15.1356ZM104.965 14.3196C105.204 14.3196 105.455 14.2716 105.707 14.1756C105.97 14.0796 106.21 13.9476 106.449 13.7676V12.6636C106.066 12.5676 105.683 12.5196 105.312 12.5196C104.498 12.5196 104.091 12.8316 104.091 13.4556C104.091 13.7316 104.163 13.9356 104.318 14.0916C104.474 14.2476 104.677 14.3196 104.965 14.3196Z"
                fill="white"
              />
              <path
                d="M110.758 15.0644C109.741 15.0644 109.226 14.5484 109.226 13.5284V10.3604H108.448C108.304 10.3604 108.232 10.2884 108.232 10.1444V9.86838C108.232 9.79638 108.244 9.74837 108.28 9.71237C108.316 9.67637 108.376 9.65238 108.472 9.64038L109.262 9.54438L109.406 8.20038C109.418 8.05638 109.501 7.98438 109.633 7.98438H110.088C110.232 7.98438 110.303 8.05638 110.303 8.20038V9.52038H111.704C111.848 9.52038 111.919 9.59238 111.919 9.73638V10.1444C111.919 10.2884 111.848 10.3604 111.704 10.3604H110.291V13.4804C110.291 13.7444 110.351 13.9364 110.471 14.0444C110.591 14.1524 110.794 14.2004 111.081 14.2004C111.213 14.2004 111.381 14.1884 111.584 14.1524C111.692 14.1284 111.764 14.1164 111.8 14.1164C111.86 14.1164 111.895 14.1284 111.919 14.1644C111.943 14.2004 111.955 14.2484 111.955 14.3204V14.6084C111.955 14.7044 111.943 14.7764 111.907 14.8244C111.884 14.8724 111.824 14.9084 111.74 14.9324C111.465 15.0284 111.129 15.0644 110.758 15.0644Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
        <div className="mc-ml-2">
          <a
            href="https://channelstore.roku.com/details/579323/masterclass-learn-new-skills"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mc-sr-only">Available on Roku</span>
            <svg
              width={132}
              height={48}
              viewBox="0 0 132 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="0.5"
                y="0.5"
                width={131}
                height={47}
                rx="7.5"
                fill="black"
                stroke="#949AA4"
              />
              <path
                d="M69.9786 22.6624C71.6968 22.6624 73.38 22.6624 75.0782 22.6624C75.0782 27.6675 75.0782 32.659 75.0782 37.6635C74.7151 37.6635 74.3638 37.6635 74.0075 37.6635C73.2469 37.0109 72.4837 36.3564 71.7062 35.69C71.6343 35.7585 71.5743 35.8114 71.5193 35.868C70.5205 36.8951 69.2955 37.5216 67.9129 37.8501C67.3148 37.992 66.6991 38.0293 66.0853 37.9783C65.2259 37.908 64.3796 37.7755 63.5746 37.4389C62.1952 36.8622 61.2376 35.8879 60.7239 34.4875C60.5526 34.0202 60.4345 33.5399 60.4051 33.041C60.3863 32.7218 60.3557 32.402 60.3551 32.0823C60.3513 29.3038 60.3526 26.5253 60.3526 23.7468C60.3526 23.6348 60.3526 23.5235 60.3526 23.4208C58.1869 25.5765 56.0337 27.7198 53.8573 29.8861C54.2011 30.2376 54.578 30.6059 54.9505 30.978C55.318 31.345 55.6868 31.7115 56.0549 32.0779C56.4306 32.4518 56.8062 32.8257 57.1818 33.1996C57.55 33.5661 57.9181 33.9325 58.2863 34.2989C58.6619 34.6728 59.0375 35.0468 59.4132 35.4207C59.7813 35.7871 60.1495 36.1535 60.5176 36.52C60.8926 36.8933 61.267 37.2659 61.667 37.6641C59.4982 37.6641 57.3669 37.6641 55.2205 37.6641C53.1779 35.6527 51.1285 33.6351 49.064 31.602C48.999 31.7177 49.0253 31.8303 49.0246 31.9348C49.0228 33.7284 49.0234 35.5221 49.0234 37.3157C49.0234 37.4277 49.0234 37.5397 49.0234 37.6635C47.3139 37.6635 45.6301 37.6635 43.9476 37.6635C43.9376 37.6554 43.9282 37.6504 43.9219 37.6423C43.9163 37.6349 43.9113 37.6243 43.9113 37.615C43.9107 32.6391 43.9107 27.6632 43.9107 22.6699C44.1863 22.6102 44.4651 22.6518 44.7407 22.6444C45.022 22.6369 45.3032 22.6425 45.5845 22.6425C45.8764 22.6425 46.1676 22.6425 46.4595 22.6425C46.7408 22.6425 47.0221 22.6425 47.3033 22.6425C47.5846 22.6425 47.8658 22.6425 48.1471 22.6425C48.4271 22.6425 48.7071 22.6425 49.0196 22.6425C49.0259 23.1421 49.0221 23.6255 49.0228 24.1095C49.0234 24.6072 49.0228 25.1049 49.0228 25.6027C49.0228 26.0898 49.0228 26.5769 49.0228 27.0647C49.0228 27.5481 49.0221 28.0321 49.0234 28.5348C51.0216 26.5558 52.991 24.6047 54.9511 22.663C58.4625 22.663 61.9489 22.663 65.4666 22.663C65.4666 22.7862 65.4666 22.8976 65.4666 23.0083C65.4666 25.714 65.4578 28.4197 65.4734 31.1248C65.4772 31.7619 65.5253 32.402 65.7603 33.0124C66.0047 33.6476 66.4772 33.9879 67.1497 34.0258C67.7685 34.0607 68.346 33.9375 68.8736 33.6028C69.333 33.3116 69.6605 32.9022 69.9361 32.4456C69.9661 32.3958 69.9699 32.328 69.9755 32.2677C69.9817 32.1955 69.9774 32.1227 69.9774 32.0499C69.9774 29.0437 69.9774 26.0369 69.9774 23.0307C69.9786 22.9163 69.9786 22.803 69.9786 22.6624ZM23.723 30.1704C23.8424 30.0926 23.9455 30.0255 24.0492 29.9583C24.7536 29.5047 25.3637 28.9479 25.8756 28.2866C26.5925 27.3608 26.9894 26.3125 27.0731 25.1473C27.1031 24.7317 27.0431 24.3235 26.9706 23.916C26.7675 22.7694 26.2262 21.797 25.4337 20.9571C24.7193 20.2 23.8724 19.6314 22.9161 19.2151C21.836 18.7448 20.7029 18.5003 19.5341 18.4885C17.1077 18.463 14.6814 18.4804 12.255 18.4816C12.175 18.4816 12.095 18.4947 12 18.5034C12 24.9009 12 31.2803 12 37.6678C12.0781 37.6716 12.1394 37.6765 12.2006 37.6765C13.8251 37.6747 15.4495 37.6722 17.074 37.6691C17.0833 37.6691 17.094 37.6641 17.1021 37.6585C17.1102 37.6529 17.1165 37.6436 17.1358 37.6224C17.1358 37.2118 17.1358 36.7875 17.1358 36.3632C17.1358 35.9383 17.1358 35.5134 17.1358 35.0884C17.1358 34.6741 17.1358 34.2591 17.1358 33.8448C17.1358 33.4199 17.1346 32.9949 17.1358 32.57C17.1371 32.1482 17.1302 31.7264 17.1408 31.2903C17.679 31.2903 18.1846 31.2903 18.7021 31.2903C20.2447 33.4211 21.7873 35.5513 23.323 37.6728C25.268 37.6728 27.1925 37.6728 29.1444 37.6728C27.3312 35.1631 25.5324 32.6739 23.723 30.1704ZM17.1452 21.7074C17.2308 21.6981 17.3102 21.6826 17.389 21.6819C17.8465 21.6794 18.3046 21.6913 18.7622 21.6788C20.1291 21.6421 21.5035 22.6599 21.8404 24.107C22.0835 25.151 21.891 26.119 21.1754 26.9521C20.6504 27.563 19.9991 27.9407 19.1909 28.0651C18.7647 28.131 18.3409 28.0956 17.9165 28.1105C17.6696 28.1192 17.4215 28.1118 17.1458 28.1118C17.1452 25.9504 17.1452 23.8401 17.1452 21.7074ZM35.7566 37.9372C36.2891 37.9105 36.8029 37.7885 37.3085 37.6342C39.0842 37.0917 40.4899 36.0447 41.5406 34.5248C42.4 33.2817 42.8063 31.8881 42.885 30.3931C42.9138 29.8544 42.8519 29.3181 42.7575 28.7899C42.5906 27.8567 42.2656 26.9788 41.7712 26.1632C40.9937 24.8791 39.9318 23.8992 38.6005 23.2112C37.5735 22.6798 36.4697 22.4123 35.3178 22.3402C34.7141 22.3022 34.1115 22.3607 33.5209 22.4727C32.6615 22.6357 31.8408 22.9206 31.0752 23.3561C30.1782 23.8656 29.397 24.5096 28.7651 25.3202C27.8681 26.4712 27.3169 27.769 27.1512 29.2248C27.0794 29.855 27.0781 30.4809 27.1506 31.1111C27.2219 31.7301 27.3706 32.3261 27.5869 32.9103C28.0969 34.2871 28.9382 35.4256 30.0932 36.3259C31.5158 37.4345 33.1509 37.9571 35.0753 37.9982C35.2203 37.9833 35.4878 37.9509 35.7566 37.9372ZM33.0471 27.5151C33.2521 27.1194 33.5103 26.7623 33.8646 26.4712C34.6209 25.8497 35.4953 25.9224 36.2029 26.5657C36.6666 26.9875 36.9616 27.5164 37.1698 28.1006C37.341 28.5796 37.4304 29.0717 37.4904 29.5775C37.586 30.3826 37.4867 31.1652 37.2729 31.9329C37.0879 32.5961 36.7891 33.2133 36.2691 33.6911C36.096 33.8504 35.896 33.9904 35.6878 34.1005C35.0941 34.414 34.524 34.3195 33.9865 33.9505C33.4621 33.5903 33.1446 33.0708 32.9015 32.5028C32.5846 31.7619 32.4321 30.986 32.4558 30.2028C32.4371 29.2428 32.6152 28.3488 33.0471 27.5151ZM84.4167 37.4221C85.0517 37.7002 85.7124 37.8507 86.4112 37.7462C86.6355 37.7126 86.8668 37.6853 87.0774 37.6081C87.6806 37.386 88.1062 36.9878 88.22 36.3296C88.255 36.128 88.2844 35.9171 88.2631 35.7156C88.2187 35.2894 88.045 34.9267 87.6725 34.6704C87.3599 34.4557 87.0206 34.3101 86.658 34.21C86.3487 34.1247 86.0343 34.0557 85.7293 33.9574C85.5136 33.8883 85.2974 33.805 85.1036 33.6905C84.7736 33.4958 84.698 33.138 84.8786 32.8027C85.0023 32.5737 85.208 32.4412 85.4461 32.4058C85.763 32.3591 86.0862 32.3541 86.4049 32.4437C86.8081 32.5576 87.1631 32.7635 87.5112 32.9987C87.7068 32.7199 87.8943 32.4524 88.08 32.188C87.3687 31.5752 86.2037 31.2803 85.2774 31.4707C84.318 31.6679 83.5998 32.3255 83.731 33.5163C83.7648 33.8193 83.8823 34.0899 84.1042 34.3157C84.3367 34.5528 84.6167 34.7077 84.923 34.8103C85.2861 34.9317 85.6593 35.0231 86.0274 35.1283C86.3162 35.2104 86.6024 35.2937 86.8687 35.4437C87.3299 35.7031 87.2506 36.4366 86.843 36.6351C86.7499 36.6805 86.6574 36.7328 86.5587 36.7595C86.0355 36.9007 85.5299 36.8261 85.0405 36.6139C84.7055 36.4683 84.3998 36.2742 84.1142 36.0192C83.9029 36.2711 83.6967 36.5169 83.4717 36.7863C83.7617 37.0662 84.0729 37.2715 84.4167 37.4221ZM87.865 27.68C87.3849 27.9575 86.8605 27.9985 86.3274 27.8803C85.8305 27.7702 85.4405 27.489 85.1467 27.0746C84.8549 26.6628 84.728 26.19 84.7286 25.7022C84.7298 25.212 84.8723 24.7422 85.1749 24.3391C85.5899 23.7854 86.1668 23.516 86.8418 23.5141C87.2881 23.5129 87.7225 23.6498 88.0925 23.9291C88.2475 24.0461 88.4037 24.1624 88.56 24.28C88.7869 24.0143 89.0069 23.7568 89.2275 23.498C88.9925 23.2311 88.7262 23.0469 88.4381 22.9051C87.5506 22.4677 86.623 22.3986 85.6918 22.7234C84.7198 23.0625 84.0723 23.745 83.7623 24.7273C83.5917 25.268 83.5535 25.8179 83.6629 26.3791C83.8298 27.2345 84.2673 27.917 84.9899 28.4017C85.8355 28.9697 86.7706 29.0406 87.7381 28.8079C88.35 28.6611 88.8425 28.309 89.2769 27.8461C89.0456 27.6234 88.8231 27.4094 88.5881 27.1835C88.3425 27.354 88.1143 27.5363 87.865 27.68ZM94.639 28.4788C94.639 27.629 94.6427 26.7791 94.6365 25.9299C94.6346 25.7246 94.619 25.5156 94.5746 25.3159C94.4696 24.8387 94.2134 24.4679 93.7621 24.2408C93.1589 23.9372 92.2276 24.0168 91.7045 24.6184C91.6464 24.685 91.5839 24.7472 91.4726 24.8654C91.4632 24.0031 91.4745 23.2105 91.4657 22.4005C91.1051 22.3868 90.7682 22.3744 90.4338 22.4061C90.3913 22.9747 90.4082 28.5759 90.452 28.8229C90.7807 28.8229 91.1101 28.8229 91.4689 28.8229C91.4689 28.709 91.4689 28.6076 91.4689 28.5068C91.4689 27.9058 91.4639 27.3048 91.4714 26.7038C91.4745 26.4469 91.4914 26.1881 91.522 25.933C91.567 25.5579 91.7639 25.281 92.1089 25.1124C92.2958 25.0216 92.4945 25.0365 92.6908 25.0465C93.1133 25.0676 93.4839 25.4042 93.5346 25.8223C93.5677 26.0985 93.5871 26.3772 93.5908 26.6553C93.599 27.298 93.5927 27.94 93.5939 28.5827C93.5939 28.6617 93.6058 28.7407 93.6121 28.8216C93.954 28.8216 94.2727 28.8216 94.6384 28.8216C94.639 28.6829 94.639 28.5808 94.639 28.4788ZM105.327 36.9225C104.781 37.0189 104.244 36.8087 103.936 36.362C103.815 36.1878 103.721 35.9937 103.733 35.7411C104.03 35.7411 104.309 35.7411 104.588 35.7411C104.869 35.7411 105.15 35.7411 105.431 35.7411C105.723 35.7411 106.014 35.7417 106.306 35.7411C106.583 35.7398 106.861 35.7373 107.14 35.7348C107.193 35.2135 107.145 34.7369 106.96 34.2753C106.71 33.6519 106.278 33.222 105.625 33.0292C105.263 32.9221 104.895 32.8935 104.523 32.9676C103.997 33.0727 103.549 33.311 103.209 33.7328C102.638 34.4427 102.542 35.2496 102.745 36.1056C102.844 36.5262 103.062 36.8958 103.389 37.1832C104.224 37.9154 105.436 37.9957 106.376 37.4401C106.601 37.307 106.816 37.1483 106.94 36.9138C106.736 36.7309 106.551 36.5654 106.339 36.3763C106.046 36.6699 105.719 36.8528 105.327 36.9225ZM103.757 35.0219C103.691 34.6965 103.907 34.2523 104.267 34.0003C104.641 33.739 105.057 33.7278 105.447 33.9188C105.875 34.1285 106.081 34.5098 106.103 35.0212C105.289 35.0219 104.523 35.0219 103.757 35.0219ZM97.5335 34.065C96.8653 33.0161 95.494 32.6378 94.3552 33.1542C93.4096 33.5829 92.9083 34.335 92.9145 35.384C92.9208 36.3868 93.3796 37.1259 94.2921 37.5565C94.7777 37.786 95.2909 37.8458 95.8365 37.7562C97.0003 37.5646 97.8935 36.5946 97.896 35.206C97.886 34.8974 97.7841 34.4588 97.5335 34.065ZM96.8041 35.048C96.8828 35.5047 96.8022 35.9047 96.5591 36.2861C96.1484 36.9287 95.0259 37.1888 94.3246 36.3775C93.8071 35.779 93.8352 34.8788 94.3496 34.2971C94.624 33.9866 94.9859 33.8404 95.394 33.8765C96.0653 33.8106 96.696 34.4196 96.8041 35.048ZM100.021 28.5099C100.021 27.6812 100.025 26.8519 100.018 26.0232C100.016 25.8285 99.998 25.63 99.9536 25.4409C99.7973 24.7771 99.3904 24.3397 98.7135 24.196C98.0966 24.0654 97.476 24.0797 96.8647 24.2458C96.6466 24.3049 96.4253 24.3609 96.2184 24.4878C96.3047 24.7659 96.3741 25.0415 96.5122 25.3015C97.0491 25.0583 97.5929 24.9799 98.1604 25.0483C98.7267 25.1161 99.0873 25.6207 98.9367 26.157C98.4373 25.9747 97.9179 25.9822 97.3972 25.9946C97.1116 26.0015 96.8397 26.0693 96.5872 26.1924C96.024 26.4668 95.7609 26.9328 95.7947 27.5493C95.8272 28.1385 96.1141 28.5634 96.7116 28.7918C97.0097 28.9056 97.3172 28.9236 97.6304 28.91C98.0735 28.8913 98.4554 28.7271 98.7867 28.4384C98.8367 28.3948 98.8873 28.3525 98.9654 28.2866C98.9748 28.4881 98.9817 28.6499 98.9898 28.8235C99.3336 28.8235 99.6623 28.8235 100.02 28.8235C100.021 28.7115 100.021 28.6107 100.021 28.5099ZM98.9704 27.4237C98.8854 27.6669 98.7392 27.8585 98.5016 27.978C98.146 28.1572 97.7816 28.2269 97.3897 28.1136C97.0978 28.029 96.8703 27.8007 96.8372 27.545C96.7947 27.2202 96.9266 26.9571 97.2191 26.7947C97.356 26.7188 97.4979 26.6634 97.661 26.6634C98.0135 26.6634 98.3673 26.6298 98.7123 26.7325C98.8098 26.7617 98.9054 26.7972 99.0029 26.8301C99.056 27.0634 99.0329 27.2457 98.9704 27.4237ZM116.985 25.5454C116.856 25.1697 116.662 24.83 116.35 24.568C115.859 24.1562 115.284 24.0131 114.662 24.079C113.972 24.1518 113.415 24.4878 113.043 25.0682C112.553 25.831 112.483 26.6584 112.807 27.5014C113.033 28.0881 113.454 28.495 114.045 28.7432C114.423 28.9019 114.809 28.9199 115.205 28.9156C115.843 28.9081 116.369 28.6493 116.814 28.2082C116.855 28.1677 116.882 28.113 116.923 28.0545C116.717 27.8729 116.524 27.7036 116.341 27.5425C116.299 27.5568 116.277 27.5599 116.26 27.5705C116.226 27.5941 116.194 27.6203 116.163 27.6476C115.828 27.9432 115.439 28.0663 114.99 28.0657C114.405 28.0645 113.926 27.7018 113.735 27.1275C113.712 27.0554 113.723 26.972 113.717 26.8706C114.865 26.8706 115.987 26.8706 117.133 26.8706C117.186 26.3866 117.127 25.9591 116.985 25.5454ZM113.694 26.1688C113.776 25.2449 114.472 24.8922 114.988 24.927C115.587 24.9675 116.082 25.5149 116.076 26.1688C115.267 26.1688 114.481 26.1688 113.694 26.1688ZM107.175 24.4063C107.178 25.8565 107.182 27.3067 107.187 28.7569C107.187 28.7662 107.193 28.7762 107.2 28.7849C107.205 28.793 107.214 28.7998 107.249 28.8347C107.559 28.8235 107.897 28.8614 108.265 28.8073C108.265 28.6916 108.265 28.5902 108.265 28.4888C108.265 27.9705 108.265 27.4523 108.265 26.9347C108.266 26.6342 108.265 26.3337 108.273 26.0332C108.28 25.7769 108.373 25.5535 108.55 25.3606C108.796 25.0906 109.103 25.0185 109.453 25.0421C109.838 25.0676 110.103 25.2561 110.228 25.6101C110.296 25.8011 110.337 26.0114 110.34 26.2136C110.352 27.0012 110.344 27.7889 110.345 28.5759C110.345 28.6555 110.356 28.7351 110.362 28.8241C110.71 28.8241 111.038 28.8241 111.397 28.8241C111.397 28.7121 111.397 28.6107 111.397 28.5099C111.397 27.629 111.402 26.748 111.394 25.8677C111.392 25.6524 111.367 25.4341 111.319 25.2238C111.259 24.9587 111.133 24.7155 110.939 24.5214C110.401 23.9826 109.48 23.9515 108.913 24.2713C108.678 24.4044 108.476 24.5768 108.278 24.8598C108.27 24.5979 108.264 24.4057 108.258 24.201C107.898 24.201 107.558 24.201 107.176 24.201C107.175 24.2856 107.175 24.3459 107.175 24.4063ZM105.708 28.6667C105.709 27.6924 105.719 26.7182 105.701 25.7445C105.697 25.4925 105.631 25.2312 105.541 24.9942C105.471 24.8063 105.347 24.6209 105.201 24.4822C104.663 23.9702 103.728 23.9503 103.2 24.2931C102.988 24.4312 102.803 24.6103 102.589 24.7833C102.581 24.5942 102.572 24.4026 102.563 24.1854C102.198 24.1954 101.851 24.1668 101.486 24.2078C101.486 25.6674 101.486 27.1064 101.487 28.546C101.487 28.6182 101.495 28.6903 101.501 28.7619C101.501 28.7712 101.509 28.7806 101.515 28.7886C101.521 28.7967 101.529 28.8036 101.562 28.8353C101.702 28.8353 101.867 28.8409 102.032 28.8341C102.204 28.8272 102.382 28.8664 102.577 28.7949C102.577 28.6872 102.577 28.5858 102.577 28.4838C102.577 27.7273 102.574 26.9707 102.579 26.2142C102.581 26.0512 102.588 25.8789 102.641 25.7271C102.787 25.3034 103.127 24.9911 103.762 25.0415C104.145 25.072 104.413 25.2543 104.538 25.6083C104.606 25.7993 104.648 26.0095 104.651 26.2117C104.664 26.9994 104.656 27.787 104.657 28.5746C104.657 28.6543 104.667 28.7345 104.673 28.8247C105.02 28.8247 105.349 28.8247 105.694 28.8247C105.7 28.7656 105.708 28.7165 105.708 28.6667ZM90.7832 33.0049C90.7832 32.5812 90.7832 32.1712 90.7832 31.7457C90.4176 31.7264 90.0807 31.7258 89.7394 31.7426C89.7094 32.1787 89.7538 32.5912 89.7113 33.0142C89.5213 33.0242 89.3488 33.0329 89.1556 33.0422C89.1556 33.2755 89.155 33.4914 89.1563 33.7073C89.1569 33.7776 89.1631 33.8479 89.1669 33.9325C89.3531 33.9412 89.5263 33.9487 89.7288 33.958C89.7288 34.0756 89.7288 34.1764 89.7288 34.2772C89.7288 34.9709 89.7238 35.6652 89.7319 36.3588C89.7344 36.5536 89.7507 36.7545 89.8026 36.9405C89.9026 37.2958 90.1088 37.5733 90.4882 37.6803C90.8657 37.7867 91.247 37.7823 91.6264 37.6965C91.7639 37.6653 91.8933 37.6013 92.0308 37.5509C92.0308 37.3897 92.037 37.2554 92.0289 37.1222C92.0208 36.9853 92.0645 36.841 92.0001 36.7122C91.8389 36.7527 91.7008 36.8037 91.5589 36.8199C91.0457 36.8777 90.787 36.7097 90.782 36.1268C90.7763 35.4742 90.7801 34.8215 90.782 34.1689C90.782 34.0999 90.7988 34.0314 90.8107 33.9362C91.237 33.9362 91.6489 33.9362 92.0676 33.9362C92.0676 33.6295 92.0676 33.352 92.0676 33.0416C91.6345 33.0024 91.2201 33.0565 90.7832 33.0049ZM101.3 33.0111C100.8 33.153 100.527 33.5468 100.23 33.9854C100.19 33.6301 100.245 33.3303 100.191 33.0435C99.8423 33.0435 99.5129 33.0435 99.1729 33.0435C99.1686 33.1094 99.1629 33.1592 99.1629 33.2096C99.1648 34.6803 99.1673 36.1511 99.1704 37.6212C99.1704 37.6299 99.1773 37.6398 99.1836 37.6473C99.1898 37.6554 99.1979 37.6622 99.2004 37.6647C99.5348 37.6647 99.8642 37.6647 100.214 37.6647C100.214 37.5465 100.214 37.4445 100.214 37.3425C100.214 36.8559 100.207 36.3688 100.217 35.8823C100.22 35.6776 100.235 35.4673 100.286 35.2695C100.44 34.6641 100.792 34.233 101.432 34.0949C101.58 34.0632 101.733 34.0607 101.881 34.0451C101.881 33.6812 101.881 33.3408 101.881 32.9707C101.666 32.9576 101.486 32.9582 101.3 33.0111ZM119.497 28.8235C119.507 28.7837 119.52 28.755 119.52 28.7258C119.519 26.6323 119.517 24.5388 119.514 22.4453C119.514 22.4366 119.506 22.4273 119.499 22.4198C119.493 22.4117 119.485 22.4055 119.466 22.3881C119.147 22.3999 118.817 22.3675 118.479 22.4086C118.479 24.5481 118.479 26.6709 118.479 28.8241C118.836 28.8235 119.165 28.8235 119.497 28.8235ZM17.6309 15.8973C17.7846 15.8973 17.9184 15.8973 18.0802 15.8973C17.194 13.9873 16.3158 12.0972 15.4395 10.2097C15.2908 10.2097 15.1589 10.2097 15.0164 10.2097C14.137 12.0972 13.2601 13.9767 12.3788 15.8886C12.5506 15.8886 12.6794 15.8886 12.8 15.8886C13.0413 15.3653 13.2738 14.8602 13.5076 14.3525C14.6526 14.3525 15.7845 14.3525 16.9233 14.3525C17.1627 14.8751 17.3983 15.389 17.6309 15.8973ZM16.7114 13.8971C16.4514 13.9506 14.0426 13.9556 13.7169 13.9027C14.2088 12.8301 14.697 11.7656 15.2195 10.6265C15.7364 11.7607 16.2227 12.827 16.7114 13.8971ZM36.6485 11.7743C36.6485 11.4739 36.6541 11.1734 36.6466 10.8729C36.6398 10.5867 36.6766 10.2986 36.6204 10C36.5054 10.0056 36.4054 10.0106 36.2997 10.0156C36.2935 10.0759 36.2854 10.1157 36.2854 10.1562C36.2872 12.0518 36.2891 13.9481 36.2922 15.8438C36.2922 15.8531 36.2979 15.8631 36.3035 15.8711C36.3091 15.8798 36.3179 15.8861 36.3235 15.8917C36.426 15.8917 36.526 15.8917 36.6554 15.8917C36.6554 15.6241 36.6554 15.3716 36.6554 15.1034C36.8073 15.2453 36.9373 15.3622 37.0623 15.4848C37.7986 16.2021 38.9173 16.1922 39.6886 15.5203C40.2249 15.053 40.4287 14.4415 40.4018 13.7422C40.368 12.8693 39.9811 12.2254 39.1755 11.8496C38.5423 11.5541 37.6604 11.6331 37.1216 12.1781C36.9716 12.3299 36.8273 12.4873 36.6485 12.6752C36.6485 12.3504 36.6485 12.0624 36.6485 11.7743ZM39.7999 14.7612C39.5555 15.2328 39.1792 15.5041 38.653 15.6217C37.691 15.8357 36.6473 14.9771 36.6379 13.9394C36.6323 13.3403 36.8191 12.8469 37.2717 12.455C38.1386 11.7047 39.4067 12.0182 39.848 13.0734C39.9536 13.326 39.998 13.5879 39.983 13.8367C39.9899 14.1746 39.9468 14.4769 39.7999 14.7612ZM26.5712 13.5275C26.5693 13.3117 26.56 13.0908 26.5125 12.8818C26.3887 12.3361 26.0718 11.9523 25.5087 11.8098C25.1562 11.7208 24.8049 11.6792 24.4336 11.737C24.0599 11.7949 23.7117 11.9031 23.3536 12.068C23.403 12.1781 23.4467 12.2752 23.4848 12.361C23.5298 12.361 23.5411 12.3641 23.5505 12.3604C23.628 12.3318 23.7049 12.3007 23.7824 12.2721C24.2349 12.1066 24.6899 12.0176 25.1805 12.1016C25.8687 12.2198 26.2975 12.8283 26.1337 13.5263C25.6612 13.4062 25.1812 13.354 24.6918 13.3645C24.3749 13.3714 24.073 13.4261 23.7824 13.5456C23.298 13.7453 23.0117 14.0993 22.9773 14.6269C22.9398 15.1893 23.2167 15.593 23.7055 15.8226C24.2861 16.0945 24.8886 16.1001 25.4799 15.8151C25.7318 15.6938 25.9399 15.5171 26.1543 15.2708C26.1668 15.5128 26.1768 15.7038 26.1875 15.896C26.3212 15.896 26.4331 15.896 26.5743 15.896C26.5737 15.0823 26.5775 14.3046 26.5712 13.5275ZM25.2412 15.5514C24.7661 15.7156 24.3149 15.6994 23.8586 15.4717C23.3092 15.1974 23.1598 14.3108 23.8274 13.922C24.0161 13.8119 24.2186 13.7335 24.443 13.7248C24.9837 13.7036 25.5212 13.7086 26.0481 13.8542C26.0781 13.8622 26.1081 13.8697 26.1362 13.8828C26.1543 13.8909 26.1681 13.9089 26.1831 13.922C26.3168 14.7824 25.9068 15.3212 25.2412 15.5514ZM33.8859 13.4149C33.389 13.3303 32.8871 13.3235 32.4015 13.4473C31.8258 13.5941 31.3627 13.9126 31.327 14.643C31.307 15.058 31.4452 15.4083 31.7939 15.6658C32.4002 16.1138 33.3515 16.1455 33.9946 15.7168C34.174 15.5974 34.3315 15.4456 34.5309 15.2832C34.5309 15.4985 34.5309 15.6895 34.5309 15.8854C34.6709 15.8854 34.7778 15.8854 34.8959 15.8854C34.8959 14.9429 34.9284 14.0196 34.8859 13.0995C34.8516 12.3498 34.3815 11.8888 33.6153 11.747C33.2934 11.6872 32.9765 11.6872 32.6583 11.7532C32.3352 11.8198 32.0133 11.8932 31.7127 12.0798C31.7552 12.1831 31.7927 12.2733 31.8239 12.3511C31.8583 12.3585 31.8702 12.3654 31.8783 12.3623C31.9664 12.3324 32.0552 12.3025 32.1421 12.2689C32.604 12.0873 33.0771 12.002 33.5709 12.1115C33.9953 12.2055 34.3178 12.4295 34.4565 12.8544C34.5234 13.0591 34.5722 13.2743 34.514 13.5194C34.2947 13.4827 34.0903 13.4498 33.8859 13.4149ZM34.4772 14.7208C34.2909 15.2067 33.9146 15.473 33.4277 15.6036C33.1334 15.6826 32.8371 15.6876 32.5377 15.6092C32.2646 15.5383 32.0414 15.3983 31.8783 15.1731C31.6052 14.7967 31.6946 14.2617 32.0708 13.9873C32.2933 13.8249 32.5396 13.731 32.8202 13.7229C33.3909 13.7061 33.9571 13.7154 34.5247 13.894C34.5253 14.1739 34.5809 14.4508 34.4772 14.7208ZM44.5295 13.9842C44.8107 13.9842 45.092 13.9842 45.3732 13.9842C45.6651 13.9842 45.9564 13.9904 46.2483 13.9823C46.5239 13.9749 46.8033 14.0178 47.1089 13.9487C47.0771 13.6887 47.0671 13.4392 47.0133 13.2003C46.9083 12.7349 46.6852 12.3324 46.2926 12.0388C45.9464 11.7793 45.557 11.6704 45.1251 11.6866C44.5151 11.7096 44.0238 11.956 43.6575 12.4419C43.2969 12.9203 43.1825 13.4647 43.2206 14.0526C43.2638 14.7239 43.5438 15.2714 44.0976 15.6546C44.6395 16.0298 45.2382 16.1088 45.8795 15.9321C46.3139 15.8127 46.657 15.5775 46.9558 15.244C46.8839 15.1781 46.8327 15.1271 46.777 15.081C46.7539 15.0624 46.722 15.0543 46.6789 15.0344C46.0039 15.6602 45.2395 15.9128 44.3951 15.4002C43.9025 15.1016 43.6369 14.6256 43.6425 13.9836C43.9694 13.9842 44.2494 13.9842 44.5295 13.9842ZM43.6932 13.6625C43.5794 13.2886 43.8357 12.7107 44.2432 12.3629C44.6901 11.9815 45.3945 11.9541 45.8501 12.1924C46.2451 12.399 46.6752 12.995 46.6358 13.6625C45.6395 13.6625 44.6651 13.6625 43.6932 13.6625ZM50.0365 13.851C50.0359 15.0337 50.896 16.0198 52.1654 16.018C53.4229 16.0161 54.3048 15.0848 54.3123 13.8641C54.3205 12.511 53.2879 11.6655 52.1991 11.6885C50.9972 11.653 50.0372 12.6292 50.0365 13.851ZM51.1716 12.3629C51.8435 11.849 52.936 11.9293 53.5229 12.7188C54.0211 13.3894 54.0248 14.2977 53.5392 14.9728C53.0892 15.5993 52.2204 15.8357 51.5172 15.5147C50.796 15.1849 50.4897 14.5964 50.4497 13.9176C50.4616 13.2326 50.6835 12.7362 51.1716 12.3629ZM55.8424 15.57C55.8424 14.9274 55.8374 14.2847 55.8443 13.642C55.8474 13.3303 55.8924 13.0211 56.058 12.748C56.3656 12.2409 56.8181 12.007 57.4162 12.0394C57.9306 12.0668 58.3081 12.2864 58.52 12.7635C58.6181 12.9844 58.6625 13.2146 58.6619 13.4566C58.6588 14.1926 58.66 14.9286 58.6619 15.6646C58.6619 15.743 58.6763 15.8207 58.685 15.9103C58.8094 15.9035 58.91 15.8973 59.0157 15.8917C59.0219 15.8332 59.0294 15.7928 59.0294 15.7529C59.0294 14.9342 59.0244 14.1148 59.0288 13.2961C59.03 13.0634 58.9794 12.8457 58.8975 12.6317C58.7219 12.1719 58.3869 11.8795 57.9156 11.7563C57.7181 11.7047 57.5056 11.6897 57.3006 11.691C56.7706 11.6941 56.3331 11.895 56.0168 12.3318C55.9793 12.384 55.9249 12.4239 55.8349 12.5128C55.8349 12.2304 55.8349 12.0064 55.8349 11.7837C55.6993 11.7837 55.5924 11.7837 55.4874 11.7837C55.4355 12.59 55.458 15.6646 55.5174 15.901C55.6093 15.901 55.7018 15.901 55.8424 15.901C55.8424 15.7735 55.8424 15.6721 55.8424 15.57ZM20.5241 15.9421C20.7879 15.4804 22.321 12.0083 22.3648 11.7737C22.2417 11.7737 22.1198 11.7737 21.9829 11.7737C21.8748 12.0232 21.7679 12.2683 21.6616 12.5134C21.5548 12.7598 21.4485 13.0062 21.3423 13.2532C21.2404 13.4902 21.1404 13.7279 21.0385 13.9655C20.9329 14.2125 20.8354 14.4632 20.7172 14.704C20.6029 14.9379 20.5491 15.2036 20.3528 15.4412C19.8216 14.1963 19.304 12.9838 18.7884 11.7768C18.6303 11.7768 18.499 11.7768 18.3396 11.7768C18.964 13.1742 19.5778 14.5491 20.2003 15.9427C20.331 15.9421 20.4322 15.9421 20.5241 15.9421ZM41.6093 10.2532C41.6118 12.1184 41.6143 13.9842 41.6168 15.8494C41.6168 15.8581 41.6256 15.8674 41.6318 15.8749C41.6381 15.8823 41.6468 15.8879 41.6693 15.9072C41.7162 15.9072 41.7787 15.911 41.8406 15.906C41.8981 15.9016 41.9556 15.8886 42.0025 15.8811C42.0025 13.9139 42.0025 11.9685 42.0025 10.0124C41.875 10.0124 41.7625 10.0124 41.6087 10.0124C41.6093 10.1107 41.6093 10.1823 41.6093 10.2532ZM29.7964 10.2209C29.7989 12.0966 29.8007 13.9724 29.8039 15.8481C29.8039 15.8568 29.812 15.8662 29.8182 15.8736C29.8245 15.8811 29.8332 15.8873 29.8489 15.901C29.9614 15.8998 30.0839 15.9327 30.1901 15.878C30.1901 13.9145 30.1901 11.9691 30.1901 10.0131C30.0632 10.0131 29.9507 10.0131 29.7964 10.0131C29.7964 10.0995 29.7964 10.1599 29.7964 10.2209ZM28.32 15.8917C28.32 14.513 28.32 13.1493 28.32 11.7712C28.2557 11.7675 28.205 11.76 28.155 11.7625C28.0963 11.7656 28.0375 11.7775 27.9763 11.7855C27.9763 13.1586 27.9763 14.5149 27.9763 15.891C28.1113 15.8917 28.2119 15.8917 28.32 15.8917ZM78.334 23.3518C78.3283 22.7788 77.8914 22.3607 77.3489 22.3794C76.7964 22.398 76.3389 22.826 76.3589 23.3605C76.3801 23.9266 76.8533 24.3646 77.3389 24.3123C77.9639 24.359 78.3383 23.8022 78.334 23.3518ZM77.3477 24.2476C76.8289 24.2364 76.4714 23.8383 76.4632 23.3561C76.4545 22.8615 76.882 22.4335 77.3639 22.4453C77.8489 22.4571 78.2308 22.859 78.229 23.3549C78.2264 23.8445 77.8277 24.2576 77.3477 24.2476ZM27.9256 10.1549C27.9256 10.3341 27.9256 10.4952 27.9256 10.6638C28.0838 10.6638 28.225 10.6638 28.38 10.6638C28.38 10.4909 28.38 10.3291 28.38 10.1549C28.2075 10.1549 28.0663 10.1549 27.9256 10.1549ZM76.9833 23.7543C76.9833 23.7705 77.0058 23.786 77.0201 23.8047C77.0489 23.8047 77.0795 23.8047 77.1264 23.8047C77.142 23.7064 77.1583 23.6081 77.1727 23.5191C77.2858 23.4675 77.3702 23.4793 77.4358 23.5683C77.4852 23.6348 77.527 23.7076 77.5839 23.7667C77.637 23.8227 77.7052 23.8408 77.7727 23.7611C77.7145 23.6653 77.657 23.5695 77.5927 23.4625C77.7927 23.3312 77.8271 23.1558 77.7402 22.9461C77.5195 22.7632 77.262 22.8484 76.9827 22.8304C76.982 23.1576 76.9814 23.4557 76.9833 23.7543ZM77.1652 23.0046C77.2789 23.0046 77.3795 22.9946 77.477 23.0077C77.5533 23.0183 77.6008 23.0786 77.6002 23.1614C77.5996 23.2441 77.5521 23.3026 77.4752 23.3138C77.3852 23.3262 77.292 23.3169 77.1652 23.3169C77.1652 23.2031 77.1652 23.1166 77.1652 23.0046Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="row d-none d-md-block mc-mt-10">
      <div className="col">
        <div className="d-inline-flex align-items-center mc-my-4">
          <a className="mc-mr-4" href="index.html">
            <span
              aria-hidden="true"
              className="mc-icon mc-icon--placeholder"
              role="img"
            />
            <span className="mc-sr-only">MasterClass homepage</span>
          </a>
          <span className="mc-text-small mc-opacity--muted">
            © 2024 MasterClass
          </span>
          <div className="mc-mx-4 mc-text-small mc-opacity--muted d-flex align-items-center">
            <span
              aria-hidden="true"
              className="mc-icon mc-icon--3 mc-icon--placeholder"
              role="img"
            />
            <span>Secured with SSL</span>
          </div>
        </div>
      </div>
    </div>
    <div className="d-md-none mc-mt-10 mc-mb-4">
      <div className="row justify-content-center">
        <div className="col-auto">
          <a href="index.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={88}
              height={75}
              fill="none"
              className="mc-mb-4"
              alt=""
              viewBox="0 0 171 130"
            >
              <g fill="#FFFEF2" clipPath="url(#logo_svg__a)">
                <path d="M84.666 44.581 71.768.004h-35.8v7.158h3.398c4.236 0 7.748 2.467 9.036 7.029l19.719 67.935h17.962l8.802-30.157-.124-.11c-5.746 0-8.573-2.113-10.095-7.278M157.065 74.964c-4.224 0-7.623-2.81-8.911-7.154L128.439 0h-27.461l23.814 82.122h35.672v-7.158zM10.823 74.949v7.18h31.724v-7.18zM20.318 112.427l-6.116 17.242h-1.647l-6.497-17.242-1.604 13.295a5.6 5.6 0 0 0-.07.767c0 1.604.7 1.935 3.056 2.055v1.125H0v-1.125c1.838-.097 2.453-.451 2.647-1.891l2.029-16.036c.218-1.74-.616-2.25-2.741-2.386v-1.082h7.28c.07.7.218 1.249.479 1.961l5.251 13.997 4.867-14.035c.26-.701.451-1.219.506-1.919h7.155v1.082c-2.07.136-2.904.642-2.674 2.386l1.958 16.036c.19 1.51.864 1.794 2.647 1.891v1.125H19.002v-1.125c2.219-.124 2.99-.451 2.99-2.055 0-.191-.027-.521-.055-.767zm23.21 13.681c0 1.097.261 1.794 1.07 1.794.48 0 .931-.152 1.29-.315l.19.7c-.93 1.098-2.153 1.713-3.632 1.713-1.783 0-2.904-1.07-3.22-2.837-1.027 1.358-2.701 2.767-5.057 2.767-2.577 0-4.278-1.576-4.278-4.153 0-2.728 1.958-3.892 4.372-4.756l4.866-1.767v-2.713c0-1.865-.619-3.18-2.262-3.18-1.506 0-2.413.385-2.892 1.055 1 .233 1.576 1.027 1.576 2.027 0 1.386-.957 2.289-2.44 2.289-1.387 0-2.262-.903-2.262-2.316 0-2.701 2.768-4.056 6.376-4.056 4.088 0 6.307 1.483 6.307 5.278v8.47zm-4.399.288v-5.963l-2.768 1.098c-1.359.548-2.219 1.261-2.219 3.055 0 1.685.767 2.837 2.507 2.837.93 0 1.573-.358 2.48-1.027m7.47 2.028-.206-4.441h1.192c.712 2.794 2.316 4.892 4.8 4.892 1.74 0 3.029-.809 3.029-2.576 0-1.74-1.164-2.414-3.703-3.317-3.414-1.195-5.181-2.549-5.181-5.511 0-3.246 2.44-5.114 5.948-5.114 2.099 0 3.866.521 5.252 1.385v3.892h-1.098c-.549-2.288-1.865-4.18-4.154-4.18-1.63 0-2.604.958-2.604 2.386 0 1.44 1 2.153 3.48 3.083 3.469 1.191 5.497 2.506 5.497 5.659 0 3.414-2.534 5.414-6.497 5.414-2.449.004-4.438-.638-5.754-1.572m23.379-15.775v1.451H65.78v10.677c0 1.93.74 2.767 2.262 2.767.864 0 1.576-.288 2.37-.864l.425.549c-1.028 1.603-2.647 2.767-4.991 2.767-2.604 0-4.54-1.386-4.54-4.99v-10.91h-2v-.685c2.219-1.027 4.084-2.798 5.47-4.919h1v4.157zm15.256 6.398v.74H74.758c-.124 4.484 2.165 7.181 5.318 7.181 2.192 0 3.632-.958 4.8-2.631l.48.288c-.81 3.18-3.154 5.371-6.83 5.371-4.66 0-7.785-3.441-7.785-8.376 0-5.469 3.538-9.267 7.922-9.267 4.31.004 6.571 2.845 6.571 6.694m-10.378-.408h6.376c0-3.056-.794-5.115-2.892-5.115-2.126 0-3.25 2.153-3.484 5.115m42.792-9.914.07 5.142h-1.261c-.74-3.702-2.632-5.687-5.758-5.687-4.415 0-6.443 4.398-6.443 9.883 0 5.974 2.359 10.555 6.731 10.555 3.029 0 5.088-1.907 6.182-6.566h1.316l-.506 6.045c-1.865 1.191-4.388 1.903-7.405 1.903-6.992 0-11.31-4.371-11.31-11.007 0-7.5 4.992-12.202 11.31-12.202 2.862.004 5.236.7 7.074 1.934m8.113 18.476c0 1.125.479 1.316 2.001 1.413v1.055h-8.471v-1.055c1.479-.097 2.001-.288 2.001-1.413v-17.133l-1.931-1v-.674l5.688-1.549h.712zm11.808-.821v-5.947l-2.768 1.098c-1.316.506-2.196 1.249-2.196 3.055 0 1.674.782 2.837 2.484 2.837.93 0 1.573-.358 2.48-1.043m7.486 2.044-.191-4.441h1.191c.701 2.794 2.317 4.892 4.785 4.892 1.74 0 3.072-.809 3.072-2.576 0-1.74-1.196-2.414-3.742-3.317-3.414-1.195-5.181-2.549-5.181-5.511 0-3.246 2.441-5.114 5.991-5.114 2.056 0 3.827.521 5.209 1.385v3.892h-1.098c-.533-2.288-1.865-4.18-4.115-4.18-1.674 0-2.647.958-2.647 2.386 0 1.44 1.001 2.153 3.484 3.083 3.485 1.191 5.54 2.506 5.54 5.659 0 3.414-2.577 5.414-6.54 5.414-2.441.004-4.442-.638-5.758-1.572m13.941 0-.164-4.441h1.192c.7 2.794 2.343 4.892 4.8 4.892 1.728 0 3.056-.809 3.056-2.576 0-1.74-1.219-2.414-3.702-3.317-3.457-1.195-5.225-2.549-5.225-5.511 0-3.246 2.453-5.114 5.992-5.114 2.055 0 3.826.521 5.224 1.385v3.892h-1.098c-.522-2.288-1.88-4.18-4.126-4.18-1.674 0-2.605.958-2.605 2.386 0 1.44.958 2.153 3.442 3.083 3.511 1.191 5.512 2.506 5.512 5.659 0 3.414-2.55 5.414-6.513 5.414-2.414.004-4.442-.638-5.785-1.572m-17.001-2.316c0 1.097.245 1.794 1.055 1.794.479 0 .934-.152 1.289-.315l.19.7c-.934 1.098-2.152 1.713-3.632 1.713-1.767 0-2.908-1.07-3.223-2.837-1.028 1.358-2.702 2.767-5.057 2.767-2.578 0-4.279-1.576-4.279-4.153 0-2.728 1.962-3.892 4.372-4.756l4.866-1.767v-2.713c0-1.865-.615-3.18-2.246-3.18-1.522 0-2.429.385-2.908 1.055 1.001.233 1.577 1.027 1.577 2.027 0 1.386-.962 2.289-2.441 2.289-1.386 0-2.262-.903-2.262-2.316 0-2.701 2.768-4.056 6.377-4.056 4.099 0 6.318 1.483 6.318 5.278v8.47zm-48.23-11.626c0 1.576.933 2.576 2.343 2.576 1.55 0 2.522-1 2.522-2.413 0-1.452-.876-2.288-2.125-2.288-1.74 0-2.865 1.222-4.127 4.771l.125-4.771h-.74l-5.758 1.739v.604l1.931 1.163v11.335c0 1.124-.522 1.315-2 1.412v1.055h9.144v-1.055c-1.962-.163-2.702-.354-2.702-1.646v-8.263c.713-2.001 1.838-3.386 3.702-4.484z" />
              </g>
              <defs>
                <clipPath id="logo_svg__a">
                  <path fill="#fff" d="M0 0h171v130H0z" />
                </clipPath>
              </defs>
            </svg>
            <span className="mc-sr-only">MasterClass homepage</span>
          </a>
        </div>
      </div>
      <div className="mc-text--center mc-text-small mc-opacity--muted">
        <p>© 2024 MasterClass</p>
        <p className="mc-mt-2">
          <span
            aria-hidden="true"
            className="mc-icon mc-icon--3 mc-icon--placeholder"
            role="img"
          />
          <span>Secured with SSL</span>
        </p>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;
