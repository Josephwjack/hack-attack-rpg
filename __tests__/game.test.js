import { changeState, coffee} from "../src/game.js";

describe ("Hacker", () => {

  test("coffee should increase focus by 1", () => {
    let hacker = {stealth: 0, health: 0, int: 0, focus: 0, name: ""};
    expect(coffee(hacker)).toEqual({stealth: 0, health: 0, int: 0, focus: 1, name: ""});

  });
});