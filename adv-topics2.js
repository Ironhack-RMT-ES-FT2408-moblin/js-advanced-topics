

const unPerritoMuyLindo = {
  id: 12345,
  dogName: "Beethoven",
  breed: "San Bernardo",
  age: 6,
}



// Destructuración en objetos

const { breed, age, dogName, id } = unPerritoMuyLindo

// console.log(dogName, breed, age)

console.log( `El perrito ${dogName} es de raza ${breed} y tiene ${age} añitos de edad` )


console.log( `Este perrito ${dogName} es muy lindo. 11/10` )


const unPerritoMuyLindo2 = {
  id: 987654,
  dogName: "Layka",
  breed: "Dobberman",
  age: 10,
}


function describirPerrito({dogName, breed, age}) {

  // const { dogName, breed, age } = unPerrito

  console.log( `El perrito ${dogName} es de raza ${breed} y tiene ${age} añitos de edad` )

  console.log( `Este perrito ${dogName} es muy lindo. 11/10` )
}

describirPerrito(unPerritoMuyLindo)
describirPerrito(unPerritoMuyLindo2)



const person = {
  id: 4567,
  username: "bob"
}

const { id: personId, username } = person // ejemplo de destructurar y cambiar nombre de variable
console.log(personId, username)



// Destructuración de arrays

const misTresLibrosFavoritosDelMundoMundial = ["MundoDisco", "Dragonlance", "Dresden Files", "Señor de los Anillos"]

const [ libro1, libro2, libro3, libro4 = "Harry Potter" ] = misTresLibrosFavoritosDelMundoMundial
console.log(libro4) // si el libro no existe. Si no existe libro en la posición 4. Entonces valor predefinido es Harry Potter

misTresLibrosFavoritosDelMundoMundial[0] = "Dune"


console.log(`Mis tres libros favoritos son: ${libro1}, ${libro2} y ${libro3}`)



// Destructuraciones anidadas

const onePerson = {
  firstName: "Elon",
  lastName: "Musk",
  job: "CEO de X",
  other: {
    about: {
      hobby: "Viajar a Marte",
      otherCompanies: ["Boring Company", "Tesla"]
    }
  }
}


// const { other } = onePerson
// const { about } = other
// const { hobby } = about
// console.log(hobby)

console.log(onePerson.other.about.otherCompanies[0])

const { firstName, lastName, job, other: { about: { hobby, otherCompanies: [comp1, comp2] } } } = onePerson

console.log(hobby)
console.log(comp1)
console.log(comp2)


function analizePerson({ other: { about: { hobby, otherCompanies: [comp1, comp2] } } }) {

}

analizePerson(onePerson)

