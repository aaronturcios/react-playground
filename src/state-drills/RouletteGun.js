import React from 'react';

class RouletteGun {
    state = {
        chamber: null,
        spinningTheChamber: false,
        
    }


handleButtonClick = () => {
    this.SetState({spinningTheChamber: true,});
    this.timeout = setTimeout (() => {
        
    })

}

displayEvent() {
     if (this.state.spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ...'
    } else if (this.state.chamber === this.bulletInChamber) {
      return 'BANG!!'
    } else {
      return "you're safe!"
    }
}

  render() {
    return (
      <div>
       <p>{this.displayEvent()} </p>
       <button onClick={this.handleButtonClick}>
         Pull the Trigger!  
       </button>
      </div>
    );

  
    };

};

export default RouletteGun;