let operador=0


function inserir(num,opera=false){
    console.log(operador)
    if(opera==true){
        operador+=1
        if(operador>=2){
            calcular()
        }
        opera=false
    }
    console.log(operador)
    
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;}


function limpar(num){
    document.getElementById('resultado').innerHTML=""
}
function multiplicar(num){
    const resultado_anterior= document.getElementById('resultado').textContent
    inserir('x')
    console.log(resultado_anterior)
    let visor= resultado_anterior.innerHTML
    let real=resultado_anterior + '*'
    console.log(real)

}
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
                document.getElementById('resultado').innerHTML = eval(resultado);
            }
            else
            {
                document.getElementById('resultado').innerHTML = "Nada..."
            }
            operador-=1
        }

var test = document.getElementById('botao_reset');
console.log(test.outerText)