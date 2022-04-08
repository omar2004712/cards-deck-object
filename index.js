const deck = {
    cards: [],
    createDeck(){
        this.cards.splice(0)
        const suits = ['spades', 'diamonds', 'hearts', 'clubs'];
        const values = "A,2,3,4,5,6,7,8,9,10,J,Q,K".split(',');
        for(value of values){
            for(suit of suits){
                this.cards.push({value, suit})
            }
        }  
    },
    drawCard(){
        let card = this.cards[Math.floor(Math.random()*this.cards.length)]
        this.cards.splice(this.cards.indexOf(card), 1);
        return card;
    }
    
}