React Native Rosso Nera
Overview
A mobile application for browsing and managing product favorites using React Native and React Navigation.
Features

Browse products from a fake store API
Filter products by category
Sort products by rating
Add/remove products from favorites
View detailed product information

Tech Stack

React Native
React Navigation
TypeScript
MMKV (for local storage)
Expo Vector Icons

HomeScreen: Product listing with filtering and sorting
FavoritesScreen: Display of favorite products
ProductDetails: Detailed view of individual products

Custom Hooks
useProducts
Manages product state, including:

Fetching products
Managing favorite products
Local storage interactions

Local Storage
Uses MMKV for efficient key-value storage of favorite product IDs.
Installation

Clone the repository
Run npm install
Start the application with expo start

API
Uses Fake Store API for product data
