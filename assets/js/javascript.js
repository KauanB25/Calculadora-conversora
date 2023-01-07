let operador=0
let html_resultado=document.getElementById('resultado')
let ver_num=true
let contador=0

function inserir(num,opera=false){
    if(num==',' && ver_num==true){
        return html_resultado.innerHTML;
    }else{
        if(num==',' && ver_num==false){   
        if(contador>=1){
            return html_resultado.innerHTML;
            }
            contador+=1;}
        }
    
    if(opera==true){
        operador+=1
        contador=0
        if(operador>=2){
            calcular()
        }
        opera=false
    }
    
    var numero = html_resultado.innerHTML;
    html_resultado.innerHTML = numero + num;
    ver_num=isNaN(num)
    }

function limpar(num){
    html_resultado.innerHTML=""
    operador=0
    ver_num=true
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
                html_resultado.innerHTML = eval(real);
            }
            operador-=1
        }

