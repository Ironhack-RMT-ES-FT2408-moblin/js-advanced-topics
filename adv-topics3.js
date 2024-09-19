
const someNumbers = [ 10, 43, 29, 50, 4 ]

console.log(someNumbers)

// SPREAD => esparcir todo el contenido de un array/objeto

console.log(...someNumbers)
console.log(10, 43, 29, 50, 4)


console.log( Math.max(30, 40, 10) )
console.log( Math.max(...someNumbers) )


const students = ["miguel", "emma", "alberto", "diego"]
const students2 = ["malú", "patricia", "ruben", "núria"]


const allStudents = [ ...students, ...students2, "juan" ]

console.log(allStudents)


const cloneStudents = [...allStudents] // clonando el array
cloneStudents.reverse()

console.log(cloneStudents)
console.log(allStudents)


const people = [
  {
    name: "enrique",
    candy: 20,
  }, // ref abcd
  {
    name: "pedro",
    candy: 15,
  }, // tyui
  {
    name: "gemma",
    candy: 12,
  } // vbnm
] // ref 1234

// Shallow clone => clone superficial. Solo clona el primer nivel
// const clonePeople = [...people] // ref 5678
// const clonePeople = people.slice(0) // ref 5678
// const clonePeople = people.map((e) => e) // ref 5678

// Deep clone => clone profundo. Se clonan TODOS los niveles internos
// const clonePeople = JSON.parse( JSON.stringify(people) )
const clonePeople = structuredClone(people) // Esto podria dar conflictos

clonePeople.push({ name: "david", candy: 18}) // ref 5678
console.log("original", people) // ref 1234
console.log("copia", clonePeople) // ref 5678

clonePeople[0].candy = 0 // ref abcd

console.log("copia", clonePeople) // ref abcd
console.log("original", people) // ref abcd



const user = {
  name: "bob",
  lugar: "piña debajo del mar",
  hobby: "atrapar medusas"
} // ref 1234

const user2 = {...user, lugarDeTrabajo: "crustacio crujiente", name: "Bob"} // clonando. ref 3456

console.log(user)
console.log(user2)


// REST => el resto de (...)

const hobbies = ["surfear", "caminar", "videojuegos", "leer", "ver pelis"]


const [ primerHobby, segundoHobby, ...todosLosDemas ] = hobbies

console.log(primerHobby)
console.log(segundoHobby)
console.log(todosLosDemas)



function checkIfStudentPassed(...todasLasNotas) {
  console.log(todasLasNotas)

  // let sum = note1 + note2 + note3
  // let avg = sum / 3

  let sum = todasLasNotas.reduce((acc, nota) => {
    return acc + nota
  }, 0)

  let avg = sum / todasLasNotas.length

  if (avg < 5) {
    console.log(`El estudiante no aprobó. promedio de ${avg}`)
  } else {
    console.log(`El estudiante si aprobó. promedio de ${avg} :)`)
  }

}

// si el primedio es >5 "Si pasó"
// si el primedio es <5 "No pasó"
checkIfStudentPassed(10, 4, 6)
checkIfStudentPassed(3, 4, 5)
checkIfStudentPassed(3, 4, 5, 10, 8)
checkIfStudentPassed(6, 7)



