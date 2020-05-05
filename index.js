'use strict';

const idCard = require('idcard');
const zodiac = require('./libs/zodiac');
const alfy = require('alfy');

// let arg = process.argv.splice(2);
// console.log('arg', arg);
let idno = alfy.input;
// console.log('idno', idno, typeof idno);
let result_values = [];
if (typeof idno == "undefined") {

    idno = idCard.generateIdcard();
    result_values = [{
        title: "随机生成",
        subtitle: "身份证号：" + idno,
        arg: idno
    }];
} else {
    let info = idCard.info(idno);
    if (!info.valid) {
        result_values = [{
            title: "校验结果",
            subtitle: "无效",
            icon: {
                path: "./images/result.png"
            }
        }];
    } else {
        let birthday = info.birthday.toString();
        let zodiacValue = zodiac.getZodiac(info.birthday);
        birthday = birthday.slice(0, 4) + "/" + birthday.slice(4, 6) + "/" + birthday.slice(6,8);
        let gender = info.gender == "M" ? "男" : "女";
        result_values = [
            {
                title: "校验结果",
                subtitle: info.valid ? "正确" : "无效",
                arg: info.valid ? "正确" : "无效",
                icon: {
                    path: "./images/result.png"
                } 
            },
            {
                title: "户籍地址",
                subtitle: info.address,
                arg: info.address,
                icon: {
                    path: "./images/address.png"
                }
            },
            {
                title: "出生日期",
                subtitle: birthday,
                arg: birthday,
                icon: {
                    path: "./images/birthday.png"
                }
            },
            {
                title: "年龄",
                subtitle: info.age,
                arg: info.age,
                icon: {
                    path: "./images/age.png"
                }
            },
            {
                title: "生肖",
                subtitle: zodiacValue,
                arg: zodiacValue,
                icon: {
                    path: "./images/shuxiao.png"
                }
            },
            {
                title: "星座",
                subtitle: info.constellation,
                arg: info.constellation,
                icon: {
                    path: "./images/constellation.png"
                }
            },
            {
                title: "性别",
                subtitle: gender,
                arg: gender,
                icon: {
                    path: "./images/xingbie.png"
                }
            },
        ];
    }
}
alfy.output(result_values);
