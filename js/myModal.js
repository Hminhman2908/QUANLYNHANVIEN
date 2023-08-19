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
  this.tongLuongCB = function () {
    if (this.chucVu == SEP) {
      var tongLuong = this.luongCB * 3;
    } else if (this.chucVu == TRUONGPHONG) {
      var tongLuong = this.luongCB * 2;
    } else {
      var tongLuong = this.luongCB * 1;
    }
    return tongLuong;
  };
  this.xepLoai = function () {
    if (this.gioLam > 0 && this.gioLam < 160) {
      return "Trung bình";
    } else if (this.gioLam >= 160 && this.gioLam < 176) {
      return "Khá";
    } else if (this.gioLam >= 176 && this.gioLam < 192) {
      return "Giỏi";
    } else {
      return "Xuất sắc";
    }
  };
}
