function getDataForm() {
  var taiKhoanNV = document.getElementById("tknv").value;
  var hoTenNV = document.getElementById("name").value;
  var emailNV = document.getElementById("email").value;
  var passNV = document.getElementById("password").value;
  var ngayLamNV = document.getElementById("datepicker").value;
  var luongCBNV = document.getElementById("luongCB").value;
  //
  var chucVuNV = document.getElementById("chucvu").value;
  //
  var gioLamNV = document.getElementById("gioLam").value;
  return new NhanVien(
    taiKhoanNV,
    hoTenNV,
    emailNV,
    passNV,
    ngayLamNV,
    luongCBNV,
    chucVuNV,
    gioLamNV
  );
}

function renderDSNV(list) {
  var createHTML = "";
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var contentTr = `
        <tr>
            <td>${item.taiKhoan}</td>
            <td>${item.hoVaTen}</td>
            <td>${item.email}</td>
            <td>${item.ngayLam}</td>
            <td>${item.chucVu}</td>

            <td>0đ</td>
            <td></td>
            <td>
                <div class="flex-row">
                    <button class="btn btn-warning col-5" onclick="suaNV('${item.taiKhoan}')"><i class="fa fa-edit"></i></button>
                    <button class="btn btn-danger col-5" onclick="xoaNV('${item.taiKhoan}')"><i class="fa fa-trash"></i></button>
                </div>
            </td>
        </tr>
    `;
    createHTML += contentTr;
  }
  document.getElementById("tableDanhSach").innerHTML = createHTML;
}

function timViTri(id, list) {
  return list.findIndex((item) => {
    return item.taiKhoan == id;
  });
}

function showDataForm(data) {
  document.getElementById("tknv").value = data.taiKhoan;
  document.getElementById("name").value = data.hoVaTen;
  document.getElementById("email").value = data.email;
  document.getElementById("password").value = data.matKhau;
  document.getElementById("datepicker").value = data.ngayLam;
  document.getElementById("luongCB").value = data.luongCB;
  //
  document.getElementById("chucvu").value = data.chucVu;
  //
  document.getElementById("gioLam").value = data.gioLam;
}
