export const   RECEIVE_DECKS = "RECEIVE_DECK";
export const    ADD_DECK = "ADD_DECK";
export const    CREATE_CARD = "CREATE_CARD";

export function receiveDeck(decklist){
    return{
        type:RECEIVE_DECKS,
        decklist,
    }

}
export const add_Deck = (id, name) => ({
    type: ADD_DECK,
    data: {
    id,
    name
    }
  });
export  function createCard(deckId,question,answer) {
    
    return{
        type:CREATE_CARD,
        cardInfo :{
            deckId,
            question,
            answer
            
        }
    }

}