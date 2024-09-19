console.log("probando")

// const saludar = (username) => {
//   return `Hola ${username}`
// }

const saludar = (username) => `Hola ${username}`

console.log( saludar("Cristina") )



const people = ["Samuel", "Javi", "Malú", "Miguel", "Ana", "Ángela", "Juan", "Alejandro", "Alberto"]

people
.filter((eachPerson) => eachPerson[0] === "A" || eachPerson[0] === "Á")
.sort((people1, people2) => people1.localeCompare(people2))
.map((eachPerson) => eachPerson.toUpperCase())
.forEach((eachPerson, index) => console.log(`${index+1} - ${eachPerson}`) )

console.log(people)

// sintaxis reduce compleja con operadores ternarios
// .reduce((acc, elem) => elem === undefined ? acc : acc + elem , 0)


// Object property shorthand => propiedad de abjeto abreviada

let username = "bob";
let age = 34;


// const user = {
//   username: username,
//   age: age
// }

// cuando el nombre de la propiedade es igual a la variable de donde viene la data...

const user = {
  username,             // username: username
  age,                  // age: age
  likesPokemon: true    
}

console.log(user)


