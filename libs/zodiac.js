// 十二生肖

(function () {
    let mapping = [
        "子鼠",
        "丑牛",
        "寅虎",
        "卯兔",
        "辰龙",
        "巳蛇",
        "午马",
        "未羊",
        "申猴",
        "酉鸡",
        "戌狗",
        "亥猪"];
    let norm = 1960; //标的
    let undefinedText = "未知";


    function getZodiac(year) {
        if (isNaN(Number(year)) || String(year).length == 0) {
            return undefinedText;
        }
        let diff = Number(year) - norm;
        diff = Math.abs(diff);
        let remainder = diff % 12;

        return mapping[remainder];
    }

    var outPut = {
        getZodiac: getZodiac
    }

    if (typeof exports !== 'undefined' || (typeof module !== 'undefined' && module.exports)) {
        module.exports = outPut;
    } else if (typeof define === 'function' && define.amd) {
        define('Zodiac', [], function () {
            return outPut;
        });
    } else if (typeof define === 'function' && define.cmd) {
        define(function () {
            return outPut;
        })
    } else {
        this.Zodiac = outPut;
    }
}.call(this))