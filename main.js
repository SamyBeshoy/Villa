// get buttons

let btnOne = document.getElementById("appartment");
let btnTwo = document.getElementById("villahouse");
let btnThree = document.getElementById("penthouse");

// get content

let firstCon = document.getElementById("first");
let secondCon = document.getElementById("second");
let thirdCon = document.getElementById("third");

// fist case

btnOne.onclick = function (params) {
    btnOne.style.cssText = `
    background-color: #f35525;
    `;
    btnTwo.style.cssText = `
    background-color: black;
    `;
    btnThree.style.cssText = `
    background-color: black;
    `;
    firstCon.style.cssText = `
    display: flex;
    animation: animation_box 0.75s;
    `;
    secondCon.style.cssText = `
    display: none;
    `;
    thirdCon.style.cssText = `
    display: none;
    `;
}

// second case

btnTwo.onclick = function (params) {
    btnOne.style.cssText = `
    background-color: black;
    `;
    btnTwo.style.cssText = `
    background-color: #f35525;
    `;
    btnThree.style.cssText = `
    background-color: black;
    `;
    firstCon.style.cssText = `
    display: none;
    `;
    secondCon.style.cssText = `
    display: flex;
    animation: animation_box 0.75s;
    `;
    thirdCon.style.cssText = `
    display: none;
    `;
}

// third case

btnThree.onclick = function (params) {
    btnOne.style.cssText = `
    background-color: black;
    `;
    btnTwo.style.cssText = `
    background-color: black;
    `;
    btnThree.style.cssText = `
    background-color: #f35525;
    `;
    firstCon.style.cssText = `
    display: none;
    `;
    secondCon.style.cssText = `
    display: none;
    `;
    thirdCon.style.cssText = `
    display: flex;
    animation: animation_box 0.75s;
    `;
}