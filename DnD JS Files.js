//DnD Random Encounter Improver

function randomEncGenerator(id) {
    if (id === 1) {
        return ('Execute the code as empty')
    };
    if (id === 'Vampire Lord') {
        return rollDie = setInterval(() => {
            const randomNumber = Math.floor(Math.random() * 12) + 1; {
                if (randomNumber === 1) {
                    console.log('Summon 4d4 Giant Bats');
                }
                if (randomNumber === 2) {
                    console.log('Make a Melee Attack');
                }
                if (randomNumber === 3) {
                    console.log('Use a Legendary Action');
                }
                if (randomNumber === 4) {
                    console.log('Heal 50 hitpoints');
                }
                if (randomNumber === 5) {
                    console.log('Summon 1d8 Vampire Spawn');
                }
                if (randomNumber === 6) {
                    console.log('Cast a Spell');
                }
                if (randomNumber === 7) {
                    console.log('Teleport');
                }
                if (randomNumber === 8) {
                    console.log('Regain a Legendary Resistance');
                }
                if (randomNumber === 9) {
                    console.log('Summon 3d4 Wolves');
                }
                if (randomNumber === 10) {
                    console.log('Heal 100 hitpoints');
                }
                if (randomNumber === 11) {
                    console.log('Regain an Expent Spell or Spell Slot');
                }
                if (randomNumber === 12) {
                    console.log('Summon 1d4 Vampires');
                }
            }
        }, 1800000)
    }
    return rollDie = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 12) + 1; {
            if (randomNumber === 1) {
                console.log('Example 1');
            }
            if (randomNumber === 2) {
                console.log('Example 2');
            }
            if (randomNumber === 3) {
                console.log('Example 3');
            }
            if (randomNumber === 4) {
                console.log('Example 4');
            }
            if (randomNumber === 5) {
                console.log('Example 5');
            }
            if (randomNumber === 6) {
                console.log('Example 6');
            }
            if (randomNumber === 7) {
                console.log('Example 7');
            }
            if (randomNumber === 8) {
                console.log('Example 8');
            }
            if (randomNumber === 9) {
                console.log('Example 9');
            }
            if (randomNumber === 10) {
                console.log('Example 10');
            }
            if (randomNumber === 11) {
                console.log('Example 11');
            }
            if (randomNumber === 12) {
                console.log('Example 12');
            }
        }
    }, 5000)
}


//Used to determine the success of a Skill Check automatically succeeding. The difficulty is generally determined by how unrealistic the skill check is.
function skillCrit(difficulty) {

    if (difficulty === 1) {
        let easyCheck = Math.floor(Math.random() * 4) + 1;
        if (easyCheck >= 4) {
            return `${easyCheck}/4, CRITICAL SUCCESS!`;
        }
        return `${easyCheck}/4`;
    }
    if (difficulty === 2) {
        let mediumCheck = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 6) + 2;
        if (mediumCheck >= 10) {
            return `${mediumCheck}/10, CRITICAL SUCCESS!`;
        }
        return `${mediumCheck}/10`;
    }
    if (difficulty === 3) {
        let hardCheck = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 8) + 3;
        if (hardCheck >= 18) {
            return `${hardCheck}/18, CRITICAL SUCCESS!`;
        }
        return `${hardCheck}/18`;
    }
    if (difficulty === 4) {
        let superHardCheck = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 8) + Math.floor(Math.random() * 10) + 4;
        if (superHardCheck >= 28) {
            return `${superHardCheck}/28, CRITICAL SUCCESS!`;
        }
        return `${superHardCheck}/28`;
    }
    if (difficulty === 5) {
        let megaHardCheck = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 8) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 12) + 5;
        if (megaHardCheck >= 40) {
            return `${megaHardCheck}/40, CRITICAL SUCCESS!`;
        }
        return `${megaHardCheck}/40`;
    }
    if (difficulty === 6) {
        let gigaHardCheck = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 8) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 12) + Math.floor(Math.random() * 20) + 6;
        if (gigaHardCheck >= 60) {
            return `${gigaHardCheck}/60, CRITICAL SUCCESS!`;
        }
        return `${gigaHardCheck}/60`;
    }
    if (difficulty === 7) {
        let teraHardCheck = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 8) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 12) + Math.floor(Math.random() * 20) + Math.floor(Math.random() * 100) + 7;
        if (teraHardCheck >= 160) {
            return `${teraHardCheck}/160, CRITICAL SUCCESS!`;
        }
        return `${teraHardCheck}/160`;
    }
    return null;
}

