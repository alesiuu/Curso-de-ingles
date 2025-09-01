import { ModuleQuiz } from '../types';

export const moduleQuizzes: ModuleQuiz[] = [
  {
    id: "quiz-m1",
    moduleId: 1,
    title: "Examen Final - Módulo 1: Fundamentos del Inglés",
    description: "Evaluación integral de los fundamentos del inglés aprendidos en el primer mes",
    passingScore: 70,
    totalPoints: 100,
    questions: [
      {
        id: "q1-1",
        question: "How do you say 'Buenos días' in English?",
        type: "multiple-choice",
        options: ["Good night", "Good morning", "Good afternoon", "Hello"],
        correctAnswer: "Good morning",
        points: 10,
        feedback: "¡Correcto! 'Good morning' se usa hasta las 12:00 PM."
      },
      {
        id: "q1-2",
        question: "Complete: 'She ___ a teacher.'",
        type: "multiple-choice",
        options: ["am", "is", "are", "be"],
        correctAnswer: "is",
        points: 10,
        feedback: "¡Excelente! Con 'she' usamos 'is'."
      },
      {
        id: "q1-3",
        question: "What's the plural of 'child'?",
        type: "multiple-choice",
        options: ["childs", "children", "childes", "child"],
        correctAnswer: "children",
        points: 10,
        feedback: "¡Perfecto! 'Children' es el plural irregular de 'child'."
      },
      {
        id: "q1-4",
        question: "Complete: 'I ___ work on Sundays.'",
        type: "multiple-choice",
        options: ["don't", "doesn't", "am not", "isn't"],
        correctAnswer: "don't",
        points: 10,
        feedback: "¡Correcto! Con 'I' usamos 'don't' para negar en presente simple."
      },
      {
        id: "q1-5",
        question: "What color is the sun?",
        type: "multiple-choice",
        options: ["Blue", "Green", "Yellow", "Red"],
        correctAnswer: "Yellow",
        points: 10,
        feedback: "¡Excelente! El sol es amarillo (yellow)."
      },
      {
        id: "q1-6",
        question: "Complete: '___ you speak English?'",
        type: "multiple-choice",
        options: ["Do", "Does", "Are", "Is"],
        correctAnswer: "Do",
        points: 10,
        feedback: "¡Perfecto! Con 'you' usamos 'Do' para preguntas en presente simple."
      },
      {
        id: "q1-7",
        question: "What day comes after Wednesday?",
        type: "multiple-choice",
        options: ["Tuesday", "Thursday", "Friday", "Monday"],
        correctAnswer: "Thursday",
        points: 10,
        feedback: "¡Correcto! Después del miércoles viene el jueves (Thursday)."
      },
      {
        id: "q1-8",
        question: "Where do you sleep?",
        type: "multiple-choice",
        options: ["Kitchen", "Bathroom", "Bedroom", "Living room"],
        correctAnswer: "Bedroom",
        points: 10,
        feedback: "¡Excelente! Dormimos en el dormitorio (bedroom)."
      },
      {
        id: "q1-9",
        question: "What's the opposite of 'tall'?",
        type: "multiple-choice",
        options: ["Big", "Small", "Short", "Long"],
        correctAnswer: "Short",
        points: 10,
        feedback: "¡Perfecto! Lo opuesto de 'tall' (alto) es 'short' (bajo)."
      },
      {
        id: "q1-10",
        question: "Complete: 'My ___ is very kind.' (talking about your mother)",
        type: "multiple-choice",
        options: ["father", "mother", "brother", "sister"],
        correctAnswer: "mother",
        points: 10,
        feedback: "¡Correcto! 'Mother' significa madre."
      }
    ]
  },
  {
    id: "quiz-m2",
    moduleId: 2,
    title: "Examen Final - Módulo 2: Comunicación Práctica",
    description: "Evaluación de habilidades de comunicación práctica del segundo mes",
    passingScore: 75,
    totalPoints: 100,
    questions: [
      {
        id: "q2-1",
        question: "What do you eat in the morning?",
        type: "multiple-choice",
        options: ["Dinner", "Lunch", "Breakfast", "Snack"],
        correctAnswer: "Breakfast",
        points: 10,
        feedback: "¡Correcto! En la mañana comemos el desayuno (breakfast)."
      },
      {
        id: "q2-2",
        question: "How do you ask for the price?",
        type: "multiple-choice",
        options: ["How much is it?", "What is it?", "Where is it?", "Who is it?"],
        correctAnswer: "How much is it?",
        points: 10,
        feedback: "¡Perfecto! 'How much is it?' es la forma correcta de preguntar el precio."
      },
      {
        id: "q2-3",
        question: "Complete: 'She ___ reading a book right now.'",
        type: "multiple-choice",
        options: ["am", "is", "are", "be"],
        correctAnswer: "is",
        points: 10,
        feedback: "¡Perfecto! Con 'she' usamos 'is' en presente continuo."
      },
      {
        id: "q2-4",
        question: "What's the past form of 'go'?",
        type: "multiple-choice",
        options: ["Goed", "Went", "Gone", "Going"],
        correctAnswer: "Went",
        points: 10,
        feedback: "¡Correcto! El pasado de 'go' es 'went' (verbo irregular)."
      },
      {
        id: "q2-5",
        question: "How do you politely order food?",
        type: "multiple-choice",
        options: ["I want", "Give me", "I'd like", "I need"],
        correctAnswer: "I'd like",
        points: 10,
        feedback: "¡Perfecto! 'I'd like' es la forma más educada de pedir comida."
      },
      {
        id: "q2-6",
        question: "What do you use to see?",
        type: "multiple-choice",
        options: ["Ears", "Eyes", "Nose", "Mouth"],
        correctAnswer: "Eyes",
        points: 10,
        feedback: "¡Excelente! Usamos los ojos (eyes) para ver."
      },
      {
        id: "q2-7",
        question: "Which is a hobby?",
        type: "multiple-choice",
        options: ["Working", "Sleeping", "Reading", "Eating"],
        correctAnswer: "Reading",
        points: 10,
        feedback: "¡Correcto! Leer (reading) es un pasatiempo común."
      },
      {
        id: "q2-8",
        question: "How do you ask about the time?",
        type: "multiple-choice",
        options: ["What day is it?", "What time is it?", "What weather is it?", "What color is it?"],
        correctAnswer: "What time is it?",
        points: 10,
        feedback: "¡Correcto! 'What time is it?' es cómo preguntas la hora."
      },
      {
        id: "q2-9",
        question: "What's the opposite of 'turn left'?",
        type: "multiple-choice",
        options: ["Go back", "Turn right", "Stop", "Go straight"],
        correctAnswer: "Turn right",
        points: 10,
        feedback: "¡Excelente! Lo opuesto de 'turn left' es 'turn right'."
      },
      {
        id: "q2-10",
        question: "What's the past form of 'eat'?",
        type: "multiple-choice",
        options: ["Eated", "Ate", "Eaten", "Eating"],
        correctAnswer: "Ate",
        points: 10,
        feedback: "¡Correcto! El pasado de 'eat' es 'ate' (verbo irregular)."
      }
    ]
  },
  {
    id: "quiz-m3",
    moduleId: 3,
    title: "Examen Final - Módulo 3: Conversación y Fluidez",
    description: "Evaluación final de conversación y fluidez del tercer mes",
    passingScore: 80,
    totalPoints: 100,
    questions: [
      {
        id: "q3-1",
        question: "Complete: 'I ___ going to visit my family tomorrow.'",
        type: "multiple-choice",
        options: ["am", "is", "are", "will"],
        correctAnswer: "am",
        points: 10,
        feedback: "¡Perfecto! Con 'I' usamos 'am' en 'going to'."
      },
      {
        id: "q3-2",
        question: "What's the superlative of 'good'?",
        type: "multiple-choice",
        options: ["Gooder", "More good", "The best", "Goodest"],
        correctAnswer: "The best",
        points: 10,
        feedback: "¡Excelente! El superlativo de 'good' es 'the best'."
      },
      {
        id: "q3-3",
        question: "Complete: 'I ___ never been to Japan.'",
        type: "multiple-choice",
        options: ["am", "have", "has", "will"],
        correctAnswer: "have",
        points: 10,
        feedback: "¡Correcto! Con 'I' usamos 'have' en presente perfecto."
      },
      {
        id: "q3-4",
        question: "Who works in a hospital?",
        type: "multiple-choice",
        options: ["Teacher", "Doctor", "Engineer", "Chef"],
        correctAnswer: "Doctor",
        points: 10,
        feedback: "¡Perfecto! Los doctores trabajan en hospitales."
      },
      {
        id: "q3-5",
        question: "Where do planes take off and land?",
        type: "multiple-choice",
        options: ["Hotel", "Airport", "Restaurant", "Hospital"],
        correctAnswer: "Airport",
        points: 10,
        feedback: "¡Excelente! Los aviones despegan y aterrizan en el aeropuerto."
      },
      {
        id: "q3-6",
        question: "What do you use to browse the internet?",
        type: "multiple-choice",
        options: ["Television", "Computer", "Radio", "Book"],
        correctAnswer: "Computer",
        points: 10,
        feedback: "¡Correcto! Usamos la computadora para navegar en internet."
      },
      {
        id: "q3-7",
        question: "How do you express agreement?",
        type: "multiple-choice",
        options: ["I disagree", "I think not", "I agree", "I don't know"],
        correctAnswer: "I agree",
        points: 10,
        feedback: "¡Perfecto! 'I agree' expresa que estás de acuerdo."
      },
      {
        id: "q3-8",
        question: "How do you offer help?",
        type: "multiple-choice",
        options: ["What's wrong?", "How can I help?", "I don't care", "Good luck"],
        correctAnswer: "How can I help?",
        points: 10,
        feedback: "¡Excelente! 'How can I help?' es una forma amable de ofrecer ayuda."
      },
      {
        id: "q3-9",
        question: "What's a special day of celebration?",
        type: "multiple-choice",
        options: ["Custom", "Holiday", "Problem", "Solution"],
        correctAnswer: "Holiday",
        points: 10,
        feedback: "¡Correcto! Un 'holiday' es un día especial de celebración."
      },
      {
        id: "q3-10",
        question: "What do you say when someone achieves something?",
        type: "multiple-choice",
        options: ["Good luck", "Congratulations", "What's wrong", "I disagree"],
        correctAnswer: "Congratulations",
        points: 10,
        feedback: "¡Perfecto! 'Congratulations' se dice cuando alguien logra algo importante."
      }
    ]
  }
];