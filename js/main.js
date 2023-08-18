var dsnv = [];

var jsonData = localStorage.getItem("DSNV");
// console.log("🚀 ~ file: main.js:4 ~ jsonData:", jsonData);
if (jsonData != null) {
  var list = JSON.parse(jsonData);
  dsnv = list.map(function (item) {
    return new NhanVien(
      item.taiKhoan,
      item.hoVaTen,
      item.email,
      item.matKhau,
      item.ngayLam,
      item.luongCB,
      item.chucVu,
      item.gioLam
    );
  });
  renderDSNV(dsnv);
}

function themNV() {
  var nv = getDataForm();
  dsnv.push(nv);

  var jsonData = JSON.stringify(dsnv);
  localStorage.setItem("DSNV", jsonData);

  renderDSNV(dsnv);
  $("#myModal").modal("hide");
}

function xoaNV(id) {
  var index = timViTri(id, dsnv);
  dsnv.splice(index, 1);

  var jsonData = JSON.stringify(dsnv);
  localStorage.setItem("DSNV", jsonData);

  renderDSNV(dsnv);
}

function suaNV(id) {
  var index = timViTri(id, dsnv);
  var nv = dsnv[index];
  showDataForm(nv);
  document.getElementById("tknv").disabled = true;
  $("#myModal").modal("show");
}

function capNhatSv() {
  var nv = getDataForm();
  var index = timViTri(nv.taiKhoan, dsnv);
  dsnv[index] = nv;
  var jsonData = JSON.stringify(dsnv);
  localStorage.setItem("DSNV", jsonData);
  renderDSNV(dsnv);
  $("#myModal").modal("hide");
}
