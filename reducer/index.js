import {RECEIVE_DECKS,ADD_DECK,CREATE_CARD} from '../action';

export default function decklist(state={} ,action)
{
    
    switch(action.type)
    {
        case RECEIVE_DECKS:
            return{
                ...state,
                ...action.decklist
            }
        case ADD_DECK:
            const {id,name} = action.data;
            
            return{
                ...state,
                [id]:{
                    id:id,
                    name:name,
                    cards:[]
                }
            }
        case CREATE_CARD :
            const {deckId,question,answer} = action.cardInfo;
            
            return{
                ...state,
                [deckId]:{
                    ...state[deckId],
                    cards:[
                        ...state[deckId].cards,
                        {question:question,answer:answer}
                    ]
                }
            }
        // default :
        // return{
        //     state
        // }
        
    }
}