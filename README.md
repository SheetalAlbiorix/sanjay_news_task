# 📰 React News App (Expo + React Native)

A dynamic, offline-ready news reader built with **Expo** and **React Native**.  
The app displays category-based news articles, supports offline caching, smooth animations, and follows a modular architecture for maintainability.

---

## ✅ Features

- **Home Screen with Tabs**

  - Categories: Technology, Business, Health, Sports
  - Each tab loads its own article list from [NewsAPI](https://newsapi.org) or local JSON fallback

- **Article Card**

  - Title, thumbnail, summary, and relative publish time (`e.g., 3 hours ago`)
  - Smooth **Hero transition** to article details page

- **State Management & Architecture**

  - Implemented with **Redux Toolkit**
  - MVVM-inspired clean architecture:
    - **Views** → Screens & components
    - **ViewModels** → Redux slices (state + logic)
    - **Services** → API + caching layers

- **Local Caching**

  - Online → fetch from API, save in Persisted Redux
  - Offline → load last saved articles

- **Search**

  - Search bar filters currently visible articles by title

- **Bonus**
  - Pull-to-refresh
  - Lottie animations for “no results” & “no internet”
  - Dark / Light / System theme toggle
  - Lazy image loading with placeholder & caching

---

## 📱 Screenshots / Demo

<img src="assets/screenshots/main_page.png" alt="Main Page" width="600"/>

## 🛠️ Tech Stack

- **React Native + Expo**
- **Redux Toolkit** for state management
- **React Navigation** (stack + bottom tabs)
- **AsyncStorage + Persisted Redux** for offline caching
- **Lottie-react-native** for animations
- **NewsAPI** (or fallback JSON data)

---

## 📂 Folder Structure

src/
assets/ # images, animations, fallback JSON
components/ # reusable UI components (ArticleCard, SearchBar, etc.)
navigation/ # React Navigation setup
screens/ # Home, Details, etc.
services/ # API + storage services
newsService.ts # API + local JSON fallback
storageService.ts# AsyncStorage wrapper
store/ # Redux slices & store setup
articlesSlice.ts # news state, thunks
themeSlice.ts # dark/light/system theme state
