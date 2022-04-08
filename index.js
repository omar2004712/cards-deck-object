const deck = {
    cards: [],
    isShuffled: false,
    createDeck(){
        this.isShuffled = false;
        this.cards.splice(0)
        const suits = ['spades', 'diamonds', 'hearts', 'clubs'];
        const values = "A,2,3,4,5,6,7,8,9,10,J,Q,K".split(',');
        for(value of values){
            for(suit of suits){
                this.cards.push({value, suit})
            }
        }
        console.log("A deck has been created.")
    },
    drawCard(){
        let card
        if(this.isShuffled){
            card = this.cards[Math.floor(Math.random()*this.cards.length)]
            this.cards.splice(this.cards.indexOf(card), 1);
        }
        else{
            card = this.cards.pop();
        }
        return card;
    },
    shuffle(){
        this.isShuffled = true;
        console.log("The deck has been shuffled.")
    }
}