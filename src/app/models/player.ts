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

export class PlayerDto {
    constructor(
      public tag: string,
      public name: string,
      public nameColor: string,
      public icon: { id: number },
      public trophies: number,
      public threevs3Victories: number,
      public bestRoboRumbleTime: number,
      public bestTimeAsBigBrawler: number,
      public brawlers: any[], 
      public club: { tag: string, name: string },
      public duoVictories: number,
      public expLevel: number,
      public expPoints: number,
      public highestPowerPlayPoints: number,
      public highestTrophies: number,
      public isQualifiedFromChampionshipChallenge: boolean,
      public soloVictories: number,
    ) {}
  }

