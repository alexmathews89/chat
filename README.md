The chat app is used to allow one user to communicate with another. It is built with React Native while using Gifted Chat and some key features are listed below:

Key Features

● A page where users can enter their name and choose a background color for the chat screen
before joining the chat.

● A page displaying the conversation, as well as an input field and submit button.

● The chat must provide users with two additional communication features: sending images
and location data.

● Data gets stored online and offline.

User Stories

● As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my
friends and family.

● As a user, I want to be able to send messages to my friends and family members to exchange
the latest news.

● As a user, I want to send images to my friends to show them what I’m currently doing.

● As a user, I want to share my location with my friends to show them where I am.

● As a user, I want to be able to read my messages offline so I can reread conversations at any
time.

● As a user with a visual impairment, I want to use a chat app that is compatible with a screen
reader so that I can engage with a chat interface.

To run this app:

- Create an Expo account and then download and install Expo Go on your device(smartphone) and/or a virtual Android emulator.

- Download the GitHub project folder and navigate its directory via the terminal and run the command "npm start" or "expo start."

- Open Expo Go on your device and select the chat app to create a username and enter the chat room where you can send a message, send your location, take and send a photo, and choose and image from your photos to send. All sent messages are stored in the Firestore Database.

To create a Firebase, go to https://firebase.google.com/ and sign in with your existing Google credentials and you will then be asked to "Create a Project" or "Add Project." You will then be asked to give your project a name such as "chat-app" or any name you would like, this project is titled "ChatApp". Disable Google Analytics and then you can select "Create Project." From there click "Continue" and you will be taken to the Google Firebase dashboard. Inside the "Build" tab, select "Firestore Database," click "Create Database" and leave "Start in Production Mode" selected. Choose the option that is listed under the Multi-region label that's closest to you. Firestore loads your newly configuered database automatically. It is very important to navigate the the "Rules" tab and change "allow read, write: if false;" to "allow read, write: if true;" and then go ahead and click "Publish." The database credentials are strored in the App.js file in the "firebaseConfig" object, you can access these creditials from Firebase by clicking the gear icon to open up the "Project Settings" and looking under the "General" tab where you'll find a section called "Your apps." Click the "Firestore for Web" button(or </> icon) which will open a new screen asking for you to register your web app and will then connect you to the Firestore database you just created, fill in a name for your app, then click "Register" to generate a configuration code.

Dependencies:
React Native,
Firestore,
Expo,
GiftedChat,
AsyncStorage,
StackNavigator,
expo-location,
expo-image-picker,
react-native-maps
