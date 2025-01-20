﻿# its23-25
# React_native_rosso_nera

## Descrizione
Applicazione mobile sviluppata con React Native che implementa un sistema di navigazione a tab con tema scuro. L'app include diverse schermate tra cui Home, Analytics, Favorites e Settings, con un sistema di navigazione nidificato.

## Struttura del Progetto

```
src/
├── navigation/
│   ├── root.stack.tsx
│   ├── tab/
│   │   └── tab.navigator.tsx
│   └── types.ts
├── screens/
│   ├── analytics/
│   │   ├── analytics.screen.tsx
│   │   └── analytics.styles.ts
│   ├── home/
│   │   ├── home.screen.tsx
│   │   └── home.styles.ts
│   ├── detail/
│   │   ├── detail.screen.tsx
│   │   └── detail.styles.ts
│   ├── settings/
│   │   ├── settings.screen.tsx
│   │   └── settings.styles.ts
│   └── notifications/
│       └── favoritesScreen.tsx
└── components/
    └── genericCard/
        ├── genericCard.tsx
        └── genericCard.styles.ts
```

## Caratteristiche Principali

### Tema Scuro
- Sfondo principale: `#121212`
- Sfondo componenti: `#1a1a1a`
- Testo primario: `#ffffff`
- Testo secondario: `#cccccc`
- Accenti: `#3579f6` (blu)

### Navigazione
- Tab Navigator con 4 schermate principali
- Stack Navigator per la gestione dei dettagli
- Supporto per parametri di navigazione tipizzati
- Icone personalizzate per ogni tab

### Schermate
1. **Home**
   - Visualizzazione principale
   - Supporto per aggiornamento preferiti

2. **Analytics**
   - Dashboard delle performance
   - Visualizzazione dati mensili
   - Indicatori di trend

3. **Favorites**
   - Gestione elementi preferiti
   - Stato di aggiornamento

4. **Settings**
   - Configurazioni dell'app

## Componenti Riutilizzabili

### GenericCard
- Layout flessibile
- Supporto per immagini
- Stili consistenti con il tema

### Performance Card (Analytics)
- Visualizzazione dati di performance
- Indicatori di trend colorati
- Comparazione con target

## Tipizzazione
Il progetto utilizza TypeScript con:
- Enum per le rotte
- Interfacce per i parametri di navigazione
- Type safety per i componenti

## Requisiti di Sistema
- Node.js
- React Native
- React Navigation
- TypeScript
- Expo (per le icone)

## Come Iniziare

1. Installare le dipendenze:
```bash
npm install
```

2. Avviare l'app:
```bash
npx react-native run-android
# o
npx react-native run-ios
```

## Note di Sviluppo
- Tutti i componenti seguono un pattern consistente di stilizzazione
- Il tema scuro è applicato globalmente
- La navigazione è completamente tipizzata
- I componenti sono ottimizzati per le performance con memo dove necessario
