# TechTestLakaa
Test Technique dans le processus de recrutement de Lakaa

---

## Stack technique choisie

### Backend
Le backend est configuré avec le _spring initializr_ (https://start.spring.io/)

- Springboot 3.5
- Java 17
- Spring Web
- Spring Data JPA (Hibernate)
- PostgreSQL Driver
- Lombok
- Maven

### Frontend
Le frontend a été configuré avec le Angular CLI

- Angular 15+ 
- Typesript
- SCSS
- HttpClient

### Base de données
J'ai choisi une base Postgre que j'ai conteneurisée pour faciliter l'installation

- Docker Compose
- Postgre 16
- Volume créé pour la persistance des données
- Port exposé : 5432


---

## Lancer le projet

### 1 : Démarrer la base de données

```bash
docker compose up -d
```

Vérifier que la base est lancée 

```bash
docker ps
```

### 2 : Lancer le backend

```bash
cd backend
mvn clean install
mvn spring-boot:run
```


### 3 : Lancer le frontend

```bash
cd frontend
npm install
ng serve
```

Application disponible sur :

```
http://localhost:4200
```

---

## Choix techniques

- On peut naviguer entre les pages **Magasin** et **RSE** depuis la sidebar
- Le responsable magasin peut ajouter des collectes depuis sa page en renseignant les indicateurs nécessaires, il peut aussi voir la liste des collectes déjà réalisées
- Le responsable peut accéder aux collectes réalisées et voir les détails, il peut aussi accéder aux indicateurs existants par un système d'onglet, et peut en ajouter ou en supprimer à sa guise

La base de données est paramétrée comme suit :


```
┌─────────────┐
│  collecte   │
├─────────────┤
│ id (PK)     │
│ date        │
│ association │
└──────┬──────┘
       │ 1
       │
       │ N
┌──────▼──────────────┐
│  indicator_value    │
├─────────────────────┤
│ id (PK)             │
│ value               │
│ collecte_id (FK)    │
│ indicator_id (FK)   │
└──────┬──────────────┘
       │ N       
       │         
       │         
┌──────▼──────┐  
│ indicator   │  
├─────────────┤  
│ id (PK)     │  
│ name        │  
│ type        │  
│ unit        │  
│ required    │  
└─────────────┘
```


## Amélioration possible

- Mettre des tableaux de bords pour améliorer le suivi du responsable RSE
- Corriger certains bugs
- Améliorer le design et UI
- Ajouter authentification
- Ajouter des tests unitaires