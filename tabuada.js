function gerar_tabuada(){
    let num = document.getElementById('numero');
    let tab = document.getElementById('seltab');

    if (num.value.length === 0) {
        alert('Por favor, insira um número!');
        return;
    }
    let n = Number(num.value);
    tab.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        let item = document.createElement('option');
        item.text = `${n} x ${i} = ${n*i}`;
        tab.appendChild(item);
    }
}