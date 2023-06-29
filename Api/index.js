const express = require('express');
const app = express();

app.use(express.json());

// Datos de ejemplo (lista de books)
let books = [
  { id: 1, nombre: 'Jurassic Park', genero: 'Thriller/Ciencia ficción', autor: "Michael Crichton"},
  { id: 2, nombre: 'Christine', genero: 'Terror', autor: "Stephen King"},
  { id: 3, nombre: 'I, robot', genero: 'Ciencia ficción', autor: "Isaac Asimov"},
  { id: 4, nombre: '1984', genero: 'Ciencia ficción', autor: "George Orwell" },
  { id: 5, nombre: 'Dune', genero: 'Ciencia ficción', autor: "Frank Herbert" },
  { id: 6, nombre: 'El resplandor', genero: 'Terror', autor: "Stephen King" },
  { id: 7, nombre: 'El nombre de la rosa', genero: 'Misterio', autor: "Umberto Eco" },
  { id: 8, nombre: 'Neuromante', genero: 'Ciencia ficción', autor: "William Gibson" },
  { id: 9, nombre: 'Fahrenheit 451', genero: 'Ciencia ficción', autor: "Ray Bradbury" },
  { id: 10, nombre: 'Drácula', genero: 'Terror', autor: "Bram Stoker" },
  { id: 11, nombre: 'El código Da Vinci', genero: 'Misterio', autor: "Dan Brown" },
  { id: 12, nombre: 'Cazadores de sombras', genero: 'Fantasía', autor: "Cassandra Clare" },
  { id: 13, nombre: 'El Exorcista', genero: 'Terror', autor: "William Peter Blatty" },
  { id: 14, nombre: 'El fin de la eternidad', genero: 'Ciencia ficción', autor: "Isaac Asimov" },
  { id: 15, nombre: 'El código enigma', genero: 'Misterio', autor: "Robert Harris" },
  { id: 16, nombre: 'Frankenstein', genero: 'Terror', autor: "Mary Shelley" },
  { id: 17, nombre: 'Christine', genero: 'Terror', autor: "Michael " },
  { id: 18, nombre: 'Ready Player One', genero: 'Ciencia ficción', autor: "Ernest Cline" },
  { id: 19, nombre: 'El silencio de los corderos', genero: 'Misterio', autor: "Thomas Harris" },
  { id: 20, nombre: 'El juego de Ender', genero: 'Ciencia ficción', autor: "Orson Scott Card" }
];

// Obtener todos las books
app.get('/books', (req, res) => {
  res.json(books);
});

// Obtener un book por ID
app.get('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(book => book.id === id);
  
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ mensaje: 'book no encontrado' });
  }
});

// Crear un nuevo book
app.post('/books', (req, res) => {
  const newBook = req.body;
  newBook.id = books.length + 1;
  books.push(newBook);
  
  res.status(201).json(newBook);
});

// Actualizar un book existente
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedBook = req.body;
  books = books.map(book => {
    if (book.id === id) {
      return { ...book, ...updatedBook };
    }
    return book;
  });
  
  res.json(books.find(book => book.id === id));
});

// Eliminar un book existente
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter(book => book.id !== id);
  
  res.status(204).end();
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
