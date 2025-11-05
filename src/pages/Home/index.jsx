// function Home() {
//     return (
//         <h1>Trang chủ</h1>
//     )
// }
// export default Home;

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Trang chủ</h1>
          <p>
            Nơi chia sẻ kiến thức, mẹo và dịch vụ giúp bạn chăm sóc người bạn
            bốn chân đáng yêu của mình khỏe mạnh và hạnh phúc mỗi ngày.
          </p>
          <a href="/news" className="hero-btn">Khám phá ngay</a>
        </div>
        <div className="hero-img">
          <img
            src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=900&q=80"
            alt="Hình ảnh mèo dễ thương"
          />
        </div>
      </section>

      <section className="services">
        <h2>Dịch vụ nổi bật</h2>
        <div className="service-grid">
          <div className="service-item">
            <h3>Chăm sóc sức khỏe</h3>
            <p>Kiểm tra sức khỏe định kỳ, tiêm phòng, tắm rửa, cắt tỉa lông an toàn cho mèo.</p>
          </div>
          <div className="service-item">
            <h3>Tư vấn dinh dưỡng</h3>
            <p>Xây dựng chế độ ăn khoa học, giúp mèo phát triển toàn diện qua từng giai đoạn.</p>
          </div>
          <div className="service-item">
            <h3>Huấn luyện mèo</h3>
            <p>Giúp mèo hình thành thói quen tốt, nghe lời và hòa đồng hơn với con người.</p>
          </div>
        </div>
      </section>
      
      <section className="about">
        <h2>Vì sao chọn chúng tôi?</h2>
        <p>
          Với đội ngũ bác sĩ thú y và chuyên gia huấn luyện có kinh nghiệm, chúng tôi cam kết mang đến
          dịch vụ tốt nhất cho mèo của bạn. Hơn 10 năm đồng hành cùng cộng đồng yêu mèo tại Việt Nam.
        </p>
      </section>
    </div>
  );
}

export default Home;