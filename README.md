# **fullstack-challenge-1**
Desafio para candidatos a desenvolvedor fullstack: página de produtos e página de detalhe de produtos.

## **Instruções**
1. Faça o *fork* desse repositório.
2. Crie um *branch* chamado *seunome-seusobrenome*, no qual você criará 2 páginas:
    - Página que acessa o *back-end* para listar os produtos disponíveis com foto, nome do produto e preço.
    - Ao clicar em um produto na 1ª página, o usuário é direcionado a uma 2ª página com o detalhe do produto clicado. A foto do produto será apresentada em destaque no lado esquerdo da página e as características do produto no lado direito.	
3. Crie um documento tipo `README.md` com as instruções de como configurar (se necessário) e executar seu projeto, bem como um link para que possamos acessá-lo na web. Sinta-se à vontade para incluir o que mais achar relevante nesse documento tendo em mente que outro desenvolvedor vá utilizar seu código. Dica: cuidado com os conflitos. Já existe um `README.md` na *branch master*.
4. Ao concluir o desafio, submeta o *Pull Request* à Zipper, que poderá fazer comentários solicitando esclarecimentos ou modificações em seu código.

## **Requisitos Técnicos**
- As páginas devem ser construídas com componentes Vue.js que acessarão o back-end para obter os dados de produtos.	
- O back-end pode ser construído na tecnologia de sua escolha, porém o uso de Node.js será um diferencial.	
- O back-end poderá simular uma consulta em banco de dados e retornar o JSON (ver recursos) diretamente, porém a obtenção dos dados através de uma query GraphQL em banco de dados MongoDB será um diferencial.	
- O uso de Docker será um diferencial.	
- Um design elegante e consistente será um diferencial e para isso o candidato poderá utilizar frameworks como Vuetify ou outros de sua escolha.

## **Recursos**
- Arquivo JSON com dados de produtos na pasta `assets`.
- Imagens dos produtos na pasta `assets/images`.

### 📋 Pré-requisitos

```
Docker
Docker Compose
```

### 🔧 Instalação
```
Verifique se o arquivo  "server/docker/entrypoint.sh" está configurado para LF, como explicado aqui:
https://stackoverflow.com/a/52665687/10256655

Através de um terminal, acesse a raiz do projeto e rode os comandos "docker-compose build" e "docker-compose build".
Após o docker construir as imagens e subir os servidores, o app pode ser acessado em "localhost:8080" e o back-end em "localhost:8081".
```