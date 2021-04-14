import modalBehavior from './modalBehavior';
import textInputInteraction from './textInputInteraction';
import loadProject from './loadProject';

window.addEventListener('load', () => {
    textInputInteraction();
    modalBehavior();
    loadProject();
});