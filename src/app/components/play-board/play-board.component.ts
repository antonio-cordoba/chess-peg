import { Component, Input, OnInit } from '@angular/core';
//import * as confetti from 'canvas-confetti';

export interface moveStep {
  row: number;
  col: number;
}

@Component({
  selector: 'app-play-board',
  templateUrl: './play-board.component.html',
  styleUrls: ['./play-board.component.css']
})
export class PlayBoardComponent implements OnInit {

  gameState: string[][] = [];
  _gameString: string = '';
  @Input() set gameString(val: string) {
    this.setGameState(val);
  };

  constructor() {
  }

  ngOnInit() {
  }

  setGameState(val: string) {
    this.gameState = []
    this._gameString = val.split(' ').join('');
    for (let r = 0; r <= 3; r++) {
      const rowString = this._gameString.substr(r*4, 4);
      this.gameState[r] = [];
      for (let c = 0; c <= 3; c++) {
        this.gameState[r][c] = rowString.charAt(c);
      }
    }
  }

  checkDrop(ev: any) {
    const mFrom = ev.previousContainer.element.nativeElement.id.split('-');
    const mTo = ev.container.element.nativeElement.id.split('-');
    this.makeMove(
      {row: +mFrom[1], col: +mFrom[2]}, 
      {row: +mTo[1], col: +mTo[2]}
    );
  }

  makeMove(from: moveStep, to: moveStep) {
    const pieceMoved = this.gameState[from.row][from.col];
    const pieceTaken = this.gameState[to.row][to.col];
    if (this.isValidMove(pieceMoved, from, pieceTaken, to)) {
      this.gameState[from.row][from.col] = '.';
      this.gameState[to.row][to.col] = pieceMoved;
      let piecesLeft = 0;
      for (let r = 0; r <= 3; r++) {
        for (let c = 0; c <= 3; c++) {
            if (this.gameState[r][c] !== '.') {
              piecesLeft++;
            }
        }
      }
      if (piecesLeft == 1) {
        this.pop();
      }
    }
  }

  isValidMove(pieceMoved: string, from: moveStep, pieceTaken: string, to: moveStep) {
    // Make sure we are capturing a piece and not a moving into empty spot
    let validMove = pieceTaken !== '.';

    if (validMove) {
      const colDiff = Math.abs(from.col - to.col);
      const rowDiff = Math.abs(from.row - to.row);
      // Check valid move based on piece being moved 
      if (pieceMoved === 'K') {
        validMove = (colDiff <= 1 && rowDiff <= 1);
      }
      if (pieceMoved === 'R') {
        validMove = (from.row === to.row || from.col === to.col) && this.isPathClear(from, to, rowDiff, colDiff);
      }
      if (pieceMoved === 'P') {
        validMove = (from.row - to.row) === 1 && colDiff === 1;
      }
      if (pieceMoved === 'B') {
        validMove = (colDiff === rowDiff) && this.isPathClear(from, to, rowDiff, colDiff);
      }
      if (pieceMoved === 'Q') {
        validMove = (colDiff === rowDiff || from.row === to.row || from.col === to.col) && this.isPathClear(from, to, rowDiff, colDiff);
      }
      if (pieceMoved === 'N') {
        validMove = (colDiff === 2 && rowDiff === 1) || (colDiff === 1 && rowDiff === 2);
      }
    }
    return validMove;
  }

  // Make sure there are no pieces blocking the path between piece moved and piece captured
  isPathClear(from: moveStep, to: moveStep, rowDiff: number, colDiff: number) {
    let pathClear = true;
    // If move is horizontal (R or Q)
    if (rowDiff === 0 && colDiff > 1) {
      const minCol = Math.min(from.col, to.col);
      const maxCol = Math.max(from.col, to.col);
      pathClear = !this.gameState[from.row].some((cell, i) => i > minCol && i < maxCol && cell !== '.');
    }

    // If move is vertical (R or Q)
    if (colDiff === 0 && rowDiff > 1) {
      const minRow = Math.min(from.row, to.row);
      const maxRow = Math.max(from.row, to.row);
      pathClear = !this.gameState.
      some((row, i) => i > minRow && i < maxRow && row[from.col] !== '.');
    }

    // If move is diagonal (B or Q)
    if (rowDiff === colDiff && rowDiff > 1) {
      const rowStep = from.row < to.row ? 1: -1;
      const colStep = from.col < to.col ? 1: -1;
      let c = from.col + colStep;
      for (let r = from.row + rowStep; r !== to.row; r += rowStep) {
        if (this.gameState[r][c] !== '.') {
          pathClear = false;
          break
        }
        c += colStep;
      }
    }
    return pathClear;
  }

  pop () {
    this.confetti({
      shapes: ['square'],
      particleCount: 400,
      spread: 140,
      angle: 270,
      gravity: 0.5,
      origin: {
          y: (-0.05),
          x: (.5)
        }
      });
  }
  
  confetti(args: any) {
    return window['confetti'](args);
  }
}