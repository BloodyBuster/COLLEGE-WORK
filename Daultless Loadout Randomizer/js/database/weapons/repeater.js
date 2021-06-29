var repeater = new Array(1);

repeater[0] = {
    "name" : "Ostian Repeater",
    "cell_1" : "Technique",
    "cell_2" : "Mobility",
    "image" : "images/weapons/ostian repeaters/Repeater.png",
}

var barrel = new Array(6);

barrel[0] = {
    "name" : "Standard Barrel",
    "elemental_power" : "Neutral",
    "description" : "Shots and abilities deal physical damage. ",
    "image" : "images/weapons/ostian repeaters/barrel/StandardBarrel.png",
    "image2" : "",
}

barrel[1] = {
    "name" : "Inferno Barrel",
    "elemental_power" : "Blaze",
    "description" : "Shots and abilities deal blaze damage. Also applies On Fire status effect to behemoths with frequency based on total team blaze damage dealt.",
    "image" : "images/weapons/ostian repeaters/barrel/InfernoBarrel.png",
    "image2" : "images/icon/elements/Blaze.png",
}

barrel[2] = {
    "name" : "Blizzard Barrel",
    "elemental_power" : "Frost",
    "description" : "Shots and abilities deal frost damage. Also applies Chilled status effect to behemoths with frequency based on total team frost damage dealt.",
    "image" : "images/weapons/ostian repeaters/barrel/BlizzardBarrel.png",
    "image2" : "images/icon/elements/Frost.png",
}

barrel[3] = {
    "name" : "Storm Barrel",
    "elemental_power" : "Shock",
    "description" : "Shots and abilities deal shock damage. Also applies minor stun to behemoths with frequency based on total team shock damage dealt.",
    "image" : "images/weapons/ostian repeaters/barrel/StormBarrel.png",
    "image2" : "images/icon/elements/Shock.png",
}

barrel[4] = {
    "name" : "Twilight Barrel",
    "elemental_power" : "Umbral",
    "description" : "Shots and abilities deal umbral damage.",
    "image" : "images/weapons/ostian repeaters/barrel/TwilightBarrel.png",
    "image2" : "images/icon/elements/Umbral.png",
}

barrel[5] = {
    "name" : "Dawnstar Barrel",
    "elemental_power" : "Radiant",
    "description" : "Shots and abilities deal radiant damage.",
    "image" : "images/weapons/ostian repeaters/barrel/DawnstarBarrel.png",
    "image2" : "images/icon/elements/Radiant.png",
}

barrel[6] = {
    "name" : "Sylvan Barrel",
    "elemental_power" : "Terra",
    "description" : "Shots and abilities deal terra damage.",
    "image" : "images/weapons/ostian repeaters/barrel/SylvanBarrel.png",
    "image2" : "images/icon/elements/Terra.png",
}

var chamber = new Array(2);

chamber[0] = {
    "name" : "Salvo Chamber",
    "description" : "Fires an explosive missile in a line, dealing 400 damage in an area upon impact. Empowered: Fires 3 missiles in a spread.",
    "image" : "images/weapons/ostian repeaters/chamber/SalvoChamber.png",
}

chamber[1] = {
    "name" : "Marksman Chamber",
    "description" : "Fires a shot in a line, dealing 250 damage to the first Behemoth hit. If a part is struck, that part takes 40% more damage from Shots for 10 seconds. Empowered: Damage bonus increased to 80%, and 25% to all allies. ",
    "image" : "images/weapons/ostian repeaters/chamber/MarksmanChamber.png",
}

chamber[2] = {
    "name" : "Full-Bore Chamber",
    "description" : "Fires a piercing bolt in a line, dealing damage that falls as it travels. Empowered: Deals greatly increased damage and pushes the slayer backwards. ",
    "image" : "images/weapons/ostian repeaters/chamber/FullBoreChamber.png",
}

var grip = new Array(1);

