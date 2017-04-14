import Position, { XPos, YPos } from './lib/Position';
import Game from './lib/game';

const game = new Game();

const moves: [[XPos, YPos],[XPos, YPos]][] = [
    [[1,2],[1,3]],
    [[1,3],[1,4]],
    [[1,4],[1,5]],
    [[1,5],[1,6]],
    [[1,6],[2,7]],
];

game.Board.display();
for(const [[x1, y1], [x2, y2]] of moves) {
    game.move(new Position(x1, y1), new Position(x2,y2));
    console.log(game.Log.last.join(' '));
    game.Board.display();
}

