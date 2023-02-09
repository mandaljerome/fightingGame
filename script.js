
let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1NameDiv = document.getElementById('p1Name')
let p2NameDiv = document.getElementById('p2Name')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')


const updateGame = (p1, p2, gameState) => {

  p1NameDiv.innerHTML = p1.name
  p2NameDiv.innerHTML = p2.name
  p1HealthDiv.innerHTML = p1.health
  p2HealthDiv.innerHTML = p2.health

  if (p1.health <= 0) {
    gameState.isOver = true
    resultDiv.innerHTML = game.declareWinner(gameState.isOver, player1, player2)
    

  } else if (p2.health <= 0) {
    gameState.isOver = true
    resultDiv.innerHTML = game.declareWinner(gameState.isOver, player1, player2)
    

  }
}


class Player {
  constructor(name, health, attackDamage) {
    this.name = name;
    this.health = health;
    this.attackDmg = attackDamage;
  }

  strike(player, enemy, attackDmg) {


    let damageAmount = Math.ceil(Math.random() * attackDmg)

    enemy.health -= damageAmount

    if (enemy.health < 0) {
      enemy.health = 0
    }

    updateGame(player1, player2, game)



    return `${player.name} attacks ${enemy.name} with ${damageAmount} damage!`
  }

  heal(player) {

    

    let hpAmount = Math.ceil(Math.random() * 5)

    player.health += hpAmount


    if (player.health >= 100) {
      player.health = 100
    }
    updateGame(player1, player2, game)
    
    return `${player.name} heals ${hpAmount} HP!`
  }
}


class Game {
  constructor() {
    this.isOver = false;
  }


  declareWinner(isOver, p1, p2) {


    let message;

    if (p1.health <= 0 && isOver == true) {
      message = "Player 2 Wins!"
      document.getElementById("victory").play()
    } else if (p2.health <= 0 && isOver == true) {
      message = "Player 1 Wins!"
      document.getElementById("victory").play()
    }

    

    return message
  }


  reset(p1, p2) {

    p1.health = 100
    p2.health = 100
    game.isOver = false
    resultDiv.innerHTML = ''
    updateGame(player1, player2, game)
  }


  play(p1, p2) {

    while (!this.isOver) {

      player1.strike(player1, player2, player1.attackDmg)
      player1.heal(player1)
      updateGame(player1, player2, game)
      player2.strike(player2, player1, player2.attackDmg)
      player2.heal(player2)
      updateGame(player1, player2, game)
    }


  }

}

const player1 = new Player('Jerome', 100, 7)
const player2 = new Player('Jerald', 100, 7)

let p1 = new Player('Jerome', 100, 7);
let p2 = new Player('Jerald', 100, 7);


const game = new Game(false)


let gameState = new Game(false);


document.addEventListener('keydown', function(e) {

  if (e.key == 'q' && player2.health > 0 && game.isOver == false) {
    console.log(player1.strike(player1, player2, player1.attackDmg))

    document.getElementById('p1attack').play()
  }


});

document.addEventListener('keydown', function(e) {


  if (e.key == 'a' && player1.health > 0 && game.isOver == false) {
    console.log(player1.heal(player1))
    document.getElementById('p1heal').play()
  }


});

document.addEventListener('keydown', function(e) {

  if (e.key == 'p' && player1.health > 0 && game.isOver == false) {
    console.log(player2.strike(player2, player1, player2.attackDmg))

    document.getElementById('p2attack').play()
  }

});

document.addEventListener('keydown', function(e) {

  if (e.key == 'l' && player2.health > 0 && game.isOver == false) {
    console.log(player2.heal(player2))
    document.getElementById('p2heal').play()
  }

});


document.getElementById('reset').addEventListener('click', () => game.reset(player1, player2))
document.getElementById('play').addEventListener('click', () => game.play(player1, player2))


