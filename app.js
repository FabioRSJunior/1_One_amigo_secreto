let nomes = [];

function adicionarNome() {
    const nomeInput = document.getElementById('nomeInput');
    const nome = nomeInput.value.trim();
    if (nome === "") {
        alert("O nome não pode estar em branco!");
    } else if (/^\d/.test(nome)) {
        alert("O nome não pode começar com um número!");
    } else {
        nomes.push(nome);
        nomeInput.value = "";
        atualizarLista();
    }
}
function atualizarLista() {
    const nomeLista = document.getElementById('nomeLista');
    nomeLista.innerHTML = "";
    nomes.forEach((nome) => {
        const li = document.createElement('li');
        li.textContent = nome;
        nomeLista.appendChild(li);
    });
}
function sortearNome() {
    if (nomes.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * nomes.length);
        const nomeSorteado = nomes.splice(indiceAleatorio, 1)[0];
        document.getElementById('nomeSorteado').textContent = nomeSorteado;
        atualizarLista();
    } else {
        alert('A lista está vazia!');
    }
}
