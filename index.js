const abc = document.querySelector(".abc")
const span1 = document.querySelector("#span1")


abc.addEventListener("click", ()=> {
    const tap1 = document.querySelector(".tap1")
    const tap2 = document.querySelector(".tap2")

    const full1 = tap1.value
    const full2 = tap2.value


if (full1 !== "" && full2 !== "") {
    span1.textContent = "Обидва поля заповнені"
    // console.log('Обидва поля заповнені');
  } else {
    span1.textContent = "Не всі поля заповнені"
    // console.log('Не всі поля заповнені')
  }

})


const cpswithramp = document.querySelector("#cpsramp")
const span2 = document.querySelector("#span2")

cpswithramp.addEventListener("click", ()=> {

const numberInput1 = document.querySelector("#ramp1").value
const numberInput2 = document.querySelector("#ramp2").value

const sum = parseInt(numberInput1) + parseInt(numberInput2);

if (sum > 10){
    span2.textContent = "Сума більша за 10"
    // console.log('Сума більша за 10');
} else {
    span2.textContent = "Сума менша або дорівнює 10"
    // console.log('Сума менша або дорівнює 10');
  }
}
)


const cpsWithdast = document.querySelector("#cpsWithdast")
const span3 = document.querySelector("#span3")

cpsWithdast.addEventListener("click", ()=> {
const dastcps = document.querySelector("#dastcps").value

if (dastcps.includes("JavaScript")) {
    span3.textContent = "Текст містить слово JavaScript"
    // console.log("Текст містить слово JavaScript")
}
else {
    span3.textContent = "Текст не містить слово JavaScript"
//     console.log("Текст не містить слово JavaScript")
}
})


const btnNumbDiapazon = document.querySelector("#btnNumbDiapazon")
const span4 = document.querySelector("#span4")

btnNumbDiapazon.addEventListener("click", ()=> {
const numberDiapazon = parseInt(document.querySelector("#numberDiapazon").value)

if (20 > numberDiapazon && numberDiapazon > 10){
    span4.textContent = "Число в діпазоні від 10 до 20"
    // console.log("Число в діпазоні від 10 до 20");
} 
else {
    span4.textContent = "Число не в діапазоні від 10 до 20"
    // console.log("Число не в діапазоні від 10 до 20");
  }
}
)



const cpsLogIn = document.querySelector("#cpsLogIn")


cpsLogIn.addEventListener("click", ()=> {
const name = document.querySelector("#name").value
const mail = document.querySelector("#mail").value
const password = document.querySelector("#password").value

const nameLentgh = name.length

const passwordLentgh = password.length

if (nameLentgh >= 3 && mail.includes("@") && mail.includes(".") && passwordLentgh >= 6) {
    window.location.href = "https://en.wikipedia.org/wiki/Cat";
}
else {
    alert("Сталась помилка!")
}

})