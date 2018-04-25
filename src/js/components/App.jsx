import React from 'react';

class FirstLine extends React.Component {
    render() {
        const monsterList1 = [];
        for (let i = 0; i < 11; i++) {
            const monsterLine1 = <div className="first-line"></div>
            monsterList1.push(monsterLine1)
        }
        return <div className="line-one">
            {monsterList1}
        </div>
    }
}

class SecondLine extends React.Component {
    render() {
        const monsterList2 = [];
        for (let i = 0; i < 11; i++) {
            const monsterLine2 = <div className="second-line"></div>
            monsterList2.push(monsterLine2)
        }
        return <div className="line-two">
            {monsterList2}
        </div>
    }
}

class ThirdLine extends React.Component {
    render() {
        const monsterList3 = [];
        for (let i = 0; i < 11; i++) {
            const monsterLine3 = <div className="third-line"></div>
            monsterList3.push(monsterLine3)
        }
        return <div className="line-three">
            {monsterList3}
        </div>
    }
}

class FourthLine extends React.Component {
    render() {
        const monsterList4 = [];
        for (let i = 0; i < 11; i++) {
            const monsterLine4 = <div className="four-line"></div>
            monsterList4.push(monsterLine4)
        }
        return <div className="line-four">
            {monsterList4}
        </div>
    }
}

class FifthLine extends React.Component {
    render() {
        const lista = [];
        for (let i = 0; i < 11; i++) {
            const divs = <div className="fifth-line"></div>
            lista.push(divs)
        }
        return <div className="fifth-four">
            {lista}
        </div>
    }
}

class Blocks extends React.Component {
    render() {
        return <div className="blocks">
            <div className="block-shots"></div>
            <div className="block-shots"></div>
            <div className="block-shots"></div>
            <div className="block-shots"></div>
        </div>
    }
}


class Player extends React.Component {
    render() {
        const stylesFire = ({
            width: '2px',
            height: '10px',
            backgroundColor: 'white',
            left: (~~this.props.marginPlayer2 + 12) + 'px',
            bottom: this.props.shoot + 'px',
            position: 'absolute'
        });


        const shootFire = (<div className="fire" style={stylesFire}></div>);

        const stylesPlayer = ({
            left: this.props.marginPlayer2,
            margin: '10px 0',
            position: 'absolute'
        });
        console.log(this.props.marginPlayer2);


        return <div className="player">
            <div className="player-move" style={stylesPlayer}></div>
            {shootFire}
        </div>
    }
}

class Lifes extends React.Component {
    render() {
        return <div className="lifes" onKeyPress={this.CreateBullet}>
            <div>Lifes: <div className="lifes-count"></div>
                <div className="lifes-count"></div>
                <div className="lifes-count"></div>
            </div>
        </div>
    }
}



class App extends React.Component {
    constructor(){
        super();
        this.state = {
            marginPlayer: 250,
            posY1: 150,
            bullet: this.CreateBullet
        }
    }

    CreateBullet = (event) => {
        if(event.keyCode === 32){
            console.log('zrob pocisk')
            return <div className="fire" style={stylesFire}></div>
        }
    };
    handleKeyPress = (event) => {
        if(event.keyCode === 68){
            if(this.state.marginPlayer === 650) {
                this.setState({
                    marginPlayer: this.state.marginPlayer = 650,
                })
            } else {
                this.setState({
                    marginPlayer: this.state.marginPlayer += 10,
                })
            }
        } else if(event.keyCode === 65){
            if(this.state.marginPlayer === 250){
                this.setState({
                    marginPlayer: this.state.marginPlayer = 250,
                })
            } else {
                this.setState({
                    marginPlayer: this.state.marginPlayer -= 10,
                })
            }
        } else if(event.keyCode === 32) { // strzelaj
            const intervalID = setInterval(() =>{
                if(this.state.posY1 === 550){
                    clearInterval(intervalID)
                }else {
                    this.setState({
                        posY1: this.state.posY1 += 10,
                    })
                }
            },35);
        }
    };
    render() {
        return <div id="board" onKeyDown={this.handleKeyPress} tabIndex="0">
            <ul className="score">
                <li >SCORE-1: 0</li>
                <li>TAITO: 0</li>
            </ul>
            <div className="enemy">
                <FirstLine />
                <SecondLine />
                <ThirdLine />
                <FourthLine />
                <FifthLine />
            </div>
                <Blocks/>
                <Player
                    marginPlayer2={this.state.marginPlayer}
                    shoot={this.state.posY1}
                    createBullets={this.state.bullet}
                />
                <Lifes/>
            </div>
    }
}

export {App}