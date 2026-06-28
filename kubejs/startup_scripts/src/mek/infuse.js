let InfuseType = Java.loadClass('mekanism.api.chemical.infuse.InfuseType');
let InfuseTypeBuilder = Java.loadClass('mekanism.api.chemical.infuse.InfuseTypeBuilder');

StartupEvents.registry('mekanism:infuse_type', event => {
    
    event.create('zti:blood')
        .displayName('血') 
        .color('0x700000')

    event.create('zti:blood_unstable')
        .displayName('不稳定血') 
        .color('0xd0305d')
})