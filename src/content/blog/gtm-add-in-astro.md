---
title: 'Configurar Google Tag Manager en Astro'
slug: 'configurar-google-tag-manager-en-astro'
description: 'Instala GTM en Astro para monitorear eventos en sitio web estático.'
pubDate: 'Aug 21 2023'
heroImage: ''
---

La forma más simple de añadir este tipo de script en sitio Astro es crear componentes con los fragmentos de código requeridos para importarlos:

* antes del cierre `</head>` 
* después de la apretura del `<body>`.


## Almacena el Container ID como constante

Abre o crea el archivo `./src/const.astro` y añade el `Container Id` de GTM para que puedas acceder a él fácilmente.

```javascript
// container ID
export const GTM_CONTAINER_ID = 'GTM-XXXXXXXX';
```


## Crea los componentes GTMHead y GTMBody

Aquí lo mejor  añadir cada script en componente específico para el `<head>` y otro para el `<body>`.

En ambos casos puedes importar el **GTM Container ID** desde el archivo de constantes

`./src/components/GTMHead.astro`:

```astro
---
import { GTM_CONTAINER_ID } from '../consts'; 
---

<!-- Google Tag Manager -->
<script  define:vars={{ GTM_CONTAINER_ID }}>
	(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer', GTM_CONTAINER_ID );
</script>
<!-- End Google Tag Manager -->
```

`./src/components/GTMHead.astro`:
```astro
---
import { GTM_CONTAINER_ID } from '../consts'; 
const GTM_URL = `https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`;
---

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src={GTM_URL}
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

## Importa los componentes en los Layout

Ahora simplemente alade ambos componentes en los Layouts.

```astro
---
import GTMHead from '../components/GTMHead.astro';
import GTMBody from '../components/GTMBody.astro';
---

<html lang="es">
	<head>
		...
    <GTMHead />
	</head>

	<body>
		<GTMBody />
    ...
	</body>
</html>

```

Listo! Ya has añadido Google Tag Manager a tu sitio en Astro.