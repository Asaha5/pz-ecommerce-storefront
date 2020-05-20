import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0px;
    background-color: #f2f3f7;
  }
    
  .alice-carousel {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    direction: ltr;
}

.alice-carousel__wrapper {
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    height: auto;
}

.alice-carousel__stage {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    white-space: nowrap;
}

.alice-carousel__stage-item {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    vertical-align: top;
    white-space: normal;
    line-height: 0;
}

.alice-carousel__stage-item * {
    line-height: initial;
}

.alice-carousel__stage-item.__cloned {
    visibility: hidden;
    opacity: 0;
}

.alice-carousel__prev-btn,
.alice-carousel__next-btn {
    display: inline-block;
    box-sizing: border-box;
    width: 50%;
    padding: 15px 10px;
}

.alice-carousel__prev-btn [data-area]::after,
.alice-carousel__next-btn [data-area]::after {
    position: relative;
    content: attr(data-area);
    text-transform: capitalize;
}

.alice-carousel__prev-btn {
    text-align: right;
}

.alice-carousel__prev-btn-item,
.alice-carousel__next-btn-item {
    display: inline-block;
    cursor: pointer;
    color: #465798;
}

.alice-carousel__prev-btn-item:hover,
.alice-carousel__next-btn-item:hover {
    color: darkred;
}

.alice-carousel__prev-btn-item.__inactive,
.alice-carousel__next-btn-item.__inactive {
    opacity: 0.4;
}

.alice-carousel__play-btn {
    position: absolute;
    top: 30px;
    left: 20px;
    display: inline-block;
}

.alice-carousel__play-btn:hover {
    cursor: pointer;
}

.alice-carousel__play-btn-wrapper {
    position: relative;
    width: 32px;
    height: 32px;
    padding: 10px;
    border-radius: 50%;
    background-color: #fff;
}

.alice-carousel__play-btn-item {
    position: absolute;
    width: 32px;
    height: 32px;
    cursor: pointer;
    border: 0;
    outline: none;
    background: transparent;
}

.alice-carousel__play-btn-item::before,
.alice-carousel__play-btn-item::after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    content: '';
    transition: all 0.3s linear;
    border-width: 8px 0 8px 15px;
    border-style: solid;
    border-color: transparent;
    border-left-color: #465798;
}

.alice-carousel__play-btn-item::before {
    left: 5px;
    height: 14px;
}

.alice-carousel__play-btn-item::after {
    top: 7px;
    left: 18px;
}

.alice-carousel__play-btn-item.__pause::before,
.alice-carousel__play-btn-item.__pause::after {
    height: 30px;
    border-width: 0 0 0 10px;
}

.alice-carousel__play-btn-item.__pause::after {
    top: 0;
    left: 18px;
}

.alice-carousel__dots {
    margin: 30px 3px 5px;
    padding: 0;
    list-style: none;
    text-align: center;
}

.alice-carousel__dots-item {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 15px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #e0e4fb;
}

.alice-carousel__dots-item:hover,
.alice-carousel__dots-item.__active {
    background-color: #6e7ebc;
}

.alice-carousel__slide-info {
    position: absolute;
    top: 20px;
    right: 20px;
    display: inline-block;
    padding: 5px 10px;
    color: #465798;
    border-radius: 5px;
    background-color: rgba(224, 228, 251, 0.6);
}

.alice-carousel__slide-info-item {
    vertical-align: middle;
    line-height: 0;
}

.alice-carousel .animated {
    animation-fill-mode: both;
}

.alice-carousel .animated-out {
    z-index: 1;
}

.alice-carousel .fadeOut {
    animation-name: fadeOut;
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        visibility: hidden;
    }
}

.📦w_100prcnt {
    width: 100%;
}

.📦box-szg_border-box {
    box-sizing: border-box;
}

.📦dspl_flex {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}

.📦pst_relative {
    position: relative;
}

.📦dspl_inline-flex {
    display: -webkit-inline-box;
    display: -moz-inline-box;
    display: -ms-inline-flexbox;
    display: -webkit-inline-flex;
    display: inline-flex;
}

.📦h_40px {
    height: 40px;
}

.📦w_40px {
    width: 40px;
}

.📦ptr-evts_none {
    pointer-events: none;
}

.📦pst_absolute {
    position: absolute;
}

.📦just-cnt_center {
    justify-content: center;
    -webkit-box-pack: center;
}

.📦algn-itms_center {
    align-items: center;
    -webkit-box-align: center;
}

.📦z-idx_3 {
    z-index: 3;
}

.📦w_16px {
    width: 16px;
}

.📦h_16px {
    height: 16px;
}

.📦color_425A70 {
    color: #425A70;
}

.📦fnt-fam_b77syt {
    font-family: "SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.📦fnt-sze_14px {
    font-size: 14px;
}

.📦f-wght_400 {
    font-weight: 400;
}

.📦ln-ht_20px {
    line-height: 20px;
}

.📦ltr-spc_-0-05px {
    letter-spacing: -0.05px;
}

.📦w_280px {
    width: 280px;
}

.📦pl_40px {
    padding-left: 40px;
}

.📦pr_13px {
    padding-right: 13px;
}

.📦bblr_3px {
    border-bottom-left-radius: 3px;
}

.📦bbrr_3px {
    border-bottom-right-radius: 3px;
}

.📦btlr_3px {
    border-top-left-radius: 3px;
}

.📦btrr_3px {
    border-top-right-radius: 3px;
}

.📦mt_0px {
    margin-top: 0px;
}

.📦f-wght_500 {
    font-weight: 500;
}

.📦ln-ht_38px {
    line-height: 38px;
}

.📦pt_0px {
    padding-top: 0px;
}

.📦pb_0px {
    padding-bottom: 0px;
}

.📦pr_19px {
    padding-right: 19px;
}

.📦pl_19px {
    padding-left: 19px;
}

.📦ml_0px {
    margin-left: 0px;
}

.📦mr_10px {
    margin-right: 10px;
}

.📦mb_0px {
    margin-bottom: 0px;
}

.📦h_38px {
    height: 38px;
}

.📦flx-wrap_nowrap {
    flex-wrap: nowrap;
    -webkit-box-lines: nowrap;
}

.📦ml_-4px {
    margin-left: -4px;
}

.📦mr_11px {
    margin-right: 11px;
}

.📦fnt-sze_12px {
    font-size: 12px;
}

.📦ln-ht_32px {
    line-height: 32px;
}

.📦ltr-spc_0 {
    letter-spacing: 0;
}

.📦pr_0px {
    padding-right: 0px;
}

.📦pl_0px {
    padding-left: 0px;
}

.📦mr_0px {
    margin-right: 0px;
}

.📦h_32px {
    height: 32px;
}

.📦w_32px {
    width: 32px;
}

.📦w_30px {
    width: 30px;
}

.📦h_30px {
    height: 30px;
}

.📦bs_1snwwdt {
    box-shadow: 0 0 1px rgba(67, 90, 111, 0.3), 0 5px 8px -4px rgba(67, 90, 111, 0.47);
}

.📦flt_left {
    float: left;
}

.📦w_400px {
    width: 400px;
}

.📦h_500px {
    height: 500px;
}

.📦mb_24px {
    margin-bottom: 24px;
}

.📦ml_24px {
    margin-left: 24px;
}

.📦mr_24px {
    margin-right: 24px;
}

.📦mt_24px {
    margin-top: 24px;
}

.📦just-cnt_space-around {
    justify-content: space-around;
    -webkit-box-pack: justify;
}

.📦flx-drct_column {
    flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
}

.📦pb_3px {
    padding-bottom: 3px;
}

.📦pl_3px {
    padding-left: 3px;
}

.📦pr_3px {
    padding-right: 3px;
}

.📦pt_3px {
    padding-top: 3px;
}

.📦color_084B8A {
    color: #084B8A;
}

.📦fnt-sze_16px {
    font-size: 16px;
}

.📦f-wght_600 {
    font-weight: 600;
}

.📦pb_1px {
    padding-bottom: 1px;
}

.📦pl_1px {
    padding-left: 1px;
}

.📦pr_1px {
    padding-right: 1px;
}

.📦pt_1px {
    padding-top: 1px;
}

.📦mt_16px {
    margin-top: 16px;
}

.📦color_234361 {
    color: #234361;
}

