# Expo + .NET Core

Um pequeno projeto demonstrando como utilizar o Expo em conjunto com uma API em .NET Core.

## Configuração

O mais importante é modificar o arquivo **launchSettings.json**, dentro da pasta _Properties_ do projeto .NET Core. Neste arquivo, onde está escrito "_SEU_NOME_DE_MAQUINA_", substitua pelo nome de rede do seu computador.
No Windows, você pode obter esta informação facilmente, abrindo o cmd e executando:

```bash
hostname
```

Obs.: este projeto tem um arquivo launchSettings.example.json, que você pode renomear para launchSettings.json e aplicar as dicas acima.

## Uso do localhost no Expo

Se você tiver o ADB configurado, o Expo tenta fazer a reversão das chamadas para localhost no celular/emulador para a máquina de desenvolvimento, o que permite que você possa chamar a API usando localhost. Se não tiver o ADB configurado, você terá que chamar a API com a URL baseada no nome de máquina ou IP do computador.
Obs.: _no iPhone não é possível usar o localhost._
