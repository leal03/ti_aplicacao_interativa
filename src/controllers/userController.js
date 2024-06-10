const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
  try {
    const { name, email, dob, weight, height, password } = req.body;

    // Log para verificar os dados recebidos
    console.log('Dados recebidos no servidor:', req.body);

    // Log para cada campo individual
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Data de Nascimento:', dob);
    console.log('Peso:', weight);
    console.log('Altura:', height);
    console.log('Senha:', password);

    if (!name || !email || !dob || !weight || !height || !password) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, dob, weight, height, password: hashedPassword });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
