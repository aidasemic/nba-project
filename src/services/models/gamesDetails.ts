export interface GamesDetailsResponse {
  id: number;
  ast: number;
  blk: number;
  dreb: number;
  fg3_pct: null;
  fg3a: null;
  fg3m: null;
  fg_pct: number;
  fga: number;
  fgm: number;
  ft_pct: number;
  fta: number;
  ftm: number;
  game: Game;
  min: string;
  oreb: number;
  pf: number;
  player: Player;
  pts: number;
  reb: number;
  stl: number;
  team: Team;
  turnover: null;
}

export interface GameDetails {
  data: GamesDetailsResponse[];
}

export interface Game {
  id: number;
  date: Date;
  home_team_id: number;
  home_team_score: number;
  period: number;
  postseason: boolean;
  season: number;
  status: string;
  time: null;
  visitor_team_id: number;
  visitor_team_score: number;
}

export interface Player {
  id: number;
  first_name: string;
  height_feet: null;
  height_inches: null;
  last_name: string;
  position: string;
  team_id: number;
  weight_pounds: null;
}

export interface Team {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}
