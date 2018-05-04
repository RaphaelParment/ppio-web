import { Player } from './user';

export class Match {
    public id: String;
    public score: String;
    public showSet = false;
    public joueur1Obj: Player;
    public joueur2Obj: Player;
    public winnerId: String;

    constructor(
        public sets?: Set[],
        public validationState?: ValidationStateEnum,
        public player1Id?: String,
        public player2Id?: String,
        public editedById?: String,
    ) {
        this.setScore();
    }

    setScore() {
        if (this.sets && this.sets.length >= 2) {
            let score1 = 0;
            let score2 = 0;
            for (let i = 0; i < this.sets.length; i++) {
                if (this.sets[i].score1 > this.sets[i].score2) {
                    score1 += 1;
                } else {
                    score2 += 1;
                }
            }
            this.score = score1 + ' - ' + score2;
            this.winnerId = score1 > score2 ? this.player1Id : this.player2Id
         }
    }
}

export class Set {
    constructor(
        public id?: number, 
        public gameId?: number,
        public score1 ?: number,
        public score2 ?: number
    ) {}
}

export enum ValidationStateEnum {
    NOT_VALIDATED = 0,
    VALIDATED = 1,
    UNKNOW = 2
}
