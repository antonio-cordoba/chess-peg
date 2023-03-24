import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';

import { MainBoardComponent } from './components/main-board/main-board.component';
import { KingComponent } from './components/pieces/king/king.component';
import { QueenComponent } from './components/pieces/queen/queen.component';
import { PawnComponent } from './components/pieces/pawn/pawn.component';
import { BishopComponent } from './components/pieces/bishop/bishop.component';
import { KnightComponent } from './components/pieces/knight/knight.component';
import { RookComponent } from './components/pieces/rook/rook.component';
import { PlayBoardComponent } from './components/play-board/play-board.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    DragDropModule,
    MatIconModule,
    MatButtonModule
    ],
  declarations: [ 
    AppComponent, 
    MainBoardComponent,
    KingComponent,
    QueenComponent,
    PawnComponent,
    BishopComponent,
    KnightComponent,
    RookComponent,
    PlayBoardComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
