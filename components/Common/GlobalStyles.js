import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  .alice-carousel {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  direction: ltr; }

.alice-carousel__wrapper {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: auto; }

.alice-carousel__stage {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  white-space: nowrap; }
  .alice-carousel__stage-item {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    vertical-align: top;
    white-space: normal;
    line-height: 0; }
    .alice-carousel__stage-item * {
      line-height: initial; }
    .alice-carousel__stage-item.__cloned {
      visibility: hidden;
      opacity: 0; }

.alice-carousel__prev-btn,
.alice-carousel__next-btn {
  display: inline-block;
  box-sizing: border-box;
  width: 50%;
  padding: 15px 10px; }
  .alice-carousel__prev-btn [data-area]::after,
  .alice-carousel__next-btn [data-area]::after {
    position: relative;
    content: attr(data-area);
    text-transform: capitalize; }

.alice-carousel__prev-btn {
  text-align: right; }

.alice-carousel__prev-btn-item,
.alice-carousel__next-btn-item {
  display: inline-block;
  cursor: pointer;
  color: #465798; }
  .alice-carousel__prev-btn-item:hover,
  .alice-carousel__next-btn-item:hover {
    color: darkred; }
  .alice-carousel__prev-btn-item.__inactive,
  .alice-carousel__next-btn-item.__inactive {
    opacity: 0.4; }

.alice-carousel__play-btn {
  position: absolute;
  top: 30px;
  left: 20px;
  display: inline-block; }
  .alice-carousel__play-btn:hover {
    cursor: pointer; }
  .alice-carousel__play-btn-wrapper {
    position: relative;
    width: 32px;
    height: 32px;
    padding: 10px;
    border-radius: 50%;
    background-color: #fff; }

.alice-carousel__play-btn-item {
  position: absolute;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: 0;
  outline: none;
  background: transparent; }
  .alice-carousel__play-btn-item::before, .alice-carousel__play-btn-item::after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    content: '';
    transition: all 0.3s linear;
    border-width: 8px 0 8px 15px;
    border-style: solid;
    border-color: transparent;
    border-left-color: #465798; }
  .alice-carousel__play-btn-item::before {
    left: 5px;
    height: 14px; }
  .alice-carousel__play-btn-item::after {
    top: 7px;
    left: 18px; }
  .alice-carousel__play-btn-item.__pause::before, .alice-carousel__play-btn-item.__pause::after {
    height: 30px;
    border-width: 0 0 0 10px; }
  .alice-carousel__play-btn-item.__pause::after {
    top: 0;
    left: 18px; }

.alice-carousel__dots {
  margin: 30px 3px 5px;
  padding: 0;
  list-style: none;
  text-align: center; }
  .alice-carousel__dots-item {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 15px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #e0e4fb; }
    .alice-carousel__dots-item:hover, .alice-carousel__dots-item.__active {
      background-color: #6e7ebc; }

.alice-carousel__slide-info {
  position: absolute;
  top: 20px;
  right: 20px;
  display: inline-block;
  padding: 5px 10px;
  color: #465798;
  border-radius: 5px;
  background-color: rgba(224, 228, 251, 0.6); }
  .alice-carousel__slide-info-item {
    vertical-align: middle;
    line-height: 0; }

.alice-carousel .animated {
  animation-fill-mode: both; }

.alice-carousel .animated-out {
  z-index: 1; }

.alice-carousel .fadeOut {
  animation-name: fadeOut; }

@keyframes fadeOut {
  0% {
    opacity: 1; }
  100% {
    opacity: 0;
    visibility: hidden; } }

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
@-webkit-keyframes loading_ng405l{0%{transform:rotate(0);-webkit-transform:rotate(0);}100%{transform:rotate(360deg);-webkit-transform:rotate(360deg);}}@-moz-keyframes loading_ng405l{0%{transform:rotate(0);-webkit-transform:rotate(0);}100%{transform:rotate(360deg);-webkit-transform:rotate(360deg);}}@-o-keyframes loading_ng405l{0%{transform:rotate(0);-webkit-transform:rotate(0);}100%{transform:rotate(360deg);-webkit-transform:rotate(360deg);}}@keyframes loading_ng405l{0%{transform:rotate(0);-webkit-transform:rotate(0);}100%{transform:rotate(360deg);-webkit-transform:rotate(360deg);}}@-webkit-keyframes loading-circle_fv6wzy{0%{stroke-dashoffset:600;}100%{stroke-dashoffset:0;}}@-moz-keyframes loading-circle_fv6wzy{0%{stroke-dashoffset:600;}100%{stroke-dashoffset:0;}}@-o-keyframes loading-circle_fv6wzy{0%{stroke-dashoffset:600;}100%{stroke-dashoffset:0;}}@keyframes loading-circle_fv6wzy{0%{stroke-dashoffset:600;}100%{stroke-dashoffset:0;}}.css-11r1ktn,[data-css-11r1ktn]{animation:loading_ng405l 2s linear infinite;-webkit-animation:loading_ng405l 2s linear infinite;}@-webkit-keyframes openAnimation_158oy86{from{opacity:0;transform:translateY(-120%);-webkit-transform:translateY(-120%);}to{transform:translateY(0);-webkit-transform:translateY(0);}}@-moz-keyframes openAnimation_158oy86{from{opacity:0;transform:translateY(-120%);-webkit-transform:translateY(-120%);}to{transform:translateY(0);-webkit-transform:translateY(0);}}@-o-keyframes openAnimation_158oy86{from{opacity:0;transform:translateY(-120%);-webkit-transform:translateY(-120%);}to{transform:translateY(0);-webkit-transform:translateY(0);}}@keyframes openAnimation_158oy86{from{opacity:0;transform:translateY(-120%);-webkit-transform:translateY(-120%);}to{transform:translateY(0);-webkit-transform:translateY(0);}}@-webkit-keyframes closeAnimation_1olw4g9{from{transform:scale(1);opacity:1;-webkit-transform:scale(1);}to{transform:scale(0.9);opacity:0;-webkit-transform:scale(0.9);}}@-moz-keyframes closeAnimation_1olw4g9{from{transform:scale(1);opacity:1;-webkit-transform:scale(1);}to{transform:scale(0.9);opacity:0;-webkit-transform:scale(0.9);}}@-o-keyframes closeAnimation_1olw4g9{from{transform:scale(1);opacity:1;-webkit-transform:scale(1);}to{transform:scale(0.9);opacity:0;-webkit-transform:scale(0.9);}}@keyframes closeAnimation_1olw4g9{from{transform:scale(1);opacity:1;-webkit-transform:scale(1);}to{transform:scale(0.9);opacity:0;-webkit-transform:scale(0.9);}}.css-1yiw7zu,[data-css-1yiw7zu]{display:-webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;flex-direction:column;align-items:center;height:0;transition:all 240ms cubic-bezier(0.0, 0.0, 0.2, 1);-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-webkit-transition:all 240ms cubic-bezier(0.0, 0.0, 0.2, 1);-moz-transition:all 240ms cubic-bezier(0.0, 0.0, 0.2, 1);}.css-1yiw7zu[data-state="entering"],[data-css-1yiw7zu][data-state="entering"], .css-1yiw7zu[data-state="entered"], [data-css-1yiw7zu][data-state="entered"]{animation:openAnimation_158oy86 240ms cubic-bezier(0.175, 0.885, 0.320, 1.175) both;-webkit-animation:openAnimation_158oy86 240ms cubic-bezier(0.175, 0.885, 0.320, 1.175) both;}.css-1yiw7zu[data-state="exiting"],[data-css-1yiw7zu][data-state="exiting"]{animation:closeAnimation_1olw4g9 120ms cubic-bezier(0.4, 0.0, 1, 1) both;-webkit-animation:closeAnimation_1olw4g9 120ms cubic-bezier(0.4, 0.0, 1, 1) both;}.css-1sugtjn,[data-css-1sugtjn]{max-width:560px;margin:0 auto;top:0;left:0;right:0;position:fixed;z-index:30;pointer-events:none;}.css-q4k7k7,[data-css-q4k7k7]{border:none;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;-webkit-font-smoothing:antialiased;}.css-q4k7k7:focus,[data-css-q4k7k7]:focus,.css-q4k7k7[data-simulate-focus],[data-css-q4k7k7][data-simulate-focus]{outline:none;}.css-q4k7k7::placeholder,[data-css-q4k7k7]::placeholder,.css-q4k7k7[data-simulate-placeholder],[data-css-q4k7k7][data-simulate-placeholder]{color:rgba(67, 90, 111, 0.7);}.css-1ktdej1,[data-css-1ktdej1]{top:0;position:absolute;display:-webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;align-items:center;justify-content:center;line-height:1;-webkit-box-align:center;-webkit-align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;}@-webkit-keyframes openAnimation_u4xxlz{from{transform:translateY(100%);-webkit-transform:translateY(100%);}to{transform:translateY(0);-webkit-transform:translateY(0);}}@-moz-keyframes openAnimation_u4xxlz{from{transform:translateY(100%);-webkit-transform:translateY(100%);}to{transform:translateY(0);-webkit-transform:translateY(0);}}@-o-keyframes openAnimation_u4xxlz{from{transform:translateY(100%);-webkit-transform:translateY(100%);}to{transform:translateY(0);-webkit-transform:translateY(0);}}@keyframes openAnimation_u4xxlz{from{transform:translateY(100%);-webkit-transform:translateY(100%);}to{transform:translateY(0);-webkit-transform:translateY(0);}}@-webkit-keyframes fadeInAnimation_1ont4t{from{opacity:0;}to{opacity:1;}}@-moz-keyframes fadeInAnimation_1ont4t{from{opacity:0;}to{opacity:1;}}@-o-keyframes fadeInAnimation_1ont4t{from{opacity:0;}to{opacity:1;}}@keyframes fadeInAnimation_1ont4t{from{opacity:0;}to{opacity:1;}}@-webkit-keyframes fadeOutAnimation_1q9hkiq{from{opacity:1;}to{opacity:0;}}@-moz-keyframes fadeOutAnimation_1q9hkiq{from{opacity:1;}to{opacity:0;}}@-o-keyframes fadeOutAnimation_1q9hkiq{from{opacity:1;}to{opacity:0;}}@keyframes fadeOutAnimation_1q9hkiq{from{opacity:1;}to{opacity:0;}}@-webkit-keyframes openAnimation_1cql8cr{from{transform:scale(0.8);opacity:0;-webkit-transform:scale(0.8);}to{transform:scale(1);opacity:1;-webkit-transform:scale(1);}}@-moz-keyframes openAnimation_1cql8cr{from{transform:scale(0.8);opacity:0;-webkit-transform:scale(0.8);}to{transform:scale(1);opacity:1;-webkit-transform:scale(1);}}@-o-keyframes openAnimation_1cql8cr{from{transform:scale(0.8);opacity:0;-webkit-transform:scale(0.8);}to{transform:scale(1);opacity:1;-webkit-transform:scale(1);}}@keyframes openAnimation_1cql8cr{from{transform:scale(0.8);opacity:0;-webkit-transform:scale(0.8);}to{transform:scale(1);opacity:1;-webkit-transform:scale(1);}}@-webkit-keyframes closeAnimation_1y9xgi8{from{transform:scale(1);opacity:1;-webkit-transform:scale(1);}to{transform:scale(0.8);opacity:0;-webkit-transform:scale(0.8);}}@-moz-keyframes closeAnimation_1y9xgi8{from{transform:scale(1);opacity:1;-webkit-transform:scale(1);}to{transform:scale(0.8);opacity:0;-webkit-transform:scale(0.8);}}@-o-keyframes closeAnimation_1y9xgi8{from{transform:scale(1);opacity:1;-webkit-transform:scale(1);}to{transform:scale(0.8);opacity:0;-webkit-transform:scale(0.8);}}@keyframes closeAnimation_1y9xgi8{from{transform:scale(1);opacity:1;-webkit-transform:scale(1);}to{transform:scale(0.8);opacity:0;-webkit-transform:scale(0.8);}}.css-17kak1e,[data-css-17kak1e]{display:-webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;flex:1;align-items:center;justify-content:center;position:relative;-webkit-flex:1;-webkit-box-align:center;-webkit-align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;}.css-3grw6g,[data-css-3grw6g]{position:relative;display:-webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;flex:1;cursor:pointer;margin-left:-1px;-webkit-flex:1;}.css-3grw6g:first-child .css-17kak1e,[data-css-3grw6g]:first-child .css-17kak1e{border-top-left-radius:3px;border-bottom-left-radius:3px;}.css-3grw6g:last-child .css-17kak1e,[data-css-3grw6g]:last-child .css-17kak1e{border-top-right-radius:3px;border-bottom-right-radius:3px;}.css-87b09r,[data-css-87b09r]{overflow:hidden;position:absolute;height:1px;width:1px;padding:0;margin:-1px;border:0;clip:rect(0 0 0 0);}@-webkit-keyframes rotate360InAnimation_e4x7vx{from{transform:translateX(100%) rotate(0deg);-webkit-transform:translateX(100%) rotate(0deg);}to{transform:translateX(-100%) rotate(-360deg);-webkit-transform:translateX(-100%) rotate(-360deg);}}@-moz-keyframes rotate360InAnimation_e4x7vx{from{transform:translateX(100%) rotate(0deg);-webkit-transform:translateX(100%) rotate(0deg);}to{transform:translateX(-100%) rotate(-360deg);-webkit-transform:translateX(-100%) rotate(-360deg);}}@-o-keyframes rotate360InAnimation_e4x7vx{from{transform:translateX(100%) rotate(0deg);-webkit-transform:translateX(100%) rotate(0deg);}to{transform:translateX(-100%) rotate(-360deg);-webkit-transform:translateX(-100%) rotate(-360deg);}}@keyframes rotate360InAnimation_e4x7vx{from{transform:translateX(100%) rotate(0deg);-webkit-transform:translateX(100%) rotate(0deg);}to{transform:translateX(-100%) rotate(-360deg);-webkit-transform:translateX(-100%) rotate(-360deg);}}@-webkit-keyframes rotate360OutAnimation_1swhwyo{from{transform:translateX(-100%) rotate(0deg);-webkit-transform:translateX(-100%) rotate(0deg);}to{transform:translateX(100%) rotate(360deg);-webkit-transform:translateX(100%) rotate(360deg);}}@-moz-keyframes rotate360OutAnimation_1swhwyo{from{transform:translateX(-100%) rotate(0deg);-webkit-transform:translateX(-100%) rotate(0deg);}to{transform:translateX(100%) rotate(360deg);-webkit-transform:translateX(100%) rotate(360deg);}}@-o-keyframes rotate360OutAnimation_1swhwyo{from{transform:translateX(-100%) rotate(0deg);-webkit-transform:translateX(-100%) rotate(0deg);}to{transform:translateX(100%) rotate(360deg);-webkit-transform:translateX(100%) rotate(360deg);}}@keyframes rotate360OutAnimation_1swhwyo{from{transform:translateX(-100%) rotate(0deg);-webkit-transform:translateX(-100%) rotate(0deg);}to{transform:translateX(100%) rotate(360deg);-webkit-transform:translateX(100%) rotate(360deg);}}@-webkit-keyframes leftRotate360InAnimation_1uxpfmf{from{transform:translateX(-100%) rotate(0deg);-webkit-transform:translateX(-100%) rotate(0deg);}to{transform:translateX(100%), rotate(360deg);-webkit-transform:translateX(100%), rotate(360deg);}}@-moz-keyframes leftRotate360InAnimation_1uxpfmf{from{transform:translateX(-100%) rotate(0deg);-webkit-transform:translateX(-100%) rotate(0deg);}to{transform:translateX(100%), rotate(360deg);-webkit-transform:translateX(100%), rotate(360deg);}}@-o-keyframes leftRotate360InAnimation_1uxpfmf{from{transform:translateX(-100%) rotate(0deg);-webkit-transform:translateX(-100%) rotate(0deg);}to{transform:translateX(100%), rotate(360deg);-webkit-transform:translateX(100%), rotate(360deg);}}@keyframes leftRotate360InAnimation_1uxpfmf{from{transform:translateX(-100%) rotate(0deg);-webkit-transform:translateX(-100%) rotate(0deg);}to{transform:translateX(100%), rotate(360deg);-webkit-transform:translateX(100%), rotate(360deg);}}@-webkit-keyframes leftRotate360OutAnimation_znl0n0{from{transform:translateX(100%) rotate(0deg);-webkit-transform:translateX(100%) rotate(0deg);}to{transform:translateX(-100%), rotate(360deg);-webkit-transform:translateX(-100%), rotate(360deg);}}@-moz-keyframes leftRotate360OutAnimation_znl0n0{from{transform:translateX(100%) rotate(0deg);-webkit-transform:translateX(100%) rotate(0deg);}to{transform:translateX(-100%), rotate(360deg);-webkit-transform:translateX(-100%), rotate(360deg);}}@-o-keyframes leftRotate360OutAnimation_znl0n0{from{transform:translateX(100%) rotate(0deg);-webkit-transform:translateX(100%) rotate(0deg);}to{transform:translateX(-100%), rotate(360deg);-webkit-transform:translateX(-100%), rotate(360deg);}}@keyframes leftRotate360OutAnimation_znl0n0{from{transform:translateX(100%) rotate(0deg);-webkit-transform:translateX(100%) rotate(0deg);}to{transform:translateX(-100%), rotate(360deg);-webkit-transform:translateX(-100%), rotate(360deg);}}@-webkit-keyframes topRotate360InAnimation_1iarriy{from{transform:translateY(-200%) rotate(0deg);-webkit-transform:translateY(-200%) rotate(0deg);}to{transform:translateY(0%), rotate(360deg);-webkit-transform:translateY(0%), rotate(360deg);}}@-moz-keyframes topRotate360InAnimation_1iarriy{from{transform:translateY(-200%) rotate(0deg);-webkit-transform:translateY(-200%) rotate(0deg);}to{transform:translateY(0%), rotate(360deg);-webkit-transform:translateY(0%), rotate(360deg);}}@-o-keyframes topRotate360InAnimation_1iarriy{from{transform:translateY(-200%) rotate(0deg);-webkit-transform:translateY(-200%) rotate(0deg);}to{transform:translateY(0%), rotate(360deg);-webkit-transform:translateY(0%), rotate(360deg);}}@keyframes topRotate360InAnimation_1iarriy{from{transform:translateY(-200%) rotate(0deg);-webkit-transform:translateY(-200%) rotate(0deg);}to{transform:translateY(0%), rotate(360deg);-webkit-transform:translateY(0%), rotate(360deg);}}@-webkit-keyframes topRotate360OutAnimation_w5ju0m{from{transform:translateY(0%) rotate(0deg);-webkit-transform:translateY(0%) rotate(0deg);}to{transform:translateY(-200%), rotate(360deg);-webkit-transform:translateY(-200%), rotate(360deg);}}@-moz-keyframes topRotate360OutAnimation_w5ju0m{from{transform:translateY(0%) rotate(0deg);-webkit-transform:translateY(0%) rotate(0deg);}to{transform:translateY(-200%), rotate(360deg);-webkit-transform:translateY(-200%), rotate(360deg);}}@-o-keyframes topRotate360OutAnimation_w5ju0m{from{transform:translateY(0%) rotate(0deg);-webkit-transform:translateY(0%) rotate(0deg);}to{transform:translateY(-200%), rotate(360deg);-webkit-transform:translateY(-200%), rotate(360deg);}}@keyframes topRotate360OutAnimation_w5ju0m{from{transform:translateY(0%) rotate(0deg);-webkit-transform:translateY(0%) rotate(0deg);}to{transform:translateY(-200%), rotate(360deg);-webkit-transform:translateY(-200%), rotate(360deg);}}@-webkit-keyframes bottomRotate360InAnimation_1k0qqcf{from{transform:translateY(200%) rotate(0deg);-webkit-transform:translateY(200%) rotate(0deg);}to{transform:translateY(0%), rotate(360deg);-webkit-transform:translateY(0%), rotate(360deg);}}@-moz-keyframes bottomRotate360InAnimation_1k0qqcf{from{transform:translateY(200%) rotate(0deg);-webkit-transform:translateY(200%) rotate(0deg);}to{transform:translateY(0%), rotate(360deg);-webkit-transform:translateY(0%), rotate(360deg);}}@-o-keyframes bottomRotate360InAnimation_1k0qqcf{from{transform:translateY(200%) rotate(0deg);-webkit-transform:translateY(200%) rotate(0deg);}to{transform:translateY(0%), rotate(360deg);-webkit-transform:translateY(0%), rotate(360deg);}}@keyframes bottomRotate360InAnimation_1k0qqcf{from{transform:translateY(200%) rotate(0deg);-webkit-transform:translateY(200%) rotate(0deg);}to{transform:translateY(0%), rotate(360deg);-webkit-transform:translateY(0%), rotate(360deg);}}@-webkit-keyframes bottomRotate360OutAnimation_1m9tq8h{from{transform:translateY(0%) rotate(0deg);-webkit-transform:translateY(0%) rotate(0deg);}to{transform:translateY(200%), rotate(360deg);-webkit-transform:translateY(200%), rotate(360deg);}}@-moz-keyframes bottomRotate360OutAnimation_1m9tq8h{from{transform:translateY(0%) rotate(0deg);-webkit-transform:translateY(0%) rotate(0deg);}to{transform:translateY(200%), rotate(360deg);-webkit-transform:translateY(200%), rotate(360deg);}}@-o-keyframes bottomRotate360OutAnimation_1m9tq8h{from{transform:translateY(0%) rotate(0deg);-webkit-transform:translateY(0%) rotate(0deg);}to{transform:translateY(200%), rotate(360deg);-webkit-transform:translateY(200%), rotate(360deg);}}@keyframes bottomRotate360OutAnimation_1m9tq8h{from{transform:translateY(0%) rotate(0deg);-webkit-transform:translateY(0%) rotate(0deg);}to{transform:translateY(200%), rotate(360deg);-webkit-transform:translateY(200%), rotate(360deg);}}@-webkit-keyframes anchoredLeftSlideInAnimation_1hg44x7{from{transform:translateX(-100%);-webkit-transform:translateX(-100%);}to{transform:translateX(0);-webkit-transform:translateX(0);}}@-moz-keyframes anchoredLeftSlideInAnimation_1hg44x7{from{transform:translateX(-100%);-webkit-transform:translateX(-100%);}to{transform:translateX(0);-webkit-transform:translateX(0);}}@-o-keyframes anchoredLeftSlideInAnimation_1hg44x7{from{transform:translateX(-100%);-webkit-transform:translateX(-100%);}to{transform:translateX(0);-webkit-transform:translateX(0);}}@keyframes anchoredLeftSlideInAnimation_1hg44x7{from{transform:translateX(-100%);-webkit-transform:translateX(-100%);}to{transform:translateX(0);-webkit-transform:translateX(0);}}@-webkit-keyframes anchoredLeftSlideOutAnimation_rnri27{from{transform:translateX(0);-webkit-transform:translateX(0);}to{transform:translateX(-100%);-webkit-transform:translateX(-100%);}}@-moz-keyframes anchoredLeftSlideOutAnimation_rnri27{from{transform:translateX(0);-webkit-transform:translateX(0);}to{transform:translateX(-100%);-webkit-transform:translateX(-100%);}}@-o-keyframes anchoredLeftSlideOutAnimation_rnri27{from{transform:translateX(0);-webkit-transform:translateX(0);}to{transform:translateX(-100%);-webkit-transform:translateX(-100%);}}@keyframes anchoredLeftSlideOutAnimation_rnri27{from{transform:translateX(0);-webkit-transform:translateX(0);}to{transform:translateX(-100%);-webkit-transform:translateX(-100%);}}@-webkit-keyframes anchoredRightSlideInAnimation_1y6fmrc{from{transform:translateX(100%);-webkit-transform:translateX(100%);}to{transform:translateX(0);-webkit-transform:translateX(0);}}@-moz-keyframes anchoredRightSlideInAnimation_1y6fmrc{from{transform:translateX(100%);-webkit-transform:translateX(100%);}to{transform:translateX(0);-webkit-transform:translateX(0);}}@-o-keyframes anchoredRightSlideInAnimation_1y6fmrc{from{transform:translateX(100%);-webkit-transform:translateX(100%);}to{transform:translateX(0);-webkit-transform:translateX(0);}}@keyframes anchoredRightSlideInAnimation_1y6fmrc{from{transform:translateX(100%);-webkit-transform:translateX(100%);}to{transform:translateX(0);-webkit-transform:translateX(0);}}@-webkit-keyframes anchoredRightSlideOutAnimation_8h6vp3{from{transform:translateX(0);-webkit-transform:translateX(0);}to{transform:translateX(100%);-webkit-transform:translateX(100%);}}@-moz-keyframes anchoredRightSlideOutAnimation_8h6vp3{from{transform:translateX(0);-webkit-transform:translateX(0);}to{transform:translateX(100%);-webkit-transform:translateX(100%);}}@-o-keyframes anchoredRightSlideOutAnimation_8h6vp3{from{transform:translateX(0);-webkit-transform:translateX(0);}to{transform:translateX(100%);-webkit-transform:translateX(100%);}}@keyframes anchoredRightSlideOutAnimation_8h6vp3{from{transform:translateX(0);-webkit-transform:translateX(0);}to{transform:translateX(100%);-webkit-transform:translateX(100%);}}@-webkit-keyframes anchoredTopSlideInAnimation_8z9rxa{from{transform:translateY(-100%);-webkit-transform:translateY(-100%);}to{transform:translateY(0);-webkit-transform:translateY(0);}}@-moz-keyframes anchoredTopSlideInAnimation_8z9rxa{from{transform:translateY(-100%);-webkit-transform:translateY(-100%);}to{transform:translateY(0);-webkit-transform:translateY(0);}}@-o-keyframes anchoredTopSlideInAnimation_8z9rxa{from{transform:translateY(-100%);-webkit-transform:translateY(-100%);}to{transform:translateY(0);-webkit-transform:translateY(0);}}@keyframes anchoredTopSlideInAnimation_8z9rxa{from{transform:translateY(-100%);-webkit-transform:translateY(-100%);}to{transform:translateY(0);-webkit-transform:translateY(0);}}@-webkit-keyframes anchoredTopSlideOutAnimation_ns0rt0{from{transform:translateY(0);-webkit-transform:translateY(0);}to{transform:translateY(-100%);-webkit-transform:translateY(-100%);}}@-moz-keyframes anchoredTopSlideOutAnimation_ns0rt0{from{transform:translateY(0);-webkit-transform:translateY(0);}to{transform:translateY(-100%);-webkit-transform:translateY(-100%);}}@-o-keyframes anchoredTopSlideOutAnimation_ns0rt0{from{transform:translateY(0);-webkit-transform:translateY(0);}to{transform:translateY(-100%);-webkit-transform:translateY(-100%);}}@keyframes anchoredTopSlideOutAnimation_ns0rt0{from{transform:translateY(0);-webkit-transform:translateY(0);}to{transform:translateY(-100%);-webkit-transform:translateY(-100%);}}@-webkit-keyframes anchoredBottomSlideInAnimation_1axypox{from{transform:translateY(100%);-webkit-transform:translateY(100%);}to{transform:translateY(0);-webkit-transform:translateY(0);}}@-moz-keyframes anchoredBottomSlideInAnimation_1axypox{from{transform:translateY(100%);-webkit-transform:translateY(100%);}to{transform:translateY(0);-webkit-transform:translateY(0);}}@-o-keyframes anchoredBottomSlideInAnimation_1axypox{from{transform:translateY(100%);-webkit-transform:translateY(100%);}to{transform:translateY(0);-webkit-transform:translateY(0);}}@keyframes anchoredBottomSlideInAnimation_1axypox{from{transform:translateY(100%);-webkit-transform:translateY(100%);}to{transform:translateY(0);-webkit-transform:translateY(0);}}@-webkit-keyframes anchoredBottomSlideOutAnimation_1fdetvy{from{transform:translateY(0);-webkit-transform:translateY(0);}to{transform:translateY(100%);-webkit-transform:translateY(100%);}}@-moz-keyframes anchoredBottomSlideOutAnimation_1fdetvy{from{transform:translateY(0);-webkit-transform:translateY(0);}to{transform:translateY(100%);-webkit-transform:translateY(100%);}}@-o-keyframes anchoredBottomSlideOutAnimation_1fdetvy{from{transform:translateY(0);-webkit-transform:translateY(0);}to{transform:translateY(100%);-webkit-transform:translateY(100%);}}@keyframes anchoredBottomSlideOutAnimation_1fdetvy{from{transform:translateY(0);-webkit-transform:translateY(0);}to{transform:translateY(100%);-webkit-transform:translateY(100%);}}.css-13qcn8a,[data-css-13qcn8a]{background-color:#fff;border-radius:9999px;}.css-17bhmw6,[data-css-17bhmw6]{transition:all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.175);opacity:0;display:-webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;position:absolute;align-items:center;justify-content:center;padding-left:4px;-webkit-transition:all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.175);-moz-transition:all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.175);-webkit-box-align:center;-webkit-align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;}.css-17bhmw6[data-checked="true"],[data-css-17bhmw6][data-checked="true"]{opacity:1;transform:scale(1);-webkit-transform:scale(1);}.css-17bhmw6> svg,[data-css-17bhmw6]> svg{transition:all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.175);transform:scale(0);-webkit-transition:all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.175);-moz-transition:all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.175);-webkit-transform:scale(0);}.css-17bhmw6[data-checked="true"] > svg,[data-css-17bhmw6][data-checked="true"] > svg{transform:scale(1);-webkit-transform:scale(1);}.css-1rprxtl,[data-css-1rprxtl]{transition:-webkit-transform 200ms ease-in-out,transform 200ms ease-in-out;transform:translateX(0%);-webkit-transition:-webkit-transform 200ms ease-in-out,transform 200ms ease-in-out;-moz-transition:transform 200ms ease-in-out;-webkit-transform:translateX(0%);}.css-1rprxtl[data-checked="true"],[data-css-1rprxtl][data-checked="true"]{transform:translateX(50%);-webkit-transform:translateX(50%);}.css-5ljhhe,[data-css-5ljhhe]{-webkit-appearance:none;-moz-appearance:none;border:none;background-color:white;box-shadow:inset 0 0 0 1px rgba(67, 90, 111, 0.3), inset 0 1px 2px rgba(67, 90, 111, 0.14);}.css-5ljhhe[aria-invalid="true"],[data-css-5ljhhe][aria-invalid="true"]{box-shadow:inset 0 0 0 1px #ec4c47, inset 0 1px 2px rgba(67, 90, 111, 0.14);}.css-5ljhhe::placeholder,[data-css-5ljhhe]::placeholder,.css-5ljhhe[data-simulate-placeholder],[data-css-5ljhhe][data-simulate-placeholder]{color:rgba(67, 90, 111, 0.47);}.css-5ljhhe:focus,[data-css-5ljhhe]:focus,.css-5ljhhe[data-simulate-focus],[data-css-5ljhhe][data-simulate-focus]{z-index:2;outline:none;box-shadow:inset 0 0 2px rgba(67, 90, 111, 0.14), inset 0 0 0 1px #579ad9, 0 0 0 3px rgba(16, 112, 202, 0.14);}.css-5ljhhe:disabled,[data-css-5ljhhe]:disabled,.css-5ljhhe[data-simulate-disabled],[data-css-5ljhhe][data-simulate-disabled]{cursor:not-allowed;box-shadow:inset 0 0 0 1px rgba(67, 90, 111, 0.14);background-color:#F5F6F7;}.css-nwvixr,[data-css-nwvixr]{-webkit-font-smoothing:antialiased;-webkit-appearance:none;-moz-appearance:none;vertical-align:middle;text-decoration:none;border:none;outline:none;cursor:pointer;color:white;background-color:white;background-image:-webkit-linear-gradient(to bottom, #0788DE, #116AB8); background-image: -moz-linear-gradient(to bottom, #0788DE, #116AB8); background-image: linear-gradient(to bottom, #0788DE, #116AB8);box-shadow:inset 0 0 0 1px rgba(67, 90, 111, 0.3), inset 0 -1px 1px 0 rgba(67, 90, 111, 0.06);}.css-nwvixr::-moz-focus-inner ,[data-css-nwvixr]::-moz-focus-inner {border:0;}.css-nwvixr[disabled],[data-css-nwvixr][disabled],.css-nwvixr [data-disabled],[data-css-nwvixr] [data-disabled]{cursor:not-allowed;opacity:0.8;background-image:none;background-color:rgba(67, 90, 111, 0.06);box-shadow:none;color:rgba(67, 90, 111, 0.7);pointer-events:none;}.css-nwvixr:not([disabled]):not([data-disabled]):hover,[data-css-nwvixr]:not([disabled]):not([data-disabled]):hover,.css-nwvixr[data-simulate-notdisablednotdatadisabledhover],[data-css-nwvixr][data-simulate-notdisablednotdatadisabledhover]{background-image:-webkit-linear-gradient(to bottom, #0679c5, #0f5da1); background-image: -moz-linear-gradient(to bottom, #0679c5, #0f5da1); background-image: linear-gradient(to bottom, #0679c5, #0f5da1);}.css-nwvixr:not([disabled]):not([data-disabled]):focus,[data-css-nwvixr]:not([disabled]):not([data-disabled]):focus,.css-nwvixr[data-simulate-notdisablednotdatadisabledfocus],[data-css-nwvixr][data-simulate-notdisablednotdatadisabledfocus]{z-index:2;box-shadow:0 0 0 3px rgba(7, 136, 222, 0.4), inset 0 0 0 1px rgba(67, 90, 111, 0.14), inset 0 -1px 1px 0 rgba(67, 90, 111, 0.3);}.css-nwvixr:not([disabled]):not([data-disabled]):active,[data-css-nwvixr]:not([disabled]):not([data-disabled]):active, .css-nwvixr:not([disabled]):not([data-disabled])[aria-expanded="true"], [data-css-nwvixr]:not([disabled]):not([data-disabled])[aria-expanded="true"], .css-nwvixr:not([disabled]):not([data-disabled])[data-active], [data-css-nwvixr]:not([disabled]):not([data-disabled])[data-active]{background-image:-webkit-linear-gradient(to bottom, #0f5da1, #0f5da1); background-image: -moz-linear-gradient(to bottom, #0f5da1, #0f5da1); background-image: linear-gradient(to bottom, #0f5da1, #0f5da1);box-shadow:inset 0 0 0 1px rgba(67, 90, 111, 0.14), inset 0 1px 1px 0 rgba(67, 90, 111, 0.06);}.css-nwvixr:not([disabled]):not([data-disabled]):focus:active,[data-css-nwvixr]:not([disabled]):not([data-disabled]):focus:active, .css-nwvixr:not([disabled]):not([data-disabled])[aria-expanded="true"]:focus, [data-css-nwvixr]:not([disabled]):not([data-disabled])[aria-expanded="true"]:focus, .css-nwvixr:not([disabled]):not([data-disabled])[data-active]:focus, [data-css-nwvixr]:not([disabled]):not([data-disabled])[data-active]:focus{box-shadow:0 0 0 3px rgba(7, 136, 222, 0.4), inset 0 0 0 1px rgba(67, 90, 111, 0.14), inset 0 1px 1px 0 rgba(67, 90, 111, 0.06);}.css-1ou6lye,[data-css-1ou6lye]{-webkit-font-smoothing:antialiased;-webkit-appearance:none;-moz-appearance:none;vertical-align:middle;text-decoration:none;border:none;outline:none;cursor:pointer;color:#95591e;background-color:transparent;}.css-1ou6lye::-moz-focus-inner ,[data-css-1ou6lye]::-moz-focus-inner {border:0;}.css-1ou6lye[disabled],[data-css-1ou6lye][disabled],.css-1ou6lye [data-disabled],[data-css-1ou6lye] [data-disabled]{cursor:not-allowed;opacity:0.8;background-image:none;background-color:rgba(67, 90, 111, 0.06);box-shadow:none;color:rgba(67, 90, 111, 0.7);pointer-events:none;}.css-1ou6lye:not([disabled]):not([data-disabled]):hover,[data-css-1ou6lye]:not([disabled]):not([data-disabled]):hover,.css-1ou6lye[data-simulate-notdisablednotdatadisabledhover],[data-css-1ou6lye][data-simulate-notdisablednotdatadisabledhover]{background-color:rgba(67, 90, 111, 0.06);}.css-1ou6lye:not([disabled]):not([data-disabled]):focus,[data-css-1ou6lye]:not([disabled]):not([data-disabled]):focus,.css-1ou6lye[data-simulate-notdisablednotdatadisabledfocus],[data-css-1ou6lye][data-simulate-notdisablednotdatadisabledfocus]{z-index:2;box-shadow:0 0 0 3px rgba(16, 112, 202, 0.3);}.css-1ou6lye:not([disabled]):not([data-disabled]):active,[data-css-1ou6lye]:not([disabled]):not([data-disabled]):active, .css-1ou6lye:not([disabled]):not([data-disabled])[aria-expanded="true"], [data-css-1ou6lye]:not([disabled]):not([data-disabled])[aria-expanded="true"], .css-1ou6lye:not([disabled]):not([data-disabled])[data-active], [data-css-1ou6lye]:not([disabled]):not([data-disabled])[data-active]{background-image:none;background-color:rgba(16, 112, 202, 0.09);}.css-1i93du9,[data-css-1i93du9]{transition-duration:150ms;transition-property:box-shadow, -webkit-transform, transform;transition-timing-function:cubic-bezier(0.0, 0.0, 0.2, 1);-webkit-transition-duration:150ms;-webkit-transition-property:box-shadow, -webkit-transform, transform;-moz-transition-property:box-shadow, transform;-webkit-transition-timing-function:cubic-bezier(0.0, 0.0, 0.2, 1);}.css-1i93du9:hover,[data-css-1i93du9]:hover,.css-1i93du9[data-simulate-hover],[data-css-1i93du9][data-simulate-hover]{transform:translateY(-2px);box-shadow:0 0 1px rgba(67, 90, 111, 0.3), 0 8px 10px -4px rgba(67, 90, 111, 0.47);-webkit-transform:translateY(-2px);}


`

export default GlobalStyles;