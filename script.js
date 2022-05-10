$(document).ready(function () {
    $('#form_nhap').submit(function (e) {
        e.preventDefault();
        var so_tien = $('#so_tien').val();
        var so_nguoi = $('#so_nguoi').val();
        var so_ngay = $('#so_ngay').val();
        console.log(so_tien, so_nguoi, so_ngay);
        let res = so_ngay / 30;
        res = so_tien / ((so_nguoi * 30) + so_ngay) * so_ngay;
        $('#tien_phai_tra').text(res.toLocaleString('en-US'));
    });
});