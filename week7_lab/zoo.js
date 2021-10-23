// baby leopard
//   name: Tim
//   age: 1
// baby hyena
//   name: Lara
//   age: 2
// baby caracal
//   name: Rafael
//   age: 3

function babyLeopard(name, age) {
  this.name = "Tim"
  this.age = 1
  this.image_alt = "a cute baby leopard"
  this.image = "images/baby-leopard.jpg"
}

function babyHyena(name, age) {
  this.name = "Lara"
  this.age = 2
  this.image_alt = "a cute baby hyena"
  this.image = "images/baby-hyena.jpeg"
}

function babyCaracal(name, age) {
  this.name = "Rafael"
  this.age = 3
  this.image_alt = "a cute baby caracal"
  this.image = "images/baby-caracal.jpeg"
}

const animal = [babyLeopard(), babyHyena(), babyCaracal()]

const names = [
  "Johanna",
  "Harper",
  "Debbie",
  "Linda",
  "Hayden",
  "Avni",
  "Cadence",
]

function generateRandomIndex(maxIndex) {
  randomNumber = Math.floor(Math.random() * maxIndex)
  return randomNumber
}

function generateRandomName() {
  var randomIndex = generateRandomIndex(names.length)
  return names[randomIndex]
}

function generateRandomAge() {
  return generateRandomIndex(4)
}

function generateRandomAnimal() {
  randomIdx = generateRandomIndex(animal.length)
  animal[randomIdx](generateRandomName(), generateRandomAge())
}
