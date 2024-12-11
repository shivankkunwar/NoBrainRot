# Minimalist Phone Interface  - android clone of [DumbPhone](https://dumbphone.so/)

A minimalist phone interface application built with React Native and Expo. The goal of this project is to reduce phone usage by allowing access to only a select few essential applications. This application limits distractions and promotes focused phone usage.
UI is the clone of 
## 🚀 Features






https://github.com/user-attachments/assets/3978f781-3df5-4f59-9c69-06e30eb74fd7






- **Home Screen**: Displays up to 6 user-selected apps for quick access.
- **App Management Screen**: View, select, and deselect installed apps (maximum 6 apps allowed).
- **Data Persistence**: User selections are saved using AsyncStorage and loaded on app launch.
- **Navigation**: Smooth navigation between Home and Manage Apps screens using React Navigation.
- **Android-Specific Features**: Uses Expo Intent Launcher to launch other apps from the minimalist interface.

## 🛠️ Tech Stack

- **React Native**
- **Expo**
- **TypeScript**
- **AsyncStorage** for data persistence
- **React Navigation** for navigation between screens
- **Expo Application & Intent Launcher** for Android-specific features

## 📦 Installation

1. **Install Required Tools**:
   - Install [Node.js](https://nodejs.org/)
   - Install Expo CLI globally:
     ```bash
     npm install -g expo-cli
     ```

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/minimalist-phone-app.git
   cd minimalist-phone-app
   ```

3. **Install Project Dependencies**:
   ```bash
   npm install
   ```

4. **Run the Application**:
   ```bash
   expo start
   ```
   Scan the QR code using the Expo Go app on your phone to view the app.

## 📂 Project Structure
```
minimalist-phone-app/
├── src/
|   ├── navigation/  # Navigation logic and stack configuration
|   ├── constants
|   ├── hooks
|   ├── components
│       ├── AppItem/  # logic of a item from list of apps
        ├── ErrorMessage  # Logic of error message
│   ├── screens/     # HomeScreen and ManageAppsScreen
│   └── App.tsx     # Entry point for the app
├── .expo/          # Expo configuration files
├── node_modules/   # Node dependencies
├── package.json    # Project dependencies and scripts
└── README.md       # Project documentation (you are here!)
```

## 📜 Usage

1. **Home Screen**:
   - Displays a list of up to 6 user-selected apps.
   - Tap an app to launch it.
   - Tap the **Manage Apps** button to access the app selection screen.

2. **Manage Apps Screen**:
   - Displays a list of all installed apps on the device.
   - Select up to 6 apps to display on the Home Screen.
   - Selected apps are highlighted to indicate selection.


## ✨ Improvements
- [ ] Add option to access list of installed apps
- [ ] Add support for iOS app launching (since Expo Intent Launcher is Android-specific).
- [ ] Add animations for smoother transitions.
- [ ] Improve UI/UX design with a more polished layout.

## 📘 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙌 Acknowledgements

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/docs/usage/)

## 🧑‍💻 Author

**Your Name**  
[Github](https://github.com/shivankkunwar)• [LinkedIn](https://www.linkedin.com/in/shivank-kunwar/s)

---

Enjoy the distraction-free experience of a minimalist phone interface! 🎉
