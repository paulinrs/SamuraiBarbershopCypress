</h1> <img src="https://user-images.githubusercontent.com/104467309/188473729-68d7615b-64dd-4478-b44d-1484b4db4141.png" width="250px"> 
 
 
<div align=> 
<img src="https://user-images.githubusercontent.com/104467309/188472249-f6d8df01-1aeb-4671-8b28-b48e2fa9396d.svg" width="350px">

  
# DESAFIO
 

 O desafio tem como objetivo avaliar o planejamento na criação de casos
de testes e depois a Automatização dos Testes.


# Estratégia de testes para Samurai Barbershop


A estratégia de testes para o site Samurai Barbershop é dividida em três etapas: processo(cultura), testes exploratórios(manuais) e testes automatizados.

## Processos de documentação

Nesta etapa vamos buscar o entendimento necessário para a criação da estratégia de teste, organização e documentação dos cenários.
`

## Testes manuais exploratório no site

Engloba uma bateria de testes manuais, principalmente exploratórios no site, testando os fluxos e buscando por inconsistências que possam atrapalhar o fluxo de usuário.

Garantindo também um melhor e maior conhecimento dos fluxos existentes, tantos os fluxos de sucesso como também entendimento sobre os casos de falha.

Essa bateria de testes geralmente é a mais lenta, mas nos proporciona confiança acima de todas as outras estratégias e nos faz ter certeza de que nosso usuário estará recebendo a experiência planejada pelo time de produto.

## Testes automatizados

Os testes automatizados têm a função principal de verificar se o sistema está funcionando como deveria, mas não só isso, visto que por testes manuais também geramos esses resultados. A questão é que os testes manuais são lentos, maçantes e propensos a erros. A automação vem pra aliviar um pouco desses problemas. Visto que no dia a dia desejamos realizar entregas com velocidade sem perder o nível de qualidade, os testes devem:

· Nós dar confiança que o código faz o que deveria fazer;

· Dar feedback rápido, confiável e preciso;

· Ser uma rede de proteção, garantindo que os engenheiros possam alterar e melhorar o código sem a preocupação de quebrar funções já existentes.

![projeto](https://user-images.githubusercontent.com/104467309/188699689-c782cdd9-a3c2-4b11-a2bf-9ff5bff18847.gif)
 ## Organização do Projeto  

```ruby
   ├── .github/workflows                  
     ├── cypress.yml                     # Arquivos do Github Actions para executar o CI.
   ├── cypress 
     ├── integration                    
        ├── login.spec.js                # Suite de teste para tela de login. 
        ├── onair.spec.js                # Suite de teste para webapp online
        ├── signup.spec.js               # Suite de teste para tela de cadastro
     ├── plugins                         # implementação page object
     ├── support                         # implementação page object
   ├── README.md                         # Documentação do projeto           
   ├── cypress.json                      # configuração para a execução do cypress.            
   └── package.json                      # configuração para a execução do cypress.                       
```   
## Por quê utilizar o Cypress?

`Cypress` é um framework de testes, de código aberto e de fácil configuração.
Totalmente baseado em uma nova arquitetura, isenta de outros frameworks de testes, o Cypress apresenta um painel próprio que exibe exatamente o que está acontecendo durante a execução dos testes. À medida que o script é escrito, é possível acompanhá-lo, o que auxilia o Analista de Testes (QA) na visualização de quais partes do código necessitam de ajustes.

