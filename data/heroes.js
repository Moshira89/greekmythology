function Hero (name, power, description) {
  this.name = name;
  this.power = power;
  this.description = description;
}

let Heroes =[
    new Hero("Hercules", "Super Strength", "Hercules complete 12 tasks in his adventures"),
    new Hero("Odysseus", "Celever", "Odysseus built the Torjan Horse")
]

export default Heroes