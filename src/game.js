export const initialHackerState = { stealth: 3, health: 10, int: 3, focus: 2, name: ""};
export const initialCyborgState = { health: 5, antiVirus: 8, power: 7};

export const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const cyborgState = storeState(initialCyborgState);
export const hackerState = storeState(initialHackerState);
export const stateControl = storeState();

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value 
    });
  };
};

//Assign character a name property
export const nameChange = (nameProp) => {
  return (value) => {
    return (state) => ({
      ...state,
      [nameProp] : value
    });
  };
};


//Function Factory 

//Hacker Power Up Functions
export const coffee = changeState("focus")(1);
export const redbull = changeState("health")(-3);
export const adrenalineInjection = changeState("focus")(4);
export const vpn = changeState("stealth")(2);
export const medPack = changeState("health")(5);
export const fullStackCourse = changeState("int")(4);
export const cyborgAttack = changeState("health")(-4);
// Cyborg changeStates
export const emp = changeState("power")(-3);
export const malware = changeState("antiVirus")(-3);
export const fireWall = changeState("antiVirus")(3);
export const batteryPack = changeState("power")(3);
export const theWorm = changeState("health")(-5);
export const bruteForce = changeState("antiVirus")(-1);

//Add Name
export const newName = nameChange("name");