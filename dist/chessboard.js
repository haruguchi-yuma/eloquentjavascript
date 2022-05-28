"use strict";
const chessBoard = (size = 8) => {
    const str = ' #'.repeat(size);
    for (let i = 0; i < size; i++) {
        console.log(str.slice(i, size + i));
    }
};
{ //別解
    const chessBoard = (size) => {
        let str = '';
        for (let i = 1; i <= size; i++) {
            for (let j = 1; j <= size; j++) {
                str += (i + j) % 2 === 0 ? ' ' : '#';
                if (j === size)
                    str += '\n';
            }
        }
        console.log(str);
    };
    chessBoard(8);
}
