# Sorteio de Nomes



## Descrição
Este é um projeto simples e eficiente para sorteio de nomes, desenvolvido com HTML, CSS e JavaScript puro. Nele, o usuário pode adicionar nomes a uma lista e realizar um sorteio aleatório. O nome selecionado é exibido na tela e automaticamente removido da lista, garantindo que não seja sorteado novamente.  

**Desafio One Oracle – Challenge Amigo Secreto**  
📅 5 de fevereiro de 2025

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript

## Capturas de Tela
### Tela Inicial

![Página Inicial](/images/inicial_lista_com_sorteado.png)

### Após Adicionar Nomes
![Página Inicial](/images/inicial_lista_com_sorteado.png)

### Após o Sorteio
![Página Inicial](/images/inicial_lista_com_sorteado.png)

## Como Usar
1. Digite um nome no campo de entrada.
2. Clique no botão "Adicionar" para inseri-lo na lista.
3. Para sortear um nome, clique no botão "Sortear Amigo".
4. O nome sorteado será exibido na tela e removido da lista.

## Como Gerar Erros
Para testar o sistema de validação e mensagens de erro:

1. **Nome em branco:** Tente adicionar um nome sem digitar nada e veja o alerta.
2. **Nome iniciando com número:** Tente adicionar um nome que comece com um número (exemplo: "123Carlos") e veja o alerta.
3. **Sortear com lista vazia:** Clique em "Sortear Amigo" quando não houver nomes na lista para ver o alerta de erro.

### Mensagens de Erro Esperadas

![Nome em branco](/images/nome_branco.png)
![Nome iniciando com número](/images/nome_comeca_numero.png)
![Sortear com lista vazia](/images/lista_vazia.png)

## Estrutura do Projeto
```
/sorteio-de-nomes
│-- index.html
│-- app.js
│-- assets/
│   │-- styles.css
```

## Como Executar o Projeto
1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` em um navegador.

---
Criado por Fabio Romero de Souza Junior

