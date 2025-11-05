function News() {
    const newsList = [
        {
            title: "Tips giúp chăm sóc mèo khỏe mạnh, ngoan ngoãn",
            summary: "Loài mèo cũng trải qua những giai đoạn sinh, bệnh, lão, tử như con người. Ở mỗi giai đoạn khác nhau, chế độ dinh dưỡng và tình trạng sức khỏe của mèo lại khác nhau. Cùng với đó, bạn cần lưu ý kết hợp tạo thói quen tốt trong sinh hoạt hàng ngày cho mèo. Dưới đây là những kiến thức về chế độ dinh dưỡng và cách huấn luyện thói quen tốt cho mèo.",
        },
         {
            title: "Duy trì tình trạng sức khỏe tốt khi chăm sóc mèo",
            summary: "Chăm sóc mèo không đơn thuần chỉ là chế độ dinh dưỡng thông thường hàng ngày. Mà bên cạnh đó, việc duy trì tình trạng sức khỏe tốt cũng là một trong những yếu tố giúp mèo kéo dài tuổi thọ. Và hơn nữa, công việc này nằm hoàn toàn trong khả năng thực hiện của bạn. Bởi lẽ việc đưa mèo đi kiểm tra sức khỏe tổng thể định kỳ, hay chải lông, tắm vệ sinh cho mèo là không quá khó khăn.",
        }, 
         {
            title: "Chăm sóc mèo với chế độ ăn uống đơn giản",
            summary: "Chế độ ăn uống cần được chia ra dựa theo từng giai đoạn phát triển của mèo. Dựa vào từng độ tuổi, hàm lượng dinh dưỡng sẽ được thay đổi phù hợp nhất với cơ thể mèo.",
        }
    ];
    return (
       <div className="page-content">
         <h1>Tin tức</h1>
         <div className="newslist">
            {newsList.map((item, index) => (
                <div key={index} className="new-item">
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                </div>
            ))}
         </div>
       </div>
        
    )
}
export default News;