- Quiero crear una aplicación en PHP Version 8.2.12
- Utiliza autoload de composer (composer ya lo tengo instalado)
- Quiero que uses POO y las clases ubícalas en el directorio src
- Estoy usando git, ya tengo iniciado el repositorio y me gusta crear commits atómicos con mensajes al estilo de conventional commits (https://www.conventionalcommits.org/en/v1.0.0/)
- Cuando implementes una nueva feature o hagas un refactor proponme un mensaje de commit y pregúntame si quieres que lo hagas tú.
- Utiliza buenas prácticas
- Los ejemplos con código de cliente que manejen las clases ubicadas en src, quiero que estén en el directorio examples.

La estructura de los directorio examples y src sería la siguiente:

```
examples
    - structural
        - adapter
            - audio_player


src
    - Structural
        - Adapter
            - AudioPlayer
```

- En la estructura anterior, dentro del directorio audio_player habría un archivo index.php con el código cliente que utilizaría las clases de src/Structural/Adapter/AudioPlayer
- En la raíz del proyecto crea un archivo index.php con un índice a los ejemplos del código cliente.
- Para la interfaz en la vista utiliza la librería de Tailwind.
