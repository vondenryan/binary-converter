# 🔄 Conversor Binário

## 📌 Sobre o Projeto

O **Conversor Binário** é uma aplicação web interativa que permite converter textos para código binário e vice-versa. É uma ferramenta educacional e prática para entender melhor a representação binária de caracteres e trabalhar com sistemas de codificação.

A aplicação é desenvolvida com **HTML**, **CSS** e **JavaScript**, oferecendo uma interface intuitiva e responsiva.

---

## 🎯 Descrição Geral dos Códigos

### **converter.js**
Arquivo contendo as funções principais de conversão entre sistemas numéricos e textuais:
- Funções puras e independentes
- Sem dependências externas
- Lógica matemática para conversões binária/decimal
- Conversão de caracteres para código binário usando UTF-8

### **main.js**
Arquivo responsável pela interação com o usuário:
- Gerencia eventos de clique dos botões
- Captura inputs em tempo real
- Valida entradas antes de processar
- Comunica com as funções do `converter.js`

### **index.html**
Estrutura da interface:
- Dois campos de texto (para entrada de texto e código binário)
- Três botões de ação
- Semântica HTML adequada
- Localizado em português (pt-br)

### **style.css**
Estilização visual (38.3% do repositório):
- Design moderno e profissional
- Responsividade para diferentes dispositivos
- Paleta de cores harmoniosa
- Efeitos visuais e transições suaves

---

## 📚 Funções Disponíveis

### 1. `binary_to_decimal(binary)`
Converte um número binário (string) para seu equivalente em decimal.

**Parâmetros:**
- `binary` (string): O número binário a ser convertido (ex: "01001010")

**Retorno:**
- `number`: O equivalente decimal (ex: 74)

**Como Usar:**
```javascript
let resultado = binary_to_decimal("01001010");
console.log(resultado); // Output: 74
```

**Detalhes da Implementação:**
- Percorre a string de trás para frente
- Multiplica cada bit pela potência correspondente de 2
- Soma todos os valores para obter o resultado final

---

### 2. `decimal_to_binary(decimal)`
Converte um número decimal em sua representação binária (string com padding de 8 bits).

**Parâmetros:**
- `decimal` (number): O número decimal a ser convertido (ex: 74)

**Retorno:**
- `string`: O equivalente binário com no mínimo 8 dígitos (ex: "01001010")

**Como Usar:**
```javascript
let resultado = decimal_to_binary(74);
console.log(resultado); // Output: "01001010"
```

**Detalhes da Implementação:**
- Usa divisão sucessiva por 2 para obter os dígitos binários
- Acumula o resto das divisões da direita para esquerda
- Adiciona zeros à esquerda até completar 8 dígitos

---

### 3. `string_to_binary(txt)`
Converte um texto (string) em seu equivalente em código binário, com cada caractere separado por espaço.

**Parâmetros:**
- `txt` (string): O texto a ser convertido (ex: "Oi")

**Retorno:**
- `string`: Código binário dos caracteres separados por espaço (ex: "01001111 01101001")

**Como Usar:**
```javascript
let resultado = string_to_binary("Oi");
console.log(resultado); // Output: "01001111 01101001"
```

**Detalhes da Implementação:**
- Obtém o código ASCII/Unicode de cada caractere usando `charCodeAt()`
- Converte cada código para binário usando `decimal_to_binary()`
- Concatena todos os códigos binários separados por espaço

---

### 4. `binary_to_string(binaryString)`
Converte uma string contendo códigos binários (separados por espaço) de volta para texto legível.

**Parâmetros:**
- `binaryString` (string): Códigos binários separados por espaço (ex: "01001111 01101001")

**Retorno:**
- `string`: O texto original (ex: "Oi")

**Como Usar:**
```javascript
let resultado = binary_to_string("01001111 01101001");
console.log(resultado); // Output: "Oi"
```

**Detalhes da Implementaç��o:**
- Divide a string de entrada pelo espaço
- Converte cada código binário para decimal
- Transforma cada decimal em seu caractere correspondente usando `String.fromCharCode()`
- Concatena todos os caracteres para formar o texto original

---

## 🚀 Como Usar a Aplicação Web

1. **Digite um Texto:** Insira o texto desejado no campo "Texto Comum"
2. **Converta para Binário:** Clique em "Texto para Binário ↓" ou simplesmente digite no campo de texto
3. **Veja o Resultado:** O código binário aparecerá automaticamente no campo inferior
4. **Converta de Volta:** Digite ou cole código binário no campo inferior e clique "Binário para Texto ↑"
5. **Limpe os Campos:** Clique em "Limpar Tudo" para resetar a aplicação

---

## 💡 Exemplos Práticos

### Exemplo 1: Convertendo "A"
```
Entrada: "A"
Conversão: A tem código ASCII 65
65 em binário = 01000001
Output: "01000001"
```

### Exemplo 2: Convertendo "Hello"
```
Entrada: "Hello"
H = 72 = 01001000
 e = 101 = 01100101
 l = 108 = 01101100
 l = 108 = 01101100
 o = 111 = 01101111
Output: "01001000 01100101 01101100 01101100 01101111"
```

---

## 🎨 Composição do Repositório

- **CSS:** 38.3% - Estilização e design responsivo
- **JavaScript:** 37.6% - Lógica de conversão e interação
- **HTML:** 24.1% - Estrutura e semântica

---

## 📖 Referências

A conversão binária é fundamental em computação, pois os computadores trabalham nativamente com sistema binário. Cada caractere é representado por um número em binary, permitindo armazenamento e transmissão eficiente de dados.