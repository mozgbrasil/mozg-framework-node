[checkmark]: https://raw.githubusercontent.com/mozgbrasil/mozgbrasil.github.io/master/assets/images/logos/Red_star_32_32.png "MOZG"
![valid XHTML][checkmark]

[requerimentos]: http://mozgbrasil.github.io/requerimentos/
[getcomposer]: https://getcomposer.org/
[uninstall-mods]: https://getcomposer.org/doc/03-cli.md#remove
[git-releases]: https://github.com/mozgbrasil/mozg-framework-node/releases

# mozg-framework-node

## Sinopse

Framework da Mozg

## Requerimento pacote

	# https://www.npmjs.com/package/chalk
	# https://www.npmjs.com/package/commander
	# https://www.npmjs.com/package/express
	# https://www.heroku.com/nodejs

	sudo npm install -g express-generator@4

	npm install --save chalk
	npm install --save commander
	npm install --save express

	express --view=pug express-app
		install dependencies:
			$ cd express-app && npm install

		run the app:
			$ DEBUG=express-app:* npm start


	npm list

	npm whoami

## Testando pacote local

	# https://docs.npmjs.com/cli/pack

	npm pack
	npm install ~/dados/public_html/git/mozg-framework-node/mozg-framework-node-1.0.0.tgz

## Iniciando publicação do pacote

	# https://docs.npmjs.com/getting-started/publishing-npm-packages

	cd ./directory
	npm init
	npm adduser
	npm publish

## Instalação - Atualização - Desinstalação - Desativação

Este módulo destina-se a ser instalado usando o [NPM][getcomposer]

Antes de executar os processos, [clique aqui][requerimentos] e leia os pré-requisitos e sugestões

--

Para qualquer atualização no Magento sempre mantenha o Compiler e o Cache desativado

--

### Para instalar o módulo execute o comando a seguir no terminal do seu servidor no diretório do seu projeto

	npm install --save mozg-framework-node

--

### Para atualizar o módulo execute o comando a seguir no terminal do seu servidor no diretório do seu projeto

	npm update

--

### Para [desinstalar][uninstall-mods] o módulo execute o comando a seguir no terminal do seu servidor

	npm uninstall --save mozg-framework-node

--

## Contribuintes

Equipe Mozg

## License

[Comercial License](LICENSE.txt)

## Badges

[![Join the chat at https://gitter.im/mozgbrasil](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mozgbrasil/)
[![Latest Stable Version](https://poser.pugx.org/mozgbrasil/mozg-framework-node/v/stable)](https://packagist.org/packages/mozgbrasil/mozg-framework-node)
[![Total Downloads](https://poser.pugx.org/mozgbrasil/mozg-framework-node/downloads)](https://packagist.org/packages/mozgbrasil/mozg-framework-node)
[![Latest Unstable Version](https://poser.pugx.org/mozgbrasil/mozg-framework-node/v/unstable)](https://packagist.org/packages/mozgbrasil/mozg-framework-node)
[![License](https://poser.pugx.org/mozgbrasil/mozg-framework-node/license)](https://packagist.org/packages/mozgbrasil/mozg-framework-node)
[![Monthly Downloads](https://poser.pugx.org/mozgbrasil/mozg-framework-node/d/monthly)](https://packagist.org/packages/mozgbrasil/mozg-framework-node)
[![Daily Downloads](https://poser.pugx.org/mozgbrasil/mozg-framework-node/d/daily)](https://packagist.org/packages/mozgbrasil/mozg-framework-node)
[![Reference Status](https://www.versioneye.com/php/mozgbrasil:mozg-framework-node/reference_badge.svg?style=flat-square)](https://www.versioneye.com/php/mozgbrasil:mozg-framework-node/references)
[![Dependency Status](https://www.versioneye.com/php/mozgbrasil:mozg-framework-node/1.0.0/badge?style=flat-square)](https://www.versioneye.com/php/mozgbrasil:mozg-framework-node/1.0.0)

:cat2:
