---
title: 'Lista comandos Git para principiantes'
slug: 'lista-comandos-git-para-principiantes'
description: 'Listado de comandos Git para principiantes o novatos.'
pubDate: 'Aug 08 2022'
heroImage: '/git-lista-comandos.webp'
---


He aquí una **lista de comandos git** que debes conocer si deseas trabajar con git para el *control de versiones* de código. 

*Recuerda que puedes guardar en tu favoritos esta página para puedas consultarla cada vez que lo requieras*

## Iniciar Git
Para comenzar a seguir los archivos de una carpeta con Git, debes iniciar con el siguiente comando en la carpeta de tu proyecto.
 
```bash
git init # Crea los archivos necesarios para hacer seguimiento con Git
```

## Realizar un commit
Un commit es una *"marca"* en el estado del código que es almacenada por git y a la que puedes regresar en cualquier momento.
Los pasos típicos para actualizar realizar commit son los siguientes.
 
```bash
git status # Revisa el estado actual del proyecto
git add . # Añade los archivos de la carpeta actual al siguiente commit 
git status # (opcional para ver si se añadieros los archivos)
git commit # Realiza un commit abriendo el editor por defecto
git commit -m "Lo que se codifico es..." # Realiza un commit y deja un mensaje.
git log # Verifica del proyecto
```

## Branch
Crea distintas "ramas" (branch) de código para realizar pruebas o crear una nueva funcionalidad. Cuando los cambios han sido realizados puedes "mezclar" (merge) con ramas principales.
 
```bash
# Lista los branches
git branch # Lista los branch locales
git branch -a #Lista todos los branch locales y remotos
git branch -r #Lista todos los branch remotos
git branch -v #Lista los branch con información del último commit.
​
# Eliminar un branch
git branch -D <branch> # Elimina branch local
git push origin -d <branch> #Eliminar un branch remoto
```

## Checkout (Cambio de Branch)
Permite cambiar de branch. 
 
```bash
# Cambiar branches
git checkout <branch> # cambia de branch
​
# Crear un nuevo branch y cambiarse a él
git checkout -b <branch>
​
# Copiar un branch remoto
git checkout -b <branch> <repository_name>/<branch> # crea un nuevo branch con la información del branch remoto
git checkout -t <repository_name>/<branch> # crea un branch actualizado con el mismo nombre del branch remoto.
```
## Merge
Realiza una mezcla del código.
 
```bash
git merge <branchname> # Mezcla en branch actual con el branch seleccionado en <branchname>
git merge --squash <branchname> # Mezcla en branch actual con el branch seleccionado en <branchname>, creando sólo un commit adicional con el resumen de los commit en el texto de descripción del nuevo commit.
```

## Fetch (actualizar información del repositorio)
Actualiza la información desde los repositorios remotos.
 
```bash
git fetch -a # Actualizar información de los repositorios
```

## Pull - Procedimiento para actualizar un repositorio
Obtiene el contenido desde el branch en el repositorio remoto.
 
```bash
git pull origin <branch> # realizar una actualización de los cambios desde el branch
git checkout -t <repository_name>/<branch> # crea un branch actualizado con el mismo nombre del branch remoto.
```

## Push
Envía el contenido del último commit al repositorio.
 
```bash
git push <repository_name> <branch> # enviar los datos al servidor
```

## Remote - Gestión de repositorios remotos
Revisa los repositorios remotos a los que está apuntando tu proyecto.
 
```bash
git remote -v # Listar los repositorios remotos
git remote add <repository_name> <url_repository> # Añade un repositorio
git remote remove <repository_name> # Elimina un repositorio
git remote update origin --prune # actualiza y limpia historial repositorios remotos
```

## Tracks
Permite que un branch haga seguimiento de los cambios respecto a un branch remoto.
 
```bash
# Track con branch remotos
git branch -u <repository_name>/<branch> # seguir branch remoto
git branch -u <repository_name>/<branch> <branch> # configurar el track de un branch remoto desde otro branch

# ver que track remoto es seguido
git branch -avv # Para todos los branch
git branch -lvv # Para los branch locales
git branch -rvv # Para los branch remotos
​
# Dejar de hacer track a un branch remoto
git branch -dr <repository_name>/<branch> # deja de seguir las actualizaciones del branch remoto
```

## Stash
Permite guardar código que hayamos modificado pero al que no queremos hacer un commit.
Es útil si requieres cambiar de branch o actualizar la información desde otro branch y aún no has terminado de realizar los cambios para realizar un commit.
 
```bash
git stash save "trabajando en Base de datos" # Crear un stash con nombre
git stash list # Listar los stash disponibles:
git stash pop stash@{n} # Aplicar el último stash y eliminarlo de la lista
git stash apply stash@{n} # Aplicar un stash y mantenerlo en la lista
git stash branch <branchname> [<stash>] # Se puede convertir un stash en un branch
```

## Rebase
Reduce el historial de commits.
 
```bash
git rebase -i <id-del-commit> # permite cambiar los commit desde el HEAD hasta el commit ingresado como argumento
```
