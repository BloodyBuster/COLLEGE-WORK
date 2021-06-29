var technique = new Array(11);

technique[0] = {
    "name" : "Acidic",
}

technique[1] = {
    "name" : "Adrenaline",
}

technique[2] = {
    "name" : "Barbed",
}

technique[3] = {
    "name" : "Bladestorm",
}

technique[4] = {
    "name" : "Cunning",
}

technique[5] = {
    "name" : "Evasive Fury",
}

technique[6] = {
    "name" : "Merciless",
}

technique[7] = {
    "name" : "Molten",
}

technique[8] = {
    "name" : "Predator",
}

technique[9] = {
    "name" : "Savagery",
}

technique[10] = {
    "name" : "Weighted Strikes",
}

technique[11] = {
    "name" : "Wild Frenzy",
}

var startupAppend = "<br><div class=\"element-wrap\"><p class=\"info-text\" style=\"font-weight: 700\">Elemental Power :</p><span class=\"element\"><img id=\"wep-element-img\" src=\"\" alt=\"\" style=\"width:18px;margin-left: 2.5px;margin-right: 2.5px;\"><span><p id=\"wep-element\" class=\"info-text\"></p></span></span></div><div class=\"perk-wrap\"><p class=\"info-text\" style=\"font-weight: 700\">Perk :</p><span class=\"perk\"><img id=\"wep-perk-img\" src=\"\" alt=\"\"><p id=\"wep-perk-name\" class=\"info-text\"></p></span></div>"
var startupAppend_2 = "<br><div id=\"head-resistance\" class=\"element-wrap\"></div><div class=\"perk-wrap\"><p class=\"info-text\" style=\"font-weight: 700\">Perk :</p><span class=\"perk\"><img id=\"head-perk-img\" src=\"\" alt=\"\"><p id=\"head-perk-name\" class=\"info-text\"></p></span></div>"
var startupAppend_3 = "<br><div id=\"torso-resistance\" class=\"element-wrap\"></div><div class=\"perk-wrap\"><p class=\"info-text\" style=\"font-weight: 700\">Perk :</p><span class=\"perk\"><img id=\"torso-perk-img\" src=\"\" alt=\"\"><p id=\"torso-perk-name\" class=\"info-text\"></p></span></div>"
var startupAppend_4 = "<br><div id=\"arms-resistance\" class=\"element-wrap\"></div><div class=\"perk-wrap\"><p class=\"info-text\" style=\"font-weight: 700\">Perk :</p><span class=\"perk\"><img id=\"arms-perk-img\" src=\"\" alt=\"\"><p id=\"arms-perk-name\" class=\"info-text\"></p></span></div>"
var startupAppend_5 = "<br><div id=\"legs-resistance\" class=\"element-wrap\"></div><div class=\"perk-wrap\"><p class=\"info-text\" style=\"font-weight: 700\">Perk :</p><span class=\"perk\"><img id=\"legs-perk-img\" src=\"\" alt=\"\"><p id=\"legs-perk-name\" class=\"info-text\"></p></span></div>"
var startupAppend_6 = "<div><p class=\"info-text\" style=\"font-weight: 700\">Instant : </p><p id=\"lantern-desc-1\" class=\"description-text\"></p></div><div><p class=\"info-text\" style=\"font-weight: 700\">Hold : </p><p id=\"lantern-desc-2\" class=\"description-text\"></p></div>"
var startupAppend_7 = "<div id=\"hunt-resistance\" class=\"element-wrap\"><p id=\"hunt-info-text\" class=\"info-text\" style=\"font-weight: 700\">Resistance :</p><span id=\"hunt-resist\" class=\"element\">+<img id=\"hunt-element-img\" src=\"images/icon/elements/Umbral.png\" alt=\"\"><p id=\"hunt-element\" class=\"info-text\"></p></span></div><div id=\"hunt-weakness\" class=\"element-wrap\" style=\"margin-top: 5px\"><p id=\"hunt-info-text\" class=\"info-text\" style=\"font-weight: 700\">Weakness :</p><span id=\"hunt-weak\" class=\"element-weak\">-<img id=\"hunt-element-weak-img\" src=\"images/icon/elements/Radiant.png\" alt=\"\"><p id=\"hunt-element-weak\" class=\"info-text\"></p></span></div><div id=\"hunt-threat\" class=\"threat-wrap\"><p id=\"hunt-info-text\" class=\"info-text\" style=\"font-weight: 700\">Threat :</p><span class=\"threat\"><p id=\"hunt-threat-text\" class=\"info-text\" style=\"font-weight: 800\"></p></span></div>"



