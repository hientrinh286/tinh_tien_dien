function money(){
let power_last_month = +document.getElementById('power-last-month').value;
let power_this_month = +document.getElementById('power-this-month').value;
power = power_this_month - power_last_month;
if (power<=50) {
    level = 1;
    rate = 1678;
}
else if (power>=51 & power<=100) {
    level = 2;
    rate = 1734;
}
else if (power>=101 & power<=200){
    level = 3;
    rate = 2014;
}
else if (power>=201 & power<=300){
    level = 4;
    rate = 2536;
}
else if (power>=301 & power<=400){
    level = 5;
    rate = 2834;
}
else {
    level = 6;
    rate = 2927;
}
moneypaid = power*rate;
document.getElementById('power').innerHTML = 'Công suất tiêu thụ điện của bạn trong tháng 5 là: ' + power + ' (kW)';
document.getElementById('level').innerHTML = 'Công suất tiêu thụ điện của bạn thuộc bậc: '+ level;
document.getElementById('rate').innerHTML = 'Đơn giá tiền điện của bạn là: '+ rate + ' VNĐ';
document.getElementById('moneypaid').innerHTML = 'Tổng số tiền bạn phải trả tháng này là: ' + moneypaid + ' VND';
}