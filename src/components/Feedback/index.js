
import Slider from "react-slick";
function FeedbackComponent() {
    var settings = {
        // dots: true,
        // infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return ( 
        <div className="mc-mt-10">
        <div className=" d-md-block">
         
    <Slider {...settings}>


         <div className="d-md-flex mc-mx-2 mc-mb-3 align-items-center justify-content-center flex-col-item">
                    <div className="StudentStory mc-bg-gray-200 d-flex flex-column mc-p-8 justify-content-between mc-corners-bottom-left--sm mc-corners-bottom-right--sm">
                      <blockquote>
                      "Tôi đã học được rất nhiều điều không thể đo được từ Timbaland và Natalie Portman. Điều đó đã mang lại cho tôi cảm giác của sự có thể. Như là tôi thực sự có thể làm được điều đó. Tôi có thể có một đĩa đơn được xếp hạng trên Billboard, và điều đó không phải là xa vời."
                      </blockquote>
                      <div className="mc-text-small">
                        <label className="mc-text--bold">Trung Kiên</label>
                        <label className="mc-ml-2 mc-opacity--muted">
                          Hàm Yên, Tuyên Quang
                        </label>
                      </div>
                    </div>
                    <div className="mc-corners--sm mc-overflow--hidden StudentStory_imageContainer___om4r">
                      <div className="mc-tile mc-tile--3x4">
                        <div className="mc-tile__content content">
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
                              src="https://hungnm-dev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMe.fd0a704f.jpg&w=3840&q=90"
                              decoding="async"
                              data-nimg="fill"
                              className="mc-tile-image"
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
                        </div>
                      </div>
                    </div>
                  </div>

         <div className="d-md-flex mc-mx-2 mc-mb-3 align-items-center justify-content-center flex-col-item">
                    <div className="StudentStory mc-bg-gray-200 d-flex flex-column mc-p-8 justify-content-between mc-corners-bottom-left--sm mc-corners-bottom-right--sm">
                      <blockquote>
                      "Tôi đã sắp từ bỏ ước mơ của mình khi tôi bắt đầu lớp học của Hans Zimmer. Đó giống như ai đó đã đánh tôi một cái tát vào mặt. Ông ấy nói, 'Bạn có đang lãng phí cuộc đời mình hay không?' Và từ đó, tôi nhận ra. Tôi không muốn lãng phí thêm một phút nào nữa của cuộc đời mình."
                      </blockquote>
                      <div className="mc-text-small">
                        <label className="mc-text--bold">Đức Thăng</label>
                        <label className="mc-ml-2 mc-opacity--muted">
                         Sóc Sơn, Hà Nội
                        </label>
                      </div>
                    </div>
                    <div className="mc-corners--sm mc-overflow--hidden StudentStory_imageContainer___om4r">
                      <div className="mc-tile mc-tile--3x4">
                        <div className="mc-tile__content content">
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
                              src="https://media.licdn.com/dms/image/D5603AQHj0fVHkpYbNg/profile-displayphoto-shrink_800_800/0/1689313518366?e=1720656000&v=beta&t=L42VOp54YQtN109gO4FepDs3pc-LuLrut3hBzRZLH64"
                              decoding="async"
                              data-nimg="fill"
                              className="mc-tile-image"
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
                        </div>
                      </div>
                    </div>
                  </div>
    </Slider>
                
        </div>
      </div>
     );
}

export default FeedbackComponent;