var elementalResistance_head = "<span id=\"head-resist\" class=\"element\">+<img id=\"head-element-img\" src=\"images/icon/elements/Umbral.png\" alt=\"\" style=\"width:18px;margin-left: 2.5px;margin-right: 2.5px;\"><span><p id=\"head-element\" class=\"info-text\"></p></span></span><span id=\"head-weak\" class=\"element-weak\">-<img id=\"head-element-weak-img\" src=\"images/icon/elements/Radiant.png\" alt=\"\" style=\"width:18px;margin-left: 2.5px;margin-right: 2.5px;\"><span><p id=\"head-element-weak\" class=\"info-text\"></p></span></span>"
var elementalResistance_torso = "<span id=\"torso-resist\" class=\"element\">+<img id=\"torso-element-img\" src=\"images/icon/elements/Umbral.png\" alt=\"\" style=\"width:18px;margin-left: 2.5px;margin-right: 2.5px;\"><span><p id=\"torso-element\" class=\"info-text\"></p></span></span><span id=\"torso-weak\" class=\"element-weak\">-<img id=\"torso-element-weak-img\" src=\"images/icon/elements/Radiant.png\" alt=\"\" style=\"width:18px;margin-left: 2.5px;margin-right: 2.5px;\"><span><p id=\"torso-element-weak\" class=\"info-text\"></p></span></span>"
var elementalResistance_arms = "<span id=\"arms-resist\" class=\"element\">+<img id=\"arms-element-img\" src=\"images/icon/elements/Umbral.png\" alt=\"\" style=\"width:18px;margin-left: 2.5px;margin-right: 2.5px;\"><span><p id=\"arms-element\" class=\"info-text\"></p></span></span><span id=\"arms-weak\" class=\"element-weak\">-<img id=\"arms-element-weak-img\" src=\"images/icon/elements/Radiant.png\" alt=\"\" style=\"width:18px;margin-left: 2.5px;margin-right: 2.5px;\"><span><p id=\"arms-element-weak\" class=\"info-text\"></p></span></span>"
var elementalResistance_legs = "<span id=\"legs-resist\" class=\"element\">+<img id=\"legs-element-img\" src=\"images/icon/elements/Umbral.png\" alt=\"\" style=\"width:18px;margin-left: 2.5px;margin-right: 2.5px;\"><span><p id=\"legs-element\" class=\"info-text\"></p></span></span><span id=\"legs-weak\" class=\"element-weak\">-<img id=\"legs-element-weak-img\" src=\"images/icon/elements/Radiant.png\" alt=\"\" style=\"width:18px;margin-left: 2.5px;margin-right: 2.5px;\"><span><p id=\"legs-element-weak\" class=\"info-text\"></p></span></span>"



var asdads = "<br><div id=\"head-resistance\" class=\"element-wrap\"><p id=\"head-info-text\" class=\"info-text\" style=\"font-weight: 700\">Resistance :</p></div><div class=\"perk-wrap\"><p class=\"info-text\">Perk :</p><span class=\"perk\"><img id=\"head-perk-img\" src=\"\" alt=\"\"><p id=\"head-perk-name\" class=\"info-text\"></p></span></div>"

var repeater_slot = "<div id=\"repeater-slot\" class=\"row spacing\"><div class=\"column info1\"><img id=\"repeater-img\" src=\"images/icon/question.png\" alt=\"\"></div>  <div class=\"column info2\"><div><div class=\"item-display\"><p id=\"repeater-name\" class=\"title-text\"></p></div><div></div></div></div><div class=\"column info3\"><div class=\"cell-wrap-1\"><span class=\"cell-1\"><img id=\"repeater-cell-1-img\" src=\"\" alt=\"\"><p id=\"repeater-cell-1-name\" class=\"cell-1-info\">Cell Slot 1</p></span></div><div class=\"cell-divider\"></div><div class=\"cell-wrap-2\"><span class=\"cell-1\"><img id=\"repeater-cell-2-img\" src=\"\" alt=\"\"><p id=\"repeater-cell-2-name\" class=\"cell-1-info\">Cell Slot 2</p></span></div></div></div>"

