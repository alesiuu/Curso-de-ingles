import { Level } from '../types';

export const levels: Level[] = [
  {
    id: 1,
    name: "Módulo 1: Fundamentos del Inglés",
    description: "Mes 1 - Bases del idioma inglés",
    color: "bg-green-500",
    requiredScore: 70,
    lessons: [
      {
        id: "m1-l1",
        title: "Saludos y Presentaciones",
        type: "vocabulary",
        content: {
          text: "Aprende los saludos básicos y cómo presentarte en inglés",
          vocabulary: [
            {
              word: "Hello",
              translation: "Hola",
              pronunciation: "/həˈloʊ/",
              example: "Hello, my name is John."
            },
            {
              word: "Good morning",
              translation: "Buenos días",
              pronunciation: "/ɡʊd ˈmɔrnɪŋ/",
              example: "Good morning, how are you?"
            },
            {
              word: "What's your name?",
              translation: "¿Cómo te llamas?",
              pronunciation: "/wʌts jʊr neɪm/",
              example: "What's your name? I'm Maria."
            },
            {
              word: "I'm from",
              translation: "Soy de",
              pronunciation: "/aɪm frʌm/",
              example: "I'm from Mexico."
            }
          ]
        },
        exercises: [
          {
            id: "m1-l1-ex1",
            type: "multiple-choice",
            question: "How do you say 'Buenos días' in English?",
            options: ["Good night", "Good morning", "Good afternoon", "Hello"],
            correctAnswer: "Good morning",
            feedback: "¡Correcto! 'Good morning' se usa hasta las 12:00 PM."
          },
          {
            id: "m1-l1-ex2",
            type: "multiple-choice",
            question: "Complete: '_____ your name?'",
            options: ["What's", "Where's", "How's", "Who's"],
            correctAnswer: "What's",
            feedback: "¡Excelente! 'What's your name?' es la forma correcta de preguntar el nombre."
          }
        ]
      },
      {
        id: "m1-l2",
        title: "Alfabeto y Números",
        type: "vocabulary",
        content: {
          text: "Domina el alfabeto inglés y los números del 1 al 100",
          vocabulary: [
            {
              word: "A, B, C",
              translation: "A, B, C",
              pronunciation: "/eɪ, bi, si/",
              example: "The alphabet starts with A, B, C."
            },
            {
              word: "One, Two, Three",
              translation: "Uno, Dos, Tres",
              pronunciation: "/wʌn, tu, θri/",
              example: "Count with me: one, two, three."
            },
            {
              word: "Ten",
              translation: "Diez",
              pronunciation: "/tɛn/",
              example: "I have ten fingers."
            },
            {
              word: "Twenty",
              translation: "Veinte",
              pronunciation: "/ˈtwɛnti/",
              example: "She is twenty years old."
            }
          ]
        },
        exercises: [
          {
            id: "m1-l2-ex1",
            type: "multiple-choice",
            question: "How do you spell 'CAT'?",
            options: ["C-A-T", "K-A-T", "S-A-T", "C-E-T"],
            correctAnswer: "C-A-T",
            feedback: "¡Perfecto! CAT se deletrea C-A-T."
          }
        ]
      },
      {
        id: "m1-l3",
        title: "Pronombres Personales",
        type: "grammar",
        content: {
          text: "Aprende los pronombres personales y el verbo 'to be'",
          vocabulary: [
            {
              word: "I am",
              translation: "Yo soy/estoy",
              pronunciation: "/aɪ æm/",
              example: "I am a student."
            },
            {
              word: "You are",
              translation: "Tú eres/estás",
              pronunciation: "/ju ɑr/",
              example: "You are my friend."
            },
            {
              word: "He is",
              translation: "Él es/está",
              pronunciation: "/hi ɪz/",
              example: "He is a teacher."
            },
            {
              word: "She is",
              translation: "Ella es/está",
              pronunciation: "/ʃi ɪz/",
              example: "She is very kind."
            }
          ]
        },
        exercises: [
          {
            id: "m1-l3-ex1",
            type: "multiple-choice",
            question: "Complete: 'She ___ a doctor.'",
            options: ["am", "is", "are", "be"],
            correctAnswer: "is",
            feedback: "¡Correcto! Con 'she' usamos 'is'."
          }
        ]
      },
      {
        id: "m1-l4",
        title: "Familia y Relaciones",
        type: "vocabulary",
        content: {
          text: "Vocabulario sobre la familia y relaciones personales",
          vocabulary: [
            {
              word: "Mother",
              translation: "Madre",
              pronunciation: "/ˈmʌðər/",
              example: "My mother is very caring."
            },
            {
              word: "Father",
              translation: "Padre",
              pronunciation: "/ˈfɑðər/",
              example: "My father works in an office."
            },
            {
              word: "Sister",
              translation: "Hermana",
              pronunciation: "/ˈsɪstər/",
              example: "I have one sister."
            },
            {
              word: "Brother",
              translation: "Hermano",
              pronunciation: "/ˈbrʌðər/",
              example: "My brother is younger than me."
            }
          ]
        },
        exercises: [
          {
            id: "m1-l4-ex1",
            type: "multiple-choice",
            question: "Who is your father's wife?",
            options: ["Sister", "Mother", "Daughter", "Aunt"],
            correctAnswer: "Mother",
            feedback: "¡Excelente! La esposa de tu padre es tu madre."
          }
        ]
      },
      {
        id: "m1-l5",
        title: "Colores y Objetos Básicos",
        type: "vocabulary",
        content: {
          text: "Aprende los colores principales y objetos cotidianos",
          vocabulary: [
            {
              word: "Red",
              translation: "Rojo",
              pronunciation: "/rɛd/",
              example: "The apple is red."
            },
            {
              word: "Blue",
              translation: "Azul",
              pronunciation: "/blu/",
              example: "The sky is blue."
            },
            {
              word: "Table",
              translation: "Mesa",
              pronunciation: "/ˈteɪbəl/",
              example: "The book is on the table."
            },
            {
              word: "Chair",
              translation: "Silla",
              pronunciation: "/tʃɛr/",
              example: "Please sit on the chair."
            }
          ]
        },
        exercises: [
          {
            id: "m1-l5-ex1",
            type: "multiple-choice",
            question: "What color is the sun?",
            options: ["Blue", "Green", "Yellow", "Purple"],
            correctAnswer: "Yellow",
            feedback: "¡Correcto! El sol es amarillo (yellow)."
          }
        ]
      },
      {
        id: "m1-l6",
        title: "Días y Meses",
        type: "vocabulary",
        content: {
          text: "Días de la semana, meses del año y fechas básicas",
          vocabulary: [
            {
              word: "Monday",
              translation: "Lunes",
              pronunciation: "/ˈmʌndeɪ/",
              example: "I work on Monday."
            },
            {
              word: "January",
              translation: "Enero",
              pronunciation: "/ˈdʒænjuˌɛri/",
              example: "January is the first month."
            },
            {
              word: "Today",
              translation: "Hoy",
              pronunciation: "/təˈdeɪ/",
              example: "Today is a beautiful day."
            },
            {
              word: "Tomorrow",
              translation: "Mañana",
              pronunciation: "/təˈmɔroʊ/",
              example: "Tomorrow is Tuesday."
            }
          ]
        },
        exercises: [
          {
            id: "m1-l6-ex1",
            type: "multiple-choice",
            question: "What day comes after Monday?",
            options: ["Sunday", "Tuesday", "Wednesday", "Friday"],
            correctAnswer: "Tuesday",
            feedback: "¡Perfecto! Después del lunes viene el martes (Tuesday)."
          }
        ]
      },
      {
        id: "m1-l7",
        title: "Presente Simple - Afirmativo",
        type: "grammar",
        content: {
          text: "Aprende a formar oraciones afirmativas en presente simple",
          grammar: [
            {
              rule: "Presente Simple - Tercera Persona",
              explanation: "Con he, she, it agregamos 's' o 'es' al verbo",
              examples: [
                "I work → He works",
                "You study → She studies", 
                "They play → It plays"
              ]
            }
          ],
          vocabulary: [
            {
              word: "I work",
              translation: "Yo trabajo",
              pronunciation: "/aɪ wɜrk/",
              example: "I work in a hospital."
            },
            {
              word: "She studies",
              translation: "Ella estudia",
              pronunciation: "/ʃi ˈstʌdiz/",
              example: "She studies English every day."
            },
            {
              word: "They live",
              translation: "Ellos viven",
              pronunciation: "/ðeɪ lɪv/",
              example: "They live in New York."
            },
            {
              word: "He plays",
              translation: "Él juega",
              pronunciation: "/hi pleɪz/",
              example: "He plays soccer on weekends."
            }
          ]
        },
        exercises: [
          {
            id: "m1-l7-ex1",
            type: "multiple-choice",
            question: "Complete: 'She ___ to school every day.'",
            options: ["go", "goes", "going", "went"],
            correctAnswer: "goes",
            feedback: "¡Excelente! Con 'she' agregamos 's' al verbo: goes.",
            points: 10
          },
          {
            id: "m1-l7-ex2",
            type: "multiple-choice",
            question: "Complete: 'They ___ in a big house.'",
            options: ["lives", "live", "living", "lived"],
            correctAnswer: "live",
            feedback: "¡Correcto! Con 'they' usamos la forma base del verbo: live.",
            points: 10
          }
        ]
      },
      {
        id: "m1-l8",
        title: "Presente Simple - Negativo e Interrogativo",
        type: "grammar",
        content: {
          text: "Forma negativa e interrogativa del presente simple",
          vocabulary: [
            {
              word: "I don't work",
              translation: "Yo no trabajo",
              pronunciation: "/aɪ doʊnt wɜrk/",
              example: "I don't work on Sundays."
            },
            {
              word: "She doesn't study",
              translation: "Ella no estudia",
              pronunciation: "/ʃi ˈdʌzənt ˈstʌdi/",
              example: "She doesn't study on weekends."
            },
            {
              word: "Do you work?",
              translation: "¿Trabajas?",
              pronunciation: "/du ju wɜrk/",
              example: "Do you work here?"
            },
            {
              word: "Does he play?",
              translation: "¿Él juega?",
              pronunciation: "/dʌz hi pleɪ/",
              example: "Does he play guitar?"
            }
          ]
        },
        exercises: [
          {
            id: "m1-l8-ex1",
            type: "multiple-choice",
            question: "Complete: '___ you speak English?'",
            options: ["Do", "Does", "Are", "Is"],
            correctAnswer: "Do",
            feedback: "¡Correcto! Con 'you' usamos 'Do' para preguntas."
          }
        ]
      },
      {
        id: "m1-l9",
        title: "Describir Personas",
        type: "vocabulary",
        content: {
          text: "Adjetivos para describir apariencia física y personalidad",
          vocabulary: [
            {
              word: "Tall",
              translation: "Alto",
              pronunciation: "/tɔl/",
              example: "My brother is very tall."
            },
            {
              word: "Short",
              translation: "Bajo",
              pronunciation: "/ʃɔrt/",
              example: "She is short and friendly."
            },
            {
              word: "Young",
              translation: "Joven",
              pronunciation: "/jʌŋ/",
              example: "He is young and energetic."
            },
            {
              word: "Kind",
              translation: "Amable",
              pronunciation: "/kaɪnd/",
              example: "My teacher is very kind."
            }
          ]
        },
        exercises: [
          {
            id: "m1-l9-ex1",
            type: "multiple-choice",
            question: "What's the opposite of 'tall'?",
            options: ["Big", "Small", "Short", "Long"],
            correctAnswer: "Short",
            feedback: "¡Perfecto! Lo opuesto de 'tall' (alto) es 'short' (bajo)."
          }
        ]
      },
      {
        id: "m1-l10",
        title: "La Casa y Habitaciones",
        type: "vocabulary",
        content: {
          text: "Vocabulario sobre la casa, habitaciones y muebles",
          vocabulary: [
            {
              word: "Kitchen",
              translation: "Cocina",
              pronunciation: "/ˈkɪtʃən/",
              example: "I cook in the kitchen."
            },
            {
              word: "Bedroom",
              translation: "Dormitorio",
              pronunciation: "/ˈbɛdrum/",
              example: "My bedroom is upstairs."
            },
            {
              word: "Bathroom",
              translation: "Baño",
              pronunciation: "/ˈbæθrum/",
              example: "The bathroom is clean."
            },
            {
              word: "Living room",
              translation: "Sala de estar",
              pronunciation: "/ˈlɪvɪŋ rum/",
              example: "We watch TV in the living room."
            }
          ]
        },
        exercises: [
          {
            id: "m1-l10-ex1",
            type: "multiple-choice",
            question: "Where do you sleep?",
            options: ["Kitchen", "Bathroom", "Bedroom", "Garden"],
            correctAnswer: "Bedroom",
            feedback: "¡Excelente! Dormimos en el dormitorio (bedroom)."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Módulo 2: Comunicación Práctica",
    description: "Mes 2 - Conversaciones cotidianas",
    color: "bg-blue-500",
    requiredScore: 75,
    lessons: [
      {
        id: "m2-l11",
        title: "Comida y Bebidas",
        type: "vocabulary",
        content: {
          text: "Vocabulario sobre comidas, bebidas y preferencias",
          vocabulary: [
            {
              word: "Breakfast",
              translation: "Desayuno",
              pronunciation: "/ˈbrɛkfəst/",
              example: "I eat breakfast at 7 AM."
            },
            {
              word: "Lunch",
              translation: "Almuerzo",
              pronunciation: "/lʌntʃ/",
              example: "We have lunch together."
            },
            {
              word: "I like",
              translation: "Me gusta",
              pronunciation: "/aɪ laɪk/",
              example: "I like pizza very much."
            },
            {
              word: "Apple",
              translation: "Manzana",
              pronunciation: "/ˈæpəl/",
              example: "An apple a day keeps the doctor away."
            }
          ]
        },
        exercises: [
          {
            id: "m2-l11-ex1",
            type: "multiple-choice",
            question: "What do you eat in the morning?",
            options: ["Dinner", "Lunch", "Breakfast", "Snack"],
            correctAnswer: "Breakfast",
            feedback: "¡Correcto! En la mañana comemos el desayuno (breakfast)."
          }
        ]
      },
      {
        id: "m2-l12",
        title: "Ir de Compras",
        type: "vocabulary",
        content: {
          text: "Frases útiles para ir de compras y preguntar precios",
          vocabulary: [
            {
              word: "How much is...?",
              translation: "¿Cuánto cuesta...?",
              pronunciation: "/haʊ mʌtʃ ɪz/",
              example: "How much is this shirt?"
            },
            {
              word: "Can I have...?",
              translation: "¿Puedo tener...?",
              pronunciation: "/kæn aɪ hæv/",
              example: "Can I have a coffee, please?"
            },
            {
              word: "Expensive",
              translation: "Caro",
              pronunciation: "/ɪkˈspɛnsɪv/",
              example: "This car is very expensive."
            },
            {
              word: "Cheap",
              translation: "Barato",
              pronunciation: "/tʃip/",
              example: "These shoes are cheap."
            }
          ]
        },
        exercises: [
          {
            id: "m2-l12-ex1",
            type: "multiple-choice",
            question: "How do you ask for the price?",
            options: ["How much is it?", "What is it?", "Where is it?", "Who is it?"],
            correctAnswer: "How much is it?",
            feedback: "¡Perfecto! 'How much is it?' es la forma correcta de preguntar el precio."
          }
        ]
      },
      {
        id: "m2-l13",
        title: "Transporte y Direcciones",
        type: "vocabulary",
        content: {
          text: "Medios de transporte y cómo pedir direcciones",
          vocabulary: [
            {
              word: "Bus",
              translation: "Autobús",
              pronunciation: "/bʌs/",
              example: "I take the bus to work."
            },
            {
              word: "Where is...?",
              translation: "¿Dónde está...?",
              pronunciation: "/wɛr ɪz/",
              example: "Where is the nearest bank?"
            },
            {
              word: "Turn left",
              translation: "Gira a la izquierda",
              pronunciation: "/tɜrn lɛft/",
              example: "Turn left at the traffic light."
            },
            {
              word: "Straight ahead",
              translation: "Derecho",
              pronunciation: "/streɪt əˈhɛd/",
              example: "Go straight ahead for two blocks."
            }
          ]
        },
        exercises: [
          {
            id: "m2-l13-ex1",
            type: "multiple-choice",
            question: "What's the opposite of 'turn left'?",
            options: ["Go back", "Turn right", "Stop", "Go straight"],
            correctAnswer: "Turn right",
            feedback: "¡Excelente! Lo opuesto de 'turn left' es 'turn right'."
          }
        ]
      },
      {
        id: "m2-l14",
        title: "Tiempo y Clima",
        type: "vocabulary",
        content: {
          text: "Cómo preguntar la hora y hablar del clima",
          vocabulary: [
            {
              word: "What time is it?",
              translation: "¿Qué hora es?",
              pronunciation: "/wʌt taɪm ɪz ɪt/",
              example: "What time is it? It's 3 o'clock."
            },
            {
              word: "It's sunny",
              translation: "Está soleado",
              pronunciation: "/ɪts ˈsʌni/",
              example: "It's sunny today, perfect for a picnic."
            },
            {
              word: "It's raining",
              translation: "Está lloviendo",
              pronunciation: "/ɪts ˈreɪnɪŋ/",
              example: "It's raining, take an umbrella."
            },
            {
              word: "Cold",
              translation: "Frío",
              pronunciation: "/koʊld/",
              example: "It's very cold in winter."
            }
          ]
        },
        exercises: [
          {
            id: "m2-l14-ex1",
            type: "multiple-choice",
            question: "How do you ask about the time?",
            options: ["What day is it?", "What time is it?", "What weather is it?", "What color is it?"],
            correctAnswer: "What time is it?",
            feedback: "¡Correcto! 'What time is it?' es cómo preguntas la hora."
          }
        ]
      },
      {
        id: "m2-l15",
        title: "Presente Continuo",
        type: "grammar",
        content: {
          text: "Aprende a expresar acciones que están ocurriendo ahora",
          vocabulary: [
            {
              word: "I am working",
              translation: "Estoy trabajando",
              pronunciation: "/aɪ æm ˈwɜrkɪŋ/",
              example: "I am working on a project."
            },
            {
              word: "She is studying",
              translation: "Ella está estudiando",
              pronunciation: "/ʃi ɪz ˈstʌdiɪŋ/",
              example: "She is studying for her exam."
            },
            {
              word: "What are you doing?",
              translation: "¿Qué estás haciendo?",
              pronunciation: "/wʌt ɑr ju ˈduɪŋ/",
              example: "What are you doing right now?"
            },
            {
              word: "They are playing",
              translation: "Ellos están jugando",
              pronunciation: "/ðeɪ ɑr ˈpleɪɪŋ/",
              example: "They are playing soccer in the park."
            }
          ]
        },
        exercises: [
          {
            id: "m2-l15-ex1",
            type: "multiple-choice",
            question: "Complete: 'She ___ reading a book.'",
            options: ["am", "is", "are", "be"],
            correctAnswer: "is",
            feedback: "¡Perfecto! Con 'she' usamos 'is' en presente continuo."
          }
        ]
      },
      {
        id: "m2-l16",
        title: "Pasado Simple - Verbos Regulares",
        type: "grammar",
        content: {
          text: "Aprende a hablar de acciones pasadas con verbos regulares",
          vocabulary: [
            {
              word: "Worked",
              translation: "Trabajé/Trabajó",
              pronunciation: "/wɜrkt/",
              example: "I worked late yesterday."
            },
            {
              word: "Studied",
              translation: "Estudié/Estudió",
              pronunciation: "/ˈstʌdid/",
              example: "She studied English last year."
            },
            {
              word: "Yesterday",
              translation: "Ayer",
              pronunciation: "/ˈjɛstərdeɪ/",
              example: "Yesterday was a good day."
            },
            {
              word: "Last week",
              translation: "La semana pasada",
              pronunciation: "/læst wik/",
              example: "I visited my family last week."
            }
          ]
        },
        exercises: [
          {
            id: "m2-l16-ex1",
            type: "multiple-choice",
            question: "What's the past form of 'play'?",
            options: ["Play", "Playing", "Played", "Plays"],
            correctAnswer: "Played",
            feedback: "¡Excelente! El pasado de 'play' es 'played' (verbo regular)."
          }
        ]
      },
      {
        id: "m2-l17",
        title: "Pasado Simple - Verbos Irregulares",
        type: "grammar",
        content: {
          text: "Verbos irregulares más comunes en pasado simple",
          vocabulary: [
            {
              word: "Went",
              translation: "Fui/Fue",
              pronunciation: "/wɛnt/",
              example: "I went to the store yesterday."
            },
            {
              word: "Came",
              translation: "Vine/Vino",
              pronunciation: "/keɪm/",
              example: "She came to visit us."
            },
            {
              word: "Saw",
              translation: "Vi/Vio",
              pronunciation: "/sɔ/",
              example: "I saw a beautiful movie."
            },
            {
              word: "Ate",
              translation: "Comí/Comió",
              pronunciation: "/eɪt/",
              example: "We ate dinner at 7 PM."
            }
          ]
        },
        exercises: [
          {
            id: "m2-l17-ex1",
            type: "multiple-choice",
            question: "What's the past form of 'go'?",
            options: ["Goed", "Went", "Gone", "Going"],
            correctAnswer: "Went",
            feedback: "¡Correcto! El pasado de 'go' es 'went' (verbo irregular)."
          }
        ]
      },
      {
        id: "m2-l18",
        title: "En el Restaurante",
        type: "vocabulary",
        content: {
          text: "Frases útiles para ordenar comida en un restaurante",
          vocabulary: [
            {
              word: "Menu",
              translation: "Menú",
              pronunciation: "/ˈmɛnju/",
              example: "Can I see the menu, please?"
            },
            {
              word: "I'd like...",
              translation: "Me gustaría...",
              pronunciation: "/aɪd laɪk/",
              example: "I'd like a hamburger, please."
            },
            {
              word: "Could I have...?",
              translation: "¿Podría tener...?",
              pronunciation: "/kʊd aɪ hæv/",
              example: "Could I have the bill, please?"
            },
            {
              word: "Bill",
              translation: "Cuenta",
              pronunciation: "/bɪl/",
              example: "The bill, please."
            }
          ]
        },
        exercises: [
          {
            id: "m2-l18-ex1",
            type: "multiple-choice",
            question: "How do you politely order food?",
            options: ["I want", "Give me", "I'd like", "I need"],
            correctAnswer: "I'd like",
            feedback: "¡Perfecto! 'I'd like' es la forma más educada de pedir comida."
          }
        ]
      },
      {
        id: "m2-l19",
        title: "Salud y Cuerpo Humano",
        type: "vocabulary",
        content: {
          text: "Partes del cuerpo y expresiones sobre la salud",
          vocabulary: [
            {
              word: "Head",
              translation: "Cabeza",
              pronunciation: "/hɛd/",
              example: "My head hurts."
            },
            {
              word: "Arms",
              translation: "Brazos",
              pronunciation: "/ɑrmz/",
              example: "Raise your arms up high."
            },
            {
              word: "I have a headache",
              translation: "Tengo dolor de cabeza",
              pronunciation: "/aɪ hæv ə ˈhɛdˌeɪk/",
              example: "I have a headache, I need to rest."
            },
            {
              word: "Doctor",
              translation: "Doctor",
              pronunciation: "/ˈdɑktər/",
              example: "I need to see a doctor."
            }
          ]
        },
        exercises: [
          {
            id: "m2-l19-ex1",
            type: "multiple-choice",
            question: "What do you use to see?",
            options: ["Ears", "Eyes", "Nose", "Mouth"],
            correctAnswer: "Eyes",
            feedback: "¡Excelente! Usamos los ojos (eyes) para ver."
          }
        ]
      },
      {
        id: "m2-l20",
        title: "Hobbies y Tiempo Libre",
        type: "vocabulary",
        content: {
          text: "Actividades de tiempo libre y pasatiempos",
          vocabulary: [
            {
              word: "Reading",
              translation: "Leer",
              pronunciation: "/ˈridɪŋ/",
              example: "I enjoy reading books."
            },
            {
              word: "Swimming",
              translation: "Nadar",
              pronunciation: "/ˈswɪmɪŋ/",
              example: "Swimming is good exercise."
            },
            {
              word: "Watching TV",
              translation: "Ver televisión",
              pronunciation: "/ˈwɑtʃɪŋ ˌtiˈvi/",
              example: "I like watching TV in the evening."
            },
            {
              word: "What do you do in your free time?",
              translation: "¿Qué haces en tu tiempo libre?",
              pronunciation: "/wʌt du ju du ɪn jʊr fri taɪm/",
              example: "What do you do in your free time? I play guitar."
            }
          ]
        },
        exercises: [
          {
            id: "m2-l20-ex1",
            type: "multiple-choice",
            question: "Which is a hobby?",
            options: ["Working", "Sleeping", "Reading", "Eating"],
            correctAnswer: "Reading",
            feedback: "¡Correcto! Leer (reading) es un pasatiempo común."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Módulo 3: Conversación y Fluidez",
    description: "Mes 3 - Fluidez y conversación avanzada",
    color: "bg-purple-500",
    requiredScore: 80,
    lessons: [
      {
        id: "m3-l21",
        title: "Planes Futuros",
        type: "grammar",
        content: {
          text: "Aprende a hablar sobre planes futuros usando 'going to' y 'will'",
          vocabulary: [
            {
              word: "Going to",
              translation: "Voy a",
              pronunciation: "/ˈɡoʊɪŋ tu/",
              example: "I'm going to study tonight."
            },
            {
              word: "Will",
              translation: "Futuro (auxiliar)",
              pronunciation: "/wɪl/",
              example: "I will help you tomorrow."
            },
            {
              word: "Tomorrow",
              translation: "Mañana",
              pronunciation: "/təˈmɔroʊ/",
              example: "Tomorrow will be a great day."
            },
            {
              word: "Next week",
              translation: "La próxima semana",
              pronunciation: "/nɛkst wik/",
              example: "Next week I'm going to travel."
            }
          ]
        },
        exercises: [
          {
            id: "m3-l21-ex1",
            type: "multiple-choice",
            question: "Complete: 'I ___ going to visit my family.'",
            options: ["am", "is", "are", "will"],
            correctAnswer: "am",
            feedback: "¡Perfecto! Con 'I' usamos 'am' en 'going to'."
          }
        ]
      },
      {
        id: "m3-l22",
        title: "Comparativos y Superlativos",
        type: "grammar",
        content: {
          text: "Aprende a comparar cosas y personas",
          vocabulary: [
            {
              word: "Bigger than",
              translation: "Más grande que",
              pronunciation: "/ˈbɪɡər ðæn/",
              example: "This house is bigger than mine."
            },
            {
              word: "The biggest",
              translation: "El más grande",
              pronunciation: "/ðə ˈbɪɡəst/",
              example: "This is the biggest pizza I've ever seen."
            },
            {
              word: "More expensive",
              translation: "Más caro",
              pronunciation: "/mɔr ɪkˈspɛnsɪv/",
              example: "This car is more expensive than that one."
            },
            {
              word: "The most beautiful",
              translation: "La más hermosa",
              pronunciation: "/ðə moʊst ˈbjutəfəl/",
              example: "She is the most beautiful woman I know."
            }
          ]
        },
        exercises: [
          {
            id: "m3-l22-ex1",
            type: "multiple-choice",
            question: "What's the superlative of 'good'?",
            options: ["Gooder", "More good", "The best", "Goodest"],
            correctAnswer: "The best",
            feedback: "¡Excelente! El superlativo de 'good' es 'the best'."
          }
        ]
      },
      {
        id: "m3-l23",
        title: "Experiencias de Vida",
        type: "grammar",
        content: {
          text: "Presente perfecto básico para hablar de experiencias",
          vocabulary: [
            {
              word: "Have you ever...?",
              translation: "¿Alguna vez has...?",
              pronunciation: "/hæv ju ˈɛvər/",
              example: "Have you ever been to Paris?"
            },
            {
              word: "I have been to...",
              translation: "He estado en...",
              pronunciation: "/aɪ hæv bɪn tu/",
              example: "I have been to many countries."
            },
            {
              word: "Never",
              translation: "Nunca",
              pronunciation: "/ˈnɛvər/",
              example: "I have never seen snow."
            },
            {
              word: "Already",
              translation: "Ya",
              pronunciation: "/ɔlˈrɛdi/",
              example: "I have already finished my homework."
            }
          ]
        },
        exercises: [
          {
            id: "m3-l23-ex1",
            type: "multiple-choice",
            question: "Complete: 'I ___ never been to Japan.'",
            options: ["am", "have", "has", "will"],
            correctAnswer: "have",
            feedback: "¡Correcto! Con 'I' usamos 'have' en presente perfecto."
          }
        ]
      },
      {
        id: "m3-l24",
        title: "Trabajo y Profesiones",
        type: "vocabulary",
        content: {
          text: "Vocabulario sobre trabajos y entrevistas laborales",
          vocabulary: [
            {
              word: "Teacher",
              translation: "Maestro/a",
              pronunciation: "/ˈtitʃər/",
              example: "My mother is a teacher."
            },
            {
              word: "Doctor",
              translation: "Doctor/a",
              pronunciation: "/ˈdɑktər/",
              example: "The doctor is very kind."
            },
            {
              word: "What do you do?",
              translation: "¿A qué te dedicas?",
              pronunciation: "/wʌt du ju du/",
              example: "What do you do for work?"
            },
            {
              word: "Engineer",
              translation: "Ingeniero/a",
              pronunciation: "/ˌɛndʒəˈnɪr/",
              example: "He works as an engineer."
            }
          ]
        },
        exercises: [
          {
            id: "m3-l24-ex1",
            type: "multiple-choice",
            question: "Who works in a hospital?",
            options: ["Teacher", "Doctor", "Engineer", "Chef"],
            correctAnswer: "Doctor",
            feedback: "¡Perfecto! Los doctores trabajan en hospitales."
          }
        ]
      },
      {
        id: "m3-l25",
        title: "Viajes y Vacaciones",
        type: "vocabulary",
        content: {
          text: "Vocabulario útil para viajes y vacaciones",
          vocabulary: [
            {
              word: "Airport",
              translation: "Aeropuerto",
              pronunciation: "/ˈɛrˌpɔrt/",
              example: "I'll pick you up at the airport."
            },
            {
              word: "Hotel",
              translation: "Hotel",
              pronunciation: "/hoʊˈtɛl/",
              example: "We stayed at a nice hotel."
            },
            {
              word: "Sightseeing",
              translation: "Turismo",
              pronunciation: "/ˈsaɪtˌsiɪŋ/",
              example: "We went sightseeing in the city."
            },
            {
              word: "Vacation",
              translation: "Vacaciones",
              pronunciation: "/veɪˈkeɪʃən/",
              example: "I'm going on vacation next month."
            }
          ]
        },
        exercises: [
          {
            id: "m3-l25-ex1",
            type: "multiple-choice",
            question: "Where do planes take off and land?",
            options: ["Hotel", "Airport", "Restaurant", "Hospital"],
            correctAnswer: "Airport",
            feedback: "¡Excelente! Los aviones despegan y aterrizan en el aeropuerto."
          }
        ]
      },
      {
        id: "m3-l26",
        title: "Tecnología y Redes Sociales",
        type: "vocabulary",
        content: {
          text: "Vocabulario moderno sobre tecnología y redes sociales",
          vocabulary: [
            {
              word: "Computer",
              translation: "Computadora",
              pronunciation: "/kəmˈpjutər/",
              example: "I work on my computer every day."
            },
            {
              word: "Internet",
              translation: "Internet",
              pronunciation: "/ˈɪntərˌnɛt/",
              example: "The internet is very useful."
            },
            {
              word: "Smartphone",
              translation: "Teléfono inteligente",
              pronunciation: "/ˈsmɑrtˌfoʊn/",
              example: "Everyone has a smartphone nowadays."
            },
            {
              word: "Social media",
              translation: "Redes sociales",
              pronunciation: "/ˈsoʊʃəl ˈmidiə/",
              example: "I don't use social media much."
            }
          ]
        },
        exercises: [
          {
            id: "m3-l26-ex1",
            type: "multiple-choice",
            question: "What do you use to browse the internet?",
            options: ["Television", "Computer", "Radio", "Book"],
            correctAnswer: "Computer",
            feedback: "¡Correcto! Usamos la computadora para navegar en internet."
          }
        ]
      },
      {
        id: "m3-l27",
        title: "Expresar Opiniones",
        type: "vocabulary",
        content: {
          text: "Frases para expresar opiniones y dar razones",
          vocabulary: [
            {
              word: "I think...",
              translation: "Creo que...",
              pronunciation: "/aɪ θɪŋk/",
              example: "I think this movie is great."
            },
            {
              word: "In my opinion...",
              translation: "En mi opinión...",
              pronunciation: "/ɪn maɪ əˈpɪnjən/",
              example: "In my opinion, learning English is important."
            },
            {
              word: "I agree",
              translation: "Estoy de acuerdo",
              pronunciation: "/aɪ əˈɡri/",
              example: "I agree with your idea."
            },
            {
              word: "I disagree",
              translation: "No estoy de acuerdo",
              pronunciation: "/aɪ ˌdɪsəˈɡri/",
              example: "I disagree with that statement."
            }
          ]
        },
        exercises: [
          {
            id: "m3-l27-ex1",
            type: "multiple-choice",
            question: "How do you express agreement?",
            options: ["I disagree", "I think not", "I agree", "I don't know"],
            correctAnswer: "I agree",
            feedback: "¡Perfecto! 'I agree' expresa que estás de acuerdo."
          }
        ]
      },
      {
        id: "m3-l28",
        title: "Problemas y Soluciones",
        type: "vocabulary",
        content: {
          text: "Cómo hablar sobre problemas y ofrecer ayuda",
          vocabulary: [
            {
              word: "What's wrong?",
              translation: "¿Qué pasa?",
              pronunciation: "/wʌts rɔŋ/",
              example: "You look sad. What's wrong?"
            },
            {
              word: "How can I help?",
              translation: "¿Cómo puedo ayudar?",
              pronunciation: "/haʊ kæn aɪ hɛlp/",
              example: "How can I help you with this problem?"
            },
            {
              word: "Problem",
              translation: "Problema",
              pronunciation: "/ˈprɑbləm/",
              example: "We have a big problem to solve."
            },
            {
              word: "Solution",
              translation: "Solución",
              pronunciation: "/səˈluʃən/",
              example: "I found a solution to the problem."
            }
          ]
        },
        exercises: [
          {
            id: "m3-l28-ex1",
            type: "multiple-choice",
            question: "How do you offer help?",
            options: ["What's wrong?", "How can I help?", "I don't care", "Good luck"],
            correctAnswer: "How can I help?",
            feedback: "¡Excelente! 'How can I help?' es una forma amable de ofrecer ayuda."
          }
        ]
      },
      {
        id: "m3-l29",
        title: "Cultura y Tradiciones",
        type: "vocabulary",
        content: {
          text: "Vocabulario sobre cultura, festivales y tradiciones",
          vocabulary: [
            {
              word: "Holiday",
              translation: "Día festivo",
              pronunciation: "/ˈhɑləˌdeɪ/",
              example: "Christmas is my favorite holiday."
            },
            {
              word: "Festival",
              translation: "Festival",
              pronunciation: "/ˈfɛstəvəl/",
              example: "The music festival was amazing."
            },
            {
              word: "Custom",
              translation: "Costumbre",
              pronunciation: "/ˈkʌstəm/",
              example: "It's a custom to shake hands when meeting."
            },
            {
              word: "Tradition",
              translation: "Tradición",
              pronunciation: "/trəˈdɪʃən/",
              example: "Family dinner is a tradition in our house."
            }
          ]
        },
        exercises: [
          {
            id: "m3-l29-ex1",
            type: "multiple-choice",
            question: "What's a special day of celebration?",
            options: ["Custom", "Holiday", "Problem", "Solution"],
            correctAnswer: "Holiday",
            feedback: "¡Correcto! Un 'holiday' es un día especial de celebración."
          }
        ]
      },
      {
        id: "m3-l30",
        title: "Conversación Libre y Repaso",
        type: "speaking",
        content: {
          text: "Práctica de conversación libre y repaso general del curso",
          vocabulary: [
            {
              word: "Role-play",
              translation: "Juego de roles",
              pronunciation: "/roʊl pleɪ/",
              example: "Let's do a role-play about ordering food."
            },
            {
              word: "Debate",
              translation: "Debate",
              pronunciation: "/dɪˈbeɪt/",
              example: "We had an interesting debate about technology."
            },
            {
              word: "Review",
              translation: "Repaso",
              pronunciation: "/rɪˈvju/",
              example: "Let's review what we learned this month."
            },
            {
              word: "Congratulations!",
              translation: "¡Felicidades!",
              pronunciation: "/kənˌɡrætʃəˈleɪʃənz/",
              example: "Congratulations on completing the course!"
            }
          ]
        },
        exercises: [
          {
            id: "m3-l30-ex1",
            type: "multiple-choice",
            question: "What do you say when someone achieves something?",
            options: ["Good luck", "Congratulations", "What's wrong", "I disagree"],
            correctAnswer: "Congratulations",
            feedback: "¡Perfecto! 'Congratulations' se dice cuando alguien logra algo importante. ¡Felicidades por completar el curso!"
          }
        ]
      }
    ]
  }
];