const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var show = $('.ask')
show.innerHTML = '<h1>Heading</h1>'
show.onclick = function () {
    console.log("clicked");
    // var html = `
    // <div class="answer">
    //                                         <span class="text">Trả lời</span>
    //                                         <div class="answer-detail">
    //                                             <p>HƯỚNG DẪN MUA VÉ ONLINE</p>
    //                                             <p><u>Điều kiện</u></p>
    //                                             <p>- Bạn phải là thành viên Lotocinema</p>
    //                                             <p>- Nếu không là thành viên vui lòng đăng ký thành viên trên website để
    //                                                 được mua vé</p>
    //                                             <p><u>Bước 2</u></p>
    //                                             <p>Đăng nhập</p>
    //                                             <p><u>Bước 3:</u></p>
    //                                             <p>- Chọn loại vé và số lượng:</p>
    //                                             <p><u>Bước 4:</u></p>
    //                                             <p>Chọn ghế:</p>
    //                                             <p>Chọn thức ăn:</p>
    //                                             <p><u>Bước 5:</u></p>
    //                                             <p>- Đồng ý</p>
    //                                             <p>- Đồng ý các điều khoản</p>
    //                                             <p>- Chọn loại thẻ thanh toán.</p>
    //                                             <p>- Thanh toán.</p>
    //                                             <p><u>Bước 6:</u> Nhập thông tin tài khoản để thanh toán việc mua
    //                                                 online.</p>
    //                                             <p>HOÀN TẤT</p>
    //                                         </div>
    //                                     </div>
    // `

    // $(".answer-wrap").innerHTML = html.join("\n");
}