Game.EntityGenerator = new Game.Generator('entities',Game.Entity);

Game.EntityGenerator.learn({
  name: 'avatar',
  description: 'Anthoney!',
  chr:'@',
  fg:'#dda',
  sightRadius: 6,
  maxHp: 1000,
  attackAvoid: 1,
  attackDamage: 2,
  inventoryCapacity: 35,
  maxFood: 400,
  mixins: ["PlayerActor", "PlayerMessager", "WalkerCorporeal", "Sight", "MapMemory", "HitPoints", "Chronicle", "MeleeAttacker", "MeleeDefender","InventoryHolder","FoodConsumer"]
});

Game.EntityGenerator.learn({
  name: 'mirrorAvatar',
  description: 'Anthoney!',
  chr:'@',
  fg:'#dda',
  mixins: ["PlayerActor", "PlayerMessager", "WalkerCorporeal", "Chronicle", "MeleeAttacker"]
});

Game.EntityGenerator.learn({
  name: 'moss',
  description: 'A large ground-covering patch of soft, fuzzy plantlife',
  chr:'%',
  fg:'#6b6',
  maxHp: 1,
  mixins: ["HitPoints"]
});

Game.EntityGenerator.learn({
  name: 'newt',
  description: 'It is small, wriggly, and moist',
  chr:'~',
  fg:'#f98',
  maxHp: 2,
  mixins: ["HitPoints","WanderActor","WalkerCorporeal"]
});

Game.EntityGenerator.learn({
  name: 'dog',
  chr:'&',
  fg:'#8B5A2B',
  maxHp: 3,
  sightRadius: 4,
  attackAvoid: 2,
  chaserActionDuration: 1200,
  attackActionDuration: 3000,
  mixins: ["HitPoints","ChaserActor","WalkerCorporeal","MeleeAttacker"]
});

Game.EntityGenerator.learn({
  name: 'Evan Williams',
  chr:'E',
  fg:'#dda',
  maxHp: 3,
  mixins: ["WalkerCorporeal"]
});

Game.EntityGenerator.learn({
  name: 'angry squirrel',
  description: "It is very upset that it can't find its nuts, it will attack if you get in its way",
  chr:String.fromCharCode(163),
  fg:'#aaa',
  maxHp: 2,
  attackDamage: 1,
  attackAvoid: 2,
  damageMitigation: 1,
  mixins: ["HitPoints", "WanderActor", "WalkerCorporeal", "MeleeAttacker","MeleeDefender"]
});

Game.EntityGenerator.learn({
  name: 'attack slug',
  description: 'Beware the rage of this highly trained land-mollusk.',
  chr:'/',
  fg:'#ff9',
  maxHp: 4,
  sightRadius: 4,
  attackDamage: 1,
  chaserActionDuration: 1200,
  attackActionDuration: 3000,
  mixins: ["HitPoints", "Sight", "ChaserActor", "WalkerCorporeal", "MeleeAttacker"]
});
