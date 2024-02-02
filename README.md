# Geometrie
Aplikace na výpočet obsahu geometrických tvarů.

Aplikace interaktivní formou provází uživatele procesem výpočtu obsahu základních geometrických tvarů.

Online verze aplikace [je dostupná zde](https://0kurk4.github.io/geometrie/).

## Skripty pro build aplikace

> Poznámka: pro build aplikace je potřeba mít nainstalované prostředí `Node` verze 20.11.0 a `npm` verze 10.2.4

### `npm start`

Spustí aplikaci ve vývojovém módu. V browseru otevřete url [http://localhost:3000](http://localhost:3000).

Aplikace podporuje hot-reloading. Stránka se automaticky obnovuje při změnách v kódu aplikace. Chybové hlášky, včetně lint error jsou vypsány do konzole prohlížeče.

### `npm test`

Spustí interaktivní sérii testů, které monitorují zdraví kódu aplikace. Pro více informací navštivte [dokumentaci](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Vytvoří produkční build aplikace a umístí jej do složky `build`. Sloučí potřebné zdrojové soubory a knihovny do jediného souboru, který je optimalizován pro výkon aplikace.

Produkční build je následně minifikován a za jméno souboru je připojen hash pro lepší identifikaci zdrojů v produkčním prostředí.

Pro více informací navštivte [dokumentaci](https://facebook.github.io/create-react-app/docs/running-tests).

## Implementace geometrických tvarů

Nový geometrický tvar je definován typem `Shape`. Tento typ musí implementovat následující vlastnosti:

- `name: string`
    - jméno geometrického tvaru.
- `image: string`
    - název připojeného obrázku znázorňujícího výpočet obsahu
- `dimensions: Array<string>`
    - jména parametrů nutných k výpočtu obsahu
- `getArea: (values: ShapeDimensionValues) => number`
    - funkce která převezme objekt `ShapeDimensionValues` a vypočítá obsah

Každý nový tvar musí být přidán do modelu `ShapeSet`.