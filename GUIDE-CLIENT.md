# Guide de mise en ligne — Du vent dans les pages

Ce document vous guide pas à pas pour mettre votre site en ligne et le gérer au quotidien. Chaque étape est détaillée : suivez-les dans l'ordre.

---

## Table des matières

1. [Créer un compte GitHub](#1-créer-un-compte-github)
2. [Récupérer le code du site](#2-récupérer-le-code-du-site)
3. [Créer un compte Netlify et déployer le site](#3-créer-un-compte-netlify-et-déployer-le-site)
4. [Activer le CMS (interface d'administration)](#4-activer-le-cms-interface-dadministration)
5. [Acheter et configurer le nom de domaine](#5-acheter-et-configurer-le-nom-de-domaine)
6. [Créer un compte Snipcart (boutique en ligne)](#6-créer-un-compte-snipcart-boutique-en-ligne)
7. [Créer un compte HelloAsso (adhésions)](#7-créer-un-compte-helloasso-adhésions)
8. [Ajouter vos réseaux sociaux](#8-ajouter-vos-réseaux-sociaux)
9. [Compléter les informations manquantes](#9-compléter-les-informations-manquantes)
10. [Gérer vos contenus au quotidien](#10-gérer-vos-contenus-au-quotidien)

---

## 1. Créer un compte GitHub

GitHub est le service qui héberge le code source de votre site. C'est gratuit.

1. Allez sur https://github.com
2. Cliquez **Sign up**
3. Créez votre compte avec votre email (eddie.smigiel@proton.me par exemple)
4. Confirmez votre email
5. Communiquez votre nom d'utilisateur GitHub à votre développeur pour qu'il vous transfère le dépôt du site

Une fois le transfert effectué, vous aurez un dépôt `vent-dans-les-pages` dans votre propre compte GitHub.

---

## 2. Récupérer le code du site

Votre développeur vous transférera le dépôt. Vous n'avez rien à faire de technique ici : une fois le transfert accepté, le code apparaîtra dans votre compte GitHub.

Vous recevrez un email de GitHub vous demandant d'accepter le transfert. Cliquez simplement sur le lien.

---

## 3. Créer un compte Netlify et déployer le site

Netlify est le service qui met votre site en ligne. C'est gratuit pour un site comme le vôtre.

1. Allez sur https://app.netlify.com
2. Cliquez **Sign up** puis **Sign up with GitHub** (c'est le plus simple)
3. Autorisez Netlify à accéder à votre compte GitHub
4. Une fois connecté, cliquez **Add new site** > **Import an existing project**
5. Choisissez **GitHub**
6. Sélectionnez le dépôt **vent-dans-les-pages**
7. Netlify détecte automatiquement la configuration — ne changez rien
8. Cliquez **Deploy site**
9. Patientez environ 30 secondes : votre site est en ligne !

Netlify vous attribue une adresse provisoire du type `random-name-12345.netlify.app`. Vous pourrez la remplacer par votre vrai nom de domaine à l'étape 5.

**Optionnel** : vous pouvez personnaliser cette adresse provisoire en allant dans **Site configuration** > **Change site name** et taper par exemple `duventdanslespages` pour obtenir `duventdanslespages.netlify.app`.

---

## 4. Activer le CMS (interface d'administration)

Le CMS vous permet de gérer vos livres, articles et événements depuis une interface visuelle, sans toucher au code. Il faut l'activer dans Netlify.

### 4.1 — Activer Identity

1. Dans votre site Netlify, allez dans **Site configuration** (menu de gauche)
2. Cliquez sur **Identity** dans le menu
3. Cliquez **Enable Identity**

### 4.2 — Activer Git Gateway

1. Toujours dans **Identity**, descendez jusqu'à la section **Services**
2. Cliquez sur **Git Gateway** > **Enable Git Gateway**

### 4.3 — Vous inviter comme utilisateur

1. Allez dans l'onglet **Identity** (en haut de la page, pas dans Site configuration)
2. Cliquez **Invite users**
3. Entrez votre email (eddie.smigiel@proton.me)
4. Vous recevrez un email d'invitation : cliquez sur le lien pour créer votre mot de passe

### 4.4 — Tester le CMS

1. Allez sur `votre-site.netlify.app/admin/`
2. Connectez-vous avec l'email et le mot de passe créés
3. Vous devez voir trois sections : **Livres**, **Blog**, **Événements**

---

## 5. Acheter et configurer le nom de domaine

Pour que votre site soit accessible sur `duventdanslespages.fr`, vous devez acheter ce nom de domaine.

### 5.1 — Acheter le domaine

Deux options recommandées :

**Option A — OVH (français, environ 8 €/an)**
1. Allez sur https://www.ovh.com/fr/domaines/
2. Cherchez `duventdanslespages.fr`
3. Achetez-le (vous aurez besoin du SIRET de l'association)

**Option B — Cloudflare (interface plus simple, environ 9 €/an)**
1. Allez sur https://www.cloudflare.com
2. Créez un compte
3. Allez dans **Registrar** > **Register domains**
4. Cherchez `duventdanslespages.fr` et achetez-le

### 5.2 — Configurer les DNS

Une fois le domaine acheté, vous devez le faire pointer vers Netlify. Dans l'interface de gestion DNS de votre registrar (OVH ou Cloudflare), ajoutez ces deux enregistrements :

| Type    | Nom   | Valeur                          |
|---------|-------|---------------------------------|
| A       | @     | 75.2.60.5                       |
| CNAME   | www   | votre-site.netlify.app.         |

Remplacez `votre-site.netlify.app` par l'adresse réelle de votre site Netlify.

**Sur OVH** : Allez dans votre domaine > Zone DNS > Ajouter une entrée.
**Sur Cloudflare** : Allez dans votre domaine > DNS > Add record. Désactivez le proxy orange (icône nuage) pour les deux entrées.

### 5.3 — Déclarer le domaine dans Netlify

1. Dans Netlify, allez dans **Domain management** > **Add a domain you already own**
2. Tapez `duventdanslespages.fr` et validez
3. Netlify générera automatiquement un certificat SSL (HTTPS) — cela peut prendre quelques minutes
4. Ajoutez aussi `www.duventdanslespages.fr` si vous le souhaitez

**Comptez 24 à 48 heures** pour que les DNS se propagent complètement, mais en pratique c'est souvent actif en moins d'une heure.

---

## 6. Créer un compte Snipcart (boutique en ligne)

Snipcart gère le panier d'achat et les paiements sur votre site. C'est payant uniquement quand vous réalisez des ventes (2 % de commission par transaction).

1. Allez sur https://snipcart.com
2. Cliquez **Sign up** et créez votre compte
3. Une fois connecté, allez dans **Account** > **API Keys**
4. Copiez votre **Public API Key** (elle commence par un long code)
5. Communiquez cette clé à votre développeur

**Ce que fera le développeur** : il remplacera la clé de test dans le fichier de configuration du site par votre vraie clé. Cela prend 2 minutes.

**Ou faites-le vous-même** via le CMS :
- Ce paramètre ne se change pas via le CMS. Il faudra modifier le fichier `src/_data/site.json` sur GitHub :
  1. Allez sur votre dépôt GitHub
  2. Naviguez vers `src/_data/site.json`
  3. Cliquez sur l'icône crayon (modifier)
  4. Remplacez `YOUR_SNIPCART_PUBLIC_TEST_API_KEY` par votre vraie clé
  5. Cliquez **Commit changes**
  6. Le site se reconstruit automatiquement

### Configuration Snipcart

Dans le tableau de bord Snipcart :
1. **Domains & URLs** : ajoutez votre domaine (`duventdanslespages.fr`)
2. **Payment gateway** : connectez votre compte Stripe (Snipcart vous guidera)
3. **Shipping** : configurez les frais de livraison (poids, zones, tarifs)
4. **Taxes** : vérifiez que la TVA à 5,5 % est bien configurée pour les livres en France

---

## 7. Créer un compte HelloAsso (adhésions)

HelloAsso permet de gérer les adhésions à l'association en ligne. C'est entièrement gratuit pour les associations.

1. Allez sur https://www.helloasso.com
2. Cliquez **Inscrire mon association**
3. Renseignez les informations de l'association (SIRET : 999 408 149 00014)
4. Créez un **formulaire d'adhésion** avec vos différentes formules (par exemple : adhérent simple 15 €, adhérent bienfaiteur 30 €...)
5. Une fois le formulaire créé, HelloAsso vous donne un **lien de partage** et un **code d'intégration** (widget)
6. Communiquez le code d'intégration à votre développeur

**Ce que fera le développeur** : il intégrera le widget HelloAsso sur la page Adhésion du site. En attendant, un bouton renvoie les visiteurs vers votre email.

---

## 8. Ajouter vos réseaux sociaux

Quand vos pages Instagram et/ou Facebook seront créées :

1. Allez sur votre dépôt GitHub
2. Naviguez vers `src/_data/site.json`
3. Cliquez sur l'icône crayon (modifier)
4. Remplacez les `"#"` par vos vraies URLs :

```json
"social": {
  "instagram": "https://www.instagram.com/votre-compte/",
  "facebook": "https://www.facebook.com/votre-page/"
}
```

5. Cliquez **Commit changes** — le site se met à jour automatiquement

---

## 9. Compléter les informations manquantes

### 9.1 — Noms du bureau (page Association)

Via le CMS, ce n'est pas modifiable directement (c'est dans une page, pas dans une collection). Il faut modifier le fichier sur GitHub :

1. Allez sur GitHub > `src/pages/association.njk`
2. Cliquez sur le crayon
3. Cherchez les lignes avec `[Nom de la présidente]`, `[Nom de la trésorière]`, `[Nom du/de la secrétaire]`
4. Remplacez par les vrais noms
5. Cliquez **Commit changes**

### 9.2 — Images de couverture des livres

Pour le moment, les couvertures sont générées en CSS (rectangles colorés avec titre et auteur). Si vous souhaitez ajouter de vraies images :

1. Préparez vos images en JPG ou PNG (idéalement 400x600 pixels)
2. Contactez votre développeur pour la mise en place

---

## 10. Gérer vos contenus au quotidien

### Ajouter un livre

1. Allez sur `votre-site.fr/admin/`
2. Connectez-vous
3. Cliquez sur **Livres** dans le menu de gauche
4. Cliquez **Nouveau Livre**
5. Remplissez les champs :
   - **Titre** : le titre du livre
   - **Auteur** : nom de l'auteur
   - **Genre** : choisissez dans la liste (Poésie, Roman, Essai, Jeunesse)
   - **Prix TTC** : le prix en euros (ex : 14.50)
   - **ISBN** : numéro ISBN (optionnel)
   - **Nombre de pages** : optionnel
   - **Poids** : en grammes (important pour les frais de port)
   - **Couleur couverture** : choisissez un des 6 thèmes visuels
   - **Badge** : "Nouveau", "Coup de coeur", "Beau livre", "Jeunesse" ou rien
   - **Résumé court** : apparaît sur la vignette du catalogue
   - **En vedette** : cochez pour afficher le livre sur la page d'accueil
   - **Stock** : nombre d'exemplaires disponibles
   - **Date de publication** : date de parution
   - **Contenu** : synopsis détaillé, biographie de l'auteur, etc. (éditeur de texte riche)
6. Cliquez **Publier** en haut à droite
7. Le site se reconstruit automatiquement (environ 30 secondes)

### Ajouter un article de blog

1. Dans le CMS, cliquez **Blog** > **Nouvel Article**
2. Remplissez : titre, date, auteur, catégorie, résumé, contenu
3. Cliquez **Publier**

### Ajouter un événement

1. Dans le CMS, cliquez **Événements** > **Nouvel Événement**
2. Remplissez : titre, date, horaire (ex : "14h00 – 18h00"), lieu, description
3. Cochez **Entrée gratuite** si c'est le cas
4. Cochez **Sur inscription** si nécessaire
5. Ajoutez des détails en texte riche si besoin
6. Cliquez **Publier**

Les événements passés restent visibles dans l'agenda complet mais disparaissent automatiquement de la section "Prochains rendez-vous" sur la page d'accueil et en haut de la page événements.

### Modifier un contenu existant

1. Dans le CMS, cliquez sur la section concernée (Livres, Blog ou Événements)
2. Cliquez sur l'élément à modifier
3. Modifiez les champs souhaités
4. Cliquez **Publier**

### Supprimer un contenu

1. Ouvrez l'élément dans le CMS
2. Cliquez **Supprimer** (en bas ou dans le menu)
3. Confirmez

---

## Récapitulatif des comptes à créer

| Service     | URL                        | Usage                    | Coût                          |
|-------------|----------------------------|--------------------------|-------------------------------|
| GitHub      | github.com                 | Code source du site      | Gratuit                       |
| Netlify     | netlify.com                | Hébergement du site      | Gratuit                       |
| OVH ou Cloudflare | ovh.com ou cloudflare.com | Nom de domaine   | ~8-10 €/an                    |
| Snipcart    | snipcart.com               | Boutique en ligne        | 2 % par vente                 |
| HelloAsso   | helloasso.com              | Adhésions                | Gratuit                       |

**Coût total annuel estimé : environ 10 €/an** (uniquement le nom de domaine), plus la commission Snipcart sur les ventes.

---

## En cas de besoin

Pour toute question technique, contactez votre développeur :

**Emmanuel Pinglier**
emmanuelpinglier.fr
