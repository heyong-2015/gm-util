import Big from 'big.js';

export default function getAllPriceWithAmount(amount, sale_ratio, sale_price, std_sale_price) {

    const integerPart = Big(parseInt(amount/sale_ratio, 10));
    const decimalPart = Big(amount).mod(sale_ratio);

    // 整数倍读取销售价 剩下的用单价
    return +integerPart.times(sale_price).plus(decimalPart.times(std_sale_price));
};