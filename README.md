</h1>

<img src="https://user-images.githubusercontent.com/104467309/188473729-68d7615b-64dd-4478-b44d-1484b4db4141.png" width="250px"> 

</h1>

</h1>
<h1 align="center">

<img src="https://user-images.githubusercontent.com/104467309/188472249-f6d8df01-1aeb-4671-8b28-b48e2fa9396d.svg" width="350px">

</h1>

</h1>
<h1 align="center">
 
Estratégia de Testes
 </h1>

A estratégia de testes para o site Samurai Barbershop é dividida em três etapas: processo(cultura), testes exploratórios(manuais) e testes automatizados.

## Processos de documentação

Nesta etapa vamos buscar o entendimento necessário para a criação da estratégia de teste, organização e documentação dos cenários.


## Testes manuais exploratório no site

Engloba uma bateria de testes manuais, principalmente exploratórios no site, testando os fluxos e buscando por inconsistências que possam atrapalhar o fluxo de usuário.

Garantindo também um melhor e maior conhecimento dos fluxos existentes, tantos os fluxos de sucesso como também entendimento sobre os casos de falha.

Essa bateria de testes geralmente é a mais lenta, mas nos proporciona confiança acima de todas as outras estratégias e nos faz ter certeza de que nosso usuário estará recebendo a experiência planejada pelo time de produto.

## Testes automatizados

Os testes automatizados têm a função principal de verificar se o sistema está funcionando como deveria, mas não só isso, visto que por testes manuais também geramos esses resultados. A questão é que os testes manuais são lentos, maçantes e propensos a erros. A automação vem pra aliviar um pouco desses problemas. Visto que no dia a dia desejamos realizar entregas com velocidade sem perder o nível de qualidade, os testes devem:

· Nós dar confiança que o código faz o que deveria fazer;

· Dar feedback rápido, confiável e preciso;

· Ser uma rede de proteção, garantindo que os engenheiros possam alterar e melhorar o código sem a preocupação de quebrar funções já existentes.

<img align="leaft" alt="Gif" height="500" width="1000" style="border-radius:50px;"  src="https://user-images.githubusercontent.com/104467309/189445396-bdffb13e-b50f-44c9-9fac-03be9262954a.gif">

 ## Organização do Projeto  

```ruby
   ├── .github/workflows                  
     ├── cypress.yml                     # Arquivos do Github Actions para executar o CI.
   ├── cypress 
     ├── fixtures                        # Massa de testes.
     ├── integration  
        ├── dash.spec.js                 # Suite de teste para agendamento de cliente.
        ├── login.spec.js                # Suite de teste para tela de login. 
        ├── onair.spec.js                # Suite de teste para webapp online.
        ├── signup.spec.js               # Suite de teste para tela de cadastro.
        ├── recoverypass.spec.js         # Suite de teste para troca de senha.
     ├── plugins                         # implementação page object.
     ├── support                         # implementação page object.
   ├── README.md                         # Documentação do projeto.          
   ├── cypress.json                      # configuração para a execução do cypress.            
   └── package.json                      # configuração para a execução do cypress.                       
```   
## Continuos Test
Com `Github Actions` criamos uma [PIPE](https://github.com/paulinrs/SamuraiBarbershopCypress/actions/workflows/chrome-ui-tests-.yml), que executa nosso projeto de automação a cada `PUSH`.<br/> 
Podendo ser executado também manualmente no menu de Actions!<br/> 


![Github-Actions](https://user-images.githubusercontent.com/104467309/194901959-d44f12dc-b462-409f-8fcd-f265932f6e41.jpg)

## Por quê utilizar o Cypress?

`Cypress` é um framework de testes, de código aberto e de fácil configuração.
Totalmente baseado em uma nova arquitetura, isenta de outros frameworks de testes, o Cypress apresenta um painel próprio que exibe exatamente o que está acontecendo durante a execução dos testes. À medida que o script é escrito, é possível acompanhá-lo, o que auxilia o Analista de Testes (QA) na visualização de quais partes do código necessitam de ajustes.

![Dashboard-Cypress](https://user-images.githubusercontent.com/104467309/194905032-1920d698-f21c-45dc-bcbe-b626a5f6d18f.gif)

O `CI` esta integrado com o `Cypress Dashboard` enviando os logs resultado dos testes com `evidências ex: video e screenshots` para armazenamento.<br/> 
## Meu projeto no `Cypress.io`=> [Samurai Barber Shop](https://dashboard.cypress.io/projects/jq4ae3/runs/1/specs)

## :hammer_and_wrench: Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Insomnia](https://insomnia.rest/download)

## :checkered_flag: Dependências para executar localmente

- Ter uma IDE de sua preferência
- instalar o node.js [Download](https://nodejs.org/dist/v16.17.0/node-v16.17.0-x64.msi)
- Instalar cypress: => `npm i cypress@9.7.0 -D`


## Executando o projeto

> Clone o projeto
`git clone git@github.com:paulinrs/SamuraiBarbershopCypress.git`

## Instruções de execução 
Use o comando listado abaixo no terminal, diretamente na pasta raiz:

`npx cypress open`

Depois da interface do Cypress aberta escolher a pasta do projeto.

Após isso, é só escolher a `spec` desejada e assistir a execução dos testes.



## Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/GustavoMachado22">
        <img src="https://avatars.githubusercontent.com/u/104467309?v=4" width="100px;" alt="Paulo Roberto"/>
        <br />
        <sub>
          <b>Paulo Roberto</b>
        </sub>
       </a>
       <br />
    </td>
  </tr>
</table>
 
 # 📫 Contato:
  <a href="https://www.instagram.com/paulinnrs/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
  <a href = "mailto:paulinn.rs@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/paulinnrs/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
   <a href="https://twitter.com/paulin_rs/" target="_blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" target="_blank"></a>

