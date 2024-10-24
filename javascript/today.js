document.getElementById('upload_images').addEventListener('change', function(event) {
    const feedback = document.getElementById('feedback_images');
    feedback.innerHTML = ''; // Clear previous images
  
    const files = event.target.files;
    if (files.length > 0) {
      Array.from(files).forEach(file => {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.style.width = '100px'; // Set thumbnail size
        img.style.margin = '10px';
        feedback.appendChild(img);
      });
    }
  });
  function checksend() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var region = document.getElementById("region").value;
    var province = document.getElementById("province").value;
    var message = document.getElementById("message").value;

    if (firstname === "" || lastname === "" || email === "" || phone === "" || region === "" || province === "" || message === "") {
        alert("Vui lòng điền đầy đủ thông tin!");
        return false;
    }

    alert("Thông tin đã được gửi thành công!");

    document.querySelector('form').reset();

    return true;
}