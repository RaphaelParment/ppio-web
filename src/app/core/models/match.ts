import { Player } from './user';

export class Match {
    public id: number;
    public score: String;
    public showSet = false;
    public joueur1Obj: Player;
    public joueur2Obj: Player;

    constructor(
        public sets: Set[],
        public isValidated: boolean,
        public joueur1: number,
        public joueur2: number,
    ) {
        this.setScore();
    }

    setScore() {
        if (this.sets.length >= 2) {
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
         }
    }
}

export class Set {
    constructor(
        public id ?: String,
        public score1 ?: number,
        public score2 ?: number
    ) {}
}
