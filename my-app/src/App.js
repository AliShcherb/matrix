import React from 'react';

export default class App extends React.Component {
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    alphabetLength = this.alphabet.length - 1;

    state = {
        size: 3,
        board: [],
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

    generateMatrix() {
        let generatedBoard = [];
        for (let i = 0; i < this.state.size; i++) {
            generatedBoard[i] = [];
            for (let j = 0; j < this.state.size; j++) {
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
        this.state.board = generatedBoard;
    }

    showMatrix() {
        return   <table style={{textAlign: "center"}}>
            <tbody>
            {this.state.board.map((row, i) => (
                <tr id={i}>
                    {row.map((col, j) => (
                        <td id={i + j}>{col}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>;
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
        this.state.size++;
        this.setState({size: this.state.size  })
        this.generateMatrix()
    }

    decrease = () => {
        this.state.size--;
        this.setState({size: this.state.size })
        this.generateMatrix()
    }

    render() {
        if (this.state.board.length == 0) {
            console.log("111");
            this.generateMatrix()
        }
        return (
            <div>
                <h1>{this.showMatrix()}</h1>
                <span>{this.state.count}</span>
                <p><button onClick={this.count}>Считать суму</button></p>
                <p><button onClick={this.increase}>Увеличить матрицу</button></p>
                <p><button onClick={this.decrease}>Уменьшить матрицу</button></p>
            </div>
        );
    }
}



