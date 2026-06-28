// priority: 50

ServerEvents.recipes(event =>{

    event.remove({output:'crafting_table'});
    event.remove({output:'furnace'});
    event.remove({mod:'pipez'});
    event.remove({output:'bloodmagic:altar'});
    event.remove({type:'bloodmagic:altar'});


    event.replaceInput({output:'mekanism:metallurgic_infuser'},'minecraft:redstone','mekanism:alloy_infused');
    event.replaceInput({},'#balm:wooden_rods','#forge:rods');

});