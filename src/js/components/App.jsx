import React from 'react';

class FirstLine extends React.Component {
    render() {
        const monsterList1 = [];
        for (let i = 0; i <= 11; i++) {
            const monsterLine1 = <div className='fifthLine'><div className="first-line enemys"></div></div>
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
        for (let i = 0; i <= 11; i++) {
            const monsterLine2 = <div className='fifthLine'><div className="second-line enemys"></div></div>
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
        for (let i = 0; i <= 11; i++) {
            const monsterLine3 = <div className='fifthLine'><div className="third-line enemys"></div></div>
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
        for (let i = 0; i <= 11; i++) {
            const monsterLine4 = <div className='fifthLine'><div className="four-line enemys"></div></div>
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
        for (let i = 0; i <= 11; i++) {
            const divs = <div className='fifthLine'><div className="fifth-line enemys"></div></div>
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
            left: (~~this.props.marginPlayer2 + 11) + 'px',
            bottom: this.props.shoot + 'px',
            position: 'absolute'
        });


        const shootFire = (<div className="fire" style={stylesFire}></div>);

        const stylesPlayer = ({
            left: this.props.marginPlayer2,
            margin: '0px 0',
            position: 'relative'
        });


        return <div className="player" >
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

class Enemys extends React.Component {
    constructor() {
        super();
        this.state = {
            right: 10,
            left: -60,
            top: 60,
            ifDown: false,
            direction: 'right'
        }
    }

    checkCollision = () => {
        let enemyPos;
        let bulletPos;
        const getBulletPosition = Array.from(document.getElementsByClassName('fire'));

        if(this.props.shoot == true && getBulletPosition.length != 0) {
            getBulletPosition.forEach((el) => {
                bulletPos = el.getBoundingClientRect();
            });

            const getEnemyPosition = Array.from(document.getElementsByClassName('enemys'));

            getEnemyPosition.forEach((el) => {
                enemyPos = el.getBoundingClientRect();
                bulletPos = getBulletPosition[0] && getBulletPosition[0].getBoundingClientRect();

                if (bulletPos.x < enemyPos.x + bulletPos.width &&
                    enemyPos.x + enemyPos.width > bulletPos.x &&
                    enemyPos.y < bulletPos.y + bulletPos.width &&
                    enemyPos.width + enemyPos.y > bulletPos.y) {

                    el.parentNode.removeChild(el);
                    const getFire = document.querySelector('.fire');
                    getFire.parentNode.removeChild(getFire);
                    clearInterval(this.positionIntervalID)
                }
            });
        }
    }
    componentDidMount(){


        const removeID = setInterval(() =>{
            this.checkCollision()
            if(this.state.direction === 'left' && this.state.left >= -90) {
                const top = this.state.left == -90 ? this.state.top + 10 : this.state.top;
                this.setState({
                    direction: this.state.left == -90 ? 'right' : "left",
                    top,
                    left: this.state.left - 10,
                });
            }
            if(this.state.direction === 'right' && this.state.left <= 0) {
                const top = this.state.left == 0 ? this.state.top + 10 : this.state.top;

                 this.setState({
                        direction: this.state.left == 0 ? "left" : "right",
                        top: top,
                        left: this.state.left +10
                  });
            }
            if(this.state.top === 120) {
                clearInterval(removeID)
            }
        },150);
     }

    render() {
        const stylesEnemys = ({
            left: this.state.left+'px',
            top: this.state.top+'px'
        });

        return <div className="enemy" style={stylesEnemys}>
            <FirstLine />
            <SecondLine />
            <ThirdLine />
            <FourthLine />
            <FifthLine />
        </div>
    }
}



class App extends React.Component {
    constructor(){
        super();
        this.state = {
            marginPlayer: 250,
            posY1: 16,
            posYBullet: [],
            shoot: false
        }
    }
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
        } else if(event.keyCode === 32) {
            this.intervalID = setInterval(() =>{
                if(this.state.posY1 === 625){
                    clearInterval(this.intervalID)
                }else {
                    this.setState({
                        shoot: true,
                        posY1: this.state.posY1 += 10,
                    })
                }
            },150);
        }
    };
    render() {
        return <div id="board" onKeyDown={this.handleKeyPress} tabIndex="0">
            <ul className="score">
                <li className="score">SCORE-1: <span>0</span></li>
                <li>TAITO: 0</li>
            </ul>
                <Enemys shoot={this.state.shoot}/>
                <Blocks/>
                <Player
                    marginPlayer2={this.state.marginPlayer}
                    shoot={this.state.posY1}
                    shootY={this.state.posYBullet}
                />
                <Lifes/>
            </div>
    }
}

export {App}