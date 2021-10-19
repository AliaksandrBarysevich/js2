/*Напишите скрипт, который по введенному дню (исп. значение переменной из 8
задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и
т.д.). Скрипт определение поры года написать через switch.*/

let day = 256;
let result = '';

if (day > 0 && day <= 31) {
    result = '1 месяц';
} else if (day > 31 && day <= 60) {
    result = '2 месяц';
} else if (day > 60 && day <= 91) {
    result = '3 месяц';
} else if (day > 91 && day <= 121) {
    result = '4 месяц';
} else if (day > 121 && day <= 152) {
    result = '5 месяц';
} else if (day > 152 && day <= 182) {
    result = '6 месяц';
} else if (day > 182 && day <= 213) {
    result = '7 месяц';
} else if (day > 213 && day <= 244) {
    result = '8 месяц';
} else if (day > 244 && day <= 274) {
    result = '9 месяц';
} else if (day > 274 && day <= 305) {
    result = '10 месяц';
} else if (day > 305 && day <= 335) {
    result = '11 месяц';
} else if (day > 335 && day <= 366) {
    result = '12 месяц';
}        

document.write(result);

document.write('<br>');

switch (true) {
    case (day > 0 && day <= 60 || day > 335 && day <= 366):
        document.write('Зима');
    break;
    case (day > 60 && day <= 152):
        document.write('Весна');
    break;
    case (day > 152 && day <= 244):
        document.write('Лето');
    break;
    case (day > 244 && day <= 366):
        document.write('Осень');
    break;
}