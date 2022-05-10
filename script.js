$(document).ready(function () {
    $('#form_nhap').submit(function (e) {
        e.preventDefault();
        var so_tien = parseInt($('#so_tien').val());
        var so_nguoi = parseInt($('#so_nguoi').val());
        var so_ngay = parseInt($('#so_ngay').val());
        console.log(so_tien, so_nguoi, so_ngay);
        let tong_ngay = 30 * parseInt(so_nguoi) + parseInt(so_ngay);
        console.log(tong_ngay);
        let res = so_tien / tong_ngay;
        res = res * so_ngay;
        $('#tien_phai_tra').text(res.toLocaleString('en-US'));
    });
});