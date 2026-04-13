# Liquid Glass Lab (Expo + React Native)

App de test Expo orientée iOS, avec un rendu "liquid glass" simulé (blur + gradient + bordure + profondeur) pour préparer des essais UI inspirés de la nouvelle direction visuelle Apple.

## Stack (versions alignées)

- Expo SDK `55.0.15`
- React Native `0.83.4`
- Expo Router
- Expo Blur + Linear Gradient

## Paramètres faciles à modifier

Tous les paramètres métier/UI modifiables sont centralisés dans :

- `config/appConfig.ts`

Tu peux changer rapidement :

- titre/sous-titre
- liste des cartes de test
- couleurs d'accent
- métadonnées de pipeline affichées dans l'écran

## Build iOS sans Mac

Le projet est configuré pour **EAS Build cloud** via GitHub Actions.

À chaque commit (`push`), le workflow :

1. installe les dépendances (`npm ci`)
2. se connecte à Expo avec `EXPO_TOKEN`
3. déclenche un build iOS cloud
4. déclenche un build Android cloud

Workflow :

- `.github/workflows/eas-build.yml`

### Secret GitHub requis

- `EXPO_TOKEN` : token Expo personnel (Programmatic Access)

### Configuration exacte pour corriger l'erreur CI Expo

Si tu vois cette erreur dans GitHub Actions :

```txt
An Expo user account is required to proceed.
Either log in with eas login or set the EXPO_TOKEN environment variable
```

alors le runner n'a pas reçu un token Expo valide.

#### 1) Générer un token Expo (Programmatic Access)

1. Va sur Expo (compte qui possède le projet EAS)
2. Ouvre les paramètres de compte
3. Crée un **Programmatic Access Token**
4. Copie la valeur du token

#### 2) Ajouter le secret dans GitHub

Dans ton dépôt GitHub :

1. `Settings`
2. `Secrets and variables` → `Actions`
3. `New repository secret`
4. Name: `EXPO_TOKEN`
5. Value: colle ton token Expo

#### 3) Vérifier que le workflow lit bien le secret

Le workflow `.github/workflows/eas-build.yml` :

- injecte `EXPO_TOKEN` au niveau du job
- vérifie explicitement que la variable n'est pas vide
- exécute `eas whoami` avant le build

Si `eas whoami` échoue, le token est absent/expiré ou ne correspond pas au bon compte Expo.

#### 4) Cas classique : fork / secrets non disponibles

Si tu pousses depuis un fork ou un autre dépôt, vérifie que **ce dépôt précis** contient bien `EXPO_TOKEN`.
Les secrets ne sont pas partagés automatiquement entre repos.

## À propos du message "Les fichiers binaires ne sont pas pris en charge"

Pour éviter les blocages lors de la création de PR dans des environnements qui refusent les binaires :

- les icônes PNG binaires **ne sont plus versionnées**
- l'icône "maison" est conservée en **SVG texte** dans `assets/icon.svg`
- Expo utilisera son icône par défaut tant que tu ne regénères pas des PNG localement

Si tu veux remettre des PNG plus tard, tu peux les générer localement puis les committer uniquement si ton outil PR accepte les binaires.

## Démarrage local

```bash
npm install
npm run start
```

## Checks

```bash
npm run typecheck
npx expo install --check
npm run ci:doctor
```