//Dnd Combat Target Generator

function combatTarGenerator(num) {
    let target = Math.floor(Math.random() * num) + 1;
    let name = ['Altair', 'Valcor', 'Lily', 'Ra', 'Nameless']
    if (typeof num === 'number' && num <= name.length && num >= 1) {
        return name[target - 1]
    } return null;
}

//DnD Color Changer

setInterval(
    function () {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);

        for (let i = 0; i < 6; i++) {
            document.getElementsByClassName("fa-solid fa-eye")[i].style.color = `rgb(${r}, ${g}, ${b})`;
        }

    }, 142.85714);


// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }

// const buttons = document.querySelectorAll('button');

// for (let button of buttons) {
//     button.addEventListener('click', colorize)
// }

// const h1s = document.querySelectorAll('h1');
// for (let h1 of h1s) {
//     h1.addEventListener('click', colorize)
// }

// function colorize() {
//     this.style.backgroundColor = makeRandColor();
//     this.style.color = makeRandColor();
// }

//DnD Random Power Generator

function randomPowGenerator(id) {
    for (let i = 0; i < id; i++) {
        i += id;
    };
    if (typeof id !== 'undefined') {
        return null;
    };

    if (typeof id === 'number') {

        return rollDie = setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 100) + 1; {

                if (randomNumber <= 1) {
                    console.log('Nothing');
                }
                if (randomNumber === 2) {
                    console.log('Nothing');
                }
                if (randomNumber === 3) {
                    console.log('Add one point of the Dungeon Masters choice to your Ability Score');
                }
                if (randomNumber === 4) {
                    console.log('Add one point to your Strength Score');
                }
                if (randomNumber === 5) {
                    console.log('Add one point to your Intelligence Score');
                }
                if (randomNumber === 6) {
                    console.log('Add one point to your Wisdom Score');
                }
                if (randomNumber === 7) {
                    console.log('Add one point to your Charisma Score');
                }
                if (randomNumber === 8) {
                    console.log('Add one point to your Dexterity Score');
                }
                if (randomNumber === 9) {
                    console.log('Add one point to your Constitution Score');
                }
                if (randomNumber === 10) {
                    console.log('Add one point to a Physical Ability Score of your choice');
                }
                if (randomNumber === 11) {
                    console.log('Add one point to a Physical Ability Score of your choice');
                }
                if (randomNumber === 12) {
                    console.log('Add one point to a Physical Ability Score of your choice');
                }
                if (randomNumber === 13) {
                    console.log('Add one point to a Physical Ability Score of your choice');
                }
                if (randomNumber === 14) {
                    console.log('Add one point to a Physical Ability Score of your choice');
                }
                if (randomNumber === 15) {
                    console.log('Add one point to a Mental Ability Score of your choice');
                }
                if (randomNumber === 16) {
                    console.log('Add one point to a Mental Ability Score of your choice');
                }
                if (randomNumber === 17) {
                    console.log('Add one point to a Mental Ability Score of your choice');
                }
                if (randomNumber === 18) {
                    console.log('Add one point to a Mental Ability Score of your choice');
                }
                if (randomNumber === 19) {
                    console.log('Add one point to a Mental Ability Score of your choice');
                }
                if (randomNumber === 20) {
                    console.log('Add one point to an Ability Score of your choice');
                }
                if (randomNumber === 21) {
                    console.log('Add one point to an Ability Score of your choice');
                }
                if (randomNumber === 22) {
                    console.log('Add one point to an Ability Score of your choice');
                }
                if (randomNumber === 23) {
                    console.log('Add one point to an Ability Score of your choice');
                }
                if (randomNumber === 24) {
                    console.log('Add one point to an Ability Score of your choice');
                }
                if (randomNumber === 25) {
                    console.log('Add one point to an Ability Score of your choice');
                }
                if (randomNumber === 26) {
                    console.log('Add one point to an Ability Score of your choice');
                }
                if (randomNumber === 27) {
                    console.log('Add one point to an Ability Score of your choice');
                }
                if (randomNumber === 28) {
                    console.log('Add one point to an Ability Score of your choice');
                }
                if (randomNumber === 29) {
                    console.log('Add one point to an Ability Score of your choice');
                }
                if (randomNumber === 30) {
                    console.log('Add a total of two points to your Intelligence Score');
                }
                if (randomNumber === 31) {
                    console.log('Add a total of two points to your Intelligence Score');
                }
                if (randomNumber === 32) {
                    console.log('Add a total of two points to your Intelligence Score');
                }
                if (randomNumber === 33) {
                    console.log('Add a total of two points to your Intelligence Score');
                }
                if (randomNumber === 34) {
                    console.log('Add a total of two points to your Intelligence Score');
                }
                if (randomNumber === 35) {
                    console.log('Add a total of two points to your Intelligence Score');
                }
                if (randomNumber === 36) {
                    console.log('Add a total of two points to your Intelligence Score');
                }
                if (randomNumber === 37) {
                    console.log('Add a total of two points to your Intelligence Score');
                }
                if (randomNumber === 38) {
                    console.log('Add a total of two points to your Intelligence Score');
                }
                if (randomNumber === 39) {
                    console.log('Add a total of two points to your Intelligence Score');
                }
                if (randomNumber === 40) {
                    console.log('Add a total of two points to your Wisdom Score');
                }
                if (randomNumber === 41) {
                    console.log('Add a total of two points to your Wisdom Score');
                }
                if (randomNumber === 42) {
                    console.log('Add a total of two points to your Wisdom Score');
                }
                if (randomNumber === 43) {
                    console.log('Add a total of two points to your Wisdom Score');
                }
                if (randomNumber === 44) {
                    console.log('Add a total of two points to your Wisdom Score');
                }
                if (randomNumber === 45) {
                    console.log('Add a total of two points to your Wisdom Score');
                }
                if (randomNumber === 46) {
                    console.log('Add a total of two points to your Wisdom Score');
                }
                if (randomNumber === 47) {
                    console.log('Add a total of two points to your Wisdom Score');
                }
                if (randomNumber === 48) {
                    console.log('Add a total of two points to your Wisdom Score');
                }
                if (randomNumber === 49) {
                    console.log('Add a total of two points to your Wisdom Score');
                }
                if (randomNumber === 50) {
                    console.log('Add a total of two points to your Charisma Score');
                }
                if (randomNumber === 51) {
                    console.log('Add a total of two points to your Charisma Score');
                }
                if (randomNumber === 52) {
                    console.log('Add a total of two points to your Charisma Score');
                }
                if (randomNumber === 53) {
                    console.log('Add a total of two points to your Charisma Score');
                }
                if (randomNumber === 54) {
                    console.log('Add a total of two points to your Charisma Score');
                }
                if (randomNumber === 55) {
                    console.log('Add a total of two points to your Charisma Score');
                }
                if (randomNumber === 56) {
                    console.log('Add a total of two points to your Charisma Score');
                }
                if (randomNumber === 57) {
                    console.log('Add a total of two points to your Charisma Score');
                }
                if (randomNumber === 58) {
                    console.log('Add a total of two points to your Charisma Score');
                }
                if (randomNumber === 59) {
                    console.log('Add a total of two points to your Charisma Score');
                }
                if (randomNumber === 60) {
                    console.log('Add a total of two points to your Dexterity or Strength Score');
                }
                if (randomNumber === 61) {
                    console.log('Add a total of two points to your Dexterity or Strength Score');
                }
                if (randomNumber === 62) {
                    console.log('Add a total of two points to your Dexterity or Strength Score');
                }
                if (randomNumber === 63) {
                    console.log('Add a total of two points to your Dexterity or Strength Score');
                }
                if (randomNumber === 64) {
                    console.log('Add a total of two points to your Dexterity or Strength Score');
                }
                if (randomNumber === 65) {
                    console.log('Add a total of two points to your Dexterity or Strength Score');
                }
                if (randomNumber === 66) {
                    console.log('Add a total of two points to your Dexterity or Strength Score');
                }
                if (randomNumber === 67) {
                    console.log('Add a total of two points to your Dexterity or Strength Score');
                }
                if (randomNumber === 68) {
                    console.log('Add a total of two points to your Dexterity or Strength Score');
                }
                if (randomNumber === 69) {
                    console.log('Add a total of two points to your Dexterity or Strength Score');
                }
                if (randomNumber === 70) {
                    console.log('Add a total of two points to your Constitution Score');
                }
                if (randomNumber === 71) {
                    console.log('Add a total of two points to your Constitution Score');
                }
                if (randomNumber === 72) {
                    console.log('Add a total of two points to your Constitution Score');
                }
                if (randomNumber === 73) {
                    console.log('Add a total of two points to your Constitution Score');
                }
                if (randomNumber === 74) {
                    console.log('Add a total of two points to your Constitution Score');
                }
                if (randomNumber === 75) {
                    console.log('Add a total of two points to your Constitution Score');
                }
                if (randomNumber === 76) {
                    console.log('Add a total of two points to your Constitution Score');
                }
                if (randomNumber === 77) {
                    console.log('Add a total of two points to your Constitution Score');
                }
                if (randomNumber === 78) {
                    console.log('Add a total of two points to your Constitution Score');
                }
                if (randomNumber === 79) {
                    console.log('Add a total of two points to your Constitution Score');
                }
                if (randomNumber === 80) {
                    console.log('Add a total of two points to your Ability Scores');
                }
                if (randomNumber === 81) {
                    console.log('Gain the Grappler Feat');
                }
                if (randomNumber === 82) {
                    console.log('Gain the Observant Feat');
                }
                if (randomNumber === 83) {
                    console.log('Gain the Linguist Feat');
                }
                if (randomNumber === 84) {
                    console.log('Gain the Mounted Combat Feat');
                }
                if (randomNumber === 85) {
                    console.log('Gain the Lucky Feat');
                }
                if (randomNumber === 86) {
                    console.log('Gain the Mobile Feat');
                }
                if (randomNumber === 87) {
                    console.log('Gain the Tough Feat');
                }
                if (randomNumber === 88) {
                    console.log('Gain one Feat of your choice');
                }
                if (randomNumber === 89) {
                    console.log('Add a total of three points to your Ability Scores');
                }
                if (randomNumber === 90) {
                    console.log('Gain two Feats of your choice');
                }
                if (randomNumber === 91) {
                    console.log('Gain the Boon of Invincibility');
                }
                if (randomNumber === 92) {
                    console.log('Gain the Boon of Blind Sight');
                }
                if (randomNumber === 93) {
                    console.log('Gain the Boon of Luck');
                }
                if (randomNumber === 94) {
                    console.log('Gain the Boon of Immortality');
                }
                if (randomNumber === 95) {
                    console.log('Gain the Boon of Fortitude');
                }
                if (randomNumber === 96) {
                    console.log('Gain the Boon of Immortality');
                }
                if (randomNumber === 97) {
                    console.log('Gain the Boon of True Sight');
                }
                if (randomNumber === 98) {
                    console.log('Add a total of four points to your Ability Scores');
                }
                if (randomNumber === 99) {
                    console.log('Gain one Epic Feat of your choice');
                }
                if (randomNumber === 100) {
                    console.log('Gain two Epic Feats of your choice');
                }
            }
        }, 1)
    }
}

