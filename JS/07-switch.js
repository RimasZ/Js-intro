console.clear();
/*  
SWITCH (panasus i if)
*/
const diena = 2;
switch (diena){
    case 1:
        console.log('pirmadienis');
        break;
    case 2:
        console.log('antradienis');
        break;
    case 3:
        console.log('treciadienis');
        break;
    case 4:
        console.log('ketvirtadienis');
        break;
    case 5:
        console.log('penktadienis');
        break;
    case 6:
        console.log('sestadienis');
        break;
    case 7:
        console.log('sekmadienis');
        break;
    default:
        console.log('tokios dienos nera');
}

const day = 1;

const gamybosEtapas = 1;

switch (gamybosEtapas){
    case 1:
        console.log('pasiimti puodeli');
        break;
    case 2:
        console.log('isideti arbatos');
        break;
    case 3:
        console.log('isideti cukru');
        break;
    case 4:
        console.log('isipilti vandes');
        break;
    case 5:
        console.log('gerti');
    default:
        console.log('tokio etapo nera');
        break;
}
console.log('------------------------------');
const stotele = 'Parko';

switch (stotele) {
    case 'Parko':
        console.log('Parko stotele')
        
    case 'geniu':
        console.log('geniu stotele')
        
    case 'Tremtiniu':
        console.log('Tremtiniu stotele')
        
    case 'Rudens':
        console.log('Rudens stotele')
        
    case 'Karaliaus Mindaugo':
        console.log('Karaliaus Mindaugo stotele')
        
    case 'Zaliasis tiltas':
        console.log('Zaliasis tiltas stotele')
        break;
    case 'Lvovo':
        console.log('Lvovo stotele')
    case 'Vasaros':
        console.log('Vasaros stotele') 
    case 'Rudens2':
        console.log('Rudens2 stotele')
    case 'Tremtiniu2':
        console.log('Tremtiniu2 stotele')
    case 'Geniu2':
        console.log('Geniu2 stotele')
    case 'Ziedas':
        console.log('Ziedas stotele')
        break;
    default:
        break;
}