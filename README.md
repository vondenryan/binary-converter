# Conversor de Texto e Binário 🔤💻

![Language: JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)

Um conversor simples que transforma texto em binário e binário em texto, usando JavaScript puro. Ideal para estudos de sistemas de numeração, manipulação de strings ou pequenos projetos educativos.

---

## 🚀 Funcionalidades

- **Converter texto para binário:** Cada caractere da string é convertido em sua representação binária.  
- **Converter binário para texto:** Uma sequência de números binários separados por espaço é convertida de volta em texto.  
- **Limpar campos:** Reseta os campos de entrada de texto e binário com um clique.

---

## 🛠 Tecnologias

- HTML  
- CSS  
- JavaScript

---

## 📂 Estrutura do Código

### Funções de Conversão (`converter.js`)

- `binary_to_decimal(binary)`: Converte um número binário em decimal.  
- `decimal_to_binary(decimal)`: Converte um número decimal em binário.  
- `string_to_binary(txt)`: Converte uma string de texto em binário, separando cada caractere por espaço.  
- `binary_to_string(binaryString)`: Converte uma sequência de binários de volta para texto.

### Interação com o HTML (`script.js`)

- Botões de ação:
  - **Converter para binário**
  - **Converter para texto**
  - **Limpar campos**
- Inputs:
  - Campo de texto para entrada de palavras ou frases.  
  - Campo de binário para entrada de códigos binários.

---

## 📖 Como Usar

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/conversor-texto-binario.git
```

Abra o arquivo index.html em seu navegador.

Insira o texto no campo de entrada e clique em Converter para binário.
Ou insira um código binário e clique em Converter para texto.

Clique em Limpar para resetar os campos.

💡 Exemplo de Uso

Texto:

```bash
Olá
```

Binário gerado:

```bash
1001111 1100000 1100011
```

Conversão de volta para texto:

```bash
Olá
```