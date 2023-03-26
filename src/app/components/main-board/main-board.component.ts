import { Component, OnInit } from '@angular/core';

export interface GameLevel {
  levelName: string;
  gameString: string;
}

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit {

  currentIndex = -1;
  nextIndex = -1;
  currentGameString: string = '';
  levels: GameLevel[] = [];


  constructor() { }

  ngOnInit() {
    this.setLevels();
    const lastGameString = localStorage.getItem('lastGameString');
    this.currentGameString = 
      !!lastGameString ?
      lastGameString :
      this.levels[0].gameString;
  }

  resetGameString(ev: any) {
    this.currentGameString = '';
    setTimeout(() => { 
      this.currentGameString = ev;
      this.saveGame();
    });
  }

  nextGameString(ev: any) {
    const refIndex = this.levels.findIndex(r => r.gameString === ev);
    if (refIndex !== -1) {
        this.currentGameString =
        refIndex === this.levels.length-1 ?
        this.levels[0].gameString:
        this.levels[refIndex+1].gameString;
    }
  }

  previousGameString(ev: any) {
    const refIndex = this.levels.findIndex(r => r.gameString === ev);
    if (refIndex !== -1) {
        this.currentGameString =
        refIndex === 0 ?
        this.levels[this.levels.length-1].gameString:
        this.levels[refIndex-1].gameString;
    }
  }

  changeGame(ev: any) {
    this.currentGameString = ev.target.value;
    this.saveGame();
  }

  saveGame() {
    localStorage.setItem('lastGameString', this.currentGameString);
  }

  setLevels() {
    this.levels = [
      { levelName: '001 - Easy', gameString: '.R.. ..P. .P.. ....' },
      { levelName: '002 - Easy', gameString: '.... Q..R .... B...' },
      { levelName: '003 - Easy', gameString: '..B. .... B... .R..' },
      { levelName: '004 - Easy', gameString: '.... ..N. N... .R..' },
      { levelName: '005 - Easy', gameString: '.... .QK. R... ....' },
      { levelName: '006 - Easy', gameString: '.NR. .... Q... ....' },
      { levelName: '007 - Easy', gameString: 'N... .... R... B..N' },
      { levelName: '008 - Easy', gameString: 'N.N. ..P. .B.. ....' },
      { levelName: '009 - Easy', gameString: '.R.. B.P. .... R...' },
      { levelName: '010 - Easy', gameString: '.K.. .QP. R... ....' },
      { levelName: '011 - Easy', gameString: 'B..R P... BN.. .N..' },
      { levelName: '101 - Medium', gameString: '.NRN .... .B.P R...' },
      { levelName: '102 - Medium', gameString: '..P. BNRN ..P. ....' },
      { levelName: '103 - Medium', gameString: 'N..B K... .NB. P...' },
      { levelName: '104 - Medium', gameString: '..N. ..BP .R.B P...' },
      { levelName: '105 - Medium', gameString: '.P.N N.B. .P.. ..R.' },
      { levelName: '106 - Medium', gameString: '..R. ..K. .PN. B..R' },
      { levelName: '107 - Medium', gameString: '.P.. QR.B .P.. R...' },
      { levelName: '108 - Medium', gameString: '..QP .... N.B. .PR.' },
      { levelName: '109 - Medium', gameString: '..QR RN.. ...B B...' },
      { levelName: '110 - Medium', gameString: 'NP.. .B.. B.N. .P..' },
      { levelName: '111 - Medium', gameString: '.N.B ..BR ...P R...' },
      { levelName: '112 - Medium', gameString: 'RK.. ..QB .B.. P...' },
      { levelName: '113 - Medium', gameString: '.RN. Q..N ..R. B...' },
      { levelName: '114 - Medium', gameString: '.PNP ..Q. ..B. R...' },
      { levelName: '115 - Medium', gameString: 'R... B... ..R. PN.N' },
      { levelName: '116 - Medium', gameString: '..P. BRBN ..N. ....' },
      { levelName: '117 - Medium', gameString: '.BRP .... .QB. R...' },
      { levelName: '118 - Medium', gameString: '.P.. NRBB .... P...' },
      { levelName: '119 - Medium', gameString: '.Q.. .BNB ...N R...' },
      { levelName: '120 - Medium', gameString: 'N... RB.N ..R. B...' },
      { levelName: '121 - Medium', gameString: 'P... ..BQ N.N. ..B.' },
      { levelName: '122 - Medium', gameString: '..PP .N.Q ...B R...' },
      { levelName: '123 - Medium', gameString: '.B.. .R.. ..PN R.N.' },
      { levelName: '124 - Medium', gameString: 'P.P. RQB. .... .B..' },
      { levelName: '125 - Medium', gameString: 'N.PB P..N .R.. ....' },
      { levelName: '126 - Medium', gameString: 'RK.. BN.K BB.. R..N' },
      { levelName: '127 - Medium', gameString: 'RN.. BBP. R..P B..R' },
      { levelName: '128 - Medium', gameString: 'RPP. BB.. Q..K ..R.' },
      { levelName: '201 - Hard', gameString: 'B.K. .N.. ..N. PP.B' },
      { levelName: '202 - Hard', gameString: '..P. ..RN ..NP B.B.' },
      { levelName: '203 - Hard', gameString: '...P RKQ. ..B. .RB.' },
      { levelName: '204 - Hard', gameString: 'B... P.P. RB.N N...' },
      { levelName: '205 - Hard', gameString: '...P ..B. PNBN ..K.' },
      { levelName: '206 - Hard', gameString: '.R.. ...B P... PNBN' },
      { levelName: '207 - Hard', gameString: 'B.R. ...R P.N. .NB.' },
      { levelName: '208 - Hard', gameString: 'N... .... P.P. BRBN' },
      { levelName: '209 - Hard', gameString: 'PB.R ...B NP.. N...' },
      { levelName: '210 - Hard', gameString: 'PBRN .... P... .NB.' },
      { levelName: '211 - Hard', gameString: '.PNP .RQ. R... ..B.' },
      { levelName: '212 - Hard', gameString: 'P... B... R.P. BN.N' },
      { levelName: '213 - Hard', gameString: '.B.. ...R PPQ. .NR.' },
      { levelName: '214 - Hard', gameString: '.P.P R.BB ...N N...' },
      { levelName: '215 - Hard', gameString: '.R.. ...P ..QN B.RN' },
      { levelName: '216 - Hard', gameString: '.P.P N.B. BK.. N...' },
      { levelName: '217 - Hard', gameString: 'NP.. QR.B .... B.P.' },
      { levelName: '218 - Hard', gameString: '...N .P.B BP.N ..R.' },
      { levelName: '219 - Hard', gameString: '..PB .RNN ...B R...' },
      { levelName: '220 - Hard', gameString: 'BN.K ..R. .B.P N...' },
      { levelName: '221 - Hard', gameString: '...B P.R. .BPN N...' },
      { levelName: '222 - Hard', gameString: '..P. B..R R.N. BP..' },
      { levelName: '223 - Hard', gameString: '.B.B ..R. .NPN R...' },
      { levelName: '224 - Hard', gameString: '.P.. .P.. K.B. BR.N' },
      { levelName: '225 - Hard', gameString: 'N.P. BRBN .... .P..' },
      { levelName: '226 - Hard', gameString: '.P.. .... BNRN B.P.' },
      { levelName: '227 - Hard', gameString: '..P. BRPN B... N...' },
      { levelName: '228 - Hard', gameString: '.NP. PQ.. ...R RB..' },
      { levelName: '229 - Hard', gameString: '..BR P..N Q..B .R..' },
      { levelName: '230 - Hard', gameString: 'Q.P. RN.N ...B B...' },
      { levelName: '231 - Hard', gameString: '..PN .N.. .PRB R...' },
      { levelName: '232 - Hard', gameString: '.R.. B.QB R... N.P.' },
      { levelName: '233 - Hard', gameString: '.N.B N..R P..Q ..R.' },
      { levelName: '234 - Hard', gameString: '.P.. N.RB BQ.. ..P.' },
      { levelName: '235 - Hard', gameString: 'B.NN .R.. P..B P...' },
      { levelName: '301 - Expert', gameString: '.P.. .B.. ..NP BRKN' },
      { levelName: '302 - Expert', gameString: '.N.P P... BRB. N.R.' },
      { levelName: '303 - Expert', gameString: '.N.P K.B. B.N. R.P.' },
      { levelName: '304 - Expert', gameString: '.NBN ..PB ..R. P.R.' },
      { levelName: '305 - Expert', gameString: '.PKP ..BB ..NN R...' },
      { levelName: '306 - Expert', gameString: 'PB.. .N.P RBR. .N..' },
      { levelName: '307 - Expert', gameString: 'KN.N ..B. BR.. .PP.' },
      { levelName: '308 - Expert', gameString: 'RP.. N..P BB.N ..R.' },
      { levelName: '309 - Expert', gameString: 'QP.N N.RB B... ..P.' },
      { levelName: '310 - Expert', gameString: 'B.P. B.RN P..N .R..' },
      { levelName: '311 - Expert', gameString: '.R.. R..P B.BN P.N.' },
      { levelName: '312 - Expert', gameString: 'NP.. R... B.P. B.RN' },
      { levelName: '313 - Expert', gameString: 'NNP. QR.. ...R BB..' },
      { levelName: '314 - Expert', gameString: '..P. NBN. ...R PBR.' },
      { levelName: '315 - Expert', gameString: '.R.. N.N. B..P P.RB' },
      { levelName: '316 - Expert', gameString: '.R.. N.R. B.BN P.P.' },
      { levelName: '317 - Expert', gameString: 'B.N. B.PN P.R. .R..' },
      { levelName: '318 - Expert', gameString: '..P. BRNN ..RB P...' },
      { levelName: '319 - Expert', gameString: 'NBP. QR.. ...R BP..' },
      { levelName: '320 - Expert', gameString: '.P.. RBN. ...R PBN.' },
      { levelName: '321 - Expert', gameString: '...P P.N. .KBR B.N.' },
      { levelName: '322 - Expert', gameString: '.P.R ...B RP.N N.B.' },
      { levelName: '323 - Expert', gameString: 'NBP. RQ.. ...R BP..' },
      { levelName: '324 - Expert', gameString: 'P.P. RR.. ...B BN.N' },
      { levelName: '325 - Expert', gameString: '..PR P..R NB.B N...' },
      { levelName: '326 - Expert', gameString: '.RPP .BNB ...N R...' },
      { levelName: '327 - Expert', gameString: '...P BP.. NNR. BR..' },
      { levelName: '328 - Expert', gameString: '.K.P .PRB .N.B R...' },
      { levelName: '329 - Expert', gameString: '.PBN N.R. ..BR P...' },
      { levelName: '330 - Expert', gameString: '...P PBR. .N.. BRN.' },
      { levelName: '331 - Expert', gameString: '..BP .N.K .PRB R...' },
      { levelName: '332 - Expert', gameString: 'R.PP .B.. N.R. .NB.' },
      { levelName: '333 - Expert', gameString: 'N.RB R..B P... .NP.' },
      { levelName: '334 - Expert', gameString: 'B.R. .B.N N.RP P...' },
      { levelName: '335 - Expert', gameString: '...R .R.. PNP. BNB.' },
      { levelName: '336 - Expert', gameString: '..R. RN.P P..B BN..' }
    ];
  }

}