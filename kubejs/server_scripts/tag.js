// priority: 50

ServerEvents.tags('item', (event) => {
    event.add('zti:pipez_pipe_basic', ['pipez:item_pipe','pipez:fluid_pipe','pipez:energy_pipe','pipez:gas_pipe']);
});