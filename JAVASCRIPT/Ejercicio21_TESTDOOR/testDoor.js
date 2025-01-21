// Comprobar la puerta

function testDoor_01() {
    console.log('Comprobando la puerta 01....')
    return false;
}

function testDoor_02() {
    console.log('Comprobando la puerta 02....')
    return true;
}

if (testDoor_01() == true & testDoor_02() == true) {
    console.log('Todo OK');
} else {
    console.log('Hay un error en alguna puerta');
}

if (testDoor_01() ^ testDoor_02()) { // OR exclusivo (sólo puede ser cierta una opción.)
    console.log('Todo OK');
} else {
    console.log('Hay un error en alguna puerta');
}