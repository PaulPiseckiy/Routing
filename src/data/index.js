const rosterData = [
  {
    name: "Dog",
    description: "Dogs (Canis lupus familiaris) are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated. Today, some dogs are used as pets, others are used to help humans do their work. They are a popular pet because they are usually playful, friendly, loyal and listen to humans. Thirty million dogs in the United States are registered as pets. Dogs eat both meat and vegetables, often mixed together and sold in stores as dog food. Dogs often have jobs, including as police dogs, army dogs, assistance dogs, fire dogs, messenger dogs, hunting dogs, herding dogs, or rescue dogs.",
    aclass: "Mammal"
  },
  {
    name: "Cat",
    description: "The domestic cat (Latin: Felis catus) is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. Cats are often valued by humans for companionship and for their ability to hunt vermin. There are more than 70 cat breeds, though different associations proclaim different numbers according to their standards.",
    aclass: "Mammal"
  },
  {
    name: "Parrot",
    description: "Parrots are birds of the order Psittaciformes. There are approximately 372 species in 86 genera and they are found in most tropical and subtropical regions. The greatest diversity of parrots is found in South America and Australasia.Parrots are intelligent birds. They have relatively large brains, they can learn, and they can use simple tools. Because some species have the ability to make sounds like human voices and have plumages with bright colors, many species are kept as pets. This includes some endangered and protected species.",
    aclass: "Aves"
  }
]

const routes = [
  { path: '/',
    exact: true,
    backgroundColor: "lightblue",
    headline: "HOME",
  },
  { path: '/roster',
    backgroundColor: "lightgreen",
    headline: "ROSTER",
  },
  { path: '/redirect',
    backgroundColor: "lightcoral",
    headline: "Redirect",
  }
]

const links = [
  { to: '/',
    exact: true,
    style: {borderBottom: "3px solid lightblue"},
    activeStyle: {borderBottom: "10px solid lightblue"},
    name: 'Home'
  },
  { to: '/roster',
    style: {borderBottom: "3px solid lightgreen"},
    activeStyle: {borderBottom: "10px solid lightgreen"},
    name: 'Roster'
  },
  { to: '/redirect',
    style: {borderBottom: "3px solid lightcoral"},
    activeStyle: {borderBottom: "10px solid lightcoral"},
    name: 'Redirect'
  }
]

export {
  rosterData,
  routes,
  links
};