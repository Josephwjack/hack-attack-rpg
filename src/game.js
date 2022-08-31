export const initialHackerState = { stealth: 3, health: 10, int: 3, focus: 2, name: ""};

export const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

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


//Function Factory below
//Properties - stealth, health, intelligence (int), focus, name 
//Power up functions - (coffee(increase focus, decrease health if possible), redbull power up, adrenaline injection, vpn(stealth), malware (increase intelligence, disable comms, brute force (increase intelligence damage stealth) )

export const coffee = changeState("focus")(1);
export const vpn = changeState("stealth")(2);
export const malware = changeState("int")(4);



// export const newName = nameChange("name");