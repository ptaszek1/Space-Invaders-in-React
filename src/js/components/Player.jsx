import React from 'react';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bullets: [],
            activeBullets : [],
            posYShoot: [],
            isJustCreated: false
        }
    }
    componentDidMount= () => {
        let counter = 0;
        setInterval( () => { //przesuwanie shootow
            counter++;

            const newA = [...this.state.bullets];
            newA.forEach( (elem,i) => {
                elem.bottom = (parseInt(newA[i].bottom)  + 10) + "px"
            })


            this.setState({
                activeBullets: newA,
                isJustCreated: counter % 3 === 0 ? false : true
            })
        }, 75)
    }

    componentWillReceiveProps(nextProps) {

        if(nextProps.newBullet == true) { //tworzenie nowego
            const bullet = {
                left: nextProps.shootY,
                bottom: "0px"
            }
            // if(this.state.isJustCreated === false) {
                this.setState({
                    bullets: [...this.state.bullets, bullet],
                    isJustCreated: true,

                })
            // }
        }
    }

    render() {
        const stylesPlayer = ({
            left: this.props.marginPlayer2,
            margin: '10px 0px',
            position: 'absolute'
        });

        const fires = this.state.activeBullets && this.state.activeBullets.map((elem, i) => {
            const stylesFire = ({
                width: '2px',
                height: '10px',
                backgroundColor: 'white',
                left: elem.left,
                bottom: elem.bottom,
                position: 'absolute'
            });
            return <div className="fire" style={stylesFire}></div>
        })


        return <div className="player">
            <div className="player-move" style={stylesPlayer}></div>
            {fires}
        </div>
    }
}
export {Player}