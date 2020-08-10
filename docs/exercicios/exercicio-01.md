# Exercício 01

## Objetivo

### Linux
* Instalar NVM, Node.js e NPM

---

!!! warning "ATENÇÃO! Antes de começar:"

    Verifique se já existe um `node` instalado no seu ambiente com o comando: `which node`. Se já existir um node e o caminho for algo como `/bin/bash`, você precisará **DESINSTALAR** o node atual. Para remover o node do ubuntu, faça: `sudo apt-get purge --auto-remove nodejs npm`.

---

#### NVM


Para instalar (ou atualizar) o NVM, você deve executar o script de instalação, usando cURL:

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

Ou com wget:

```bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

Depois de rodar o script de instalação, execute o comando abaixo para verificar a instalação:

```bash
nvm --version
```
O resultado esperado é (na época em que isso foi escrito):
```
0.33.11
```

Se você não tiver nenhuma resposta, ou se aparecer o erro:

```bash
nvm: command not found
```

Feche e abra novamente seu terminal e tente verificar novamente.


#### Node.js e NPM

Para instalar o Node.js **LTS** (*Long Term Support*), execute o comando:

```bash
nvm install --lts
```

Esse comando irá instalar a última versão LTS do Node.js e também vai instalar o NPM.

Para confirmar a instalação do Node.js, execute:

```bash
node --version
```

O resultado esperado é (na época em que isso foi escrito):

```bash
v8.11.3
```

!!! success "DICA: nvm"

    Se você já tem uma versão de node instalada (ex. v6.x.y) e quer atualizar para a v8,<br>execute: `nvm install 8 --reinstall-packages-from=6`. Assim, todos os pacotes **globais** serão reinstalados também na nova versão.

Para confirmar a instalação do NPM, execute:

```bash
npm --version
```
O resultado esperado é (na época em que isso foi escrito):
```
5.6.0
```

### Windows

#### Node

Baixe o arquivo [de Instalação](https://nodejs.org/en/download/) execute e siga as etapas.

### Visual Studio Code

Para instalar o VS Code, baixe a versão apropriada (.deb ou .rpm) de acordo com a sua distribuição Linux no endereço: [https://code.visualstudio.com/](https://code.visualstudio.com/)


### Extensões

Opcionalmente, instale as seguintes extensões:
> VS Code Quick Open <kbd>Ctrl</kbd> <kbd>P</kbd>, cole os comandos e pressione <kbd>ENTER</kbd>

| Comando | Extensão |
| - | - |
| `ext install angular.ng-template` | [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template) |
| `ext install coenraads.bracket-pair-colorizer-2` | [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2) |
| `ext install msjsdiag.debugger-for-chrome` | [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) |
| `ext install formulahendry.auto-rename-tag` | [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) |
| `ext install esbenp.prettier-vscode` | [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) |
| `ext install aeschli.vscode-css-formatter` | [CSS Formatter](https://marketplace.visualstudio.com/items?itemName=aeschli.vscode-css-formatter) |
| `ext install eamodio.gitlens` | [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) |
| `ext install databyne.theme-monokai-hc` | [Monokai - High Contrast](https://marketplace.visualstudio.com/items?itemName=DataByne.theme-monokai-hc) |

## VS Code - Truques

### Emmet

```html
div.div${div$}*4
div.div${div$}*4

div.row>div.col-md-3*4
div.row>div.col-md-3*4

lorem5*4
lorem5*4

div.container>lorem10*3
div.container>lorem10*3

div.item{$}*5
div.item{$}*5
```
- Wrap with abreviation

### vscode

- copiar em bloco (demonstrar)

```
um
dois
tres
quatro
cinco
```

- trocar ocorrencias <kbd>ctrl</kbd> <kbd>d</kbd> e <kbd>shitf</kbd> <kbd>L</kbd>



## Referências
* Marketplace [https://marketplace.visualstudio.com/](https://marketplace.visualstudio.com/)
* NVM (*Node Version Manager*): [https://github.com/creationix/nvm](https://github.com/creationix/nvm)
* Node Release Schedule: [https://github.com/nodejs/Release#lts_schedule](https://github.com/nodejs/Release#lts_schedule)
