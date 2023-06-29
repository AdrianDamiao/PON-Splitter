# PON-Splitter

### Como rodar o projeto

Para rodar o projeto do front end é preciso ter o Node 16 instalado:

```
cd client
npm i
npm run dev
```

Para rodar o projeto do backend é preciso ter o .NET SDK ou Runtime 7 instalado:

```
cd api
dotnet run
```

### Backend

A classe responsável por receber as requisições é o CalcsController, que cria uma instância da classe PonSpecs e com base no valor vazio faz o calculo da variável e a retorna para o front-end.
