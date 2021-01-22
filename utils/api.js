import { AsyncStorage } from "react-native";
export const FLASHCARD_STORAGE_KEY = "flashcards:decks";

// getDecks: return all of the decks along with their titles, questions, and answers.
export const receiveDeckData = () => {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then((results) => {
    const parsed = JSON.parse(results);
    AsyncStorage.clear(parsed);
    if (parsed !== "") {
      return parsed;
    }
  });
};

export const storeDeckData = (deckvalue) => {
  AsyncStorage.clear(deckvalue);
  if (deckvalue !== "") {
    const data = AsyncStorage.mergeItem(
      FLASHCARD_STORAGE_KEY,
      JSON.stringify([deckvalue.id, deckvalue])
    );
    return data;
  }
};

export const storeCard = (deckId, card) => {
  AsyncStorage.clear(deckId);
  AsyncStorage.clear(card);
  if (deckId && card) {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then((results) => {
      const existingData = JSON.parse(results);
      existingData[deckId] = {
        ...existingData[deckId],
        cards: [
          ...existingData[deckId].cards,
          { question: card.question, asnwer: card.answer },
        ],
      };
      // update existing data with cards information
      AsyncStorage.clear(card);
      AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(existingData));
    });
  }
};