grip[0] = {
    "name" : "Captain's Grip",
    "description" : "Launches a collectible buff a short distance, granting 20% increased attack speed for 15 seconds when collected. Empowered: Grants the same buff to all Slayers.",
    "image" : "images/weapons/ostian repeaters/grip/CaptainsGrip.png",
}

grip[1] = {
    "name" : "Saboteur's Grip",
    "description" : "Launches an explosive mine that deals 400 damage. Mine charges after a short period, increasing damage to 700. Empowered: Deals 900 damage when charged and can interrupt Behemoths.",
    "image" : "images/weapons/ostian repeaters/grip/SaboteursGrip.png",
}

var prism = new Array(5);

prism[0] = {
    "name" : "Eclipse Prism",
    "description" : "Dealing damage has a chance (based on damage dealt) to generate a Shadow Orb that increases damage dealt by 2.5% for 5 seconds. If 5 or more Orbs are present, the bonus doubles.",
    "image" : "images/weapons/ostian repeaters/prism/EclipsePrism.png",
}

prism[1] = {
    "name" : "Stoneheart Prism",
    "description" : "Dealing damage has a chance (based on damage dealt) to grant a stacking, refreshing 40 health shield that lasts for 12s.",
    "image" : "images/weapons/ostian repeaters/prism/StoneheartPrism.png",
}

prism[2] = {
    "name" : "Brilliant Prism",
    "description" : "Once charged, your next attack will deal 550 bonus Radiant Radiant damage. Charge rate increases with current health.",
    "image" : "images/weapons/ostian repeaters/prism/BrilliantPrism.png",
}

prism[3] = {
    "name" : "Searing Prism",
    "description" : "The tenth hit in quick succession deals 250 bonus Blaze Blaze damage",
    "image" : "images/weapons/ostian repeaters/prism/SearingPrism.png",
}

prism[4] = {
    "name" : "Snowdrift Prism",
    "description" : "The last 4 shots in your magazine generate a Frost Sprite that cause your next attack to deal 50 bonus damage and minor Frost Icon.png Frost damage. Max 4 Sprites.",
    "image" : "images/weapons/ostian repeaters/prism/SnowdriftPrism.png",
}

prism[5] = {
    "name" : "Glacial Prism",
    "description" : "Evading drops a trio of Ice Mines on a 30 second cooldown.",
    "image" : "images/weapons/ostian repeaters/prism/GlacialPrism.png",
}

var repeater_mod = new Array(5);

repeater_mod[0] = {
    "name" : "Capacitive Magazine",
    "description" : "Using an ability returns 4 ammo to the magazine.",
    "image" : "images/weapons/ostian repeaters/mod/CapacitiveMagazine.png",
}

repeater_mod[1] = {
    "name" : "Scoped Sights",
    "description" : "Increases damage falloff range by 25%.",
    "image" : "images/weapons/ostian repeaters/mod/ScopedSights.png",
}

repeater_mod[2] = {
    "name" : "Lucky Magazine",
    "description" : "Grants 2% critical strike chance for each round missing from the magazine.",
    "image" : "images/weapons/ostian repeaters/mod/LuckyMagazine.png",
}

repeater_mod[3] = {
    "name" : "Extraction Catalyst",
    "description" : "Reduce both ability cooldowns by 2 seconds when dodging through Behemoth attacks.",
    "image" : "images/weapons/ostian repeaters/mod/ExtractionCatalyst.png",
}

repeater_mod[4] = {
    "name" : "Lightweight Frame",
    "description" : "Gain 20% increased movespeed when at 6 or less ammo.",
    "image" : "images/weapons/ostian repeaters/mod/LightweightFrame.png",
}

repeater_mod[5] = {
    "name" : "Precision Sights",
    "description" : "Deal 5 increased damage when attacking the same part multiple times. Stacks up to 8 times.",
    "image" : "images/weapons/ostian repeaters/mod/PrecisionSights.png",
}