
const palavroesMaiusculo = require('../../public/js/palavroes').map((palavrao) => palavrao.toUpperCase());

exports.home = async function(req, res) {
    res.render('index', { title: 'Analisador de Texto' });
};

exports.filter = async function(req, res) {
    const textoMaiusculoDividido = req.body.texto.toUpperCase().split(' ');
    const textoMaiusculoDivididoPorEnter = req.body.texto.toUpperCase().split('\r\n');
    console.log(textoMaiusculoDividido);

    let conteudosImproprios = 0;
    let conteudosEncontrados = [];

    /* *****
    *   Vai passar por cada valor do array palavroesMaiusculo, verificando se o texto enviado o inclui
    ********/
    palavroesMaiusculo.forEach( palavrao => {

        if( textoMaiusculoDividido.includes(palavrao)){
            palavraoCapitalizado = palavrao[0].toUpperCase() + palavrao.substring(1).toLowerCase();
            conteudosImproprios++;
            conteudosEncontrados.push(palavraoCapitalizado);
        }
        
        if(textoMaiusculoDivididoPorEnter.includes(palavrao)){
            palavraoCapitalizado = palavrao[0].toUpperCase() + palavrao.substring(1).toLowerCase();
            conteudosImproprios++;
            conteudosEncontrados.push(palavraoCapitalizado);
        }
        
    });

    if(conteudosImproprios > 0){
        res.render('detected', { title: 'Detectado', conteudos: conteudosEncontrados, quantidade: conteudosImproprios, texto: req.body.texto });
    } else {
        res.render('notDetected', { title: 'Não detectado', texto: req.body.texto });
    }

};