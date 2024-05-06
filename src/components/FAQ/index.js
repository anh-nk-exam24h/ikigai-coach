import CollapseComponent from "./Collapse";

function FAQComponent() {
    const data = [
        {
            "title": "Ikigai Coach là gì?",
            "description": "Ikigai Coach là nền tảng phát trực tuyến cho phép bất kỳ ai cũng có thể xem hoặc nghe hàng trăm bài học video được dạy bởi hơn 200 người giỏi nhất trên thế giới. Cho dù là về kinh doanh và lãnh đạo, nhiếp ảnh, nấu ăn, viết lách, diễn xuất, âm nhạc, thể thao và nhiều hơn nữa, Ikigai Coach mang lại trải nghiệm học trực tuyến hàng đầu thế giới. Các bài học video có sẵn bất kỳ lúc nào, ở bất kỳ đâu trên điện thoại thông minh của bạn, máy tính cá nhân, Apple TV và các thiết bị phát truyền hình FireTV."
        },
        {
            "title": "Cái gì được bao gồm trong một thành viên Ikigai Coach?",
            "description": "Thành viên bao gồm quyền truy cập vào một danh mục tuyệt vời của hơn 200 lớp học được dạy bởi những người giỏi nhất trên thế giới về nấu ăn, lãnh đạo, nhiếp ảnh, viết lách và nhiều hơn nữa. Mỗi lớp học bao gồm khoảng 20 bài học video có độ dài trung bình 10 phút, cùng với một bài tập tài liệu sâu sắc. Bạn cũng có quyền truy cập vào ứng dụng điện thoại thông minh và TV của chúng tôi, các bài học ngoại tuyến, bản tin dành riêng cho thành viên của chúng tôi, và cộng đồng động viên của chúng tôi trên toàn thế giới."
        },
        {
            "title": "Tôi có thể xem ở đâu?",
            "description": "Với Ikigai Coach, bạn có thể học và được truyền cảm hứng bất kỳ lúc nào, ở bất kỳ đâu, bao gồm điện thoại thông minh của bạn, máy tính cá nhân, Apple TV, Amazon Fire TV và các thiết bị phát truyền hình Roku. Bạn có thể thậm chí tải xuống những bài học yêu thích của mình và xem trên máy bay hoặc nghe trong lúc đi làm chỉ trong chế độ âm thanh. **Chế độ âm thanh không có sẵn cho tất cả các lớp học."
        },
        {
            "title": "Các lớp học nào phù hợp với tôi?",
            "description": "Ikigai Coach cung cấp hơn 200 lớp học trên nhiều danh mục khác nhau, bao gồm kinh doanh và lãnh đạo, nhiếp ảnh, nấu ăn, viết lách, diễn xuất, âm nhạc, thể thao và nhiều hơn nữa. Mỗi lớp học đã được thiết kế để trở nên dễ tiếp cận cho người mới bắt đầu và sinh viên nâng cao. Với các lớp học mới được ra mắt thường xuyên, bạn có thể học được những kỹ năng thực tế, khơi nguồn đam mê mới và nhận được sự khôn ngoan hàng ngày. Hãy xem danh mục của chúng tôi và xem một vài video giới thiệu lớp học!"
        }
    ]
    return ( 

<section className="container mc-my-12" data-testid="faq-section" id="faq">
  <h2 className="mc-text-h2  mc-text--center">Câu hỏi thường gặp</h2>
  <div className="row">
    <div className="col-md-8 offset-md-2">
      <div data-accordion-component="Accordion" className="accordion">
        <div className="mc-mb-6 mc-mt-9">
          {/* <h3 className="mc-opacity--hinted mc-text--bold mc-mb-4">General</h3> */}
         {
            data.map((key, index) => (
                <div key={index}>
                    <CollapseComponent item={key}/>
                </div>
            ))
         }
        </div>
     
      </div>
    </div>
  </div>
</section>
     );
}

export default FAQComponent;