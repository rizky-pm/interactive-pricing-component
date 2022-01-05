import $ from 'jquery';

const calculateDiscount = (isDiscount) => {
    let currentPrice = parseInt($('.billing').html());

    if (!isDiscount) {
        $('.billing').text((currentPrice / 100) * 25);
    } else {
        $('.billing').text((currentPrice * 100) / 25);
    }
};

export default calculateDiscount;
