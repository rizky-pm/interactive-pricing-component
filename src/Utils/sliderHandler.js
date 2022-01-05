import $ from 'jquery';
import { pricing } from '../dataset';

const sliderHandler = (e, isDiscount) => {
    let x = e.target.value;
    let color = `linear-gradient(90deg, rgb(165, 243, 235) ${x}%, rgb(214, 214, 214) ${x}%)`;
    e.target.style.background = color;

    if (x < 20) {
        $('.pageviews').text(pricing[0].pageviews);
        $('.billing').text(pricing[0].price);
        if (isDiscount) {
            $('.billing').text(`${(pricing[0].price / 100) * 25}`);
        }
    } else if (x >= 20 && x < 40) {
        $('.pageviews').text(pricing[1].pageviews);
        $('.billing').text(pricing[1].price);
        if (isDiscount) {
            $('.billing').text(`${(pricing[1].price / 100) * 25}`);
        }
    } else if (x >= 40 && x < 60) {
        $('.pageviews').text(pricing[2].pageviews);
        $('.billing').text(pricing[2].price);
        if (isDiscount) {
            $('.billing').text(`${(pricing[2].price / 100) * 25}`);
        }
    } else if (x >= 60 && x < 80) {
        $('.pageviews').text(pricing[3].pageviews);
        $('.billing').text(pricing[3].price);
        if (isDiscount) {
            $('.billing').text(`${(pricing[3].price / 100) * 25}`);
        }
    } else if (x >= 80 && x < 100) {
        $('.pageviews').text(pricing[4].pageviews);
        $('.billing').text(pricing[4].price);
        if (isDiscount) {
            $('.billing').text(`${(pricing[4].price / 100) * 25}`);
        }
    }
};

export default sliderHandler;