@-webkit-keyframes loading_ng405l {
    0% {
        transform: rotate(0);
        -webkit-transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
}

@-moz-keyframes loading_ng405l {
    0% {
        transform: rotate(0);
        -webkit-transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
}

@-o-keyframes loading_ng405l {
    0% {
        transform: rotate(0);
        -webkit-transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
}

@keyframes loading_ng405l {
    0% {
        transform: rotate(0);
        -webkit-transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
}

@-webkit-keyframes loading-circle_fv6wzy {
    0% {
        stroke-dashoffset: 600;
    }
    100% {
        stroke-dashoffset: 0;
    }
}

@-moz-keyframes loading-circle_fv6wzy {
    0% {
        stroke-dashoffset: 600;
    }
    100% {
        stroke-dashoffset: 0;
    }
}

@-o-keyframes loading-circle_fv6wzy {
    0% {
        stroke-dashoffset: 600;
    }
    100% {
        stroke-dashoffset: 0;
    }
}

@keyframes loading-circle_fv6wzy {
    0% {
        stroke-dashoffset: 600;
    }
    100% {
        stroke-dashoffset: 0;
    }
}

.css-11r1ktn,
[data-css-11r1ktn] {
    animation: loading_ng405l 2s linear infinite;
    -webkit-animation: loading_ng405l 2s linear infinite;
}

@-webkit-keyframes openAnimation_158oy86 {
    from {
        opacity: 0;
        transform: translateY(-120%);
        -webkit-transform: translateY(-120%);
    }
    to {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
}

@-moz-keyframes openAnimation_158oy86 {
    from {
        opacity: 0;
        transform: translateY(-120%);
        -webkit-transform: translateY(-120%);
    }
    to {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
}

@-o-keyframes openAnimation_158oy86 {
    from {
        opacity: 0;
        transform: translateY(-120%);
        -webkit-transform: translateY(-120%);
    }
    to {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
}

@keyframes openAnimation_158oy86 {
    from {
        opacity: 0;
        transform: translateY(-120%);
        -webkit-transform: translateY(-120%);
    }
    to {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
}

@-webkit-keyframes closeAnimation_1olw4g9 {
    from {
        transform: scale(1);
        opacity: 1;
        -webkit-transform: scale(1);
    }
    to {
        transform: scale(0.9);
        opacity: 0;
        -webkit-transform: scale(0.9);
    }
}

@-moz-keyframes closeAnimation_1olw4g9 {
    from {
        transform: scale(1);
        opacity: 1;
        -webkit-transform: scale(1);
    }
    to {
        transform: scale(0.9);
        opacity: 0;
        -webkit-transform: scale(0.9);
    }
}

@-o-keyframes closeAnimation_1olw4g9 {
    from {
        transform: scale(1);
        opacity: 1;
        -webkit-transform: scale(1);
    }
    to {
        transform: scale(0.9);
        opacity: 0;
        -webkit-transform: scale(0.9);
    }
}

@keyframes closeAnimation_1olw4g9 {
    from {
        transform: scale(1);
        opacity: 1;
        -webkit-transform: scale(1);
    }
    to {
        transform: scale(0.9);
        opacity: 0;
        -webkit-transform: scale(0.9);
    }
}

.css-1yiw7zu,
[data-css-1yiw7zu] {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 0;
    transition: all 240ms cubic-bezier(0.0, 0.0, 0.2, 1);
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -webkit-transition: all 240ms cubic-bezier(0.0, 0.0, 0.2, 1);
    -moz-transition: all 240ms cubic-bezier(0.0, 0.0, 0.2, 1);
}

.css-1yiw7zu[data-state="entering"],
[data-css-1yiw7zu][data-state="entering"],
.css-1yiw7zu[data-state="entered"],
[data-css-1yiw7zu][data-state="entered"] {
    animation: openAnimation_158oy86 240ms cubic-bezier(0.175, 0.885, 0.320, 1.175) both;
    -webkit-animation: openAnimation_158oy86 240ms cubic-bezier(0.175, 0.885, 0.320, 1.175) both;
}

.css-1yiw7zu[data-state="exiting"],
[data-css-1yiw7zu][data-state="exiting"] {
    animation: closeAnimation_1olw4g9 120ms cubic-bezier(0.4, 0.0, 1, 1) both;
    -webkit-animation: closeAnimation_1olw4g9 120ms cubic-bezier(0.4, 0.0, 1, 1) both;
}

.css-1sugtjn,
[data-css-1sugtjn] {
    max-width: 560px;
    margin: 0 auto;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 30;
    pointer-events: none;
}

.css-q4k7k7,
[data-css-q4k7k7] {
    border: none;
    background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-font-smoothing: antialiased;
}

.css-q4k7k7:focus,
[data-css-q4k7k7]:focus,
.css-q4k7k7[data-simulate-focus],
[data-css-q4k7k7][data-simulate-focus] {
    outline: none;
}

.css-q4k7k7::placeholder,
[data-css-q4k7k7]::placeholder,
.css-q4k7k7[data-simulate-placeholder],
[data-css-q4k7k7][data-simulate-placeholder] {
    color: rgba(67, 90, 111, 0.7);
}

.css-1ktdej1,
[data-css-1ktdej1] {
    top: 0;
    position: absolute;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
}

@-webkit-keyframes openAnimation_u4xxlz {
    from {
        transform: translateY(100%);
        -webkit-transform: translateY(100%);
    }
    to {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
}

@-moz-keyframes openAnimation_u4xxlz {
    from {
        transform: translateY(100%);
        -webkit-transform: translateY(100%);
    }
    to {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
}

@-o-keyframes openAnimation_u4xxlz {
    from {
        transform: translateY(100%);
        -webkit-transform: translateY(100%);
    }
    to {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
}

@keyframes openAnimation_u4xxlz {
    from {
        transform: translateY(100%);
        -webkit-transform: translateY(100%);
    }
    to {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
}

@-webkit-keyframes fadeInAnimation_1ont4t {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@-moz-keyframes fadeInAnimation_1ont4t {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@-o-keyframes fadeInAnimation_1ont4t {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeInAnimation_1ont4t {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@-webkit-keyframes fadeOutAnimation_1q9hkiq {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

@-moz-keyframes fadeOutAnimation_1q9hkiq {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

@-o-keyframes fadeOutAnimation_1q9hkiq {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

@keyframes fadeOutAnimation_1q9hkiq {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

@-webkit-keyframes openAnimation_1cql8cr {
    from {
        transform: scale(0.8);
        opacity: 0;
        -webkit-transform: scale(0.8);
    }
    to {
        transform: scale(1);
        opacity: 1;
        -webkit-transform: scale(1);
    }
}

@-moz-keyframes openAnimation_1cql8cr {
    from {
        transform: scale(0.8);
        opacity: 0;
        -webkit-transform: scale(0.8);
    }
    to {
        transform: scale(1);
        opacity: 1;
        -webkit-transform: scale(1);
    }
}

@-o-keyframes openAnimation_1cql8cr {
    from {
        transform: scale(0.8);
        opacity: 0;
        -webkit-transform: scale(0.8);
    }
    to {
        transform: scale(1);
        opacity: 1;
        -webkit-transform: scale(1);
    }
}

@keyframes openAnimation_1cql8cr {
    from {
        transform: scale(0.8);
        opacity: 0;
        -webkit-transform: scale(0.8);
    }
    to {
        transform: scale(1);
        opacity: 1;
        -webkit-transform: scale(1);
    }
}

@-webkit-keyframes closeAnimation_1y9xgi8 {
    from {
        transform: scale(1);
        opacity: 1;
        -webkit-transform: scale(1);
    }
    to {
        transform: scale(0.8);
        opacity: 0;
        -webkit-transform: scale(0.8);
    }
}

@-moz-keyframes closeAnimation_1y9xgi8 {
    from {
        transform: scale(1);
        opacity: 1;
        -webkit-transform: scale(1);
    }
    to {
        transform: scale(0.8);
        opacity: 0;
        -webkit-transform: scale(0.8);
    }
}

@-o-keyframes closeAnimation_1y9xgi8 {
    from {
        transform: scale(1);
        opacity: 1;
        -webkit-transform: scale(1);
    }
    to {
        transform: scale(0.8);
        opacity: 0;
        -webkit-transform: scale(0.8);
    }
}

@keyframes closeAnimation_1y9xgi8 {
    from {
        transform: scale(1);
        opacity: 1;
        -webkit-transform: scale(1);
    }
    to {
        transform: scale(0.8);
        opacity: 0;
        -webkit-transform: scale(0.8);
    }
}

.css-17kak1e,
[data-css-17kak1e] {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    position: relative;
    -webkit-flex: 1;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
}

.css-3grw6g,
[data-css-3grw6g] {
    position: relative;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex: 1;
    cursor: pointer;
    margin-left: -1px;
    -webkit-flex: 1;
}

.css-3grw6g:first-child .css-17kak1e,
[data-css-3grw6g]:first-child .css-17kak1e {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}

.css-3grw6g:last-child .css-17kak1e,
[data-css-3grw6g]:last-child .css-17kak1e {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}

.css-87b09r,
[data-css-87b09r] {
    overflow: hidden;
    position: absolute;
    height: 1px;
    width: 1px;
    padding: 0;
    margin: -1px;
    border: 0;
    clip: rect(0 0 0 0);
}

@-webkit-keyframes rotate360InAnimation_e4x7vx {
    from {
        transform: translateX(100%) rotate(0deg);
        -webkit-transform: translateX(100%) rotate(0deg);
    }
    to {
        transform: translateX(-100%) rotate(-360deg);
        -webkit-transform: translateX(-100%) rotate(-360deg);
    }
}

@-moz-keyframes rotate360InAnimation_e4x7vx {
    from {
        transform: translateX(100%) rotate(0deg);
        -webkit-transform: translateX(100%) rotate(0deg);
    }
    to {
        transform: translateX(-100%) rotate(-360deg);
        -webkit-transform: translateX(-100%) rotate(-360deg);
    }
}

@-o-keyframes rotate360InAnimation_e4x7vx {
    from {
        transform: translateX(100%) rotate(0deg);
        -webkit-transform: translateX(100%) rotate(0deg);
    }
    to {
        transform: translateX(-100%) rotate(-360deg);
        -webkit-transform: translateX(-100%) rotate(-360deg);
    }
}

@keyframes rotate360InAnimation_e4x7vx {
    from {
        transform: translateX(100%) rotate(0deg);
        -webkit-transform: translateX(100%) rotate(0deg);
    }
    to {
        transform: translateX(-100%) rotate(-360deg);
        -webkit-transform: translateX(-100%) rotate(-360deg);
    }
}

@-webkit-keyframes rotate360OutAnimation_1swhwyo {
    from {
        transform: translateX(-100%) rotate(0deg);
        -webkit-transform: translateX(-100%) rotate(0deg);
    }
    to {
        transform: translateX(100%) rotate(360deg);
        -webkit-transform: translateX(100%) rotate(360deg);
    }
}

@-moz-keyframes rotate360OutAnimation_1swhwyo {
    from {
        transform: translateX(-100%) rotate(0deg);
        -webkit-transform: translateX(-100%) rotate(0deg);
    }
    to {
        transform: translateX(100%) rotate(360deg);
        -webkit-transform: translateX(100%) rotate(360deg);
    }
}

@-o-keyframes rotate360OutAnimation_1swhwyo {
    from {
        transform: translateX(-100%) rotate(0deg);
        -webkit-transform: translateX(-100%) rotate(0deg);
    }
    to {
        transform: translateX(100%) rotate(360deg);
        -webkit-transform: translateX(100%) rotate(360deg);
    }
}

@keyframes rotate360OutAnimation_1swhwyo {
    from {
        transform: translateX(-100%) rotate(0deg);
        -webkit-transform: translateX(-100%) rotate(0deg);
    }
    to {
        transform: translateX(100%) rotate(360deg);
        -webkit-transform: translateX(100%) rotate(360deg);
    }
}

@-webkit-keyframes leftRotate360InAnimation_1uxpfmf {
    from {
        transform: translateX(-100%) rotate(0deg);
        -webkit-transform: translateX(-100%) rotate(0deg);
    }
    to {
        transform: translateX(100%), rotate(360deg);
        -webkit-transform: translateX(100%), rotate(360deg);
    }
}

@-moz-keyframes leftRotate360InAnimation_1uxpfmf {
    from {
        transform: translateX(-100%) rotate(0deg);
        -webkit-transform: translateX(-100%) rotate(0deg);
    }
    to {
        transform: translateX(100%), rotate(360deg);
        -webkit-transform: translateX(100%), rotate(360deg);
    }
}

@-o-keyframes leftRotate360InAnimation_1uxpfmf {
    from {
        transform: translateX(-100%) rotate(0deg);
        -webkit-transform: translateX(-100%) rotate(0deg);
    }
    to {
        transform: translateX(100%), rotate(360deg);
        -webkit-transform: translateX(100%), rotate(360deg);
    }
}

@keyframes leftRotate360InAnimation_1uxpfmf {
    from {
        transform: translateX(-100%) rotate(0deg);
        -webkit-transform: translateX(-100%) rotate(0deg);
    }
    to {
        transform: translateX(100%), rotate(360deg);
        -webkit-transform: translateX(100%), rotate(360deg);
    }
}

@-webkit-keyframes leftRotate360OutAnimation_znl0n0 {
    from {
        transform: translateX(100%) rotate(0deg);
        -webkit-transform: translateX(100%) rotate(0deg);
    }
    to {
        transform: translateX(-100%), rotate(360deg);
        -webkit-transform: translateX(-100%), rotate(360deg);
    }
}

@-moz-keyframes leftRotate360OutAnimation_znl0n0 {
    from {
        transform: translateX(100%) rotate(0deg);
        -webkit-transform: translateX(100%) rotate(0deg);
    }
    to {
        transform: translateX(-100%), rotate(360deg);
        -webkit-transform: translateX(-100%), rotate(360deg);
    }
}

@-o-keyframes leftRotate360OutAnimation_znl0n0 {
    from {
        transform: translateX(100%) rotate(0deg);
        -webkit-transform: translateX(100%) rotate(0deg);
    }
    to {
        transform: translateX(-100%), rotate(360deg);
        -webkit-transform: translateX(-100%), rotate(360deg);
    }
}

@keyframes leftRotate360OutAnimation_znl0n0 {
    from {
        transform: translateX(100%) rotate(0deg);
        -webkit-transform: translateX(100%) rotate(0deg);
    }
    to {
        transform: translateX(-100%), rotate(360deg);
        -webkit-transform: translateX(-100%), rotate(360deg);
    }
}

@-webkit-keyframes topRotate360InAnimation_1iarriy {
    from {
        transform: translateY(-200%) rotate(0deg);
        -webkit-transform: translateY(-200%) rotate(0deg);
    }
    to {
        transform: translateY(0%), rotate(360deg);
        -webkit-transform: translateY(0%), rotate(360deg);
    }
}

@-moz-keyframes topRotate360InAnimation_1iarriy {
    from {
        transform: translateY(-200%) rotate(0deg);
        -webkit-transform: translateY(-200%) rotate(0deg);
    }
    to {
        transform: translateY(0%), rotate(360deg);
        -webkit-transform: translateY(0%), rotate(360deg);
    }
}

@-o-keyframes topRotate360InAnimation_1iarriy {
    from {
        transform: translateY(-200%) rotate(0deg);
        -webkit-transform: translateY(-200%) rotate(0deg);
    }
    to {
        transform: translateY(0%), rotate(360deg);
        -webkit-transform: translateY(0%), rotate(360deg);
    }
}

@keyframes topRotate360InAnimation_1iarriy {
    from {
        transform: translateY(-200%) rotate(0deg);
        -webkit-transform: translateY(-200%) rotate(0deg);
    }
    to {
        transform: translateY(0%), rotate(360deg);
        -webkit-transform: translateY(0%), rotate(360deg);
    }
}

@-webkit-keyframes topRotate360OutAnimation_w5ju0m {
    from {
        transform: translateY(0%) rotate(0deg);
        -webkit-transform: translateY(0%) rotate(0deg);
    }
    to {
        transform: translateY(-200%), rotate(360deg);
        -webkit-transform: translateY(-200%), rotate(360deg);
    }
}

@-moz-keyframes topRotate360OutAnimation_w5ju0m {
    from {
        transform: translateY(0%) rotate(0deg);
        -webkit-transform: translateY(0%) rotate(0deg);
    }
    to {
        transform: translateY(-200%), rotate(360deg);
        -webkit-transform: translateY(-200%), rotate(360deg);
    }
}

@-o-keyframes topRotate360OutAnimation_w5ju0m {
    from {
        transform: translateY(0%) rotate(0deg);
        -webkit-transform: translateY(0%) rotate(0deg);
    }
    to {
        transform: translateY(-200%), rotate(360deg);
        -webkit-transform: translateY(-200%), rotate(360deg);
    }
}

@keyframes topRotate360OutAnimation_w5ju0m {
    from {
        transform: translateY(0%) rotate(0deg);
        -webkit-transform: translateY(0%) rotate(0deg);
    }
    to {
        transform: translateY(-200%), rotate(360deg);
        -webkit-transform: translateY(-200%), rotate(360deg);
    }
}

@-webkit-keyframes bottomRotate360InAnimation_1k0qqcf {
    from {
        transform: translateY(200%) rotate(0deg);
        -webkit-transform: translateY(200%) rotate(0deg);
    }
    to {
        transform: translateY(0%), rotate(360deg);
        -webkit-transform: translateY(0%), rotate(360deg);
    }
}

@-moz-keyframes bottomRotate360InAnimation_1k0qqcf {
    from {
        transform: translateY(200%) rotate(0deg);
        -webkit-transform: translateY(200%) rotate(0deg);
    }
    to {
        transform: translateY(0%), rotate(360deg);
        -webkit-transform: translateY(0%), rotate(360deg);
    }
}

@-o-keyframes bottomRotate360InAnimation_1k0qqcf {
    from {
        transform: translateY(200%) rotate(0deg);
        -webkit-transform: translateY(200%) rotate(0deg);
    }
    to {
        transform: translateY(0%), rotate(360deg);
        -webkit-transform: translateY(0%), rotate(360deg);
    }
}

@keyframes bottomRotate360InAnimation_1k0qqcf {
    from {
        transform: translateY(200%) rotate(0deg);
        -webkit-transform: translateY(200%) rotate(0deg);
    }
    to {
        transform: translateY(0%), rotate(360deg);
        -webkit-transform: translateY(0%), rotate(360deg);
    }
}

@-webkit-keyframes bottomRotate360OutAnimation_1m9tq8h {
    from {
        transform: translateY(0%) rotate(0deg);
        -webkit-transform: translateY(0%) rotate(0deg);
    }
    to {
        transform: translateY(200%), rotate(360deg);
        -webkit-transform: translateY(200%), rotate(360deg);
    }
}

@-moz-keyframes bottomRotate360OutAnimation_1m9tq8h {
    from {
        transform: translateY(0%) rotate(0deg);
        -webkit-transform: translateY(0%) rotate(0deg);
    }
    to {
        transform: translateY(200%), rotate(360deg);
        -webkit-transform: translateY(200%), rotate(360deg);
    }
}

@-o-keyframes bottomRotate360OutAnimation_1m9tq8h {
    from {
        transform: translateY(0%) rotate(0deg);
        -webkit-transform: translateY(0%) rotate(0deg);
    }
    to {
        transform: translateY(200%), rotate(360deg);
        -webkit-transform: translateY(200%), rotate(360deg);
    }
}

@keyframes bottomRotate360OutAnimation_1m9tq8h {
    from {
        transform: translateY(0%) rotate(0deg);
        -webkit-transform: translateY(0%) rotate(0deg);
    }
    to {
        transform: translateY(200%), rotate(360deg);
        -webkit-transform: translateY(200%), rotate(360deg);
    }
}

@-webkit-keyframes anchoredLeftSlideInAnimation_1hg44x7 {
    from {
        transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }
}

@-moz-keyframes anchoredLeftSlideInAnimation_1hg44x7 {
    from {
        transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }
}

@-o-keyframes anchoredLeftSlideInAnimation_1hg44x7 {
    from {
        transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }
}

@keyframes anchoredLeftSlideInAnimation_1hg44x7 {
    from {
        transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }
}

@-webkit-keyframes anchoredLeftSlideOutAnimation_rnri27 {
    from {
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
    }
}

@-moz-keyframes anchoredLeftSlideOutAnimation_rnri27 {
    from {
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
    }
}

@-o-keyframes anchoredLeftSlideOutAnimation_rnri27 {
    from {
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
    }
}

@keyframes anchoredLeftSlideOutAnimation_rnri27 {
    from {
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
    }
}

@-webkit-keyframes anchoredRightSlideInAnimation_1y6fmrc {
    from {
        transform: translateX(100%);
        -webkit-transform: translateX(100%);
    }
    to {
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }
}

@-moz-keyframes anchoredRightSlideInAnimation_1y6fmrc {
    from {
        transform: translateX(100%);
        -webkit-transform: translateX(100%);
    }
    to {
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }
}

@-o-keyframes anchoredRightSlideInAnimation_1y6fmrc {
    from {
        transform: translateX(100%);
        -webkit-transform: translateX(100%);
    }
    to {
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }
}

@keyframes anchoredRightSlideInAnimation_1y6fmrc {
    from {
        transform: translateX(100%);
        -webkit-transform: translateX(100%);
    }
    to {
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }
}

@-webkit-keyframes anchoredRightSlideOutAnimation_8h6vp3 {
    from {
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }
    to {
        transform: translateX(100%);
        -webkit-transform: translateX(100%);
    }
}

@-moz-keyframes anchoredRightSlideOutAnimation_8h6vp3 {
    from {
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }
    to {
        transform: translateX(100%);
        -webkit-transform: translateX(100%);
    }
}

@-o-keyframes anchoredRightSlideOutAnimation_8h6vp3 {
    from {
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }
    to {
        transform: translateX(100%);
        -webkit-transform: translateX(100%);
    }
}

@keyframes anchoredRightSlideOutAnimation_8h6vp3 {
    from {
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }
    to {
        transform: translateX(100%);
        -webkit-transform: translateX(100%);
    }
}

@-webkit-keyframes anchoredTopSlideInAnimation_8z9rxa {
    from {
        transform: translateY(-100%);
        -webkit-transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
}

@-moz-keyframes anchoredTopSlideInAnimation_8z9rxa {
    from {
        transform: translateY(-100%);
        -webkit-transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
}

@-o-keyframes anchoredTopSlideInAnimation_8z9rxa {
    from {
        transform: translateY(-100%);
        -webkit-transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
}

@keyframes anchoredTopSlideInAnimation_8z9rxa {
    from {
        transform: translateY(-100%);
        -webkit-transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
}

@-webkit-keyframes anchoredTopSlideOutAnimation_ns0rt0 {
    from {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
    to {
        transform: translateY(-100%);
        -webkit-transform: translateY(-100%);
    }
}

@-moz-keyframes anchoredTopSlideOutAnimation_ns0rt0 {
    from {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
    to {
        transform: translateY(-100%);
        -webkit-transform: translateY(-100%);
    }
}

@-o-keyframes anchoredTopSlideOutAnimation_ns0rt0 {
    from {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
    to {
        transform: translateY(-100%);
        -webkit-transform: translateY(-100%);
    }
}

@keyframes anchoredTopSlideOutAnimation_ns0rt0 {
    from {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
    to {
        transform: translateY(-100%);
        -webkit-transform: translateY(-100%);
    }
}

@-webkit-keyframes anchoredBottomSlideInAnimation_1axypox {
    from {
        transform: translateY(100%);
        -webkit-transform: translateY(100%);
    }
    to {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
}

@-moz-keyframes anchoredBottomSlideInAnimation_1axypox {
    from {
        transform: translateY(100%);
        -webkit-transform: translateY(100%);
    }
    to {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
}

@-o-keyframes anchoredBottomSlideInAnimation_1axypox {
    from {
        transform: translateY(100%);
        -webkit-transform: translateY(100%);
    }
    to {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
}

@keyframes anchoredBottomSlideInAnimation_1axypox {
    from {
        transform: translateY(100%);
        -webkit-transform: translateY(100%);
    }
    to {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
}

@-webkit-keyframes anchoredBottomSlideOutAnimation_1fdetvy {
    from {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
    to {
        transform: translateY(100%);
        -webkit-transform: translateY(100%);
    }
}

@-moz-keyframes anchoredBottomSlideOutAnimation_1fdetvy {
    from {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
    to {
        transform: translateY(100%);
        -webkit-transform: translateY(100%);
    }
}

@-o-keyframes anchoredBottomSlideOutAnimation_1fdetvy {
    from {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
    to {
        transform: translateY(100%);
        -webkit-transform: translateY(100%);
    }
}

@keyframes anchoredBottomSlideOutAnimation_1fdetvy {
    from {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
    to {
        transform: translateY(100%);
        -webkit-transform: translateY(100%);
    }
}

.css-13qcn8a,
[data-css-13qcn8a] {
    background-color: #fff;
    border-radius: 9999px;
}

.css-17bhmw6,
[data-css-17bhmw6] {
    transition: all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.175);
    opacity: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    padding-left: 4px;
    -webkit-transition: all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.175);
    -moz-transition: all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.175);
    -webkit-box-align: center;
    -webkit-align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
}

.css-17bhmw6[data-checked="true"],
[data-css-17bhmw6][data-checked="true"] {
    opacity: 1;
    transform: scale(1);
    -webkit-transform: scale(1);
}

.css-17bhmw6>svg,
[data-css-17bhmw6]>svg {
    transition: all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.175);
    transform: scale(0);
    -webkit-transition: all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.175);
    -moz-transition: all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.175);
    -webkit-transform: scale(0);
}

.css-17bhmw6[data-checked="true"]>svg,
[data-css-17bhmw6][data-checked="true"]>svg {
    transform: scale(1);
    -webkit-transform: scale(1);
}

.css-1rprxtl,
[data-css-1rprxtl] {
    transition: -webkit-transform 200ms ease-in-out, transform 200ms ease-in-out;
    transform: translateX(0%);
    -webkit-transition: -webkit-transform 200ms ease-in-out, transform 200ms ease-in-out;
    -moz-transition: transform 200ms ease-in-out;
    -webkit-transform: translateX(0%);
}

.css-1rprxtl[data-checked="true"],
[data-css-1rprxtl][data-checked="true"] {
    transform: translateX(50%);
    -webkit-transform: translateX(50%);
}

.css-5ljhhe,
[data-css-5ljhhe] {
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    background-color: white;
    box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.3), inset 0 1px 2px rgba(67, 90, 111, 0.14);
}

.css-5ljhhe[aria-invalid="true"],
[data-css-5ljhhe][aria-invalid="true"] {
    box-shadow: inset 0 0 0 1px #ec4c47, inset 0 1px 2px rgba(67, 90, 111, 0.14);
}

.css-5ljhhe::placeholder,
[data-css-5ljhhe]::placeholder,
.css-5ljhhe[data-simulate-placeholder],
[data-css-5ljhhe][data-simulate-placeholder] {
    color: rgba(67, 90, 111, 0.47);
}

.css-5ljhhe:focus,
[data-css-5ljhhe]:focus,
.css-5ljhhe[data-simulate-focus],
[data-css-5ljhhe][data-simulate-focus] {
    z-index: 2;
    outline: none;
    box-shadow: inset 0 0 2px rgba(67, 90, 111, 0.14), inset 0 0 0 1px #579ad9, 0 0 0 3px rgba(16, 112, 202, 0.14);
}

.css-5ljhhe:disabled,
[data-css-5ljhhe]:disabled,
.css-5ljhhe[data-simulate-disabled],
[data-css-5ljhhe][data-simulate-disabled] {
    cursor: not-allowed;
    box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.14);
    background-color: #F5F6F7;
}

.css-nwvixr,
[data-css-nwvixr] {
    -webkit-font-smoothing: antialiased;
    -webkit-appearance: none;
    -moz-appearance: none;
    vertical-align: middle;
    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    background-color: white;
    background-image: -webkit-linear-gradient(to bottom, #0788DE, #116AB8);
    background-image: -moz-linear-gradient(to bottom, #0788DE, #116AB8);
    background-image: linear-gradient(to bottom, #0788DE, #116AB8);
    box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.3), inset 0 -1px 1px 0 rgba(67, 90, 111, 0.06);
}

.css-nwvixr::-moz-focus-inner,
[data-css-nwvixr]::-moz-focus-inner {
    border: 0;
}

.css-nwvixr[disabled],
[data-css-nwvixr][disabled],
.css-nwvixr [data-disabled],
[data-css-nwvixr] [data-disabled] {
    cursor: not-allowed;
    opacity: 0.8;
    background-image: none;
    background-color: rgba(67, 90, 111, 0.06);
    box-shadow: none;
    color: rgba(67, 90, 111, 0.7);
    pointer-events: none;
}

.css-nwvixr:not([disabled]):not([data-disabled]):hover,
[data-css-nwvixr]:not([disabled]):not([data-disabled]):hover,
.css-nwvixr[data-simulate-notdisablednotdatadisabledhover],
[data-css-nwvixr][data-simulate-notdisablednotdatadisabledhover] {
    background-image: -webkit-linear-gradient(to bottom, #0679c5, #0f5da1);
    background-image: -moz-linear-gradient(to bottom, #0679c5, #0f5da1);
    background-image: linear-gradient(to bottom, #0679c5, #0f5da1);
}

.css-nwvixr:not([disabled]):not([data-disabled]):focus,
[data-css-nwvixr]:not([disabled]):not([data-disabled]):focus,
.css-nwvixr[data-simulate-notdisablednotdatadisabledfocus],
[data-css-nwvixr][data-simulate-notdisablednotdatadisabledfocus] {
    z-index: 2;
    box-shadow: 0 0 0 3px rgba(7, 136, 222, 0.4), inset 0 0 0 1px rgba(67, 90, 111, 0.14), inset 0 -1px 1px 0 rgba(67, 90, 111, 0.3);
}

.css-nwvixr:not([disabled]):not([data-disabled]):active,
[data-css-nwvixr]:not([disabled]):not([data-disabled]):active,
.css-nwvixr:not([disabled]):not([data-disabled])[aria-expanded="true"],
[data-css-nwvixr]:not([disabled]):not([data-disabled])[aria-expanded="true"],
.css-nwvixr:not([disabled]):not([data-disabled])[data-active],
[data-css-nwvixr]:not([disabled]):not([data-disabled])[data-active] {
    background-image: -webkit-linear-gradient(to bottom, #0f5da1, #0f5da1);
    background-image: -moz-linear-gradient(to bottom, #0f5da1, #0f5da1);
    background-image: linear-gradient(to bottom, #0f5da1, #0f5da1);
    box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.14), inset 0 1px 1px 0 rgba(67, 90, 111, 0.06);
}

.css-nwvixr:not([disabled]):not([data-disabled]):focus:active,
[data-css-nwvixr]:not([disabled]):not([data-disabled]):focus:active,
.css-nwvixr:not([disabled]):not([data-disabled])[aria-expanded="true"]:focus,
[data-css-nwvixr]:not([disabled]):not([data-disabled])[aria-expanded="true"]:focus,
.css-nwvixr:not([disabled]):not([data-disabled])[data-active]:focus,
[data-css-nwvixr]:not([disabled]):not([data-disabled])[data-active]:focus {
    box-shadow: 0 0 0 3px rgba(7, 136, 222, 0.4), inset 0 0 0 1px rgba(67, 90, 111, 0.14), inset 0 1px 1px 0 rgba(67, 90, 111, 0.06);
}

.css-1ou6lye,
[data-css-1ou6lye] {
    -webkit-font-smoothing: antialiased;
    -webkit-appearance: none;
    -moz-appearance: none;
    vertical-align: middle;
    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;
    color: #95591e;
    background-color: transparent;
}

.css-1ou6lye::-moz-focus-inner,
[data-css-1ou6lye]::-moz-focus-inner {
    border: 0;
}

.css-1ou6lye[disabled],
[data-css-1ou6lye][disabled],
.css-1ou6lye [data-disabled],
[data-css-1ou6lye] [data-disabled] {
    cursor: not-allowed;
    opacity: 0.8;
    background-image: none;
    background-color: rgba(67, 90, 111, 0.06);
    box-shadow: none;
    color: rgba(67, 90, 111, 0.7);
    pointer-events: none;
}

.css-1ou6lye:not([disabled]):not([data-disabled]):hover,
[data-css-1ou6lye]:not([disabled]):not([data-disabled]):hover,
.css-1ou6lye[data-simulate-notdisablednotdatadisabledhover],
[data-css-1ou6lye][data-simulate-notdisablednotdatadisabledhover] {
    background-color: rgba(67, 90, 111, 0.06);
}

.css-1ou6lye:not([disabled]):not([data-disabled]):focus,
[data-css-1ou6lye]:not([disabled]):not([data-disabled]):focus,
.css-1ou6lye[data-simulate-notdisablednotdatadisabledfocus],
[data-css-1ou6lye][data-simulate-notdisablednotdatadisabledfocus] {
    z-index: 2;
    box-shadow: 0 0 0 3px rgba(16, 112, 202, 0.3);
}

.css-1ou6lye:not([disabled]):not([data-disabled]):active,
[data-css-1ou6lye]:not([disabled]):not([data-disabled]):active,
.css-1ou6lye:not([disabled]):not([data-disabled])[aria-expanded="true"],
[data-css-1ou6lye]:not([disabled]):not([data-disabled])[aria-expanded="true"],
.css-1ou6lye:not([disabled]):not([data-disabled])[data-active],
[data-css-1ou6lye]:not([disabled]):not([data-disabled])[data-active] {
    background-image: none;
    background-color: rgba(16, 112, 202, 0.09);
}

.css-1i93du9,
[data-css-1i93du9] {
    transition-duration: 150ms;
    transition-property: box-shadow, -webkit-transform, transform;
    transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
    -webkit-transition-duration: 150ms;
    -webkit-transition-property: box-shadow, -webkit-transform, transform;
    -moz-transition-property: box-shadow, transform;
    -webkit-transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
}

.css-1i93du9:hover,
[data-css-1i93du9]:hover,
.css-1i93du9[data-simulate-hover],
[data-css-1i93du9][data-simulate-hover] {
    transform: translateY(-2px);
    box-shadow: 0 0 1px rgba(67, 90, 111, 0.3), 0 8px 10px -4px rgba(67, 90, 111, 0.47);
    -webkit-transform: translateY(-2px);
}

// Bootstrap Grid styles...

.sr-only {
     position: absolute;
     width: 1px;
     height: 1px;
     padding: 0;
     margin: -1px;
     overflow: hidden;
     clip: rect(0, 0, 0, 0);
     white-space: nowrap;
     border: 0 
}
 .sr-only-focusable:active, .sr-only-focusable:focus {
     position: static;
     width: auto;
     height: auto;
     overflow: visible;
     clip: auto;
     white-space: normal 
}
/*! * Bootstrap Grid v4.4.1 (https://getbootstrap.com/) * Copyright 2011-2019 The Bootstrap Authors * Copyright 2011-2019 Twitter, Inc. * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE) */
 html {
     -webkit-box-sizing: border-box;
     box-sizing: border-box;
     -ms-overflow-style: scrollbar 
}
 *, *::before, *::after {
     -webkit-box-sizing: inherit;
     box-sizing: inherit 
}
 .container {
     width: 100%;
     padding-right: 15px;
     padding-left: 15px;
     margin-right: auto;
     margin-left: auto 
}
 @media (min-width: 576px) {
     .container {
         max-width: 540px 
    }
}
 @media (min-width: 768px) {
     .container {
         max-width: 720px 
    }
}
 @media (min-width: 992px) {
     .container {
         max-width: 960px 
    }
}
 @media (min-width: 1200px) {
     .container {
         max-width: 1140px 
    }
}
 .container-fluid, .container-sm, .container-md, .container-lg, .container-xl {
     width: 100%;
     padding-right: 15px;
     padding-left: 15px;
     margin-right: auto;
     margin-left: auto 
}
 @media (min-width: 576px) {
     .container, .container-sm {
         max-width: 540px 
    }
}
 @media (min-width: 768px) {
     .container, .container-sm, .container-md {
         max-width: 720px 
    }
}
 @media (min-width: 992px) {
     .container, .container-sm, .container-md, .container-lg {
         max-width: 960px 
    }
}
 @media (min-width: 1200px) {
     .container, .container-sm, .container-md, .container-lg, .container-xl {
         max-width: 1140px 
    }
}
 .row {
     display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     -ms-flex-wrap: wrap;
     flex-wrap: wrap;
     margin-right: -15px;
     margin-left: -15px 
}
 .no-gutters {
     margin-right: 0;
     margin-left: 0 
}
 .no-gutters>.col, .no-gutters>[class*="col-"] {
     padding-right: 0;
     padding-left: 0 
}
 .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {
     position: relative;
     width: 100%;
     padding-right: 15px;
     padding-left: 15px 
}
 .col {
     -ms-flex-preferred-size: 0;
     flex-basis: 0;
     -webkit-box-flex: 1;
     -ms-flex-positive: 1;
     flex-grow: 1;
     max-width: 100% 
}
 .row-cols-1>* {
     -webkit-box-flex: 0;
     -ms-flex: 0 0 100%;
     flex: 0 0 100%;
     max-width: 100% 
}
 .row-cols-2>* {
     -webkit-box-flex: 0;
     -ms-flex: 0 0 50%;
     flex: 0 0 50%;
     max-width: 50% 
}
 .row-cols-3>* {
     -webkit-box-flex: 0;
     -ms-flex: 0 0 33.3333333333%;
     flex: 0 0 33.3333333333%;
     max-width: 33.3333333333% 
}
 .row-cols-4>* {
     -webkit-box-flex: 0;
     -ms-flex: 0 0 25%;
     flex: 0 0 25%;
     max-width: 25% 
}
 .row-cols-5>* {
     -webkit-box-flex: 0;
     -ms-flex: 0 0 20%;
     flex: 0 0 20%;
     max-width: 20% 
}
 .row-cols-6>* {
     -webkit-box-flex: 0;
     -ms-flex: 0 0 16.6666666667%;
     flex: 0 0 16.6666666667%;
     max-width: 16.6666666667% 
}
 .col-auto {
     -webkit-box-flex: 0;
     -ms-flex: 0 0 auto;
     flex: 0 0 auto;
     width: auto;
     max-width: 100% 
}
 .col-1 {
     -webkit-box-flex: 0;
     -ms-flex: 0 0 8.3333333333%;
     flex: 0 0 8.3333333333%;
     max-width: 8.3333333333% 
}
 .col-2 {
     -webkit-box-flex: 0;
     -ms-flex: 0 0 16.6666666667%;
     flex: 0 0 16.6666666667%;
     max-width: 16.6666666667% 
}
 .col-3 {
     -webkit-box-flex: 0;
     -ms-flex: 0 0 25%;
     flex: 0 0 25%;
     max-width: 25% 
}
 .col-4 {
     -webkit-box-flex: 0;
     -ms-flex: 0 0 33.3333333333%;
     flex: 0 0 33.3333333333%;
     max-width: 33.3333333333% 
}
 .col-5 {
     -webkit-box-flex: 0;
     -ms-flex: 0 0 41.6666666667%;
     flex: 0 0 41.6666666667%;
     max-width: 41.6666666667% 
}
 .col-6 {
     -webkit-box-flex: 0;
     -ms-flex: 0 0 50%;
     flex: 0 0 50%;
     max-width: 50% 
}
 .col-7 {
     -webkit-box-flex: 0;
     -ms-flex: 0 0 58.3333333333%;
     flex: 0 0 58.3333333333%;
     max-width: 58.3333333333% 
}
 .col-8 {
     -webkit-box-flex: 0;
     -ms-flex: 0 0 66.6666666667%;
     flex: 0 0 66.6666666667%;
     max-width: 66.6666666667% 
}
 .col-9 {
     -webkit-box-flex: 0;
     -ms-flex: 0 0 75%;
     flex: 0 0 75%;
     max-width: 75% 
}
 .col-10 {
     -webkit-box-flex: 0;
     -ms-flex: 0 0 83.3333333333%;
     flex: 0 0 83.3333333333%;
     max-width: 83.3333333333% 
}
 .col-11 {
     -webkit-box-flex: 0;
     -ms-flex: 0 0 91.6666666667%;
     flex: 0 0 91.6666666667%;
     max-width: 91.6666666667% 
}
 .col-12 {
     -webkit-box-flex: 0;
     -ms-flex: 0 0 100%;
     flex: 0 0 100%;
     max-width: 100% 
}
 .order-first {
     -webkit-box-ordinal-group: 0;
     -ms-flex-order: -1;
     order: -1 
}
 .order-last {
     -webkit-box-ordinal-group: 14;
     -ms-flex-order: 13;
     order: 13 
}
 .order-0 {
     -webkit-box-ordinal-group: 1;
     -ms-flex-order: 0;
     order: 0 
}
 .order-1 {
     -webkit-box-ordinal-group: 2;
     -ms-flex-order: 1;
     order: 1 
}
 .order-2 {
     -webkit-box-ordinal-group: 3;
     -ms-flex-order: 2;
     order: 2 
}
 .order-3 {
     -webkit-box-ordinal-group: 4;
     -ms-flex-order: 3;
     order: 3 
}
 .order-4 {
     -webkit-box-ordinal-group: 5;
     -ms-flex-order: 4;
     order: 4 
}
 .order-5 {
     -webkit-box-ordinal-group: 6;
     -ms-flex-order: 5;
     order: 5 
}
 .order-6 {
     -webkit-box-ordinal-group: 7;
     -ms-flex-order: 6;
     order: 6 
}
 .order-7 {
     -webkit-box-ordinal-group: 8;
     -ms-flex-order: 7;
     order: 7 
}
 .order-8 {
     -webkit-box-ordinal-group: 9;
     -ms-flex-order: 8;
     order: 8 
}
 .order-9 {
     -webkit-box-ordinal-group: 10;
     -ms-flex-order: 9;
     order: 9 
}
 .order-10 {
     -webkit-box-ordinal-group: 11;
     -ms-flex-order: 10;
     order: 10 
}
 .order-11 {
     -webkit-box-ordinal-group: 12;
     -ms-flex-order: 11;
     order: 11 
}
 .order-12 {
     -webkit-box-ordinal-group: 13;
     -ms-flex-order: 12;
     order: 12 
}
 .offset-1 {
     margin-left: 8.3333333333% 
}
 .offset-2 {
     margin-left: 16.6666666667% 
}
 .offset-3 {
     margin-left: 25% 
}
 .offset-4 {
     margin-left: 33.3333333333% 
}
 .offset-5 {
     margin-left: 41.6666666667% 
}
 .offset-6 {
     margin-left: 50% 
}
 .offset-7 {
     margin-left: 58.3333333333% 
}
 .offset-8 {
     margin-left: 66.6666666667% 
}
 .offset-9 {
     margin-left: 75% 
}
 .offset-10 {
     margin-left: 83.3333333333% 
}
 .offset-11 {
     margin-left: 91.6666666667% 
}
 @media (min-width: 576px) {
     .col-sm {
         -ms-flex-preferred-size: 0;
         flex-basis: 0;
         -webkit-box-flex: 1;
         -ms-flex-positive: 1;
         flex-grow: 1;
         max-width: 100% 
    }
     .row-cols-sm-1>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 100%;
         flex: 0 0 100%;
         max-width: 100% 
    }
     .row-cols-sm-2>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 50%;
         flex: 0 0 50%;
         max-width: 50% 
    }
     .row-cols-sm-3>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 33.3333333333%;
         flex: 0 0 33.3333333333%;
         max-width: 33.3333333333% 
    }
     .row-cols-sm-4>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 25%;
         flex: 0 0 25%;
         max-width: 25% 
    }
     .row-cols-sm-5>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 20%;
         flex: 0 0 20%;
         max-width: 20% 
    }
     .row-cols-sm-6>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 16.6666666667%;
         flex: 0 0 16.6666666667%;
         max-width: 16.6666666667% 
    }
     .col-sm-auto {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 auto;
         flex: 0 0 auto;
         width: auto;
         max-width: 100% 
    }
     .col-sm-1 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 8.3333333333%;
         flex: 0 0 8.3333333333%;
         max-width: 8.3333333333% 
    }
     .col-sm-2 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 16.6666666667%;
         flex: 0 0 16.6666666667%;
         max-width: 16.6666666667% 
    }
     .col-sm-3 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 25%;
         flex: 0 0 25%;
         max-width: 25% 
    }
     .col-sm-4 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 33.3333333333%;
         flex: 0 0 33.3333333333%;
         max-width: 33.3333333333% 
    }
     .col-sm-5 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 41.6666666667%;
         flex: 0 0 41.6666666667%;
         max-width: 41.6666666667% 
    }
     .col-sm-6 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 50%;
         flex: 0 0 50%;
         max-width: 50% 
    }
     .col-sm-7 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 58.3333333333%;
         flex: 0 0 58.3333333333%;
         max-width: 58.3333333333% 
    }
     .col-sm-8 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 66.6666666667%;
         flex: 0 0 66.6666666667%;
         max-width: 66.6666666667% 
    }
     .col-sm-9 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 75%;
         flex: 0 0 75%;
         max-width: 75% 
    }
     .col-sm-10 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 83.3333333333%;
         flex: 0 0 83.3333333333%;
         max-width: 83.3333333333% 
    }
     .col-sm-11 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 91.6666666667%;
         flex: 0 0 91.6666666667%;
         max-width: 91.6666666667% 
    }
     .col-sm-12 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 100%;
         flex: 0 0 100%;
         max-width: 100% 
    }
     .order-sm-first {
         -webkit-box-ordinal-group: 0;
         -ms-flex-order: -1;
         order: -1 
    }
     .order-sm-last {
         -webkit-box-ordinal-group: 14;
         -ms-flex-order: 13;
         order: 13 
    }
     .order-sm-0 {
         -webkit-box-ordinal-group: 1;
         -ms-flex-order: 0;
         order: 0 
    }
     .order-sm-1 {
         -webkit-box-ordinal-group: 2;
         -ms-flex-order: 1;
         order: 1 
    }
     .order-sm-2 {
         -webkit-box-ordinal-group: 3;
         -ms-flex-order: 2;
         order: 2 
    }
     .order-sm-3 {
         -webkit-box-ordinal-group: 4;
         -ms-flex-order: 3;
         order: 3 
    }
     .order-sm-4 {
         -webkit-box-ordinal-group: 5;
         -ms-flex-order: 4;
         order: 4 
    }
     .order-sm-5 {
         -webkit-box-ordinal-group: 6;
         -ms-flex-order: 5;
         order: 5 
    }
     .order-sm-6 {
         -webkit-box-ordinal-group: 7;
         -ms-flex-order: 6;
         order: 6 
    }
     .order-sm-7 {
         -webkit-box-ordinal-group: 8;
         -ms-flex-order: 7;
         order: 7 
    }
     .order-sm-8 {
         -webkit-box-ordinal-group: 9;
         -ms-flex-order: 8;
         order: 8 
    }
     .order-sm-9 {
         -webkit-box-ordinal-group: 10;
         -ms-flex-order: 9;
         order: 9 
    }
     .order-sm-10 {
         -webkit-box-ordinal-group: 11;
         -ms-flex-order: 10;
         order: 10 
    }
     .order-sm-11 {
         -webkit-box-ordinal-group: 12;
         -ms-flex-order: 11;
         order: 11 
    }
     .order-sm-12 {
         -webkit-box-ordinal-group: 13;
         -ms-flex-order: 12;
         order: 12 
    }
     .offset-sm-0 {
         margin-left: 0 
    }
     .offset-sm-1 {
         margin-left: 8.3333333333% 
    }
     .offset-sm-2 {
         margin-left: 16.6666666667% 
    }
     .offset-sm-3 {
         margin-left: 25% 
    }
     .offset-sm-4 {
         margin-left: 33.3333333333% 
    }
     .offset-sm-5 {
         margin-left: 41.6666666667% 
    }
     .offset-sm-6 {
         margin-left: 50% 
    }
     .offset-sm-7 {
         margin-left: 58.3333333333% 
    }
     .offset-sm-8 {
         margin-left: 66.6666666667% 
    }
     .offset-sm-9 {
         margin-left: 75% 
    }
     .offset-sm-10 {
         margin-left: 83.3333333333% 
    }
     .offset-sm-11 {
         margin-left: 91.6666666667% 
    }
}
 @media (min-width: 768px) {
     .col-md {
         -ms-flex-preferred-size: 0;
         flex-basis: 0;
         -webkit-box-flex: 1;
         -ms-flex-positive: 1;
         flex-grow: 1;
         max-width: 100% 
    }
     .row-cols-md-1>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 100%;
         flex: 0 0 100%;
         max-width: 100% 
    }
     .row-cols-md-2>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 50%;
         flex: 0 0 50%;
         max-width: 50% 
    }
     .row-cols-md-3>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 33.3333333333%;
         flex: 0 0 33.3333333333%;
         max-width: 33.3333333333% 
    }
     .row-cols-md-4>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 25%;
         flex: 0 0 25%;
         max-width: 25% 
    }
     .row-cols-md-5>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 20%;
         flex: 0 0 20%;
         max-width: 20% 
    }
     .row-cols-md-6>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 16.6666666667%;
         flex: 0 0 16.6666666667%;
         max-width: 16.6666666667% 
    }
     .col-md-auto {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 auto;
         flex: 0 0 auto;
         width: auto;
         max-width: 100% 
    }
     .col-md-1 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 8.3333333333%;
         flex: 0 0 8.3333333333%;
         max-width: 8.3333333333% 
    }
     .col-md-2 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 16.6666666667%;
         flex: 0 0 16.6666666667%;
         max-width: 16.6666666667% 
    }
     .col-md-3 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 25%;
         flex: 0 0 25%;
         max-width: 25% 
    }
     .col-md-4 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 33.3333333333%;
         flex: 0 0 33.3333333333%;
         max-width: 33.3333333333% 
    }
     .col-md-5 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 41.6666666667%;
         flex: 0 0 41.6666666667%;
         max-width: 41.6666666667% 
    }
     .col-md-6 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 50%;
         flex: 0 0 50%;
         max-width: 50% 
    }
     .col-md-7 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 58.3333333333%;
         flex: 0 0 58.3333333333%;
         max-width: 58.3333333333% 
    }
     .col-md-8 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 66.6666666667%;
         flex: 0 0 66.6666666667%;
         max-width: 66.6666666667% 
    }
     .col-md-9 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 75%;
         flex: 0 0 75%;
         max-width: 75% 
    }
     .col-md-10 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 83.3333333333%;
         flex: 0 0 83.3333333333%;
         max-width: 83.3333333333% 
    }
     .col-md-11 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 91.6666666667%;
         flex: 0 0 91.6666666667%;
         max-width: 91.6666666667% 
    }
     .col-md-12 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 100%;
         flex: 0 0 100%;
         max-width: 100% 
    }
     .order-md-first {
         -webkit-box-ordinal-group: 0;
         -ms-flex-order: -1;
         order: -1 
    }
     .order-md-last {
         -webkit-box-ordinal-group: 14;
         -ms-flex-order: 13;
         order: 13 
    }
     .order-md-0 {
         -webkit-box-ordinal-group: 1;
         -ms-flex-order: 0;
         order: 0 
    }
     .order-md-1 {
         -webkit-box-ordinal-group: 2;
         -ms-flex-order: 1;
         order: 1 
    }
     .order-md-2 {
         -webkit-box-ordinal-group: 3;
         -ms-flex-order: 2;
         order: 2 
    }
     .order-md-3 {
         -webkit-box-ordinal-group: 4;
         -ms-flex-order: 3;
         order: 3 
    }
     .order-md-4 {
         -webkit-box-ordinal-group: 5;
         -ms-flex-order: 4;
         order: 4 
    }
     .order-md-5 {
         -webkit-box-ordinal-group: 6;
         -ms-flex-order: 5;
         order: 5 
    }
     .order-md-6 {
         -webkit-box-ordinal-group: 7;
         -ms-flex-order: 6;
         order: 6 
    }
     .order-md-7 {
         -webkit-box-ordinal-group: 8;
         -ms-flex-order: 7;
         order: 7 
    }
     .order-md-8 {
         -webkit-box-ordinal-group: 9;
         -ms-flex-order: 8;
         order: 8 
    }
     .order-md-9 {
         -webkit-box-ordinal-group: 10;
         -ms-flex-order: 9;
         order: 9 
    }
     .order-md-10 {
         -webkit-box-ordinal-group: 11;
         -ms-flex-order: 10;
         order: 10 
    }
     .order-md-11 {
         -webkit-box-ordinal-group: 12;
         -ms-flex-order: 11;
         order: 11 
    }
     .order-md-12 {
         -webkit-box-ordinal-group: 13;
         -ms-flex-order: 12;
         order: 12 
    }
     .offset-md-0 {
         margin-left: 0 
    }
     .offset-md-1 {
         margin-left: 8.3333333333% 
    }
     .offset-md-2 {
         margin-left: 16.6666666667% 
    }
     .offset-md-3 {
         margin-left: 25% 
    }
     .offset-md-4 {
         margin-left: 33.3333333333% 
    }
     .offset-md-5 {
         margin-left: 41.6666666667% 
    }
     .offset-md-6 {
         margin-left: 50% 
    }
     .offset-md-7 {
         margin-left: 58.3333333333% 
    }
     .offset-md-8 {
         margin-left: 66.6666666667% 
    }
     .offset-md-9 {
         margin-left: 75% 
    }
     .offset-md-10 {
         margin-left: 83.3333333333% 
    }
     .offset-md-11 {
         margin-left: 91.6666666667% 
    }
}
 @media (min-width: 992px) {
     .col-lg {
         -ms-flex-preferred-size: 0;
         flex-basis: 0;
         -webkit-box-flex: 1;
         -ms-flex-positive: 1;
         flex-grow: 1;
         max-width: 100% 
    }
     .row-cols-lg-1>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 100%;
         flex: 0 0 100%;
         max-width: 100% 
    }
     .row-cols-lg-2>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 50%;
         flex: 0 0 50%;
         max-width: 50% 
    }
     .row-cols-lg-3>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 33.3333333333%;
         flex: 0 0 33.3333333333%;
         max-width: 33.3333333333% 
    }
     .row-cols-lg-4>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 25%;
         flex: 0 0 25%;
         max-width: 25% 
    }
     .row-cols-lg-5>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 20%;
         flex: 0 0 20%;
         max-width: 20% 
    }
     .row-cols-lg-6>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 16.6666666667%;
         flex: 0 0 16.6666666667%;
         max-width: 16.6666666667% 
    }
     .col-lg-auto {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 auto;
         flex: 0 0 auto;
         width: auto;
         max-width: 100% 
    }
     .col-lg-1 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 8.3333333333%;
         flex: 0 0 8.3333333333%;
         max-width: 8.3333333333% 
    }
     .col-lg-2 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 16.6666666667%;
         flex: 0 0 16.6666666667%;
         max-width: 16.6666666667% 
    }
     .col-lg-3 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 25%;
         flex: 0 0 25%;
         max-width: 25% 
    }
     .col-lg-4 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 33.3333333333%;
         flex: 0 0 33.3333333333%;
         max-width: 33.3333333333% 
    }
     .col-lg-5 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 41.6666666667%;
         flex: 0 0 41.6666666667%;
         max-width: 41.6666666667% 
    }
     .col-lg-6 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 50%;
         flex: 0 0 50%;
         max-width: 50% 
    }
     .col-lg-7 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 58.3333333333%;
         flex: 0 0 58.3333333333%;
         max-width: 58.3333333333% 
    }
     .col-lg-8 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 66.6666666667%;
         flex: 0 0 66.6666666667%;
         max-width: 66.6666666667% 
    }
     .col-lg-9 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 75%;
         flex: 0 0 75%;
         max-width: 75% 
    }
     .col-lg-10 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 83.3333333333%;
         flex: 0 0 83.3333333333%;
         max-width: 83.3333333333% 
    }
     .col-lg-11 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 91.6666666667%;
         flex: 0 0 91.6666666667%;
         max-width: 91.6666666667% 
    }
     .col-lg-12 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 100%;
         flex: 0 0 100%;
         max-width: 100% 
    }
     .order-lg-first {
         -webkit-box-ordinal-group: 0;
         -ms-flex-order: -1;
         order: -1 
    }
     .order-lg-last {
         -webkit-box-ordinal-group: 14;
         -ms-flex-order: 13;
         order: 13 
    }
     .order-lg-0 {
         -webkit-box-ordinal-group: 1;
         -ms-flex-order: 0;
         order: 0 
    }
     .order-lg-1 {
         -webkit-box-ordinal-group: 2;
         -ms-flex-order: 1;
         order: 1 
    }
     .order-lg-2 {
         -webkit-box-ordinal-group: 3;
         -ms-flex-order: 2;
         order: 2 
    }
     .order-lg-3 {
         -webkit-box-ordinal-group: 4;
         -ms-flex-order: 3;
         order: 3 
    }
     .order-lg-4 {
         -webkit-box-ordinal-group: 5;
         -ms-flex-order: 4;
         order: 4 
    }
     .order-lg-5 {
         -webkit-box-ordinal-group: 6;
         -ms-flex-order: 5;
         order: 5 
    }
     .order-lg-6 {
         -webkit-box-ordinal-group: 7;
         -ms-flex-order: 6;
         order: 6 
    }
     .order-lg-7 {
         -webkit-box-ordinal-group: 8;
         -ms-flex-order: 7;
         order: 7 
    }
     .order-lg-8 {
         -webkit-box-ordinal-group: 9;
         -ms-flex-order: 8;
         order: 8 
    }
     .order-lg-9 {
         -webkit-box-ordinal-group: 10;
         -ms-flex-order: 9;
         order: 9 
    }
     .order-lg-10 {
         -webkit-box-ordinal-group: 11;
         -ms-flex-order: 10;
         order: 10 
    }
     .order-lg-11 {
         -webkit-box-ordinal-group: 12;
         -ms-flex-order: 11;
         order: 11 
    }
     .order-lg-12 {
         -webkit-box-ordinal-group: 13;
         -ms-flex-order: 12;
         order: 12 
    }
     .offset-lg-0 {
         margin-left: 0 
    }
     .offset-lg-1 {
         margin-left: 8.3333333333% 
    }
     .offset-lg-2 {
         margin-left: 16.6666666667% 
    }
     .offset-lg-3 {
         margin-left: 25% 
    }
     .offset-lg-4 {
         margin-left: 33.3333333333% 
    }
     .offset-lg-5 {
         margin-left: 41.6666666667% 
    }
     .offset-lg-6 {
         margin-left: 50% 
    }
     .offset-lg-7 {
         margin-left: 58.3333333333% 
    }
     .offset-lg-8 {
         margin-left: 66.6666666667% 
    }
     .offset-lg-9 {
         margin-left: 75% 
    }
     .offset-lg-10 {
         margin-left: 83.3333333333% 
    }
     .offset-lg-11 {
         margin-left: 91.6666666667% 
    }
}
 @media (min-width: 1200px) {
     .col-xl {
         -ms-flex-preferred-size: 0;
         flex-basis: 0;
         -webkit-box-flex: 1;
         -ms-flex-positive: 1;
         flex-grow: 1;
         max-width: 100% 
    }
     .row-cols-xl-1>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 100%;
         flex: 0 0 100%;
         max-width: 100% 
    }
     .row-cols-xl-2>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 50%;
         flex: 0 0 50%;
         max-width: 50% 
    }
     .row-cols-xl-3>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 33.3333333333%;
         flex: 0 0 33.3333333333%;
         max-width: 33.3333333333% 
    }
     .row-cols-xl-4>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 25%;
         flex: 0 0 25%;
         max-width: 25% 
    }
     .row-cols-xl-5>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 20%;
         flex: 0 0 20%;
         max-width: 20% 
    }
     .row-cols-xl-6>* {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 16.6666666667%;
         flex: 0 0 16.6666666667%;
         max-width: 16.6666666667% 
    }
     .col-xl-auto {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 auto;
         flex: 0 0 auto;
         width: auto;
         max-width: 100% 
    }
     .col-xl-1 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 8.3333333333%;
         flex: 0 0 8.3333333333%;
         max-width: 8.3333333333% 
    }
     .col-xl-2 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 16.6666666667%;
         flex: 0 0 16.6666666667%;
         max-width: 16.6666666667% 
    }
     .col-xl-3 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 25%;
         flex: 0 0 25%;
         max-width: 25% 
    }
     .col-xl-4 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 33.3333333333%;
         flex: 0 0 33.3333333333%;
         max-width: 33.3333333333% 
    }
     .col-xl-5 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 41.6666666667%;
         flex: 0 0 41.6666666667%;
         max-width: 41.6666666667% 
    }
     .col-xl-6 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 50%;
         flex: 0 0 50%;
         max-width: 50% 
    }
     .col-xl-7 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 58.3333333333%;
         flex: 0 0 58.3333333333%;
         max-width: 58.3333333333% 
    }
     .col-xl-8 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 66.6666666667%;
         flex: 0 0 66.6666666667%;
         max-width: 66.6666666667% 
    }
     .col-xl-9 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 75%;
         flex: 0 0 75%;
         max-width: 75% 
    }
     .col-xl-10 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 83.3333333333%;
         flex: 0 0 83.3333333333%;
         max-width: 83.3333333333% 
    }
     .col-xl-11 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 91.6666666667%;
         flex: 0 0 91.6666666667%;
         max-width: 91.6666666667% 
    }
     .col-xl-12 {
         -webkit-box-flex: 0;
         -ms-flex: 0 0 100%;
         flex: 0 0 100%;
         max-width: 100% 
    }
     .order-xl-first {
         -webkit-box-ordinal-group: 0;
         -ms-flex-order: -1;
         order: -1 
    }
     .order-xl-last {
         -webkit-box-ordinal-group: 14;
         -ms-flex-order: 13;
         order: 13 
    }
     .order-xl-0 {
         -webkit-box-ordinal-group: 1;
         -ms-flex-order: 0;
         order: 0 
    }
     .order-xl-1 {
         -webkit-box-ordinal-group: 2;
         -ms-flex-order: 1;
         order: 1 
    }
     .order-xl-2 {
         -webkit-box-ordinal-group: 3;
         -ms-flex-order: 2;
         order: 2 
    }
     .order-xl-3 {
         -webkit-box-ordinal-group: 4;
         -ms-flex-order: 3;
         order: 3 
    }
     .order-xl-4 {
         -webkit-box-ordinal-group: 5;
         -ms-flex-order: 4;
         order: 4 
    }
     .order-xl-5 {
         -webkit-box-ordinal-group: 6;
         -ms-flex-order: 5;
         order: 5 
    }
     .order-xl-6 {
         -webkit-box-ordinal-group: 7;
         -ms-flex-order: 6;
         order: 6 
    }
     .order-xl-7 {
         -webkit-box-ordinal-group: 8;
         -ms-flex-order: 7;
         order: 7 
    }
     .order-xl-8 {
         -webkit-box-ordinal-group: 9;
         -ms-flex-order: 8;
         order: 8 
    }
     .order-xl-9 {
         -webkit-box-ordinal-group: 10;
         -ms-flex-order: 9;
         order: 9 
    }
     .order-xl-10 {
         -webkit-box-ordinal-group: 11;
         -ms-flex-order: 10;
         order: 10 
    }
     .order-xl-11 {
         -webkit-box-ordinal-group: 12;
         -ms-flex-order: 11;
         order: 11 
    }
     .order-xl-12 {
         -webkit-box-ordinal-group: 13;
         -ms-flex-order: 12;
         order: 12 
    }
     .offset-xl-0 {
         margin-left: 0 
    }
     .offset-xl-1 {
         margin-left: 8.3333333333% 
    }
     .offset-xl-2 {
         margin-left: 16.6666666667% 
    }
     .offset-xl-3 {
         margin-left: 25% 
    }
     .offset-xl-4 {
         margin-left: 33.3333333333% 
    }
     .offset-xl-5 {
         margin-left: 41.6666666667% 
    }
     .offset-xl-6 {
         margin-left: 50% 
    }
     .offset-xl-7 {
         margin-left: 58.3333333333% 
    }
     .offset-xl-8 {
         margin-left: 66.6666666667% 
    }
     .offset-xl-9 {
         margin-left: 75% 
    }
     .offset-xl-10 {
         margin-left: 83.3333333333% 
    }
     .offset-xl-11 {
         margin-left: 91.6666666667% 
    }
}
 .d-none {
     display: none !important 
}
 .d-inline {
     display: inline !important 
}
 .d-inline-block {
     display: inline-block !important 
}
 .d-block {
     display: block !important 
}
 .d-table {
     display: table !important 
}
 .d-table-row {
     display: table-row !important 
}
 .d-table-cell {
     display: table-cell !important 
}
 .d-flex {
     display: -webkit-box !important;
     display: -ms-flexbox !important;
     display: flex !important 
}
 .d-inline-flex {
     display: -webkit-inline-box !important;
     display: -ms-inline-flexbox !important;
     display: inline-flex !important 
}
 @media (min-width: 576px) {
     .d-sm-none {
         display: none !important 
    }
     .d-sm-inline {
         display: inline !important 
    }
     .d-sm-inline-block {
         display: inline-block !important 
    }
     .d-sm-block {
         display: block !important 
    }
     .d-sm-table {
         display: table !important 
    }
     .d-sm-table-row {
         display: table-row !important 
    }
     .d-sm-table-cell {
         display: table-cell !important 
    }
     .d-sm-flex {
         display: -webkit-box !important;
         display: -ms-flexbox !important;
         display: flex !important 
    }
     .d-sm-inline-flex {
         display: -webkit-inline-box !important;
         display: -ms-inline-flexbox !important;
         display: inline-flex !important 
    }
}
 @media (min-width: 768px) {
     .d-md-none {
         display: none !important 
    }
     .d-md-inline {
         display: inline !important 
    }
     .d-md-inline-block {
         display: inline-block !important 
    }
     .d-md-block {
         display: block !important 
    }
     .d-md-table {
         display: table !important 
    }
     .d-md-table-row {
         display: table-row !important 
    }
     .d-md-table-cell {
         display: table-cell !important 
    }
     .d-md-flex {
         display: -webkit-box !important;
         display: -ms-flexbox !important;
         display: flex !important 
    }
     .d-md-inline-flex {
         display: -webkit-inline-box !important;
         display: -ms-inline-flexbox !important;
         display: inline-flex !important 
    }
}
 @media (min-width: 992px) {
     .d-lg-none {
         display: none !important 
    }
     .d-lg-inline {
         display: inline !important 
    }
     .d-lg-inline-block {
         display: inline-block !important 
    }
     .d-lg-block {
         display: block !important 
    }
     .d-lg-table {
         display: table !important 
    }
     .d-lg-table-row {
         display: table-row !important 
    }
     .d-lg-table-cell {
         display: table-cell !important 
    }
     .d-lg-flex {
         display: -webkit-box !important;
         display: -ms-flexbox !important;
         display: flex !important 
    }
     .d-lg-inline-flex {
         display: -webkit-inline-box !important;
         display: -ms-inline-flexbox !important;
         display: inline-flex !important 
    }
}
 @media (min-width: 1200px) {
     .d-xl-none {
         display: none !important 
    }
     .d-xl-inline {
         display: inline !important 
    }
     .d-xl-inline-block {
         display: inline-block !important 
    }
     .d-xl-block {
         display: block !important 
    }
     .d-xl-table {
         display: table !important 
    }
     .d-xl-table-row {
         display: table-row !important 
    }
     .d-xl-table-cell {
         display: table-cell !important 
    }
     .d-xl-flex {
         display: -webkit-box !important;
         display: -ms-flexbox !important;
         display: flex !important 
    }
     .d-xl-inline-flex {
         display: -webkit-inline-box !important;
         display: -ms-inline-flexbox !important;
         display: inline-flex !important 
    }
}
 @media print {
     .d-print-none {
         display: none !important 
    }
     .d-print-inline {
         display: inline !important 
    }
     .d-print-inline-block {
         display: inline-block !important 
    }
     .d-print-block {
         display: block !important 
    }
     .d-print-table {
         display: table !important 
    }
     .d-print-table-row {
         display: table-row !important 
    }
     .d-print-table-cell {
         display: table-cell !important 
    }
     .d-print-flex {
         display: -webkit-box !important;
         display: -ms-flexbox !important;
         display: flex !important 
    }
     .d-print-inline-flex {
         display: -webkit-inline-box !important;
         display: -ms-inline-flexbox !important;
         display: inline-flex !important 
    }
}
 .flex-row {
     -webkit-box-orient: horizontal !important;
     -webkit-box-direction: normal !important;
     -ms-flex-direction: row !important;
     flex-direction: row !important 
}
 .flex-column {
     -webkit-box-orient: vertical !important;
     -webkit-box-direction: normal !important;
     -ms-flex-direction: column !important;
     flex-direction: column !important 
}
 .flex-row-reverse {
     -webkit-box-orient: horizontal !important;
     -webkit-box-direction: reverse !important;
     -ms-flex-direction: row-reverse !important;
     flex-direction: row-reverse !important 
}
 .flex-column-reverse {
     -webkit-box-orient: vertical !important;
     -webkit-box-direction: reverse !important;
     -ms-flex-direction: column-reverse !important;
     flex-direction: column-reverse !important 
}
 .flex-wrap {
     -ms-flex-wrap: wrap !important;
     flex-wrap: wrap !important 
}
 .flex-nowrap {
     -ms-flex-wrap: nowrap !important;
     flex-wrap: nowrap !important 
}
 .flex-wrap-reverse {
     -ms-flex-wrap: wrap-reverse !important;
     flex-wrap: wrap-reverse !important 
}
 .flex-fill {
     -webkit-box-flex: 1 !important;
     -ms-flex: 1 1 auto !important;
     flex: 1 1 auto !important 
}
 .flex-grow-0 {
     -webkit-box-flex: 0 !important;
     -ms-flex-positive: 0 !important;
     flex-grow: 0 !important 
}
 .flex-grow-1 {
     -webkit-box-flex: 1 !important;
     -ms-flex-positive: 1 !important;
     flex-grow: 1 !important 
}
 .flex-shrink-0 {
     -ms-flex-negative: 0 !important;
     flex-shrink: 0 !important 
}
 .flex-shrink-1 {
     -ms-flex-negative: 1 !important;
     flex-shrink: 1 !important 
}
 .justify-content-start {
     -webkit-box-pack: start !important;
     -ms-flex-pack: start !important;
     justify-content: flex-start !important 
}
 .justify-content-end {
     -webkit-box-pack: end !important;
     -ms-flex-pack: end !important;
     justify-content: flex-end !important 
}
 .justify-content-center {
     -webkit-box-pack: center !important;
     -ms-flex-pack: center !important;
     justify-content: center !important 
}
 .justify-content-between {
     -webkit-box-pack: justify !important;
     -ms-flex-pack: justify !important;
     justify-content: space-between !important 
}
 .justify-content-around {
     -ms-flex-pack: distribute !important;
     justify-content: space-around !important 
}
 .align-items-start {
     -webkit-box-align: start !important;
     -ms-flex-align: start !important;
     align-items: flex-start !important 
}
 .align-items-end {
     -webkit-box-align: end !important;
     -ms-flex-align: end !important;
     align-items: flex-end !important 
}
 .align-items-center {
     -webkit-box-align: center !important;
     -ms-flex-align: center !important;
     align-items: center !important 
}
 .align-items-baseline {
     -webkit-box-align: baseline !important;
     -ms-flex-align: baseline !important;
     align-items: baseline !important 
}
 .align-items-stretch {
     -webkit-box-align: stretch !important;
     -ms-flex-align: stretch !important;
     align-items: stretch !important 
}
 .align-content-start {
     -ms-flex-line-pack: start !important;
     align-content: flex-start !important 
}
 .align-content-end {
     -ms-flex-line-pack: end !important;
     align-content: flex-end !important 
}
 .align-content-center {
     -ms-flex-line-pack: center !important;
     align-content: center !important 
}
 .align-content-between {
     -ms-flex-line-pack: justify !important;
     align-content: space-between !important 
}
 .align-content-around {
     -ms-flex-line-pack: distribute !important;
     align-content: space-around !important 
}
 .align-content-stretch {
     -ms-flex-line-pack: stretch !important;
     align-content: stretch !important 
}
 .align-self-auto {
     -ms-flex-item-align: auto !important;
     align-self: auto !important 
}
 .align-self-start {
     -ms-flex-item-align: start !important;
     align-self: flex-start !important 
}
 .align-self-end {
     -ms-flex-item-align: end !important;
     align-self: flex-end !important 
}
 .align-self-center {
     -ms-flex-item-align: center !important;
     align-self: center !important 
}
 .align-self-baseline {
     -ms-flex-item-align: baseline !important;
     align-self: baseline !important 
}
 .align-self-stretch {
     -ms-flex-item-align: stretch !important;
     align-self: stretch !important 
}
 @media (min-width: 576px) {
     .flex-sm-row {
         -webkit-box-orient: horizontal !important;
         -webkit-box-direction: normal !important;
         -ms-flex-direction: row !important;
         flex-direction: row !important 
    }
     .flex-sm-column {
         -webkit-box-orient: vertical !important;
         -webkit-box-direction: normal !important;
         -ms-flex-direction: column !important;
         flex-direction: column !important 
    }
     .flex-sm-row-reverse {
         -webkit-box-orient: horizontal !important;
         -webkit-box-direction: reverse !important;
         -ms-flex-direction: row-reverse !important;
         flex-direction: row-reverse !important 
    }
     .flex-sm-column-reverse {
         -webkit-box-orient: vertical !important;
         -webkit-box-direction: reverse !important;
         -ms-flex-direction: column-reverse !important;
         flex-direction: column-reverse !important 
    }
     .flex-sm-wrap {
         -ms-flex-wrap: wrap !important;
         flex-wrap: wrap !important 
    }
     .flex-sm-nowrap {
         -ms-flex-wrap: nowrap !important;
         flex-wrap: nowrap !important 
    }
     .flex-sm-wrap-reverse {
         -ms-flex-wrap: wrap-reverse !important;
         flex-wrap: wrap-reverse !important 
    }
     .flex-sm-fill {
         -webkit-box-flex: 1 !important;
         -ms-flex: 1 1 auto !important;
         flex: 1 1 auto !important 
    }
     .flex-sm-grow-0 {
         -webkit-box-flex: 0 !important;
         -ms-flex-positive: 0 !important;
         flex-grow: 0 !important 
    }
     .flex-sm-grow-1 {
         -webkit-box-flex: 1 !important;
         -ms-flex-positive: 1 !important;
         flex-grow: 1 !important 
    }
     .flex-sm-shrink-0 {
         -ms-flex-negative: 0 !important;
         flex-shrink: 0 !important 
    }
     .flex-sm-shrink-1 {
         -ms-flex-negative: 1 !important;
         flex-shrink: 1 !important 
    }
     .justify-content-sm-start {
         -webkit-box-pack: start !important;
         -ms-flex-pack: start !important;
         justify-content: flex-start !important 
    }
     .justify-content-sm-end {
         -webkit-box-pack: end !important;
         -ms-flex-pack: end !important;
         justify-content: flex-end !important 
    }
     .justify-content-sm-center {
         -webkit-box-pack: center !important;
         -ms-flex-pack: center !important;
         justify-content: center !important 
    }
     .justify-content-sm-between {
         -webkit-box-pack: justify !important;
         -ms-flex-pack: justify !important;
         justify-content: space-between !important 
    }
     .justify-content-sm-around {
         -ms-flex-pack: distribute !important;
         justify-content: space-around !important 
    }
     .align-items-sm-start {
         -webkit-box-align: start !important;
         -ms-flex-align: start !important;
         align-items: flex-start !important 
    }
     .align-items-sm-end {
         -webkit-box-align: end !important;
         -ms-flex-align: end !important;
         align-items: flex-end !important 
    }
     .align-items-sm-center {
         -webkit-box-align: center !important;
         -ms-flex-align: center !important;
         align-items: center !important 
    }
     .align-items-sm-baseline {
         -webkit-box-align: baseline !important;
         -ms-flex-align: baseline !important;
         align-items: baseline !important 
    }
     .align-items-sm-stretch {
         -webkit-box-align: stretch !important;
         -ms-flex-align: stretch !important;
         align-items: stretch !important 
    }
     .align-content-sm-start {
         -ms-flex-line-pack: start !important;
         align-content: flex-start !important 
    }
     .align-content-sm-end {
         -ms-flex-line-pack: end !important;
         align-content: flex-end !important 
    }
     .align-content-sm-center {
         -ms-flex-line-pack: center !important;
         align-content: center !important 
    }
     .align-content-sm-between {
         -ms-flex-line-pack: justify !important;
         align-content: space-between !important 
    }
     .align-content-sm-around {
         -ms-flex-line-pack: distribute !important;
         align-content: space-around !important 
    }
     .align-content-sm-stretch {
         -ms-flex-line-pack: stretch !important;
         align-content: stretch !important 
    }
     .align-self-sm-auto {
         -ms-flex-item-align: auto !important;
         align-self: auto !important 
    }
     .align-self-sm-start {
         -ms-flex-item-align: start !important;
         align-self: flex-start !important 
    }
     .align-self-sm-end {
         -ms-flex-item-align: end !important;
         align-self: flex-end !important 
    }
     .align-self-sm-center {
         -ms-flex-item-align: center !important;
         align-self: center !important 
    }
     .align-self-sm-baseline {
         -ms-flex-item-align: baseline !important;
         align-self: baseline !important 
    }
     .align-self-sm-stretch {
         -ms-flex-item-align: stretch !important;
         align-self: stretch !important 
    }
}
 @media (min-width: 768px) {
     .flex-md-row {
         -webkit-box-orient: horizontal !important;
         -webkit-box-direction: normal !important;
         -ms-flex-direction: row !important;
         flex-direction: row !important 
    }
     .flex-md-column {
         -webkit-box-orient: vertical !important;
         -webkit-box-direction: normal !important;
         -ms-flex-direction: column !important;
         flex-direction: column !important 
    }
     .flex-md-row-reverse {
         -webkit-box-orient: horizontal !important;
         -webkit-box-direction: reverse !important;
         -ms-flex-direction: row-reverse !important;
         flex-direction: row-reverse !important 
    }
     .flex-md-column-reverse {
         -webkit-box-orient: vertical !important;
         -webkit-box-direction: reverse !important;
         -ms-flex-direction: column-reverse !important;
         flex-direction: column-reverse !important 
    }
     .flex-md-wrap {
         -ms-flex-wrap: wrap !important;
         flex-wrap: wrap !important 
    }
     .flex-md-nowrap {
         -ms-flex-wrap: nowrap !important;
         flex-wrap: nowrap !important 
    }
     .flex-md-wrap-reverse {
         -ms-flex-wrap: wrap-reverse !important;
         flex-wrap: wrap-reverse !important 
    }
     .flex-md-fill {
         -webkit-box-flex: 1 !important;
         -ms-flex: 1 1 auto !important;
         flex: 1 1 auto !important 
    }
     .flex-md-grow-0 {
         -webkit-box-flex: 0 !important;
         -ms-flex-positive: 0 !important;
         flex-grow: 0 !important 
    }
     .flex-md-grow-1 {
         -webkit-box-flex: 1 !important;
         -ms-flex-positive: 1 !important;
         flex-grow: 1 !important 
    }
     .flex-md-shrink-0 {
         -ms-flex-negative: 0 !important;
         flex-shrink: 0 !important 
    }
     .flex-md-shrink-1 {
         -ms-flex-negative: 1 !important;
         flex-shrink: 1 !important 
    }
     .justify-content-md-start {
         -webkit-box-pack: start !important;
         -ms-flex-pack: start !important;
         justify-content: flex-start !important 
    }
     .justify-content-md-end {
         -webkit-box-pack: end !important;
         -ms-flex-pack: end !important;
         justify-content: flex-end !important 
    }
     .justify-content-md-center {
         -webkit-box-pack: center !important;
         -ms-flex-pack: center !important;
         justify-content: center !important 
    }
     .justify-content-md-between {
         -webkit-box-pack: justify !important;
         -ms-flex-pack: justify !important;
         justify-content: space-between !important 
    }
     .justify-content-md-around {
         -ms-flex-pack: distribute !important;
         justify-content: space-around !important 
    }
     .align-items-md-start {
         -webkit-box-align: start !important;
         -ms-flex-align: start !important;
         align-items: flex-start !important 
    }
     .align-items-md-end {
         -webkit-box-align: end !important;
         -ms-flex-align: end !important;
         align-items: flex-end !important 
    }
     .align-items-md-center {
         -webkit-box-align: center !important;
         -ms-flex-align: center !important;
         align-items: center !important 
    }
     .align-items-md-baseline {
         -webkit-box-align: baseline !important;
         -ms-flex-align: baseline !important;
         align-items: baseline !important 
    }
     .align-items-md-stretch {
         -webkit-box-align: stretch !important;
         -ms-flex-align: stretch !important;
         align-items: stretch !important 
    }
     .align-content-md-start {
         -ms-flex-line-pack: start !important;
         align-content: flex-start !important 
    }
     .align-content-md-end {
         -ms-flex-line-pack: end !important;
         align-content: flex-end !important 
    }
     .align-content-md-center {
         -ms-flex-line-pack: center !important;
         align-content: center !important 
    }
     .align-content-md-between {
         -ms-flex-line-pack: justify !important;
         align-content: space-between !important 
    }
     .align-content-md-around {
         -ms-flex-line-pack: distribute !important;
         align-content: space-around !important 
    }
     .align-content-md-stretch {
         -ms-flex-line-pack: stretch !important;
         align-content: stretch !important 
    }
     .align-self-md-auto {
         -ms-flex-item-align: auto !important;
         align-self: auto !important 
    }
     .align-self-md-start {
         -ms-flex-item-align: start !important;
         align-self: flex-start !important 
    }
     .align-self-md-end {
         -ms-flex-item-align: end !important;
         align-self: flex-end !important 
    }
     .align-self-md-center {
         -ms-flex-item-align: center !important;
         align-self: center !important 
    }
     .align-self-md-baseline {
         -ms-flex-item-align: baseline !important;
         align-self: baseline !important 
    }
     .align-self-md-stretch {
         -ms-flex-item-align: stretch !important;
         align-self: stretch !important 
    }
}
 @media (min-width: 992px) {
     .flex-lg-row {
         -webkit-box-orient: horizontal !important;
         -webkit-box-direction: normal !important;
         -ms-flex-direction: row !important;
         flex-direction: row !important 
    }
     .flex-lg-column {
         -webkit-box-orient: vertical !important;
         -webkit-box-direction: normal !important;
         -ms-flex-direction: column !important;
         flex-direction: column !important 
    }
     .flex-lg-row-reverse {
         -webkit-box-orient: horizontal !important;
         -webkit-box-direction: reverse !important;
         -ms-flex-direction: row-reverse !important;
         flex-direction: row-reverse !important 
    }
     .flex-lg-column-reverse {
         -webkit-box-orient: vertical !important;
         -webkit-box-direction: reverse !important;
         -ms-flex-direction: column-reverse !important;
         flex-direction: column-reverse !important 
    }
     .flex-lg-wrap {
         -ms-flex-wrap: wrap !important;
         flex-wrap: wrap !important 
    }
     .flex-lg-nowrap {
         -ms-flex-wrap: nowrap !important;
         flex-wrap: nowrap !important 
    }
     .flex-lg-wrap-reverse {
         -ms-flex-wrap: wrap-reverse !important;
         flex-wrap: wrap-reverse !important 
    }
     .flex-lg-fill {
         -webkit-box-flex: 1 !important;
         -ms-flex: 1 1 auto !important;
         flex: 1 1 auto !important 
    }
     .flex-lg-grow-0 {
         -webkit-box-flex: 0 !important;
         -ms-flex-positive: 0 !important;
         flex-grow: 0 !important 
    }
     .flex-lg-grow-1 {
         -webkit-box-flex: 1 !important;
         -ms-flex-positive: 1 !important;
         flex-grow: 1 !important 
    }
     .flex-lg-shrink-0 {
         -ms-flex-negative: 0 !important;
         flex-shrink: 0 !important 
    }
     .flex-lg-shrink-1 {
         -ms-flex-negative: 1 !important;
         flex-shrink: 1 !important 
    }
     .justify-content-lg-start {
         -webkit-box-pack: start !important;
         -ms-flex-pack: start !important;
         justify-content: flex-start !important 
    }
     .justify-content-lg-end {
         -webkit-box-pack: end !important;
         -ms-flex-pack: end !important;
         justify-content: flex-end !important 
    }
     .justify-content-lg-center {
         -webkit-box-pack: center !important;
         -ms-flex-pack: center !important;
         justify-content: center !important 
    }
     .justify-content-lg-between {
         -webkit-box-pack: justify !important;
         -ms-flex-pack: justify !important;
         justify-content: space-between !important 
    }
     .justify-content-lg-around {
         -ms-flex-pack: distribute !important;
         justify-content: space-around !important 
    }
     .align-items-lg-start {
         -webkit-box-align: start !important;
         -ms-flex-align: start !important;
         align-items: flex-start !important 
    }
     .align-items-lg-end {
         -webkit-box-align: end !important;
         -ms-flex-align: end !important;
         align-items: flex-end !important 
    }
     .align-items-lg-center {
         -webkit-box-align: center !important;
         -ms-flex-align: center !important;
         align-items: center !important 
    }
     .align-items-lg-baseline {
         -webkit-box-align: baseline !important;
         -ms-flex-align: baseline !important;
         align-items: baseline !important 
    }
     .align-items-lg-stretch {
         -webkit-box-align: stretch !important;
         -ms-flex-align: stretch !important;
         align-items: stretch !important 
    }
     .align-content-lg-start {
         -ms-flex-line-pack: start !important;
         align-content: flex-start !important 
    }
     .align-content-lg-end {
         -ms-flex-line-pack: end !important;
         align-content: flex-end !important 
    }
     .align-content-lg-center {
         -ms-flex-line-pack: center !important;
         align-content: center !important 
    }
     .align-content-lg-between {
         -ms-flex-line-pack: justify !important;
         align-content: space-between !important 
    }
     .align-content-lg-around {
         -ms-flex-line-pack: distribute !important;
         align-content: space-around !important 
    }
     .align-content-lg-stretch {
         -ms-flex-line-pack: stretch !important;
         align-content: stretch !important 
    }
     .align-self-lg-auto {
         -ms-flex-item-align: auto !important;
         align-self: auto !important 
    }
     .align-self-lg-start {
         -ms-flex-item-align: start !important;
         align-self: flex-start !important 
    }
     .align-self-lg-end {
         -ms-flex-item-align: end !important;
         align-self: flex-end !important 
    }
     .align-self-lg-center {
         -ms-flex-item-align: center !important;
         align-self: center !important 
    }
     .align-self-lg-baseline {
         -ms-flex-item-align: baseline !important;
         align-self: baseline !important 
    }
     .align-self-lg-stretch {
         -ms-flex-item-align: stretch !important;
         align-self: stretch !important 
    }
}
 @media (min-width: 1200px) {
     .flex-xl-row {
         -webkit-box-orient: horizontal !important;
         -webkit-box-direction: normal !important;
         -ms-flex-direction: row !important;
         flex-direction: row !important 
    }
     .flex-xl-column {
         -webkit-box-orient: vertical !important;
         -webkit-box-direction: normal !important;
         -ms-flex-direction: column !important;
         flex-direction: column !important 
    }
     .flex-xl-row-reverse {
         -webkit-box-orient: horizontal !important;
         -webkit-box-direction: reverse !important;
         -ms-flex-direction: row-reverse !important;
         flex-direction: row-reverse !important 
    }
     .flex-xl-column-reverse {
         -webkit-box-orient: vertical !important;
         -webkit-box-direction: reverse !important;
         -ms-flex-direction: column-reverse !important;
         flex-direction: column-reverse !important 
    }
     .flex-xl-wrap {
         -ms-flex-wrap: wrap !important;
         flex-wrap: wrap !important 
    }
     .flex-xl-nowrap {
         -ms-flex-wrap: nowrap !important;
         flex-wrap: nowrap !important 
    }
     .flex-xl-wrap-reverse {
         -ms-flex-wrap: wrap-reverse !important;
         flex-wrap: wrap-reverse !important 
    }
     .flex-xl-fill {
         -webkit-box-flex: 1 !important;
         -ms-flex: 1 1 auto !important;
         flex: 1 1 auto !important 
    }
     .flex-xl-grow-0 {
         -webkit-box-flex: 0 !important;
         -ms-flex-positive: 0 !important;
         flex-grow: 0 !important 
    }
     .flex-xl-grow-1 {
         -webkit-box-flex: 1 !important;
         -ms-flex-positive: 1 !important;
         flex-grow: 1 !important 
    }
     .flex-xl-shrink-0 {
         -ms-flex-negative: 0 !important;
         flex-shrink: 0 !important 
    }
     .flex-xl-shrink-1 {
         -ms-flex-negative: 1 !important;
         flex-shrink: 1 !important 
    }
     .justify-content-xl-start {
         -webkit-box-pack: start !important;
         -ms-flex-pack: start !important;
         justify-content: flex-start !important 
    }
     .justify-content-xl-end {
         -webkit-box-pack: end !important;
         -ms-flex-pack: end !important;
         justify-content: flex-end !important 
    }
     .justify-content-xl-center {
         -webkit-box-pack: center !important;
         -ms-flex-pack: center !important;
         justify-content: center !important 
    }
     .justify-content-xl-between {
         -webkit-box-pack: justify !important;
         -ms-flex-pack: justify !important;
         justify-content: space-between !important 
    }
     .justify-content-xl-around {
         -ms-flex-pack: distribute !important;
         justify-content: space-around !important 
    }
     .align-items-xl-start {
         -webkit-box-align: start !important;
         -ms-flex-align: start !important;
         align-items: flex-start !important 
    }
     .align-items-xl-end {
         -webkit-box-align: end !important;
         -ms-flex-align: end !important;
         align-items: flex-end !important 
    }
     .align-items-xl-center {
         -webkit-box-align: center !important;
         -ms-flex-align: center !important;
         align-items: center !important 
    }
     .align-items-xl-baseline {
         -webkit-box-align: baseline !important;
         -ms-flex-align: baseline !important;
         align-items: baseline !important 
    }
     .align-items-xl-stretch {
         -webkit-box-align: stretch !important;
         -ms-flex-align: stretch !important;
         align-items: stretch !important 
    }
     .align-content-xl-start {
         -ms-flex-line-pack: start !important;
         align-content: flex-start !important 
    }
     .align-content-xl-end {
         -ms-flex-line-pack: end !important;
         align-content: flex-end !important 
    }
     .align-content-xl-center {
         -ms-flex-line-pack: center !important;
         align-content: center !important 
    }
     .align-content-xl-between {
         -ms-flex-line-pack: justify !important;
         align-content: space-between !important 
    }
     .align-content-xl-around {
         -ms-flex-line-pack: distribute !important;
         align-content: space-around !important 
    }
     .align-content-xl-stretch {
         -ms-flex-line-pack: stretch !important;
         align-content: stretch !important 
    }
     .align-self-xl-auto {
         -ms-flex-item-align: auto !important;
         align-self: auto !important 
    }
     .align-self-xl-start {
         -ms-flex-item-align: start !important;
         align-self: flex-start !important 
    }
     .align-self-xl-end {
         -ms-flex-item-align: end !important;
         align-self: flex-end !important 
    }
     .align-self-xl-center {
         -ms-flex-item-align: center !important;
         align-self: center !important 
    }
     .align-self-xl-baseline {
         -ms-flex-item-align: baseline !important;
         align-self: baseline !important 
    }
     .align-self-xl-stretch {
         -ms-flex-item-align: stretch !important;
         align-self: stretch !important 
    }
}
 .m-0 {
     margin: 0 !important 
}
 .mt-0, .my-0 {
     margin-top: 0 !important 
}
 .mr-0, .mx-0 {
     margin-right: 0 !important 
}
 .mb-0, .my-0 {
     margin-bottom: 0 !important 
}
 .ml-0, .mx-0 {
     margin-left: 0 !important 
}
 .m-1 {
     margin: .25rem !important 
}
 .mt-1, .my-1 {
     margin-top: .25rem !important 
}
 .mr-1, .mx-1 {
     margin-right: .25rem !important 
}
 .mb-1, .my-1 {
     margin-bottom: .25rem !important 
}
 .ml-1, .mx-1 {
     margin-left: .25rem !important 
}
 .m-2 {
     margin: .5rem !important 
}
 .mt-2, .my-2 {
     margin-top: .5rem !important 
}
 .mr-2, .mx-2 {
     margin-right: .5rem !important 
}
 .mb-2, .my-2 {
     margin-bottom: .5rem !important 
}
 .ml-2, .mx-2 {
     margin-left: .5rem !important 
}
 .m-3 {
     margin: 1rem !important 
}
 .mt-3, .my-3 {
     margin-top: 1rem !important 
}
 .mr-3, .mx-3 {
     margin-right: 1rem !important 
}
 .mb-3, .my-3 {
     margin-bottom: 1rem !important 
}
 .ml-3, .mx-3 {
     margin-left: 1rem !important 
}
 .m-4 {
     margin: 1.5rem !important 
}
 .mt-4, .my-4 {
     margin-top: 1.5rem !important 
}
 .mr-4, .mx-4 {
     margin-right: 1.5rem !important 
}
 .mb-4, .my-4 {
     margin-bottom: 1.5rem !important 
}
 .ml-4, .mx-4 {
     margin-left: 1.5rem !important 
}
 .m-5 {
     margin: 3rem !important 
}
 .mt-5, .my-5 {
     margin-top: 3rem !important 
}
 .mr-5, .mx-5 {
     margin-right: 3rem !important 
}
 .mb-5, .my-5 {
     margin-bottom: 3rem !important 
}
 .ml-5, .mx-5 {
     margin-left: 3rem !important 
}
 .p-0 {
     padding: 0 !important 
}
 .pt-0, .py-0 {
     padding-top: 0 !important 
}
 .pr-0, .px-0 {
     padding-right: 0 !important 
}
 .pb-0, .py-0 {
     padding-bottom: 0 !important 
}
 .pl-0, .px-0 {
     padding-left: 0 !important 
}
 .p-1 {
     padding: .25rem !important 
}
 .pt-1, .py-1 {
     padding-top: .25rem !important 
}
 .pr-1, .px-1 {
     padding-right: .25rem !important 
}
 .pb-1, .py-1 {
     padding-bottom: .25rem !important 
}
 .pl-1, .px-1 {
     padding-left: .25rem !important 
}
 .p-2 {
     padding: .5rem !important 
}
 .pt-2, .py-2 {
     padding-top: .5rem !important 
}
 .pr-2, .px-2 {
     padding-right: .5rem !important 
}
 .pb-2, .py-2 {
     padding-bottom: .5rem !important 
}
 .pl-2, .px-2 {
     padding-left: .5rem !important 
}
 .p-3 {
     padding: 1rem !important 
}
 .pt-3, .py-3 {
     padding-top: 1rem !important 
}
 .pr-3, .px-3 {
     padding-right: 1rem !important 
}
 .pb-3, .py-3 {
     padding-bottom: 1rem !important 
}
 .pl-3, .px-3 {
     padding-left: 1rem !important 
}
 .p-4 {
     padding: 1.5rem !important 
}
 .pt-4, .py-4 {
     padding-top: 1.5rem !important 
}
 .pr-4, .px-4 {
     padding-right: 1.5rem !important 
}
 .pb-4, .py-4 {
     padding-bottom: 1.5rem !important 
}
 .pl-4, .px-4 {
     padding-left: 1.5rem !important 
}
 .p-5 {
     padding: 3rem !important 
}
 .pt-5, .py-5 {
     padding-top: 3rem !important 
}
 .pr-5, .px-5 {
     padding-right: 3rem !important 
}
 .pb-5, .py-5 {
     padding-bottom: 3rem !important 
}
 .pl-5, .px-5 {
     padding-left: 3rem !important 
}
 .m-n1 {
     margin: -.25rem !important 
}
 .mt-n1, .my-n1 {
     margin-top: -.25rem !important 
}
 .mr-n1, .mx-n1 {
     margin-right: -.25rem !important 
}
 .mb-n1, .my-n1 {
     margin-bottom: -.25rem !important 
}
 .ml-n1, .mx-n1 {
     margin-left: -.25rem !important 
}
 .m-n2 {
     margin: -.5rem !important 
}
 .mt-n2, .my-n2 {
     margin-top: -.5rem !important 
}
 .mr-n2, .mx-n2 {
     margin-right: -.5rem !important 
}
 .mb-n2, .my-n2 {
     margin-bottom: -.5rem !important 
}
 .ml-n2, .mx-n2 {
     margin-left: -.5rem !important 
}
 .m-n3 {
     margin: -1rem !important 
}
 .mt-n3, .my-n3 {
     margin-top: -1rem !important 
}
 .mr-n3, .mx-n3 {
     margin-right: -1rem !important 
}
 .mb-n3, .my-n3 {
     margin-bottom: -1rem !important 
}
 .ml-n3, .mx-n3 {
     margin-left: -1rem !important 
}
 .m-n4 {
     margin: -1.5rem !important 
}
 .mt-n4, .my-n4 {
     margin-top: -1.5rem !important 
}
 .mr-n4, .mx-n4 {
     margin-right: -1.5rem !important 
}
 .mb-n4, .my-n4 {
     margin-bottom: -1.5rem !important 
}
 .ml-n4, .mx-n4 {
     margin-left: -1.5rem !important 
}
 .m-n5 {
     margin: -3rem !important 
}
 .mt-n5, .my-n5 {
     margin-top: -3rem !important 
}
 .mr-n5, .mx-n5 {
     margin-right: -3rem !important 
}
 .mb-n5, .my-n5 {
     margin-bottom: -3rem !important 
}
 .ml-n5, .mx-n5 {
     margin-left: -3rem !important 
}
 .m-auto {
     margin: auto !important 
}
 .mt-auto, .my-auto {
     margin-top: auto !important 
}
 .mr-auto, .mx-auto {
     margin-right: auto !important 
}
 .mb-auto, .my-auto {
     margin-bottom: auto !important 
}
 .ml-auto, .mx-auto {
     margin-left: auto !important 
}
 @media (min-width: 576px) {
     .m-sm-0 {
         margin: 0 !important 
    }
     .mt-sm-0, .my-sm-0 {
         margin-top: 0 !important 
    }
     .mr-sm-0, .mx-sm-0 {
         margin-right: 0 !important 
    }
     .mb-sm-0, .my-sm-0 {
         margin-bottom: 0 !important 
    }
     .ml-sm-0, .mx-sm-0 {
         margin-left: 0 !important 
    }
     .m-sm-1 {
         margin: .25rem !important 
    }
     .mt-sm-1, .my-sm-1 {
         margin-top: .25rem !important 
    }
     .mr-sm-1, .mx-sm-1 {
         margin-right: .25rem !important 
    }
     .mb-sm-1, .my-sm-1 {
         margin-bottom: .25rem !important 
    }
     .ml-sm-1, .mx-sm-1 {
         margin-left: .25rem !important 
    }
     .m-sm-2 {
         margin: .5rem !important 
    }
     .mt-sm-2, .my-sm-2 {
         margin-top: .5rem !important 
    }
     .mr-sm-2, .mx-sm-2 {
         margin-right: .5rem !important 
    }
     .mb-sm-2, .my-sm-2 {
         margin-bottom: .5rem !important 
    }
     .ml-sm-2, .mx-sm-2 {
         margin-left: .5rem !important 
    }
     .m-sm-3 {
         margin: 1rem !important 
    }
     .mt-sm-3, .my-sm-3 {
         margin-top: 1rem !important 
    }
     .mr-sm-3, .mx-sm-3 {
         margin-right: 1rem !important 
    }
     .mb-sm-3, .my-sm-3 {
         margin-bottom: 1rem !important 
    }
     .ml-sm-3, .mx-sm-3 {
         margin-left: 1rem !important 
    }
     .m-sm-4 {
         margin: 1.5rem !important 
    }
     .mt-sm-4, .my-sm-4 {
         margin-top: 1.5rem !important 
    }
     .mr-sm-4, .mx-sm-4 {
         margin-right: 1.5rem !important 
    }
     .mb-sm-4, .my-sm-4 {
         margin-bottom: 1.5rem !important 
    }
     .ml-sm-4, .mx-sm-4 {
         margin-left: 1.5rem !important 
    }
     .m-sm-5 {
         margin: 3rem !important 
    }
     .mt-sm-5, .my-sm-5 {
         margin-top: 3rem !important 
    }
     .mr-sm-5, .mx-sm-5 {
         margin-right: 3rem !important 
    }
     .mb-sm-5, .my-sm-5 {
         margin-bottom: 3rem !important 
    }
     .ml-sm-5, .mx-sm-5 {
         margin-left: 3rem !important 
    }
     .p-sm-0 {
         padding: 0 !important 
    }
     .pt-sm-0, .py-sm-0 {
         padding-top: 0 !important 
    }
     .pr-sm-0, .px-sm-0 {
         padding-right: 0 !important 
    }
     .pb-sm-0, .py-sm-0 {
         padding-bottom: 0 !important 
    }
     .pl-sm-0, .px-sm-0 {
         padding-left: 0 !important 
    }
     .p-sm-1 {
         padding: .25rem !important 
    }
     .pt-sm-1, .py-sm-1 {
         padding-top: .25rem !important 
    }
     .pr-sm-1, .px-sm-1 {
         padding-right: .25rem !important 
    }
     .pb-sm-1, .py-sm-1 {
         padding-bottom: .25rem !important 
    }
     .pl-sm-1, .px-sm-1 {
         padding-left: .25rem !important 
    }
     .p-sm-2 {
         padding: .5rem !important 
    }
     .pt-sm-2, .py-sm-2 {
         padding-top: .5rem !important 
    }
     .pr-sm-2, .px-sm-2 {
         padding-right: .5rem !important 
    }
     .pb-sm-2, .py-sm-2 {
         padding-bottom: .5rem !important 
    }
     .pl-sm-2, .px-sm-2 {
         padding-left: .5rem !important 
    }
     .p-sm-3 {
         padding: 1rem !important 
    }
     .pt-sm-3, .py-sm-3 {
         padding-top: 1rem !important 
    }
     .pr-sm-3, .px-sm-3 {
         padding-right: 1rem !important 
    }
     .pb-sm-3, .py-sm-3 {
         padding-bottom: 1rem !important 
    }
     .pl-sm-3, .px-sm-3 {
         padding-left: 1rem !important 
    }
     .p-sm-4 {
         padding: 1.5rem !important 
    }
     .pt-sm-4, .py-sm-4 {
         padding-top: 1.5rem !important 
    }
     .pr-sm-4, .px-sm-4 {
         padding-right: 1.5rem !important 
    }
     .pb-sm-4, .py-sm-4 {
         padding-bottom: 1.5rem !important 
    }
     .pl-sm-4, .px-sm-4 {
         padding-left: 1.5rem !important 
    }
     .p-sm-5 {
         padding: 3rem !important 
    }
     .pt-sm-5, .py-sm-5 {
         padding-top: 3rem !important 
    }
     .pr-sm-5, .px-sm-5 {
         padding-right: 3rem !important 
    }
     .pb-sm-5, .py-sm-5 {
         padding-bottom: 3rem !important 
    }
     .pl-sm-5, .px-sm-5 {
         padding-left: 3rem !important 
    }
     .m-sm-n1 {
         margin: -.25rem !important 
    }
     .mt-sm-n1, .my-sm-n1 {
         margin-top: -.25rem !important 
    }
     .mr-sm-n1, .mx-sm-n1 {
         margin-right: -.25rem !important 
    }
     .mb-sm-n1, .my-sm-n1 {
         margin-bottom: -.25rem !important 
    }
     .ml-sm-n1, .mx-sm-n1 {
         margin-left: -.25rem !important 
    }
     .m-sm-n2 {
         margin: -.5rem !important 
    }
     .mt-sm-n2, .my-sm-n2 {
         margin-top: -.5rem !important 
    }
     .mr-sm-n2, .mx-sm-n2 {
         margin-right: -.5rem !important 
    }
     .mb-sm-n2, .my-sm-n2 {
         margin-bottom: -.5rem !important 
    }
     .ml-sm-n2, .mx-sm-n2 {
         margin-left: -.5rem !important 
    }
     .m-sm-n3 {
         margin: -1rem !important 
    }
     .mt-sm-n3, .my-sm-n3 {
         margin-top: -1rem !important 
    }
     .mr-sm-n3, .mx-sm-n3 {
         margin-right: -1rem !important 
    }
     .mb-sm-n3, .my-sm-n3 {
         margin-bottom: -1rem !important 
    }
     .ml-sm-n3, .mx-sm-n3 {
         margin-left: -1rem !important 
    }
     .m-sm-n4 {
         margin: -1.5rem !important 
    }
     .mt-sm-n4, .my-sm-n4 {
         margin-top: -1.5rem !important 
    }
     .mr-sm-n4, .mx-sm-n4 {
         margin-right: -1.5rem !important 
    }
     .mb-sm-n4, .my-sm-n4 {
         margin-bottom: -1.5rem !important 
    }
     .ml-sm-n4, .mx-sm-n4 {
         margin-left: -1.5rem !important 
    }
     .m-sm-n5 {
         margin: -3rem !important 
    }
     .mt-sm-n5, .my-sm-n5 {
         margin-top: -3rem !important 
    }
     .mr-sm-n5, .mx-sm-n5 {
         margin-right: -3rem !important 
    }
     .mb-sm-n5, .my-sm-n5 {
         margin-bottom: -3rem !important 
    }
     .ml-sm-n5, .mx-sm-n5 {
         margin-left: -3rem !important 
    }
     .m-sm-auto {
         margin: auto !important 
    }
     .mt-sm-auto, .my-sm-auto {
         margin-top: auto !important 
    }
     .mr-sm-auto, .mx-sm-auto {
         margin-right: auto !important 
    }
     .mb-sm-auto, .my-sm-auto {
         margin-bottom: auto !important 
    }
     .ml-sm-auto, .mx-sm-auto {
         margin-left: auto !important 
    }
}
 @media (min-width: 768px) {
     .m-md-0 {
         margin: 0 !important 
    }
     .mt-md-0, .my-md-0 {
         margin-top: 0 !important 
    }
     .mr-md-0, .mx-md-0 {
         margin-right: 0 !important 
    }
     .mb-md-0, .my-md-0 {
         margin-bottom: 0 !important 
    }
     .ml-md-0, .mx-md-0 {
         margin-left: 0 !important 
    }
     .m-md-1 {
         margin: .25rem !important 
    }
     .mt-md-1, .my-md-1 {
         margin-top: .25rem !important 
    }
     .mr-md-1, .mx-md-1 {
         margin-right: .25rem !important 
    }
     .mb-md-1, .my-md-1 {
         margin-bottom: .25rem !important 
    }
     .ml-md-1, .mx-md-1 {
         margin-left: .25rem !important 
    }
     .m-md-2 {
         margin: .5rem !important 
    }
     .mt-md-2, .my-md-2 {
         margin-top: .5rem !important 
    }
     .mr-md-2, .mx-md-2 {
         margin-right: .5rem !important 
    }
     .mb-md-2, .my-md-2 {
         margin-bottom: .5rem !important 
    }
     .ml-md-2, .mx-md-2 {
         margin-left: .5rem !important 
    }
     .m-md-3 {
         margin: 1rem !important 
    }
     .mt-md-3, .my-md-3 {
         margin-top: 1rem !important 
    }
     .mr-md-3, .mx-md-3 {
         margin-right: 1rem !important 
    }
     .mb-md-3, .my-md-3 {
         margin-bottom: 1rem !important 
    }
     .ml-md-3, .mx-md-3 {
         margin-left: 1rem !important 
    }
     .m-md-4 {
         margin: 1.5rem !important 
    }
     .mt-md-4, .my-md-4 {
         margin-top: 1.5rem !important 
    }
     .mr-md-4, .mx-md-4 {
         margin-right: 1.5rem !important 
    }
     .mb-md-4, .my-md-4 {
         margin-bottom: 1.5rem !important 
    }
     .ml-md-4, .mx-md-4 {
         margin-left: 1.5rem !important 
    }
     .m-md-5 {
         margin: 3rem !important 
    }
     .mt-md-5, .my-md-5 {
         margin-top: 3rem !important 
    }
     .mr-md-5, .mx-md-5 {
         margin-right: 3rem !important 
    }
     .mb-md-5, .my-md-5 {
         margin-bottom: 3rem !important 
    }
     .ml-md-5, .mx-md-5 {
         margin-left: 3rem !important 
    }
     .p-md-0 {
         padding: 0 !important 
    }
     .pt-md-0, .py-md-0 {
         padding-top: 0 !important 
    }
     .pr-md-0, .px-md-0 {
         padding-right: 0 !important 
    }
     .pb-md-0, .py-md-0 {
         padding-bottom: 0 !important 
    }
     .pl-md-0, .px-md-0 {
         padding-left: 0 !important 
    }
     .p-md-1 {
         padding: .25rem !important 
    }
     .pt-md-1, .py-md-1 {
         padding-top: .25rem !important 
    }
     .pr-md-1, .px-md-1 {
         padding-right: .25rem !important 
    }
     .pb-md-1, .py-md-1 {
         padding-bottom: .25rem !important 
    }
     .pl-md-1, .px-md-1 {
         padding-left: .25rem !important 
    }
     .p-md-2 {
         padding: .5rem !important 
    }
     .pt-md-2, .py-md-2 {
         padding-top: .5rem !important 
    }
     .pr-md-2, .px-md-2 {
         padding-right: .5rem !important 
    }
     .pb-md-2, .py-md-2 {
         padding-bottom: .5rem !important 
    }
     .pl-md-2, .px-md-2 {
         padding-left: .5rem !important 
    }
     .p-md-3 {
         padding: 1rem !important 
    }
     .pt-md-3, .py-md-3 {
         padding-top: 1rem !important 
    }
     .pr-md-3, .px-md-3 {
         padding-right: 1rem !important 
    }
     .pb-md-3, .py-md-3 {
         padding-bottom: 1rem !important 
    }
     .pl-md-3, .px-md-3 {
         padding-left: 1rem !important 
    }
     .p-md-4 {
         padding: 1.5rem !important 
    }
     .pt-md-4, .py-md-4 {
         padding-top: 1.5rem !important 
    }
     .pr-md-4, .px-md-4 {
         padding-right: 1.5rem !important 
    }
     .pb-md-4, .py-md-4 {
         padding-bottom: 1.5rem !important 
    }
     .pl-md-4, .px-md-4 {
         padding-left: 1.5rem !important 
    }
     .p-md-5 {
         padding: 3rem !important 
    }
     .pt-md-5, .py-md-5 {
         padding-top: 3rem !important 
    }
     .pr-md-5, .px-md-5 {
         padding-right: 3rem !important 
    }
     .pb-md-5, .py-md-5 {
         padding-bottom: 3rem !important 
    }
     .pl-md-5, .px-md-5 {
         padding-left: 3rem !important 
    }
     .m-md-n1 {
         margin: -.25rem !important 
    }
     .mt-md-n1, .my-md-n1 {
         margin-top: -.25rem !important 
    }
     .mr-md-n1, .mx-md-n1 {
         margin-right: -.25rem !important 
    }
     .mb-md-n1, .my-md-n1 {
         margin-bottom: -.25rem !important 
    }
     .ml-md-n1, .mx-md-n1 {
         margin-left: -.25rem !important 
    }
     .m-md-n2 {
         margin: -.5rem !important 
    }
     .mt-md-n2, .my-md-n2 {
         margin-top: -.5rem !important 
    }
     .mr-md-n2, .mx-md-n2 {
         margin-right: -.5rem !important 
    }
     .mb-md-n2, .my-md-n2 {
         margin-bottom: -.5rem !important 
    }
     .ml-md-n2, .mx-md-n2 {
         margin-left: -.5rem !important 
    }
     .m-md-n3 {
         margin: -1rem !important 
    }
     .mt-md-n3, .my-md-n3 {
         margin-top: -1rem !important 
    }
     .mr-md-n3, .mx-md-n3 {
         margin-right: -1rem !important 
    }
     .mb-md-n3, .my-md-n3 {
         margin-bottom: -1rem !important 
    }
     .ml-md-n3, .mx-md-n3 {
         margin-left: -1rem !important 
    }
     .m-md-n4 {
         margin: -1.5rem !important 
    }
     .mt-md-n4, .my-md-n4 {
         margin-top: -1.5rem !important 
    }
     .mr-md-n4, .mx-md-n4 {
         margin-right: -1.5rem !important 
    }
     .mb-md-n4, .my-md-n4 {
         margin-bottom: -1.5rem !important 
    }
     .ml-md-n4, .mx-md-n4 {
         margin-left: -1.5rem !important 
    }
     .m-md-n5 {
         margin: -3rem !important 
    }
     .mt-md-n5, .my-md-n5 {
         margin-top: -3rem !important 
    }
     .mr-md-n5, .mx-md-n5 {
         margin-right: -3rem !important 
    }
     .mb-md-n5, .my-md-n5 {
         margin-bottom: -3rem !important 
    }
     .ml-md-n5, .mx-md-n5 {
         margin-left: -3rem !important 
    }
     .m-md-auto {
         margin: auto !important 
    }
     .mt-md-auto, .my-md-auto {
         margin-top: auto !important 
    }
     .mr-md-auto, .mx-md-auto {
         margin-right: auto !important 
    }
     .mb-md-auto, .my-md-auto {
         margin-bottom: auto !important 
    }
     .ml-md-auto, .mx-md-auto {
         margin-left: auto !important 
    }
}
 @media (min-width: 992px) {
     .m-lg-0 {
         margin: 0 !important 
    }
     .mt-lg-0, .my-lg-0 {
         margin-top: 0 !important 
    }
     .mr-lg-0, .mx-lg-0 {
         margin-right: 0 !important 
    }
     .mb-lg-0, .my-lg-0 {
         margin-bottom: 0 !important 
    }
     .ml-lg-0, .mx-lg-0 {
         margin-left: 0 !important 
    }
     .m-lg-1 {
         margin: .25rem !important 
    }
     .mt-lg-1, .my-lg-1 {
         margin-top: .25rem !important 
    }
     .mr-lg-1, .mx-lg-1 {
         margin-right: .25rem !important 
    }
     .mb-lg-1, .my-lg-1 {
         margin-bottom: .25rem !important 
    }
     .ml-lg-1, .mx-lg-1 {
         margin-left: .25rem !important 
    }
     .m-lg-2 {
         margin: .5rem !important 
    }
     .mt-lg-2, .my-lg-2 {
         margin-top: .5rem !important 
    }
     .mr-lg-2, .mx-lg-2 {
         margin-right: .5rem !important 
    }
     .mb-lg-2, .my-lg-2 {
         margin-bottom: .5rem !important 
    }
     .ml-lg-2, .mx-lg-2 {
         margin-left: .5rem !important 
    }
     .m-lg-3 {
         margin: 1rem !important 
    }
     .mt-lg-3, .my-lg-3 {
         margin-top: 1rem !important 
    }
     .mr-lg-3, .mx-lg-3 {
         margin-right: 1rem !important 
    }
     .mb-lg-3, .my-lg-3 {
         margin-bottom: 1rem !important 
    }
     .ml-lg-3, .mx-lg-3 {
         margin-left: 1rem !important 
    }
     .m-lg-4 {
         margin: 1.5rem !important 
    }
     .mt-lg-4, .my-lg-4 {
         margin-top: 1.5rem !important 
    }
     .mr-lg-4, .mx-lg-4 {
         margin-right: 1.5rem !important 
    }
     .mb-lg-4, .my-lg-4 {
         margin-bottom: 1.5rem !important 
    }
     .ml-lg-4, .mx-lg-4 {
         margin-left: 1.5rem !important 
    }
     .m-lg-5 {
         margin: 3rem !important 
    }
     .mt-lg-5, .my-lg-5 {
         margin-top: 3rem !important 
    }
     .mr-lg-5, .mx-lg-5 {
         margin-right: 3rem !important 
    }
     .mb-lg-5, .my-lg-5 {
         margin-bottom: 3rem !important 
    }
     .ml-lg-5, .mx-lg-5 {
         margin-left: 3rem !important 
    }
     .p-lg-0 {
         padding: 0 !important 
    }
     .pt-lg-0, .py-lg-0 {
         padding-top: 0 !important 
    }
     .pr-lg-0, .px-lg-0 {
         padding-right: 0 !important 
    }
     .pb-lg-0, .py-lg-0 {
         padding-bottom: 0 !important 
    }
     .pl-lg-0, .px-lg-0 {
         padding-left: 0 !important 
    }
     .p-lg-1 {
         padding: .25rem !important 
    }
     .pt-lg-1, .py-lg-1 {
         padding-top: .25rem !important 
    }
     .pr-lg-1, .px-lg-1 {
         padding-right: .25rem !important 
    }
     .pb-lg-1, .py-lg-1 {
         padding-bottom: .25rem !important 
    }
     .pl-lg-1, .px-lg-1 {
         padding-left: .25rem !important 
    }
     .p-lg-2 {
         padding: .5rem !important 
    }
     .pt-lg-2, .py-lg-2 {
         padding-top: .5rem !important 
    }
     .pr-lg-2, .px-lg-2 {
         padding-right: .5rem !important 
    }
     .pb-lg-2, .py-lg-2 {
         padding-bottom: .5rem !important 
    }
     .pl-lg-2, .px-lg-2 {
         padding-left: .5rem !important 
    }
     .p-lg-3 {
         padding: 1rem !important 
    }
     .pt-lg-3, .py-lg-3 {
         padding-top: 1rem !important 
    }
     .pr-lg-3, .px-lg-3 {
         padding-right: 1rem !important 
    }
     .pb-lg-3, .py-lg-3 {
         padding-bottom: 1rem !important 
    }
     .pl-lg-3, .px-lg-3 {
         padding-left: 1rem !important 
    }
     .p-lg-4 {
         padding: 1.5rem !important 
    }
     .pt-lg-4, .py-lg-4 {
         padding-top: 1.5rem !important 
    }
     .pr-lg-4, .px-lg-4 {
         padding-right: 1.5rem !important 
    }
     .pb-lg-4, .py-lg-4 {
         padding-bottom: 1.5rem !important 
    }
     .pl-lg-4, .px-lg-4 {
         padding-left: 1.5rem !important 
    }
     .p-lg-5 {
         padding: 3rem !important 
    }
     .pt-lg-5, .py-lg-5 {
         padding-top: 3rem !important 
    }
     .pr-lg-5, .px-lg-5 {
         padding-right: 3rem !important 
    }
     .pb-lg-5, .py-lg-5 {
         padding-bottom: 3rem !important 
    }
     .pl-lg-5, .px-lg-5 {
         padding-left: 3rem !important 
    }
     .m-lg-n1 {
         margin: -.25rem !important 
    }
     .mt-lg-n1, .my-lg-n1 {
         margin-top: -.25rem !important 
    }
     .mr-lg-n1, .mx-lg-n1 {
         margin-right: -.25rem !important 
    }
     .mb-lg-n1, .my-lg-n1 {
         margin-bottom: -.25rem !important 
    }
     .ml-lg-n1, .mx-lg-n1 {
         margin-left: -.25rem !important 
    }
     .m-lg-n2 {
         margin: -.5rem !important 
    }
     .mt-lg-n2, .my-lg-n2 {
         margin-top: -.5rem !important 
    }
     .mr-lg-n2, .mx-lg-n2 {
         margin-right: -.5rem !important 
    }
     .mb-lg-n2, .my-lg-n2 {
         margin-bottom: -.5rem !important 
    }
     .ml-lg-n2, .mx-lg-n2 {
         margin-left: -.5rem !important 
    }
     .m-lg-n3 {
         margin: -1rem !important 
    }
     .mt-lg-n3, .my-lg-n3 {
         margin-top: -1rem !important 
    }
     .mr-lg-n3, .mx-lg-n3 {
         margin-right: -1rem !important 
    }
     .mb-lg-n3, .my-lg-n3 {
         margin-bottom: -1rem !important 
    }
     .ml-lg-n3, .mx-lg-n3 {
         margin-left: -1rem !important 
    }
     .m-lg-n4 {
         margin: -1.5rem !important 
    }
     .mt-lg-n4, .my-lg-n4 {
         margin-top: -1.5rem !important 
    }
     .mr-lg-n4, .mx-lg-n4 {
         margin-right: -1.5rem !important 
    }
     .mb-lg-n4, .my-lg-n4 {
         margin-bottom: -1.5rem !important 
    }
     .ml-lg-n4, .mx-lg-n4 {
         margin-left: -1.5rem !important 
    }
     .m-lg-n5 {
         margin: -3rem !important 
    }
     .mt-lg-n5, .my-lg-n5 {
         margin-top: -3rem !important 
    }
     .mr-lg-n5, .mx-lg-n5 {
         margin-right: -3rem !important 
    }
     .mb-lg-n5, .my-lg-n5 {
         margin-bottom: -3rem !important 
    }
     .ml-lg-n5, .mx-lg-n5 {
         margin-left: -3rem !important 
    }
     .m-lg-auto {
         margin: auto !important 
    }
     .mt-lg-auto, .my-lg-auto {
         margin-top: auto !important 
    }
     .mr-lg-auto, .mx-lg-auto {
         margin-right: auto !important 
    }
     .mb-lg-auto, .my-lg-auto {
         margin-bottom: auto !important 
    }
     .ml-lg-auto, .mx-lg-auto {
         margin-left: auto !important 
    }
}
 @media (min-width: 1200px) {
     .m-xl-0 {
         margin: 0 !important 
    }
     .mt-xl-0, .my-xl-0 {
         margin-top: 0 !important 
    }
     .mr-xl-0, .mx-xl-0 {
         margin-right: 0 !important 
    }
     .mb-xl-0, .my-xl-0 {
         margin-bottom: 0 !important 
    }
     .ml-xl-0, .mx-xl-0 {
         margin-left: 0 !important 
    }
     .m-xl-1 {
         margin: .25rem !important 
    }
     .mt-xl-1, .my-xl-1 {
         margin-top: .25rem !important 
    }
     .mr-xl-1, .mx-xl-1 {
         margin-right: .25rem !important 
    }
     .mb-xl-1, .my-xl-1 {
         margin-bottom: .25rem !important 
    }
     .ml-xl-1, .mx-xl-1 {
         margin-left: .25rem !important 
    }
     .m-xl-2 {
         margin: .5rem !important 
    }
     .mt-xl-2, .my-xl-2 {
         margin-top: .5rem !important 
    }
     .mr-xl-2, .mx-xl-2 {
         margin-right: .5rem !important 
    }
     .mb-xl-2, .my-xl-2 {
         margin-bottom: .5rem !important 
    }
     .ml-xl-2, .mx-xl-2 {
         margin-left: .5rem !important 
    }
     .m-xl-3 {
         margin: 1rem !important 
    }
     .mt-xl-3, .my-xl-3 {
         margin-top: 1rem !important 
    }
     .mr-xl-3, .mx-xl-3 {
         margin-right: 1rem !important 
    }
     .mb-xl-3, .my-xl-3 {
         margin-bottom: 1rem !important 
    }
     .ml-xl-3, .mx-xl-3 {
         margin-left: 1rem !important 
    }
     .m-xl-4 {
         margin: 1.5rem !important 
    }
     .mt-xl-4, .my-xl-4 {
         margin-top: 1.5rem !important 
    }
     .mr-xl-4, .mx-xl-4 {
         margin-right: 1.5rem !important 
    }
     .mb-xl-4, .my-xl-4 {
         margin-bottom: 1.5rem !important 
    }
     .ml-xl-4, .mx-xl-4 {
         margin-left: 1.5rem !important 
    }
     .m-xl-5 {
         margin: 3rem !important 
    }
     .mt-xl-5, .my-xl-5 {
         margin-top: 3rem !important 
    }
     .mr-xl-5, .mx-xl-5 {
         margin-right: 3rem !important 
    }
     .mb-xl-5, .my-xl-5 {
         margin-bottom: 3rem !important 
    }
     .ml-xl-5, .mx-xl-5 {
         margin-left: 3rem !important 
    }
     .p-xl-0 {
         padding: 0 !important 
    }
     .pt-xl-0, .py-xl-0 {
         padding-top: 0 !important 
    }
     .pr-xl-0, .px-xl-0 {
         padding-right: 0 !important 
    }
     .pb-xl-0, .py-xl-0 {
         padding-bottom: 0 !important 
    }
     .pl-xl-0, .px-xl-0 {
         padding-left: 0 !important 
    }
     .p-xl-1 {
         padding: .25rem !important 
    }
     .pt-xl-1, .py-xl-1 {
         padding-top: .25rem !important 
    }
     .pr-xl-1, .px-xl-1 {
         padding-right: .25rem !important 
    }
     .pb-xl-1, .py-xl-1 {
         padding-bottom: .25rem !important 
    }
     .pl-xl-1, .px-xl-1 {
         padding-left: .25rem !important 
    }
     .p-xl-2 {
         padding: .5rem !important 
    }
     .pt-xl-2, .py-xl-2 {
         padding-top: .5rem !important 
    }
     .pr-xl-2, .px-xl-2 {
         padding-right: .5rem !important 
    }
     .pb-xl-2, .py-xl-2 {
         padding-bottom: .5rem !important 
    }
     .pl-xl-2, .px-xl-2 {
         padding-left: .5rem !important 
    }
     .p-xl-3 {
         padding: 1rem !important 
    }
     .pt-xl-3, .py-xl-3 {
         padding-top: 1rem !important 
    }
     .pr-xl-3, .px-xl-3 {
         padding-right: 1rem !important 
    }
     .pb-xl-3, .py-xl-3 {
         padding-bottom: 1rem !important 
    }
     .pl-xl-3, .px-xl-3 {
         padding-left: 1rem !important 
    }
     .p-xl-4 {
         padding: 1.5rem !important 
    }
     .pt-xl-4, .py-xl-4 {
         padding-top: 1.5rem !important 
    }
     .pr-xl-4, .px-xl-4 {
         padding-right: 1.5rem !important 
    }
     .pb-xl-4, .py-xl-4 {
         padding-bottom: 1.5rem !important 
    }
     .pl-xl-4, .px-xl-4 {
         padding-left: 1.5rem !important 
    }
     .p-xl-5 {
         padding: 3rem !important 
    }
     .pt-xl-5, .py-xl-5 {
         padding-top: 3rem !important 
    }
     .pr-xl-5, .px-xl-5 {
         padding-right: 3rem !important 
    }
     .pb-xl-5, .py-xl-5 {
         padding-bottom: 3rem !important 
    }
     .pl-xl-5, .px-xl-5 {
         padding-left: 3rem !important 
    }
     .m-xl-n1 {
         margin: -.25rem !important 
    }
     .mt-xl-n1, .my-xl-n1 {
         margin-top: -.25rem !important 
    }
     .mr-xl-n1, .mx-xl-n1 {
         margin-right: -.25rem !important 
    }
     .mb-xl-n1, .my-xl-n1 {
         margin-bottom: -.25rem !important 
    }
     .ml-xl-n1, .mx-xl-n1 {
         margin-left: -.25rem !important 
    }
     .m-xl-n2 {
         margin: -.5rem !important 
    }
     .mt-xl-n2, .my-xl-n2 {
         margin-top: -.5rem !important 
    }
     .mr-xl-n2, .mx-xl-n2 {
         margin-right: -.5rem !important 
    }
     .mb-xl-n2, .my-xl-n2 {
         margin-bottom: -.5rem !important 
    }
     .ml-xl-n2, .mx-xl-n2 {
         margin-left: -.5rem !important 
    }
     .m-xl-n3 {
         margin: -1rem !important 
    }
     .mt-xl-n3, .my-xl-n3 {
         margin-top: -1rem !important 
    }
     .mr-xl-n3, .mx-xl-n3 {
         margin-right: -1rem !important 
    }
     .mb-xl-n3, .my-xl-n3 {
         margin-bottom: -1rem !important 
    }
     .ml-xl-n3, .mx-xl-n3 {
         margin-left: -1rem !important 
    }
     .m-xl-n4 {
         margin: -1.5rem !important 
    }
     .mt-xl-n4, .my-xl-n4 {
         margin-top: -1.5rem !important 
    }
     .mr-xl-n4, .mx-xl-n4 {
         margin-right: -1.5rem !important 
    }
     .mb-xl-n4, .my-xl-n4 {
         margin-bottom: -1.5rem !important 
    }
     .ml-xl-n4, .mx-xl-n4 {
         margin-left: -1.5rem !important 
    }
     .m-xl-n5 {
         margin: -3rem !important 
    }
     .mt-xl-n5, .my-xl-n5 {
         margin-top: -3rem !important 
    }
     .mr-xl-n5, .mx-xl-n5 {
         margin-right: -3rem !important 
    }
     .mb-xl-n5, .my-xl-n5 {
         margin-bottom: -3rem !important 
    }
     .ml-xl-n5, .mx-xl-n5 {
         margin-left: -3rem !important 
    }
     .m-xl-auto {
         margin: auto !important 
    }
     .mt-xl-auto, .my-xl-auto {
         margin-top: auto !important 
    }
     .mr-xl-auto, .mx-xl-auto {
         margin-right: auto !important 
    }
     .mb-xl-auto, .my-xl-auto {
         margin-bottom: auto !important 
    }
     .ml-xl-auto, .mx-xl-auto {
         margin-left: auto !important 
    }
}
 .text-monospace {
     font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important 
}
 .text-justify {
     text-align: justify !important 
}
 .text-wrap {
     white-space: normal !important 
}
 .text-nowrap {
     white-space: nowrap !important 
}
 .text-truncate {
     overflow: hidden;
     text-overflow: ellipsis;
     white-space: nowrap 
}
 .text-left {
     text-align: left !important 
}
 .text-right {
     text-align: right !important 
}
 .text-center {
     text-align: center !important 
}
 @media (min-width: 576px) {
     .text-sm-left {
         text-align: left !important 
    }
     .text-sm-right {
         text-align: right !important 
    }
     .text-sm-center {
         text-align: center !important 
    }
}
 @media (min-width: 768px) {
     .text-md-left {
         text-align: left !important 
    }
     .text-md-right {
         text-align: right !important 
    }
     .text-md-center {
         text-align: center !important 
    }
}
 @media (min-width: 992px) {
     .text-lg-left {
         text-align: left !important 
    }
     .text-lg-right {
         text-align: right !important 
    }
     .text-lg-center {
         text-align: center !important 
    }
}
 @media (min-width: 1200px) {
     .text-xl-left {
         text-align: left !important 
    }
     .text-xl-right {
         text-align: right !important 
    }
     .text-xl-center {
         text-align: center !important 
    }
}
 .text-lowercase {
     text-transform: lowercase !important 
}
 .text-uppercase {
     text-transform: uppercase !important 
}
 .text-capitalize {
     text-transform: capitalize !important 
}
 .font-weight-light {
     font-weight: 300 !important 
}
 .font-weight-lighter {
     font-weight: lighter !important 
}
 .font-weight-normal {
     font-weight: 400 !important 
}
 .font-weight-bold {
     font-weight: 700 !important 
}
 .font-weight-bolder {
     font-weight: bolder !important 
}
 .font-italic {
     font-style: italic !important 
}
 .text-white {
     color: #fff !important 
}
 .text-primary {
     color: #007bff !important 
}
 a.text-primary:hover, a.text-primary:focus {
     color: #0056b3 !important 
}
 .text-secondary {
     color: #6c757d !important 
}
 a.text-secondary:hover, a.text-secondary:focus {
     color: #494f54 !important 
}
 .text-success {
     color: #28a745 !important 
}
 a.text-success:hover, a.text-success:focus {
     color: #19692c !important 
}
 .text-info {
     color: #17a2b8 !important 
}
 a.text-info:hover, a.text-info:focus {
     color: #0f6674 !important 
}
 .text-warning {
     color: #ffc107 !important 
}
 a.text-warning:hover, a.text-warning:focus {
     color: #ba8b00 !important 
}
 .text-danger {
     color: #dc3545 !important 
}
 a.text-danger:hover, a.text-danger:focus {
     color: #a71d2a !important 
}
 .text-light {
     color: #f8f9fa !important 
}
 a.text-light:hover, a.text-light:focus {
     color: #cbd3da !important 
}
 .text-dark {
     color: #343a40 !important 
}
 a.text-dark:hover, a.text-dark:focus {
     color: #121416 !important 
}
 .text-body {
     color: #212529 !important 
}
 .text-muted {
     color: #6c757d !important 
}
 .text-black-50 {
     color: rgba(0, 0, 0, 0.5) !important 
}
 .text-white-50 {
     color: rgba(255, 255, 255, 0.5) !important 
}
 .text-hide {
     font: 0/0 a;
     color: transparent;
     text-shadow: none;
     background-color: transparent;
     border: 0 
}
 .text-decoration-none {
     text-decoration: none !important 
}
 .text-break {
     word-break: break-word !important;
     overflow-wrap: break-word !important 
}
 .text-reset {
     color: inherit !important 
}
 .w-25 {
     width: 25% !important 
}
 .w-50 {
     width: 50% !important 
}
 .w-75 {
     width: 75% !important 
}
 .w-100 {
     width: 100% !important 
}
 .w-auto {
     width: auto !important 
}
 .h-25 {
     height: 25% !important 
}
 .h-50 {
     height: 50% !important 
}
 .h-75 {
     height: 75% !important 
}
 .h-100 {
     height: 100% !important 
}
 .h-auto {
     height: auto !important 
}
 .mw-100 {
     max-width: 100% !important 
}
 .mh-100 {
     max-height: 100% !important 
}
 .min-vw-100 {
     min-width: 100vw !important 
}
 .min-vh-100 {
     min-height: 100vh !important 
}
 .vw-100 {
     width: 100vw !important 
}
 .vh-100 {
     height: 100vh !important 
}
 .position-static {
     position: static !important 
}
 .position-relative {
     position: relative !important 
}
 .position-absolute {
     position: absolute !important 
}
 .position-fixed {
     position: fixed !important 
}
 .position-sticky {
     position: -webkit-sticky !important;
     position: sticky !important 
}
 .fixed-top {
     position: fixed;
     top: 0;
     right: 0;
     left: 0;
     z-index: 1030 
}
 .fixed-bottom {
     position: fixed;
     right: 0;
     bottom: 0;
     left: 0;
     z-index: 1030 
}
 @supports ((position: -webkit-sticky) or (position: sticky)) {
     .sticky-top {
         position: -webkit-sticky;
         position: sticky;
         top: 0;
         z-index: 1020 
    }
}
 .visible {
     visibility: visible !important 
}
 .invisible {
     visibility: hidden !important 
}

