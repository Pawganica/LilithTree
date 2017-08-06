var cs = {
	
	//TODO: Stat interpretations
	//TODO: Presence, Capability, Toughness, Looks
	//TODO: Reputation, money, inventory
	
	//TODO: NPC Sheets?
	
	set Dexterity(newDexterity) {
		localStorage.lt_Dexterity = newDexterity;
	},
	
	get Dexterity() {
		var returnVal = localStorage.lt_Dexterity;
		if (returnVal == null) {
			localStorage.lt_Dexterity = 10;
			return 10;
		} else {
			return returnVal;
		}
	},
	
	set Strength(newStrength) {
		localStorage.lt_Strength = newStrength;
	},
	
	get Strength() {
		var returnVal = localStorage.lt_Strength;
		if (returnVal == null) {
			localStorage.lt_Strength = 10;
			return 10;
		} else {
			return returnVal;
		}
	},
	
	set Endurance(newEndurance) {
		localStorage.lt_Endurance = newEndurance;
	},
	
	get Endurance() {
		var returnVal = localStorage.lt_Endurance;
		if (returnVal == null) {
			localStorage.lt_Endurance = 10;
			return 10;
		} else {
			return returnVal;
		}
	},
	
	set Intelligence(newIntelligence) {
		localStorage.lt_Intelligence = newIntelligence;
	},
	
	get Intelligence() {
		var returnVal = localStorage.lt_Intelligence;
		if (returnVal == null) {
			localStorage.lt_Intelligence = 10;
			return 10;
		} else {
			return returnVal;
		}
	},
	
	set Charisma(newCharisma) {
		localStorage.lt_Charisma = newCharisma;
	},
	
	get Charisma() {
		var returnVal = localStorage.lt_Charisma;
		if (returnVal == null) {
			localStorage.lt_Charisma = 10;
			return 10;
		} else {
			return returnVal;
		}
	}
	
	// ---
	
	
	
	
	
}