var repeater_barrel_slot = "<div id=\"repeater-barrel-slot\" class=\"row spacing\"><div class=\"column info1\"><img id=\"repeater-barrel-img\" src=\"images/icon/question.png\" alt=\"\"></div><div class=\"column info2\"><div><div class=\"item-display\"><p id=\"repeater-barrel-name\" class=\"title-text\">Barrel</p></div><br><div class=\"element-wrap\"><p class=\"info-text\" style=\"font-weight: 700\">Elemental Power :</p><span class=\"element\"><img id=\"repeater-barrel-element-img\" src=\"\" alt=\"\" style=\"width:18px;margin-left: 2.5px;margin-right: 2.5px;\"><span><p id=\"repeater-barrel-element\" class=\"info-text\"></p></span></span></div><div><p id=\"repeater-barrel-desc\" class=\"description-text\"></p></div></div></div></div> "

var repeater_chamber_slot = "<div id=\"repeater-chamber-slot\" class=\"row spacing\"><div class=\"column info1\"><img id=\"repeater-chamber-img\" src=\"images/icon/question.png\" alt=\"\"></div><div class=\"column info2\"><div><div class=\"item-display\"><p id=\"repeater-chamber-name\" class=\"title-text\">Chamber</p></div><div><p id=\"repeater-chamber-desc\" class=\"description-text\"></p></div></div></div></div>"

var repeater_grip_slot = "<div id=\"repeater-grip-slot\" class=\"row spacing\"><div class=\"column info1\"><img id=\"repeater-grip-img\" src=\"images/icon/question.png\" alt=\"\"></div><div class=\"column info2\"><div><div class=\"item-display\"><p id=\"repeater-grip-name\" class=\"title-text\">Grip</p></div><div><p id=\"repeater-grip-desc\" class=\"description-text\"></p></div></div></div></div>"

var repeater_prism_slot = "<div id=\"repeater-prism-slot\" class=\"row spacing\"><div class=\"column info1\"><img id=\"repeater-prism-img\" src=\"images/icon/question.png\" alt=\"\"></div><div class=\"column info2\"><div><div class=\"item-display\"><p id=\"repeater-prism-name\" class=\"title-text\">Prism</p></div><div><p id=\"repeater-prism-desc\" class=\"description-text\"></p></div></div></div></div>"

var special_slot = " <div id=\"special-slot\" class=\"row spacing\"><div class=\"column info1\"><img id=\"wep-spcl-img\" src=\"images/icon/question.png\" alt=\"\"></div><div class=\"column info2\"><div><div class=\"item-display\"><p id=\"wep-spcl-name\" class=\"title-text\">Special</p></div><div><p id=\"wep-spcl-desc\" class=\"description-text\"></p></div></div></div></div> "

var weapon_slot = "<div id=\"weapon-slot\" class=\"row spacing\"><div class=\"column info1\"><img id=\"wep-img\" src=\"\" alt=\"\"></div><div class=\"column info2\"><div><div class=\"item-display\"><p id=\"wep-name\" class=\"title-text\">Weapons</p></div><div id=\"startUp\"></div></div></div><div class=\"column info3\"><div class=\"cell-wrap-1\"><span class=\"cell-1\"><img id=\"wep-cell-1-img\" src=\"images/icon/question.png\" alt=\"\"><p id=\"wep-cell-1-name\" class=\"cell-1-info\">Cell Slot 1</p></span></div><div class=\"cell-divider\"></div><div class=\"cell-wrap-2\"><span class=\"cell-1\"><img id=\"wep-cell-2-img\" src=\"images/icon/question.png\" alt=\"\"><p id=\"wep-cell-2-name\" class=\"cell-1-info\">Cell Slot 2</p></span></div></div></div>"


