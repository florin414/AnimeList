const animes = [
  {
    id: '1',
    title: "Attack on Titan",
    studio: "Wit Studio",
    episodes: 75,
    characters: [
      { name: "Eren Yeager", age: 19, gender: "Male" },
      { name: "Mikasa Ackerman", age: 19, gender: "Female" },
      { name: "Armin Arlert", age: 19, gender: "Male" },
    ],
    genres: ["Action", "Dark Fantasy", "Post-apocalyptic"],
  },
  {
    id: '2',
    title: "Demon Slayer: Kimetsu no Yaiba",
    studio: "ufotable",
    episodes: 26,
    characters: [
      { name: "Tanjiro Kamado", age: 15, gender: "Male" },
      { name: "Nezuko Kamado", age: 14, gender: "Female" },
      { name: "Zenitsu Agatsuma", age: 16, gender: "Male" },
    ],
    genres: ["Action", "Dark Fantasy", "Supernatural"],
  },
  {
    id: '3',
    title: "Naruto",
    studio: "Studio Pierrot",
    episodes: 220,
    characters: [
      { name: "Naruto Uzumaki", age: 12, gender: "Male" },
      { name: "Sakura Haruno", age: 12, gender: "Female" },
      { name: "Sasuke Uchiha", age: 12, gender: "Male" },
    ],
    genres: ["Action", "Adventure", "Ninja"],
  },
  {
    id: '4',
    title: "One Piece",
    studio: "Toei Animation",
    episodes: 1000,
    characters: [
      { name: "Monkey D. Luffy", age: 19, gender: "Male" },
      { name: "Nami", age: 20, gender: "Female" },
      { name: "Roronoa Zoro", age: 21, gender: "Male" },
    ],
    genres: ["Action", "Adventure", "Pirate"],
  },
  {
    id: '5',
    title: "Death Note",
    studio: "Madhouse",
    episodes: 37,
    characters: [
      { name: "Light Yagami", age: 17, gender: "Male" },
      { name: "L Lawliet", age: 25, gender: "Male" },
      { name: "Misa Amane", age: 19, gender: "Female" },
    ],
    genres: ["Mystery", "Psychological Thriller"],
  },
  {
    id: '6',
    title: "Fullmetal Alchemist: Brotherhood",
    studio: "Bones",
    episodes: 64,
    characters: [
      { name: "Edward Elric", age: 15, gender: "Male" },
      { name: "Alphonse Elric", age: 14, gender: "Male" },
      { name: "Roy Mustang", age: 29, gender: "Male" },
    ],
    genres: ["Action", "Adventure", "Science Fiction"],
  },
];

const users = [
  {
    id: '1',
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
  },
  {
    id: '2',
    name: "Jane Smith",
    age: 25,
    email: "jane.smith@example.com",
    address: {
      street: "456 Elm St",
      city: "Othertown",
      state: "NY",
      zip: "67890",
    },
  },
  {
    id: '3',
    name: "Bob Johnson",
    age: 40,
    email: "bob.johnson@example.com",
    address: {
      street: "789 Oak St",
      city: "Somewhere",
      state: "TX",
      zip: "54321",
    },
  },
  {
    id: '4',
    name: "Alice Lee",
    age: 35,
    email: "alice.lee@example.com",
    address: {
      street: "321 Pine St",
      city: "Nowhere",
      state: "AZ",
      zip: "98765",
    },
  },
  {
    id: '5',
    name: "Tom Wilson",
    age: 50,
    email: "tom.wilson@example.com",
    address: {
      street: "654 Maple St",
      city: "Anywhere",
      state: "FL",
      zip: "24680",
    },
  },
];

module.exports = { users, animes };
