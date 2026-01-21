
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

// getGeminiResponse interacts with the GenAI model to provide professional assistance based on chat history.
export const getGeminiResponse = async (userMessage: string, chatHistory: Message[]) => {
  // Always initialize GoogleGenAI with the API key from process.env.API_KEY as per guidelines.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const formattedHistory = chatHistory.map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }]
  }));

  try {
    // Use ai.models.generateContent directly with the model and contents as required.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...formattedHistory,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: `Είσαι ένας επαγγελματίας ψηφιακός βοηθός για έναν σύμβουλο/επαγγελματία. 
        Ο στόχος σου είναι να βοηθήσεις τους πελάτες να καταλάβουν τι υπηρεσίες προσφέρουμε και να τους ενθαρρύνεις να κλείσουν ένα ραντεβού. 
        Να είσαι ευγενικός, συνοπτικός και επαγγελματικός. Μίλα στα Ελληνικά. 
        Αν σε ρωτήσουν για ραντεβού, πες τους ότι μπορούν να το κάνουν απευθείας από το ημερολόγιο παρακάτω.`,
        temperature: 0.7,
      }
    });

    // Access the .text property directly instead of calling it as a function.
    return response.text || "Συγγνώμη, δεν μπόρεσα να επεξεργαστώ το αίτημά σας.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Παρουσιάστηκε σφάλμα κατά την επικοινωνία με τον βοηθό.";
  }
};
