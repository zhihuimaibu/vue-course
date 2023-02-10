const attackValue = function (min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
	data() {
		return {
			monsterHealth: 100,
			playerHealth: 100,
			winner: null,
			mayUserSpecialAttack: false,
			logMessages: []
		}
	},
	computed: {
		barMonsterHealth() {
			if (this.monsterHealth < 0) {
				return { width: '0%' };
			}
			return { width: this.monsterHealth + '%' };
		},
		barPlayerHealth() {
			if (this.playerHealth < 0) {
				return { width: '0%' };
			}
			return { width: this.playerHealth + '%' };
		}
	},
	methods: {
		attackMonster() {
			const monsterValue = attackValue(10, 20);
			this.monsterHealth -= monsterValue;
			this.logMessage('monster', 'attack', monsterValue);
			this.attackPlayer();
		},
		attackPlayer() {
			const playerValue = attackValue(8, 18);
			this.playerHealth -= playerValue;
			this.logMessage('player', 'attack', playerValue);
		},
		specialAttack() {
			const specialMonsterValue = attackValue(0, 30);
			this.monsterHealth -= specialMonsterValue;
			this.logMessage('monster', 'attack', specialMonsterValue);
			this.attackPlayer();

			this.mayUserSpecialAttack = true;
			const that = this;
			setTimeout(function () {
				that.mayUserSpecialAttack = false;
			}, 5000)
		},
		heal() {
			if (this.playerHealth + 15 > 100) {
				this.playerHealth = 100;
			}
			this.playerHealth += 15;
			this.logMessage('player', 'heal', 15);
			this.attackMonster();
		},
		surrender() {
			this.winner = 'monster';
		},
		newGame() {
			this.monsterHealth = 100;
			this.playerHealth = 100;
			this.winner = null;
			this.logMessages = [];
		},
		logMessage(who, what, value) {
			this.logMessages.unshift({
				actionBy: who,
				actionType: what,
				actionValue: value
			});
		}
	},
	watch: {
		monsterHealth(value) {
			if (this.playerHealth <= 0 && value <= 0) {
				this.winner = 'draw';
			} else if (this.monsterHealth < 0) {
				this.winner = 'player';
			}
		},
		playerHealth(value) {
			if (this.monsterHealth <= 0 && value <= 0) {
				this.winner = 'draw';
			} else if (this.playerHealth < 0) {
				this.winner = 'monster';
			}
		}
	}
});
app.mount('#game');