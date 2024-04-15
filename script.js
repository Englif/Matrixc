const inputX = document.querySelector('.input-x')
const inputY = document.querySelector('.input-y')
const submit = document.querySelector('.submitxy')
const field = document.querySelector('.fieldxy')
const inputUser = document.querySelector('.input-user')

submit.onclick = () => {
  let x = inputX.value
  let y = inputY.value
  let value = inputUser.value
  field.innerHTML = ``
  if(+x + +y <=64){
    if(value.length < 6){
      if(+x - +y <=Math.abs(32) ){
        for (let i = 0; i < x; i++ ){
          for (let j = 0; j < y; j++){
            field.innerHTML += `${value} `
       
          }
  
        field.innerHTML +=`<br>`
        }
      }
      else{
        alert('слишком хреновая(не пропорциональная) матрица она ломает блоки')
      }
    }
    else{
      alert('слишком большое количество пользовательских символов')
    }
  }
  else{
    alert('много символов,все уедет в казахстан')
  }
}

let color = document.querySelector('.input-color') 
field.onclick = () =>{
  field.setAttribute(`style`, `color: ${color.value}`)
  console.log(color.value)
}