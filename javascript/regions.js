document.getElementById("region").addEventListener("change", function () {
    var region = this.value;
    var province = document.getElementById("province");
    province.innerHTML = "";
  
    if (region === "Bắc Bộ") {
      province.innerHTML = `
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hải Phòng">Hải Phòng</option>
        <option value="Quảng Ninh">Quảng Ninh</option>
        <option value="Nam Định">Nam Định</option>
      `;
    } else if (region === "Trung Bộ") {
      province.innerHTML = `
        <option value="Đà Nẵng">Đà Nẵng</option>
        <option value="Huế">Huế</option>
        <option value="Quảng Nam">Quảng Nam</option>
        <option value="Khánh Hòa">Khánh Hòa</option>
      `;
    } else if (region === "Nam Bộ") {
      province.innerHTML = `
        <option value="TP Hồ Chí Minh">TP Hồ Chí Minh</option>
        <option value="Cần Thơ">Cần Thơ</option>
        <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
        <option value="Đồng Nai">Đồng Nai</option>
      `;
    }
  });