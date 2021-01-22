import { AsyncStorage } from "react-native";
export const FLASHCARD_STORAGE_KEY = "flashcards:decks";

// getDecks: return all of the decks along with their titles, questions, and answers.
export const receiveDeckData = () => {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(results =>{
    const parsed = JSON.parse(results);    
    AsyncStorage.clear(parsed);
    return parsed
    
      
  }); 
  
};

export const storeDeckData = (deckvalue) => {
  AsyncStorage.clear(deckvalue);
  return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY,JSON.stringify([deckvalue.id,deckvalue])
  
  );
};

export const storeCard = (deckId,card) => {
 
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(results =>{
   const existingData = JSON.parse(results); 
    existingData[deckId] = {
      ...existingData[deckId],
      cards:[
        ...existingData[deckId].cards,
        {question:card.question,asnwer:card.answer}
      ]

    }
// update existing data with cards information
AsyncStorage.setItem(FLASHCARD_STORAGE_KEY,JSON.stringify(existingData))
  
})
}