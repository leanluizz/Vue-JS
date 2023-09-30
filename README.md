# Documentação do Projeto Sales com a Diretiva `v-money`

## Visão Geral

Este projeto Vue.js demonstra a criação e uso de uma diretiva personalizada chamada `v-money`. A diretiva `v-money` foi criada para formatar valores como moeda (dinheiro) de acordo com o padrão monetário desejado.

### Tecnologias Utilizadas

- Vue.js
- HTML/CSS
- JavaScript

## Configuração do Projeto

Para configurar e executar o projeto, siga as etapas abaixo:

1. **Instalação do Vue.js**: Certifique-se de que o Vue.js esteja instalado no seu ambiente. Caso não esteja, você pode instalá-lo usando o seguinte comando:

   ```bash
   npm install -g vue
   ```

2. **Clone o Repositório**: Clone este repositório em sua máquina local.

   ```bash
   git clone https://github.com/seu-usuario/seu-projeto-vue-money.git
   ```

3. **Instale as Dependências**: Acesse a pasta do projeto e instale as dependências usando o comando:

   ```bash
   npm install
   ```

4. **Execute o Projeto**: Inicie o servidor de desenvolvimento para executar o projeto localmente.

   ```bash
   npm run serve
   ```

5. **Acesse a Aplicação**: Abra seu navegador e acesse `http://localhost:8080` para visualizar a aplicação.

## Uso da Diretiva `v-money`

A diretiva `v-money` foi criada para formatar valores monetários de acordo com o padrão desejado (por exemplo, R$, US$, etc.). Aqui está como você pode usá-la em seus componentes Vue:

1. Importe a diretiva em seu componente:

   ```javascript
   import money from '@/diretivas/v-money';
   ```

2. Registre a diretiva em seu componente:

   ```javascript
   export default {
     directives: {
       money,
     },
     // ...
   }
   ```

3. Use a diretiva em elementos HTML para formatar valores monetários:

   ```html
   <span v-money="'R$'">{{ valor }}</span>
   ```

   A diretiva `v-money` aceita um argumento que representa o símbolo da moeda desejado, que será exibido antes do valor.

## Exemplo de Uso

Aqui está um exemplo completo de como usar a diretiva `v-money` em um componente Vue:

```vue
<template>
  <div>
    <h1>Exemplo de Uso da Diretiva v-money</h1>
    <p>Valor formatado: <span v-money="'R$'">{{ valor }}</span></p>
  </div>
</template>

<script>
import money from '@/diretivas/v-money';

export default {
  directives: {
    money,
  },
  data() {
    return {
      valor: 1234.56,
    };
  },
};
</script>
```

## Contribuição

Se desejar contribuir para este projeto, sinta-se à vontade para abrir issues ou enviar pull requests. Sua contribuição é bem-vinda!

## Autor

- [Leandro Luiz](https://github.com/leanluizz)

Esta documentação fornece uma visão geral do projeto Vue.js com a diretiva `v-money` e como usá-la em seus componentes Vue para formatar valores monetários. Certifique-se de personalizar a documentação de acordo com as necessidades e detalhes específicos do seu projeto.
