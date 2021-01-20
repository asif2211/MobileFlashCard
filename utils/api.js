import { AsyncStorage } from "react-native";
export const FLASHCARD_STORAGE_KEY = "flashcards:decks";

// getDecks: return all of the decks along with their titles, questions, and answers.
export const receiveDeckData = () => {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(results =>{
    const parsed = JSON.parse(results);    
  
    return parsed
  }); 
  
};

export const storeDeckData = (deckvalue) => {
  alert(deckvalue.id);
  alert(deckvalue.name)
  return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY,JSON.stringify([deckvalue.id,deckvalue])
  );
};

export const storeCard = (id,card) => {


  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(results =>{
   const existingData = JSON.parse(results); 
    existingData[id] = {
      ...existingData[id],
      cards:[
        ...existingData[id].cards,
        {question:card.question,asnwer:card.answer}
      ]

    }
// update existing data with cards information
AsyncStorage.setItem(FLASHCARD_STORAGE_KEY,JSON.stringify(existingData))
  
})
}