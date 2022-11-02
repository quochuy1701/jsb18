var numArray = []
var demArray = []
function themSo() {
    //lấy giá trị và đổi kiểu 
    var num = Number(document.getElementById("num").value)
    //thêm phần tử vào mảng
    numArray.push(num);
    // console.log(numArray);
    document.getElementById("txtThongbao").innerHTML = numArray;

}
document.querySelector("#btnTinh").onclick = themSo;
//baì 1
function tinhTong() {
    var tong = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] >= 0) {
            tong += numArray[i];
        }
    }
    document.getElementById("txtThongbao1").innerHTML = "Tổng số dương : " + tong
}
document.querySelector("#btnTinh1").onclick = tinhTong;
//bài 2
function demSoduong() {
    var count = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] >= 0) {
            count++;
        }
    }
    document.getElementById("txtThongbao2").innerHTML = "Số dương : " + count
}
document.querySelector("#btnTinh2").onclick = demSoduong;
//bài 3
function timMin() {
    var min = numArray[0]
    for (var i = 1; i < numArray.length; i++) {
        // kiểm tra số còn lại có lớn hơn max 
        if (numArray[i] < min) {
            min1 = numArray[i];
        }
    }
    document.getElementById("txtThongbaoo").innerHTML = "Số nhỏ nhất : " + min
}
document.querySelector("#btnTinhh").onclick = timMin;
//bài 4
function timSoduongnhonhat() {
    var min = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] >= 0) {
            min = numArray[i];
            break;
        } else {
            document.getElementById("txtThongbao3").innerHTML = "Không có số dương trong mảng"
            return;
        }
    }
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] >= 0 && numArray[i] < min) {
            min = numArray[i];
        }

    }
    document.getElementById("txtThongbao3").innerHTML = "Số dương nhỏ nhất : " + min
}
document.querySelector("#btnTinh3").onclick = timSoduongnhonhat;
//bài 5
function timSochancuoicung() {
    var soChancuoicung = 0
    for (var i = 1; i < numArray.length; i++) {
        // kiểm tra số còn lại có lớn hơn max 
        if (numArray[i] % 2 == 0) {
            soChancuoicung = numArray[i];
        }
        else {
            document.getElementById("txtThongbao4").innerHTML = "-1"
        }
    }
    document.getElementById("txtThongbao4").innerHTML = "Số chẵn cuối cùng : " + soChancuoicung
}
document.querySelector("#btnTinh4").onclick = timSochancuoicung;
//bài 6
function doiCho() {
    var viTri2 = Number(document.getElementById("num2").value)
    var viTri1 = Number(document.getElementById("num1").value)
    var tamp = numArray[viTri1]
    numArray[viTri1] = numArray[viTri2];
    numArray[viTri2] = tamp
    document.getElementById("txtThongbao5").innerHTML = "mảng sau khi đổi là : " + numArray;
}
document.querySelector("#btnTinh5").onclick = doiCho;
//bài 7
function sapXep() {
    // coppy mảng gốc qua mảng phụ => tránh thay đổi 
    var diemCopy = [];
    for (var i = 0; i < numArray.length; i++) {
        diemCopy.push(numArray[i])
    }
    for (var i = 0; i < diemCopy.length - 1; i++) {
        for (var j = 0; j < diemCopy.length; j++) {
            if (diemCopy[j] > diemCopy[j + 1]) {
                var tamp = diemCopy[j];
                diemCopy[j] = diemCopy[j + 1]
                diemCopy[j + 1] = tamp


            }
        }
    }
    document.getElementById("txtThongbao6").innerHTML = "mảng sau khi sắp xếp :" + diemCopy;


}
document.getElementById("btnTinh6").onclick = sapXep
//bài 8
function kiemtraSonguyento(soNguyento) {
    var kiemTra = true
    if (soNguyento < 2) {
        kiemTra = false
        return kiemTra
    } else if (soNguyento == 2) {
        kiemTra = true
        return kiemTra
    } else if (soNguyento % 2 == 0) {
        kiemTra = false
        return kiemTra
    }
    else {
        for (var i = 2; i <= soNguyento-1; i++) {
            if (soNguyento % i == 0) {
                kiemTra = false
                return kiemTra
            }else{
                return kiemTra
            }

        }
    }

}
function timSonguyento() {
    var ketqua = 0
    var kiemTra = true
    for (var i = 0; i < numArray.length; i++) {
        kiemTra = kiemtraSonguyento(numArray[i])
        if (kiemTra) {
            ketqua = numArray[i]
            document.getElementById("txtThongbao7").innerHTML = ketqua;
            break;
        } else {
            document.getElementById("txtThongbao7").innerHTML = "-1";
        }
    }
}
document.querySelector("#btnTinh7").onclick = timSonguyento;
//bài 9
function demSonguyen() {
    var countint = 0
    for (var i = 0; i < demArray.length; i++) {
        // kiểm tra số còn lại có lớn hơn max 
        if (Number.isInteger(demArray[i]) == true) {
            countint++;
        }
    }
    document.getElementById("txtThongbao8").innerHTML = "Số nguyên : " + countint
}
document.querySelector("#btnTinh8").onclick = demSonguyen;
function themSo1() {
    //lấy giá trị và đổi kiểu 
    var num = Number(document.getElementById("numm").value)
    //thêm phần tử vào mảng
    demArray.push(num);
    // console.log(numArray);
    document.getElementById("txtThongbao88").innerHTML = demArray;

}
document.querySelector("#btnTinh88").onclick = themSo1;
//bài 10
function soSanh() {
    var countduong = 0
    var countam = 0
    for (var i = 0; i < numArray.length; i++) {
        // kiểm tra số còn lại có lớn hơn max 
        if (numArray[i] >= 0) {
            countduong++;
        } else {
            countam++;
        }
    }
    if (countam > countduong) {
        document.getElementById("txtThongbao9").innerHTML = "Số âm > Số dương "
    } else if (countam < countduong) {
        document.getElementById("txtThongbao9").innerHTML = "Số âm < Số dương "
    } else {
        document.getElementById("txtThongbao9").innerHTML = "Số âm = Số dương "
    }
}
document.querySelector("#btnTinh9").onclick = soSanh;