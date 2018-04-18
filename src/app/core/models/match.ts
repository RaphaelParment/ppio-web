import { Player } from './user';

export class Match {
    constructor(
        public id: String,
        public set: Set[],
        public isValidated: String,
        public score: String,
        public joueur1: Player,
        public joueur2: Player,
    ) {}
}

export class Set {
    constructor(
        public id: String,
        public score1: String,
        public score2: String
    ) {}
}
