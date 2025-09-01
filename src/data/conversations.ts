export interface Conversation {
  id: string;
  title: string;
  scenario: string;
  participants: string[];
  dialogue: ConversationLine[];
  vocabulary: string[];
  practiceQuestions: string[];
}

export interface ConversationLine {
  speaker: string;
  text: string;
  translation: string;
}

export const conversations: Conversation[] = [
  {
    id: "conv-1",
    title: "Meeting Someone New",
    scenario: "Two people meeting for the first time at a coffee shop",
    participants: ["Sarah", "Miguel"],
    dialogue: [
      {
        speaker: "Sarah",
        text: "Hi! Are you Miguel?",
        translation: "¡Hola! ¿Eres Miguel?"
      },
      {
        speaker: "Miguel",
        text: "Yes, I am. You must be Sarah. Nice to meet you!",
        translation: "Sí, soy yo. Tú debes ser Sarah. ¡Mucho gusto!"
      },
      {
        speaker: "Sarah",
        text: "Nice to meet you too! How are you today?",
        translation: "¡Mucho gusto también! ¿Cómo estás hoy?"
      },
      {
        speaker: "Miguel",
        text: "I'm doing well, thank you. How about you?",
        translation: "Estoy bien, gracias. ¿Y tú?"
      },
      {
        speaker: "Sarah",
        text: "I'm great! Where are you from?",
        translation: "¡Estoy genial! ¿De dónde eres?"
      },
      {
        speaker: "Miguel",
        text: "I'm from Mexico. What about you?",
        translation: "Soy de México. ¿Y tú?"
      }
    ],
    vocabulary: ["meet", "nice", "today", "well", "great", "from"],
    practiceQuestions: [
      "How do you introduce yourself?",
      "What do you say when meeting someone new?",
      "How do you ask where someone is from?"
    ]
  },
  {
    id: "conv-2",
    title: "At the Restaurant",
    scenario: "Ordering food at a restaurant",
    participants: ["Customer", "Waiter"],
    dialogue: [
      {
        speaker: "Waiter",
        text: "Good evening! Welcome to our restaurant. How many people?",
        translation: "¡Buenas noches! Bienvenidos a nuestro restaurante. ¿Cuántas personas?"
      },
      {
        speaker: "Customer",
        text: "Just two, please.",
        translation: "Solo dos, por favor."
      },
      {
        speaker: "Waiter",
        text: "Right this way. Here's your table. Can I get you something to drink?",
        translation: "Por aquí, por favor. Aquí está su mesa. ¿Puedo traerles algo de beber?"
      },
      {
        speaker: "Customer",
        text: "I'd like a water, please. And could I see the menu?",
        translation: "Me gustaría un agua, por favor. ¿Y podría ver el menú?"
      },
      {
        speaker: "Waiter",
        text: "Of course! Here's the menu. I'll be back in a few minutes.",
        translation: "¡Por supuesto! Aquí está el menú. Regreso en unos minutos."
      }
    ],
    vocabulary: ["restaurant", "table", "drink", "menu", "water", "minutes"],
    practiceQuestions: [
      "How do you ask for a table?",
      "What do you say when ordering drinks?",
      "How do you ask to see the menu?"
    ]
  },
  {
    id: "conv-3",
    title: "Asking for Directions",
    scenario: "Tourist asking for directions to the museum",
    participants: ["Tourist", "Local"],
    dialogue: [
      {
        speaker: "Tourist",
        text: "Excuse me, could you help me? I'm looking for the art museum.",
        translation: "Disculpe, ¿podría ayudarme? Estoy buscando el museo de arte."
      },
      {
        speaker: "Local",
        text: "Sure! It's not far from here. Go straight for two blocks.",
        translation: "¡Claro! No está lejos de aquí. Vaya derecho por dos cuadras."
      },
      {
        speaker: "Tourist",
        text: "Okay, straight for two blocks. Then what?",
        translation: "Bien, derecho por dos cuadras. ¿Y después qué?"
      },
      {
        speaker: "Local",
        text: "Then turn left at the traffic light. The museum will be on your right.",
        translation: "Después gire a la izquierda en el semáforo. El museo estará a su derecha."
      },
      {
        speaker: "Tourist",
        text: "Thank you so much! How long does it take to walk there?",
        translation: "¡Muchas gracias! ¿Cuánto tiempo toma caminar hasta allá?"
      },
      {
        speaker: "Local",
        text: "About 10 minutes. You can't miss it!",
        translation: "Como 10 minutos. ¡No se puede perder!"
      }
    ],
    vocabulary: ["directions", "museum", "straight", "blocks", "turn", "traffic light"],
    practiceQuestions: [
      "How do you ask for directions politely?",
      "What do you say when someone gives you directions?",
      "How do you ask about walking time?"
    ]
  }
];