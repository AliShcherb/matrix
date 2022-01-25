import React from 'react';
import Button from './Button'
import Table from "./Table";

export default class App extends React.Component {
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    alphabetLength = this.alphabet.length - 1;

    state = {
        size: 3,
        board: this.generateMatrix(),
        count : 0
    };

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min)) + min;
    }

    getRandomFloat(min, max) {
        return (Math.random() * (max - min) + min).toFixed(3);
    }

    generateMatrix(newSize = 3) {

      /*  let size = 3;
        if (typeof newSize !== 'undefined') {
            size = newSize;
        } else {
            if (typeof this.state !== 'undefined' && typeof this.state.size !== 'undefined') {
                size = this.state.size;
            }
        }*/

        let generatedBoard = [];
        for (let i = 0; i < newSize; i++) {
            generatedBoard[i] = [];
            for (let j = 0; j < newSize; j++) {
                let type = this.getRandomInt(1, 4);
                let result;
                switch (type) {
                    case 2:
                        result = this.getRandomFloat(0.01, 1);
                        break;

                    case 3:
                        result = this.alphabet[this.getRandomInt(0, this.alphabetLength)];
                        break;

                    default:
                        result = this.getRandomInt(1, 100);
                        break;
                }
                generatedBoard[i][j] = result;
            }
        }

        return generatedBoard;
    }

    count = () => {
        let len = this.state.board.length;
        let sum = 0;
        while(len--) {
            sum += typeof this.state.board[len][len] === "number" ? this.state.board[len][len] : 0;
        }
        this.setState({count : sum })
    }

    increase = () => {
        this.setState({size: this.state.size + 1, board: this.generateMatrix(this.state.size + 1) })
    }

    decrease = () => {
        this.setState({size: this.state.size - 1, board: this.generateMatrix(this.state.size - 1) })
    }

    render() {
        return (
            <div>
                <h1><Table data={this.state.board} /></h1>
                <span>{this.state.count}</span>
                <p><Button onClick={this.increase} text="Увеличить матрицу"/></p>
                <p><Button onClick={this.decrease} text="Уменьшить матрицу"/></p>
                <p><Button onClick={this.count} text="Сума"/></p>
            </div>
        );
    }
}



