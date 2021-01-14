export const   RECEIVE_DECKS = "RECEIVE_DECK";
export const    ADD_DECK = "ADD_DECK";
export const    ADD_QUESTIONS = "ADD_QUESTIONS";

export const receiveDeck = (decks)=>{
    return{
        type:RECEIVE_DECKS,
        decklist,
    }

}
export const addDeck = (deck)=>{
    return{
        type:ADD_DECK,
        deck,
    }

}
export const addQuestions = (questions,answer,deckId) => {
    return{
        type:ADD_QUESTIONS,
        questionInfo :{
            questions,
            answer,
            deckId
        }
    }

}