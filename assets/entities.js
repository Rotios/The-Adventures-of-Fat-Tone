Game.EntityGenerator = new Game.Generator('entities',Game.Entity);

Game.EntityGenerator.learn({
  name: 'avatar',
  description: 'Anthoney!',
  chr:'@',
  fg:'#dda',
  sightRadius: 8,
  maxHp: 21,
  attackAvoid: 1,
  attackDamage: 2,
  inventoryCapacity: 35,
  maxFood: 1000,
  mixins: ["PlayerActor", "PlayerMessager", "WalkerCorporeal", "Sight", "MapMemory", "HitPoints", "Chronicle", "MeleeAttacker", "MeleeDefender","InventoryHolder","FoodConsumer","WalletHolder"]
});

Game.EntityGenerator.learn({
  name: 'mirrorAvatar',
  description: 'Anthoney!',
  chr:'@',
  fg:'#dda',
  mixins: ["PlayerActor", "PlayerMessager", "WalkerCorporeal", "Chronicle", "MeleeAttacker"]
});

Game.EntityGenerator.learn({
  name: 'noodles',
  chr:'🍜',
  mixins: ["WalkerCorporeal"]
});

Game.EntityGenerator.learn({
  name: 'Brent',
  description: 'Brent - the owner of this fine establishment',
  chr:'😎',
  fg:'#f00',
  inventoryCapacity: 50,
  mixins: ["WalkerCorporeal", "InventoryHolder"]
});

Game.EntityGenerator.learn({
  name: 'Nola',
  description: 'Nola - the owner of this fine establishment',
  chr:'🐫',
  fg:'#f00',
  inventoryCapacity: 50,
  mixins: ["WalkerCorporeal", "InventoryHolder"]
});

Game.EntityGenerator.learn({
  name: 'Alexis',
  description: 'Alexis - a person who is always at the shop',
  chr:'😪',
  fg:'#f00',
  mixins: ["WalkerCorporeal"]
});

Game.EntityGenerator.learn({
  name: 'Harold',
  description: 'Harold - the rapper',
  chr:'😃🎸',
  fg:'#f00',
  mixins: ["WalkerCorporeal"]
});

Game.EntityGenerator.learn({
  name: 'Evan',
  description: 'Evan Williams after you saved him.',
  chr:'E',
  fg:'#f00',
  mixins: ["WalkerCorporeal"]
});

Game.EntityGenerator.learn({
  name: 'moss',
  description: 'A large ground-covering patch of soft, fuzzy plantlife',
  chr:'%',
  fg:'#6b6',
  maxHp: 1,
  minDropAmount: 5,
  maxDropAmount: 5,
  mixins: ["HitPoints","MoneyDropper"]
});

Game.EntityGenerator.learn({
  name: 'newt',
  description: 'It is small, wriggly, and moist',
  chr:'~',
  fg:'#f98',
  maxHp: 2,
  minDropAmount: 10,
  maxDropAmount: 10,
  mixins: ["HitPoints","WanderActor","WalkerCorporeal", "MoneyDropper"]
});

Game.EntityGenerator.learn({
  name: 'angry squirrel',
  description: "It is very upset that it can't find its nuts, it will attack if you get in its way",
  chr:String.fromCharCode(163),
  fg:'#aaa',
  maxHp: 2,
  chaserActionDuration: 1200,
  attackActionDuration: 3000,
  attackDamage: 1,
  attackAvoid: 3,
  sightRadius: 3,
  damageMitigation: 1,
  minDropAmount: 15,
  maxDropAmount: 25,
  mixins: ["HitPoints", "ChaserActor", "WalkerCorporeal", "MeleeAttacker","MeleeDefender","MoneyDropper","Sight"]
});

Game.EntityGenerator.learn({
  name: 'dog',
  chr:'&',
  fg:'#8B5A2B',
  maxHp: 3,
  attackDamage: 1,
  sightRadius: 10,
  attackAvoid: 1,
  chaserActionDuration: 1200,
  attackActionDuration: 3000,
  minDropAmount: 10,
  maxDropAmount: 18,
  mixins: ["HitPoints","ChaserActor","WalkerCorporeal","MeleeAttacker", "Sight","MoneyDropper"]
});

Game.EntityGenerator.learn({
  name: 'attack slug',
  description: 'Beware the rage of this highly trained land-mollusk.',
  chr:'/',
  fg:'#ff9',
  maxHp: 4,
  sightRadius: 5,
  attackDamage: 2,
  attackAvoid: 1,
  chaserActionDuration: 1200,
  attackActionDuration: 3000,
  minDropAmount: 15,
  maxDropAmount: 20,
  mixins: ["HitPoints", "Sight", "ChaserActor", "WalkerCorporeal", "MeleeAttacker","MoneyDropper", "MeleeDefender"]
});

Game.EntityGenerator.learn({
  name: 'security',
  description: 'Don\'t get caught!',
  chr:'👮',
  fg:'#ff9',
  sightRadius: 13,
  attackDamage: 2,
  attackAvoid: 10,
  chaserActionDuration: 1300,
  attackActionDuration: 3000,
  mixins: ["Sight", "ChaserActor", "WalkerCorporeal", "MeleeAttacker", "MeleeDefender"]
});

Game.EntityGenerator.learn({
  name: 'Evan Williams',
  chr:'E',
  fg:'#dda',
  maxHp: 3,
  mixins: ["WalkerCorporeal"]
});

Game.EntityGenerator.learn({
  name: 'Magical Herb',
  chr:'🍁',
  mixins: ["WalkerCorporeal"]
});

Game.EntityGenerator.learn({
  name: 'Jose',
  description: 'A large ground-covering patch of soft, fuzzy plantlife',
  chr:'😴📱',
  fg:'#6b6',
  maxHp: 1,
  minDropAmount: 69,
  maxDropAmount: 69,
  mixins: ["HitPoints","MoneyDropper"]
});

Game.EntityGenerator.learn({
  name: 'Castle Exit',
  chr:'🚪',
  mixins: ["WalkerCorporeal"]
});