// Pure react carousel styles

.buttonBack___1mlaL,.buttonFirst___2rhFr,.buttonLast___2yuh0,.buttonNext___2mOCa,.buttonNext___3Lm3s,.dot___3c3SI{
    cursor:pointer
}
.image___xtQGH{
    display:block;
    width:100%;
    height:100%
}
.spinner___27VUp{
    position:absolute;
    top:calc(50% - 15px);
    left:calc(50% - 15px);
    width:30px;
    height:30px;
    animation-name:spin___S3UuE;
    animation-duration:1s;
    animation-timing-function:linear;
    animation-iteration-count:infinite;
    border:4px solid #a9a9a9;
    border-top-color:#000;
    border-radius:30px
}
@keyframes spin___S3UuE{
    0%{
        transform:rotate(0deg)
    }
    to{
        transform:rotate(1turn)
    }
}
.container___2O72F{
    position:relative;
    overflow:hidden;
    height:100%;
    width:100%
}
.overlay___IV4qY{
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    opacity:0;
    cursor:zoom-in;
    transition:opacity .3s,transform .3s
}
.hover___MYy31,.loading___1pvNI,.zoom___3kqYk{
    opacity:1
}
.imageLoadingSpinnerContainer___3UIPD{
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    background-color:#f4f4f4
}
.slide___3-Nqo{
    position:relative;
    display:block;
    box-sizing:border-box;
    height:0;
    margin:0;
    list-style-type:none
}
.slide___3-Nqo:focus{
    outline:none!important
}
.slideHorizontal___1NzNV{
    float:left
}
[dir=rtl] .slideHorizontal___1NzNV{
    direction:rtl;
    transform:scaleX(-1)
}
.slideInner___2mfX9{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%
}
.focusRing___1airF{
    position:absolute;
    top:5px;
    right:5px;
    bottom:5px;
    left:5px;
    pointer-events:none;
    outline-width:5px;
    outline-style:solid;
    outline-color:Highlight
}
@media (-webkit-min-device-pixel-ratio:0){
    .focusRing___1airF{
        outline-style:auto;
        outline-color:-webkit-focus-ring-color
    }
}
.horizontalSlider___281Ls{
    position:relative;
    overflow:hidden
}
[dir=rtl] .horizontalSlider___281Ls{
    direction:ltr;
    transform:scaleX(-1)
}
.horizontalSliderTray___1L-0W{
    overflow:hidden;
    width:100%
}
.verticalSlider___34ZFD{
    position:relative;
    overflow:hidden
}
.verticalSliderTray___267D8{
    overflow:hidden
}
.verticalTray___12Key{
    float:left
}
.verticalSlideTrayWrap___2nO7o{
    overflow:hidden
}
.sliderTray___-vHFQ{
    display:block;
    list-style:none;
    padding:0;
    margin:0
}
.sliderAnimation___300FY{
    transition:transform .5s;
    transition-timing-function:cubic-bezier(.645,.045,.355,1);
    will-change:transform
}
.masterSpinnerContainer___1Z6hB{
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    background-color:#f4f4f4
}
/*# sourceMappingURL=react-carousel.es.css.map */


`

export default GlobalStyles;