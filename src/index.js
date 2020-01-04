/**
 * @file demo示例
 * @author sikazhang
 */
export default class Himood {

    /**
     * 生成随机颜文字表情包
     *
     * @return {string} 表情包结果
     * @public
     */
    setFaceRandom() {
        // 生成1-10的随机整数
        const num = Math.floor(Math.random() * 10 + 1);
        let result = '';

        switch (num) {
            case 1:
                result = 'ヾ(*´▽‘*)ﾉ';
                break;
            case 2:
                result = '(ฅ´ω`ฅ)';
                break;
            case 3:
                result = '(ง •̀_•́)ง';
                break;
            case 4:
                result = '（//▽//）';
                break;
            case 5:
                result = '(/= _ =)/~┴┴';
                break;
            case 6:
                result = '[]~(￣▽￣)~*';
                break;
            case 7:
                result = '(=￣ω￣=)';
                break;
            case 8:
                result = '(“▔□▔)';
                break;
            case 9:
                result = '( ´･◡･` )';
                break;
            case 10:
                result = '彩蛋！新年快乐！';
                break;
            default:
                break;
        }

        return result;
    }
}
