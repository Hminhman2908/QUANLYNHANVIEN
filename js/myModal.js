const NHANVIEN = "Nhân viên";
const SEP = "Sếp";
const TRUONGPHONG = "Trưởng phòng";

function NhanVien(
  _taiKhoan,
  _hoVaTen,
  _email,
  _matKhau,
  _ngayLam,
  _luongCB,
  _chuVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.hoVaTen = _hoVaTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCB = _luongCB;
  this.chucVu = _chuVu;
  this.gioLam = _gioLam;
  this.tongLuong = function () {
    if ((this.chucVu = NHANVIEN)) {
      var ketQua = this.luongCB * 1;
    } else if ((this.chucVu = TRUONGPHONG)) {
      var ketQua = this.luongCB * 2;
    } else if ((this.chucVu = SEP)) {
      var ketQua = this.luongCB * 3;
    } else {
      var ketQua = 0;
    }
    return ketQua;
  };
}
