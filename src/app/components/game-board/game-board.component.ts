import { Component, OnInit } from '@angular/core';

export interface GameLevel {
  levelName: string;
  gameString: string;
}

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  currentIndex = -1;
  nextIndex = -1;
  currentGameString: string = '';
  levels: GameLevel[] = [];
  options: any = {};

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
        this.saveGame();
    }
  }

  previousGameString(ev: any) {
    const refIndex = this.levels.findIndex(r => r.gameString === ev);
    if (refIndex !== -1) {
        this.currentGameString =
        refIndex === 0 ?
        this.levels[this.levels.length-1].gameString:
        this.levels[refIndex-1].gameString;
        this.saveGame();
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
      { levelName: '012 - Easy', gameString: '...P ..P. .P.. ..R.' },
      { levelName: '013 - Easy', gameString: '.P.P P... ...P Q.P.' },
      { levelName: '014 - Easy', gameString: '..P. .Q.. ...P N...' },
      { levelName: '015 - Easy', gameString: '..N. .B.. P... ..N.' },
      { levelName: '016 - Easy', gameString: '.N.. R.P. .P.. ....' },
      { levelName: '017 - Easy', gameString: '..P. .P.P P.P. .P.P' },
      { levelName: '018 - Easy', gameString: '.... .RPP ..P. ...P' },
      { levelName: '019 - Easy', gameString: '..B. .B.B B.B. .BR.' },
      { levelName: '020 - Easy', gameString: '...N P..P R... .B..' },
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
      { levelName: '129 - Medium', gameString: '.B.. ..Q. ...B R...' },
      { levelName: '130 - Medium', gameString: '..R. NP.N .BB. ...P' },
      { levelName: '131 - Medium', gameString: '..B. ...B ..QP NR..' },
      { levelName: '132 - Medium', gameString: '..RQ R... ..NP B...' },
      { levelName: '133 - Medium', gameString: '..R. RP.. BK.. ..B.' },
      { levelName: '134 - Medium', gameString: '..R. N..P ..P. NR..' },
      { levelName: '135 - Medium', gameString: '.N.. .BPB P.N. ....' },
      { levelName: '136 - Medium', gameString: '..N. .B.. PBN. P...' },
      { levelName: '137 - Medium', gameString: '.R.. ..P. ..B. NR.N' },
      { levelName: '138 - Medium', gameString: 'N.P. ..NP N..R .B..' },
      { levelName: '139 - Medium', gameString: '..QN P... ..P. ..BP' },
      { levelName: '140 - Medium', gameString: '...P ..N. R.KP N...' },
      { levelName: '141 - Medium', gameString: '.... R.PP B... .BK.' },
      { levelName: '142 - Medium', gameString: 'P... R.BN P... ..P.' },
      { levelName: '143 - Medium', gameString: '..N. Q.KP R... ...B' },
      { levelName: '144 - Medium', gameString: '..PP ..K. .R.. .NP.' },
      { levelName: '145 - Medium', gameString: '.... NNRP ...B ..P.' },
      { levelName: '146 - Medium', gameString: '.Q.. N..P ..P. R...' },
      { levelName: '147 - Medium', gameString: '...B ...R ..PN B...' },
      { levelName: '148 - Medium', gameString: '.... ...K ..QN N.B.' },
      { levelName: '149 - Medium', gameString: '..P. NQR. .... ...B' },
      { levelName: '150 - Medium', gameString: '..P. NP.. ..BR .R..' },
      { levelName: '151 - Medium', gameString: '.R.K .B.. .B.. N...' },
      { levelName: '152 - Medium', gameString: '.... .PNR ...B P.N.' },
      { levelName: '153 - Medium', gameString: 'P... .B.. ...N RN.P' },
      { levelName: '154 - Medium', gameString: 'P... R.B. .R.. ...N' },
      { levelName: '155 - Medium', gameString: '.P.N Q... ..R. ..K.' },
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
      { levelName: '236 - Hard', gameString: '.B.. N.PB ..KR .R..' },
      { levelName: '237 - Hard', gameString: '...B ...R RNN. PP..' },
      { levelName: '238 - Hard', gameString: 'N... .N.. PRR. .BBP' },
      { levelName: '239 - Hard', gameString: '..NB .N.P PR.. B...' },
      { levelName: '240 - Hard', gameString: '..BN .RBP N... .P..' },
      { levelName: '241 - Hard', gameString: 'R... .P.B .NRB .BN.' },
      { levelName: '242 - Hard', gameString: 'N.PR ..N. ...B .BP.' },
      { levelName: '243 - Hard', gameString: '...R .RP. B..N .PB.' },
      { levelName: '244 - Hard', gameString: '...R RBP. K... NPB.' },
      { levelName: '245 - Hard', gameString: '..PB .PN. .... NR.B' },
      { levelName: '246 - Hard', gameString: '.NN. P.RP ...B B...' },
      { levelName: '247 - Hard', gameString: '..R. P..R NB.B .N.P' },
      { levelName: '248 - Hard', gameString: '.NBN .BPR ...P R...' },
      { levelName: '249 - Hard', gameString: 'R..R .PN. P..N BP..' },
      { levelName: '250 - Hard', gameString: '..P. .R.N ..PN PP..' },
      { levelName: '251 - Hard', gameString: 'P... .PRP ..K. RPB.' },
      { levelName: '252 - Hard', gameString: 'P..R .B.P .NN. P..P' },
      { levelName: '253 - Hard', gameString: 'B.P. ..N. BN.. ....' },
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
      { levelName: '336 - Expert', gameString: '..R. RN.P P..B BN..' },
      { levelName: '337 - Expert', gameString: '..PR .NN. ..P. BB.P' },
      { levelName: '338 - Expert', gameString: '.NN. .RR. P..B P..B' },
      { levelName: '339 - Expert', gameString: '...R B.P. BRN. .NP.' },
      { levelName: '340 - Expert', gameString: '..P. .RR. NN.. BP.B' },
      { levelName: '341 - Expert', gameString: '..NB .BPN .RP. R...' },
      { levelName: '342 - Expert', gameString: '.BNN .BPP .R.. R...' },
      { levelName: '343 - Expert', gameString: '.RP. BR.P NB.. N...' },
      { levelName: '344 - Expert', gameString: '.PN. .PN. B..B R..R' },
      { levelName: '345 - Expert', gameString: '.NB. ..BP RR.P N...' }
    ];
  }

}
