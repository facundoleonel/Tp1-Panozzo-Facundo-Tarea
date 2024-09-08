import { AlertController } from "@ionic/angular";

export interface TypeNota {
  title: string;
  description: string;
}
export const notas: TypeNota[] = [
  {
    title: 'Recordatorio entrega TP',
    description:
      'Entregar el trabajo práctico de Algoritmos y Estructuras de Datos antes del viernes 10 a las 23:59.',
  },
  {
    title: 'Estudiar para Parcial de Matemática Discreta',
    description:
      'Revisar los temas de combinatoria y teoría de grafos para el parcial del miércoles.',
  },
  {
    title: 'Tarea de Investigación',
    description:
      'Investigar sobre arquitecturas de microservicios para la clase de Arquitectura de Software. Fecha de entrega: 15 de septiembre.',
  },
  {
    title: 'Análisis de texto',
    description:
      'Leer el artículo sobre inteligencia artificial para la materia de Inteligencia Computacional. Hacer un resumen antes del lunes.',
  },
  {
    title: 'Recordatorio de consulta',
    description: 'Ir a la consulta con el profesor de Bases de Datos el jueves a las 14:00.'
  },
  {
    title: 'Tarea rápida',
    description: 'Completar la guía de ejercicios de Redes I.'
  }
];


// 

export const mostrarAlerta = async (titulo:string, mensaje:string) => {
  const alertController = new AlertController();

  const alert = await alertController.create({
    header: titulo,
    message: mensaje
  });

  await alert.present();
}