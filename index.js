// menu app

class Burger {
    constructor(burgerName, bun, sauce, topping1, topping2, topping3, meat) {
        this.burgerName = burgerName;
        this.bun = bun;
        this.sauce = sauce;
        this.topping1 = topping1;
        this.topping2 = topping2;
        this.topping3 = topping3;
        this.meat = meat;
    }
}

class BagOfBurgers {
    constructor(name) {
        this.name = name;
        this.burgers = [];
    }
}

class Menu {
    constructor() {
        this.bags = [];
        this.selected = null;
    }
    
    start () {
        let selection = this.showMainMenuOptions();
        while(selection != 0) {
            switch (selection) {
            case "1":
                this.createBagOfBurgers();
                break;
            case "2":
                this.viewBagOfBurgers();
                break;
            case "3":
                this.deleteBagOfBurgers();
                break;
            default:
                selection = 0;              
            }
            selection = this.showMainMenuOptions();
        }
        alert("Have a nice day!");
    }

    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create Your Bag Of Burgers
        2) View Your Bag Of Burgers
        3) Delete Your Bag Of Burgers
        `);
    }

    showBagOfBurgersMenuOptions(bagOfBugersInfo) {
        return prompt(`
        0) Back
        1) Create Burger
        2) Delete Burger
        ----------------
        ${bagOfBugersInfo}
        `);
    }

    createBagOfBurgers() {
        let bagName = prompt("Enter the name you wish to give your bag of burgers:");
        this.bags.push(new BagOfBurgers(bagName));
    }

    viewBagOfBurgers() {
        let bagIndex = prompt("Enter the index of the bag you wish to see:");
        if (bagIndex > -1 && this.bags.length) {
            this.selectedBag = this.bags[bagIndex];
            let bagInfo = `Name Of Custom Bag Of Burgers: ${this.selectedBag.name} 
            `;
            for(let i = 0; i < this.selectedBag.burgers.length; i++) {
               bagInfo += i + ") " + `
               Your burger name is ${this.selectedBag.burgers[i].burgerName}.
               Your burger has ${this.selectedBag.burgers[i].bun} as the bun.
               Your burger has ${this.selectedBag.burgers[i].sauce} as the sauce.
               Your burger has ${this.selectedBag.burgers[i].topping1} as the first topping.
               Your burger has ${this.selectedBag.burgers[i].topping2} as the second topping.
               Your burger has ${this.selectedBag.burgers[i].topping3} as the last topping.
               The meat on your burger is ${this.selectedBag.burgers[i].meat}.
            `;
            }
            let selection = this.showBagOfBurgersMenuOptions(bagInfo);
            switch(selection) {
                case "1":
                    this.createBurger();
                    break;
                case "2":
                    this.deleteBurger();
                    break;
            }
        }
    }

    deleteBagOfBurgers() {
        let deleteBag = prompt("Enter the index of the bag you wish to delete:");
        if(deleteBag > -1 && deleteBag < this.bags.length) {
            this.bags.splice(deleteBag, 1);
        }
    }

    createBurger() {
        let burgerName = prompt("Name your new burger:");
        let bun = prompt("What bun would you like to have:");
        let sauce = prompt("What sauce would you like on your burger:");
        let topping1 = prompt("What would you like as your first topping:");
        let topping2 = prompt("What would you like as your second topping:");
        let topping3 = prompt("What would you like as your last topping:");
        let meat = prompt("What meat would you like in your burger:");
        this.selectedBag.burgers.push(new Burger(burgerName, bun, sauce, topping1, topping2, topping3,
            meat));
    }

    deleteBurger() {
        let burgerDelete = prompt("Enter the burger index you wish to delete from your bag:");
        if(burgerDelete > -1 && burgerDelete < this.selectedBag.burgers.length) {
            this.selectedBag.burgers.splice(burgerDelete, 1);
        }
    }
}
let menu = new Menu();
menu.start();