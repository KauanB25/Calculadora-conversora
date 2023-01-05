let operador=0
let html_resultado=document.getElementById('resultado')

function inserir(num,opera=false, multi=false){
    if(opera==true){
        operador+=1
        if(operador>=2){
            calcular()
        }
        opera=false
    }
    
    var numero = html_resultado.innerHTML;
    html_resultado.innerHTML = numero + num;
    console.log(multi)
    }

function limpar(num){
    html_resultado.innerHTML=""
    operador=0
}

function reset()
        {
            var resultado = html_resultado.innerHTML;
            html_resultado.innerHTML = resultado.substring(0, resultado.length -1);
        }
function calcular()

        {   
            var resultado = html_resultado.innerHTML;
            if(resultado)
            {
                let real=resultado.replace('x','*');
                real=real.replace(',','.');
                console.log(real);
                html_resultado.innerHTML = eval(real);
            }
            
            operador-=1
        }

