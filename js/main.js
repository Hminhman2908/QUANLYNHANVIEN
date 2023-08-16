var dsnv = [];

var jsonData = localStorage.getItem("DSNV");
console.log("🚀 ~ file: main.js:4 ~ jsonData:", jsonData);
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
}

function suaNV(id) {
  console.log("🚀 ~ file: main.js:9 ~ suaNV ~ id:", id);
}
function xoaNV(id) {
  console.log("🚀 ~ file: main.js:12 ~ xoaNV ~ id:", id);
}
