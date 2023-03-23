



function meta(name, first, medial){
  return {"Name": name,"First": first,"Medial": medial,"for 75" : 225-first-medial,"for 85" : 255-first-medial,"for 90" : 270-first-medial}
}

console.table(meta("kima", 99, 94))


let first = document.getElementById("first")
let second = document.getElementById("second")

let need = document.querySelector(".need")
let need1 = document.querySelector(".need2")
let need2 = document.querySelector(".need3")

let for1 = document.querySelector(".for")
let for2 = document.querySelector(".for2")
let for3 = document.querySelector(".for3")

let select = document.getElementById("seleceted").addEventListener("change", function() {
  document.querySelector(".mada").innerHTML = this.value
  for1.innerHTML = 0
  for2.innerHTML = 0
  for3.innerHTML = 0
  need.innerHTML = 0
  need1.innerHTML = 0
  need2.innerHTML = 0
  first.value = ""
  second.value = ""
  first.addEventListener("keyup", () => {
    need.innerHTML = 270-first.value
    need1.innerHTML = 255-first.value
    need2.innerHTML = 225-first.value
    if (first.value == "" && second.value == "") {
      for1.innerHTML = 0
      for2.innerHTML = 0
      for3.innerHTML = 0
      need.innerHTML = 0
      need1.innerHTML = 0
      need2.innerHTML = 0
    }
    if (second.value != "") {
      need.innerHTML = 270-first.value-second.value
      need1.innerHTML = 255-first.value-second.value
      need2.innerHTML = 225-first.value-second.value
    }
    if (first.value != "") {
      for1.innerHTML = 90
      for2.innerHTML = 85
      for3.innerHTML = 75
    }
  })
  second.addEventListener("keyup", () => {
    need.innerHTML = 270-first.value-second.value
    need1.innerHTML = 255-first.value-second.value
    need2.innerHTML = 225-first.value-second.value
    for1.innerHTML = 90
    for2.innerHTML = 85
    for3.innerHTML = 75
    console.log(typeof second.value)
    if (first.value == "" && second.value == "") {
      for1.innerHTML = 0
      for2.innerHTML = 0
      for3.innerHTML = 0
      need.innerHTML = 0
      need1.innerHTML = 0
      need2.innerHTML = 0
    }
  })
})



