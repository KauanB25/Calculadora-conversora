let operador=0
let real=''

function inserir(num,opera=false, multi=false){
    //console.log(operador)
    if(opera==true){
        operador+=1
        if(operador>=2){
            calcular()
        }
        opera=false
    }
    //console.log(operador)
    
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    console.log(multi)
    }


function limpar(num){
    document.getElementById('resultado').innerHTML=""
    operador=0
}
/*function multiplicar(num){
    const resultado_anterior= document.getElementById('resultado').textContent
    inserir('x')
    console.log(resultado_anterior)
    let visor= resultado_anterior.innerHTML
    let real=resultado_anterior + '*'
    console.log(real)

}*/
function reset()
        {
            var resultado = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
        }
function calcular()

        {   
            var resultado = document.getElementById('resultado').innerHTML;
            if(resultado)
            {
                let real=resultado.replace('x','*');
                real=real.replace(',','.');
                console.log(real);
                document.getElementById('resultado').innerHTML = eval(real);
            }
            else
            {
                document.getElementById('resultado').innerHTML = "Nada..."
            }
            operador-=1
        }

var test = document.getElementById('botao_reset');
console.log(test.outerText)