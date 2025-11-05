function About() {
    return (
       <div className="page-content">
        <h1>Giới thiệu</h1>
        <p>Thông tin liên hệ của chúng tôi. <strong>My Cat's Home</strong></p>
        <div className="about-page-container">
           <div className="about-page-info">
            <ul>
                <li>
                    Địa chỉ: Home Sweet Home
                </li>
                <li>
                    Tel: 0973655823
                </li>
                <li>Email: phuongcao4490@gmail.com</li>
            </ul>
            </div>
            <div className="about-page-img">
                <img src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=872" alt="Ảnh thông tin website" />
            </div>
        </div>
       </div>
    )
}
export default About;