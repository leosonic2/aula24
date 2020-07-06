import mongoose from 'mongoose';

//Criação do modelo
const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  type: { type: String, required: true },
  value: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) {
        throw new Error('Valor Negativo para a nota não permitido');
      }
    },
  },
  lastModified: {
    type: Date,
    default: Date.now(),
  },
});
//definindo Modelo da Coleção
const studentModel = mongoose.model('student', studentSchema, 'student');

export { studentModel };
