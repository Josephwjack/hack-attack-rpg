import { hackerState, coffee, vpn, malware, newName} from "../src/game.js";

describe ("Hacker", () => {

  test("coffee should increase focus by 1", () => {
    // let hacker = {stealth: 0, health: 0, int: 0, focus: 0, name: ""};
    expect(hackerState(coffee)).toEqual({stealth: 3, health: 10, int: 3, focus: 3, name: ""});
  });

  test("vpn should increase stealth by 2", () => {
    let hacker = {stealth: 0, health: 0, int: 0, focus: 0, name: ""};
    expect(vpn(hacker)).toEqual({stealth: 2, health: 0, int: 0, focus: 0, name: ""});
  });

  test("malware should increase int by 4", () => {
    let hacker = {stealth: 0, health: 0, int: 0, focus: 0, name: ""};
    expect(malware(hacker)).toEqual({stealth: 0, health: 0, int: 4, focus: 0, name: ""});
  });

  test("newName will implement a name property to a character", () => {
    expect(hackerState(newName("whiteRabbit"))).toEqual({stealth: 3, health: 10, int: 3, focus: 3, name: "whiteRabbit"});
  });

  test("newName will change an existing name of a character", () => {
    expect(hackerState(newName("whiteHat"))).toEqual({stealth: 3, health: 10, int: 3, focus: 3, name: "whiteHat"});
  });

});