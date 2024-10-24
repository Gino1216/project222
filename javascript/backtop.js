$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#backend').fadeIn();
        } else {
            $('#backend').fadeOut();
        }
    });
    $("#backend").click(function(){
        $('html, body').animate({scrollTop: 0},1000);
    });
  function randomPosition() {
    const banner = document.querySelector('.content_part4 a img');
    let randomX = Math.random() * 100 - 50; // Giới hạn di chuyển theo X (-50px đến 50px)
    let randomY = Math.random() * 100 - 50; // Giới hạn di chuyển theo Y (-50px đến 50px)
    banner.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }

  setInterval(randomPosition, 3000); // Thay đổi vị trí ngẫu nhiên mỗi 3 giây
});

function searchFunction() {
    // Lấy từ khóa người dùng nhập vào
    let query = document.getElementById('search_text').value.toLowerCase();
  
    // Tìm kiếm các phần tử bài viết (hoặc bất kỳ nội dung nào bạn muốn tìm kiếm)
    let articles = document.querySelectorAll('.content_part1_title, .content_part2_para, .content_part3_para, .content_part4');
    
    let found = false;
    articles.forEach(article => {
      let text = article.innerText.toLowerCase();
      
      if (text.includes(query)) {
        // Hiển thị các kết quả có chứa từ khóa
        article.style.display = 'block';
        found = true;
      } else {
        // Ẩn các kết quả không chứa từ khóa
        article.style.display = 'none';
      }
    });
  
    // Nếu không có kết quả, hiện thông báo
    if (!found) {
      alert("No results found.");
    }
  
    // Ngăn trang load lại
    return false;
  }