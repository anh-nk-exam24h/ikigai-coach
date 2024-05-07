import { useState } from "react";

function ChoiceTypeLearningComponent() {
    const data = [

        "Chăm sóc sức khoẻ",
        "Nâng cao hành trình cuộc sống của bạn",
        "Mở khoá tiềm năng nghề nghiệp của bạn",
        "Trở thành một nhà đầu tư tài chính",
        "Cải thiện kỹ năng kinh doanh"
    ]
    const [pickUser, setPickUser] = useState([])
    const [isPlay, setIsPlay] = useState(false);
    const handlePickUser = (index) => {
        const check = pickUser.filter((item) => item == index);
        if(check == 0) setPickUser([...pickUser, index])
        else setPickUser(pickUser.filter((item) => item != index))
    }
    return ( 
        <>
          <div className="container">
  <div className="row no-gutters">
    <div className="col-12 col-md-7 col-lg-6">
      <div className="row no-gutters">
        <div className="col-12 col-lg-10">
          <div className="mc-mt-8 mc-mt-md-12">
            <div className="row no-gutters">
              <div className="col-12 col-md-9 col-lg-12">
                <h1 className="mc-text-d2 text-customer mc-text--brand mc-text--uppercase mc-p-0 mc-mb-2">
               trở thành phiên bản tốt nhất của chính bạn.
                </h1>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-9 col-lg-12">
                <p className="mc-p-0 mc-text--bold mc-text-color--medium">Coaching 1-1 với các chuyên gia hàng đầu
                </p>
              </div>
            </div>
            <div className="mc-my-6 Heading_underscore__6nQZ8" />
          </div>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-12 col-lg-10">
          <div className="mc-text-h5">
          Hôm nay bạn đến Ikigai Coach với mục đích gì?
          </div>
          <div className="mc-my-4">
            <div className="mc-corners--sm mc-overflow--hidden">
            
            {
                data.map((key, index) => {
        const check = pickUser.filter((item) => item == index).length > 0 ? true : false;
                    return (
                        <div className="mc-mb-1" key={index}>
                        <button
                          type="button"
                          className="c-button c-button--full-width c-button--secondary c-button--md CheckboxSelection_selection__tvLMQ mc-px-4 mc-py-sm-3 mc-py-2 CheckboxSelection_fullWidth__aaQnm justify-content-start mc-corners--0"
                          aria-checked="false"
                          onClick={() =>handlePickUser(index)}
                          style={{background: check ? '#303136' : ''}}
                        >
                          <div className="mc-input-checkbox">
                            <input
                              type="checkbox"
                              className="mc-input-checkbox__realbox"
                              aria-checked="false"
                              aria-labelledby="undefined-label"
                              readOnly=""
                            />
                            <span className="mc-input-checkbox__fauxbox mc-mr-3 flex-shrink-0" style={{background: check ? '#ef4562': ''}}>
                           {
                            check ? (
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                width={12}
                                height={12}
                                fill="white"
                              >
                                {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                              </svg>
                              
                            ) : null
                           }
                            </span>
                            <label id="undefined-label" />
                          </div>
                          {key}
                        </button>
                      </div>
                    )
                })
            }
             
            </div>
          </div>
          <div className="d-flex flex-wrap mc-mb-4 mc-mb-md-0">
            <a
              aria-disabled="true"
              role="link"
              type="button"
              className="c-button c-button--primary c-button--md  "
              style={{opacity: pickUser.length > 0 ? '1': '0.3'}}
            >
              Tiếp tục
            </a>
            <div />
          </div>
        </div>
      </div>
    </div>
    <div className="d-none d-md-block d-lg-none col-md-1" />
    <div className="col-12 col-md-4 col-lg-6" style={{ height: 690 }}>
      <div className="mc-overflow--hidden mc-h-100 Carousel_carouselContainer__pa9HK">
        <div
          id="hero-carousel"
          className="d-flex flex-column Carousel_imageLoopContent__RrKk2"
          style={{ animationPlayState: !isPlay ? "running" : "paused" }}
        >
          <div className="d-block d-md-none mc-h-100">
            <div className="CarouselItems_loopItem__31NGM group d-flex justify-content-center">
              <div>
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																	xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_01.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_01.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_01.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
              <div className="CarouselItems_loopItemSecondColumn__RKMQi">
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																		xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_07.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_07.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_07.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="CarouselItems_loopItem__31NGM group d-flex justify-content-center">
              <div>
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																			xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_02.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_02.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_02.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
              <div className="CarouselItems_loopItemSecondColumn__RKMQi">
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																				xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_08.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_08.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_08.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="CarouselItems_loopItem__31NGM group d-flex justify-content-center">
              <div>
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																					xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_03.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_03.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_03.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
              <div className="CarouselItems_loopItemSecondColumn__RKMQi">
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																						xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_09.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_09.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_09.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="CarouselItems_loopItem__31NGM group d-flex justify-content-center">
              <div>
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																							xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_04.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_04.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_04.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
              <div className="CarouselItems_loopItemSecondColumn__RKMQi">
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																								xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_10.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_10.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_10.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="CarouselItems_loopItem__31NGM group d-flex justify-content-center">
              <div>
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																									xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_05.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_05.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_05.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
              <div className="CarouselItems_loopItemSecondColumn__RKMQi">
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																										xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_11.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_11.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_11.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="CarouselItems_loopItem__31NGM group d-flex justify-content-center">
              <div>
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																											xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_06.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_06.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_06.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
              <div className="CarouselItems_loopItemSecondColumn__RKMQi">
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																												xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_12.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_12.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_12.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="CarouselItems_loopItem__31NGM group d-flex justify-content-center">
              <div>
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																													xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_01.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_01.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_01.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
              <div className="CarouselItems_loopItemSecondColumn__RKMQi">
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																														xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_07.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_07.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_07.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="CarouselItems_loopItem__31NGM group d-flex justify-content-center">
              <div>
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																															xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_02.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_02.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_02.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
              <div className="CarouselItems_loopItemSecondColumn__RKMQi">
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																																xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_08.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_08.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_08.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="CarouselItems_loopItem__31NGM group d-flex justify-content-center">
              <div>
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																																	xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_03.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_03.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_03.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
              <div className="CarouselItems_loopItemSecondColumn__RKMQi">
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																																		xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_09.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_09.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_09.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="CarouselItems_loopItem__31NGM group d-flex justify-content-center">
              <div>
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																																			xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_04.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_04.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_04.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
              <div className="CarouselItems_loopItemSecondColumn__RKMQi">
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																																				xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_10.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_10.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_10.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="CarouselItems_loopItem__31NGM group d-flex justify-content-center">
              <div>
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																																					xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_05.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_05.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_05.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
              <div className="CarouselItems_loopItemSecondColumn__RKMQi">
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																																						xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_11.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_11.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_11.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="CarouselItems_loopItem__31NGM group d-flex justify-content-center">
              <div>
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																																							xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_06.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_06.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_06.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
              <div className="CarouselItems_loopItemSecondColumn__RKMQi">
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																																								xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27172%27%20height=%27215%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="https://www.masterclass.com/cdn-cgi/image/width=256,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_12.png 1x, https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_12.png 2x"
                    src="cdn-cgi/image/width%3d384%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_12.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="d-none d-md-block d-lg-none mc-h-100">
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																								xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_01.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_01.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_01.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																									xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_02.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_02.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_02.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																										xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_03.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_03.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_03.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																											xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_04.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_04.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_04.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																												xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_05.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_05.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_05.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																													xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_06.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_06.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_06.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																														xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_07.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_07.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_07.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																															xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_08.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_08.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_08.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																																xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_09.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_09.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_09.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																																	xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_10.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_10.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_10.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																																		xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_11.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_11.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_11.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																																			xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_12.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_12.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_12.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																																				xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_01.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_01.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_01.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																																					xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_02.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_02.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_02.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																																						xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_03.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_03.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_03.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																																							xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_04.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_04.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_04.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																																								xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_05.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_05.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_05.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																																									xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_06.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_06.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_06.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																																										xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_07.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_07.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_07.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																																											xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_08.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_08.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_08.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																																												xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_09.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_09.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_09.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																																													xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_10.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_10.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_10.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																																														xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_11.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_11.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_11.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
            <div className="CarouselItems_loopItem__31NGM">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20
																																																															xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27444%27%20height=%27556%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  srcSet="https://www.masterclass.com/cdn-cgi/image/width=640,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_12.png 1x, https://www.masterclass.com/cdn-cgi/image/width=1080,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_12.png 2x"
                  src="cdn-cgi/image/width%3d1080%2cquality%3d75%2cformat%3dwebp/https_/static.masterclass.com/vertical_scroll_hero_image_cropped_12.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="mc-corners--md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </span>
            </div>
          </div>
          <div className="d-none d-lg-block mc-h-100">
            <div className="CarouselItems_loopItem__31NGM group d-flex justify-content-center">
              <div>
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																																																																	xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27285%27%20height=%27356%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    src="https://files.exam24h.com/images_danghoa/home/feature.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
              <div className="CarouselItems_loopItemSecondColumn__RKMQi">
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																																																																		xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27285%27%20height=%27356%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                   src="https://files.exam24h.com/images_danghoa/home/connect/connect1.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="CarouselItems_loopItem__31NGM group d-flex justify-content-center">
              <div>
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																																																																			xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27285%27%20height=%27356%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                   src="https://res.cloudinary.com/dhdfr7p4h/image/upload/v1715072128/photo1715070775_epwbsf.jpg"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
              <div className="CarouselItems_loopItemSecondColumn__RKMQi">
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																																																																				xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27285%27%20height=%27356%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                   src="https://ikigroup.vn/images/-bo-nhiem-gdkd-ikitech.jpg"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="CarouselItems_loopItem__31NGM group d-flex justify-content-center">
              <div>
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																																																																					xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27285%27%20height=%27356%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/316165220_106375962301029_8656949566433665720_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFbQxr1oi6SeUAb3rJHbGDlyjgxZgyyzbHKODFmDLLNsbs0dYx4Sm5W7MyOMTozCkwgGDpI3dhJ_gFWgZ-TX1uP&_nc_ohc=tngn-nM96zwQ7kNvgHtTfAz&_nc_ht=scontent.fhan17-1.fna&oh=00_AfB2Ja3Q3cXgvxUGg0hHT_xs2aycA55plrCke_n73YXwdA&oe=663F7BB3"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
              <div className="CarouselItems_loopItemSecondColumn__RKMQi">
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																																																																						xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27285%27%20height=%27356%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/437365972_7656734864433758_1065572721511050403_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGF5956EbU-kxh_vD3PKt2EvU7WILixwOu9TtYguLHA62smVmd7_dOekxVQt5dSEbVOxSYglb2iK6bkfcQmZG3v&_nc_ohc=yzvcrrmDlpoQ7kNvgEqiKxi&_nc_ht=scontent.fhan17-1.fna&oh=00_AfDYVoIlWhTCIyDfXq8TsKFfGbs8H-0hMm3lN0gAxWAyCA&oe=663F6661"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="CarouselItems_loopItem__31NGM group d-flex justify-content-center">
              <div>
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																																																																							xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27285%27%20height=%27356%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    src="https://res.cloudinary.com/dhdfr7p4h/image/upload/v1715072519/photo1715070688_xk1vqo.jpg"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
              <div className="CarouselItems_loopItemSecondColumn__RKMQi">
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																																																																								xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27285%27%20height=%27356%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    src="https://res.cloudinary.com/dhdfr7p4h/image/upload/v1715072344/photo1715070438_oiasg7.jpg"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="CarouselItems_loopItem__31NGM group d-flex justify-content-center">
              <div>
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																																																																									xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27285%27%20height=%27356%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    src="https://res.cloudinary.com/dhdfr7p4h/image/upload/v1715072521/photo1715070300_jnpikx.jpg"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
              <div className="CarouselItems_loopItemSecondColumn__RKMQi">
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																																																																										xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27285%27%20height=%27356%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                 src="https://res.cloudinary.com/dhdfr7p4h/image/upload/v1715072346/photo1715070900_eaimst.jpg"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="CarouselItems_loopItem__31NGM group d-flex justify-content-center">
              <div>
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																																																																											xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27285%27%20height=%27356%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    src="https://res.cloudinary.com/dhdfr7p4h/image/upload/v1715073070/photo1715070370_ygbwin.jpg"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
              <div className="CarouselItems_loopItemSecondColumn__RKMQi">
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20
																																																																												xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27285%27%20height=%27356%27/%3e"
                    />
                  </span>
                  <img
                    alt=""
                    src="https://res.cloudinary.com/dhdfr7p4h/image/upload/v1715073167/photo1715070765_skiq0r.jpg"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="mc-corners--md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
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
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </span>
              </div>
            </div>
            
          </div>
        </div>
        <button
          type="button"
          className="c-button c-button--tertiary c-button--sm position-absolute mc-corners--circle mc-p-2 Carousel_playPauseButton__UVgxo"
          aria-label="Pause carousel"
          onClick={() => setIsPlay(!isPlay)}
        >
         {
            !isPlay ? (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={25}
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
                role="img"
                className="mc-icon mc-icon--md Carousel_playPauseIcon__Fnes8"
              >
                <path fill="currentColor" d="M5.143 21.25V3.75h2.285v17.5z" />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M4 3.75c0-.69.512-1.25 1.143-1.25h2.286c.63 0 1.142.56 1.142 1.25v17.5c0 .69-.511 1.25-1.142 1.25H5.143C4.512 22.5 4 21.94 4 21.25z"
                  clipRule="evenodd"
                />
                <path fill="currentColor" d="M16.571 21.25V3.75h2.286v17.5z" />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M15.429 3.75c0-.69.511-1.25 1.143-1.25h2.285c.631 0 1.143.56 1.143 1.25v17.5c0 .69-.512 1.25-1.143 1.25h-2.285c-.632 0-1.143-.56-1.143-1.25z"
                  clipRule="evenodd"
                />
              </svg>
            ): (
                <svg
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={25}
  fill="none"
  viewBox="0 0 24 24"
  aria-hidden="true"
  role="img"
  className="mc-icon mc-icon--md Carousel_playPauseIcon__Fnes8"
>
  <path
    fill="currentColor"
    d="M7.791 2.695a1.25 1.25 0 0 0-1.92 1.055v17.5a1.25 1.25 0 0 0 1.92 1.055l13.75-8.75a1.25 1.25 0 0 0 0-2.11z"
  />
</svg>

            )
         }
        </button>
      </div>
    </div>
  </div>
</div>
        </>
     );
}

export default ChoiceTypeLearningComponent;