const superheroes = [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    }
  ]

  //the first object
  console.log(superheroes[0])
  //age of first superhero
  console.log(superheroes[0]["age"])
  //2nd power of 1st hero
  console.log(superheroes[0]["powers"][1])