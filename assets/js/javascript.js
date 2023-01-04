let operador=0


function inserir(num,opera=false, multi=false){
    if(opera==true){
        operador+=1
        if(operador>=2){
            calcular()
        }
        opera=false
    }
    
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    console.log(multi)
    }

function limpar(num){
    document.getElementById('resultado').innerHTML=""
    operador=0
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
                let real=resultado.replace('x','*');
                real=real.replace(',','.');
                console.log(real);
                document.getElementById('resultado').innerHTML = eval(real);
            }
            
            operador-=1
        }

