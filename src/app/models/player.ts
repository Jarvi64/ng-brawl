export class PlayersListDto{
    constructor(public tag:string,
        public name:string,
        public role:string,
        public trophies:number,
        public nameColor:string,
        ){}
}

export class ClubInfoDto{
    constructor(public tag:string,
        public name:string,
        public description:string,
        public trophies:number,
        public requiredTrophies:number,
        public members:PlayersListDto[]
        ){}
}

