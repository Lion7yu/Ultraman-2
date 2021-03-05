// let html = document.querySelector('#html')
// let style = document.querySelector('#style')
// let string = `sadsadasdasdasdsadsadasdsa`
// let string2 = "";
// console.log(string.length);
// let n = 0;

// let step = () => {
//     setTimeout(() => {
//         //如果是回车,就不照搬
//         //如果不是回车,就照搬
//         if (string[n] === "\n") {
//             string2 += "<br>";
//         } else if (string[n] === " ") {
//             string2 += "&nbsp;";
//         } else {
//             string2 += string[n];
//         }
//         html.innerHTML = string2;
//         style.innerHTML = string.substring(0, n)
//         window.scrollTo(0, 99999)
//         html.scrollTo(0, 99999)
//         if (n + 1 < string.length) {
//             //不是最后一个
//             n += 1;//54
//             step();
//         }
//     }, 0);
// };

// step()