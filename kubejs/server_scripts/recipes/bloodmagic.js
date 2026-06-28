ServerEvents.recipes(event =>{

    event.custom({
        "type": 'bloodmagic:altar',
        "input": {
        "tag": "forge:gems/diamond"
        },
        "output": {
            "item": "bloodmagic:weakbloodorb"
        },
        "upgradeLevel": 0,
        "altarSyphon": 2000,
        "consumptionRate": 5,
        "drainRate": 1
    });

})