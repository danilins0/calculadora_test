
const fm = document.getElementById('frm');
const nmr = document.getElementById('vlr');
const nmr2 = document.getElementById('vlr2');

const div = document.createElement('button');
div.textContent = 'Divisão';
const mul = document.createElement('button');
mul.textContent = 'Multiplicação';
const adc = document.createElement('button');
adc.textContent = 'Adição';
const sub = document.createElement('button');
sub.textContent = 'Subtração';
const msg = document.createElement('h3');
const num = Number(nmr.value);
const num2 = Number(nmr2.value);

fm.appendChild(msg);
fm.appendChild(div);
fm.appendChild(sub);
fm.appendChild(adc);
fm.appendChild(mul);

fm.addEventListener('submit', function(e){
    e.preventDefault();
});

div.addEventListener('click', function(){
    const num = Number(nmr.value);
    const num2 = Number(nmr2.value);
    msg.textContent = 'Resultado: ' + (num / num2);
});

mul.addEventListener('click', function(){
    const num = Number(nmr.value);
    const num2 = Number(nmr2.value);
    msg.textContent = 'Resultado: ' + (num * num2);
});

adc.addEventListener('click', function(){
    const num = Number(nmr.value);
    const num2 = Number(nmr2.value);
    msg.textContent = 'Resultado: ' + (num + num2);
});

sub.addEventListener('click', function(){
    const num = Number(nmr.value);
    const num2 = Number(nmr2.value);
    msg.textContent = 'Resultado: ' + (num - num2);
});