# React native

- Just start with Expo
- A lot of the drawbacks mentionned by the React Native community about Expo is no longer valid

```sh
npx create-expo-app@latest
```

**Note**: Can't use pnpm without editing configs + not all React Native packages support `pnpm`

## Fundamentals

Core components are referenced [here](https://reactnative.dev/docs/components-and-apis#basic-components)

- ScrollView to make the page Scrollable (when overflowed)
- It is not common in ReactNative to use the `Button` element
- We usually use a `Touchable`, `TouchableOpacity`, `Pressable` etc...

## Stylize components

- Use StyleSheet
- It doesn't contain all Css properties because mobile applications are different
- Some default values are also different from the Css in the browser
- View components have `display: flex;` by default

## Icons

- Expo uses [@expo/vector-icons](https://icons.expo.fyi/Index) already installed with Expo

## FlatList

- `FlatList` is used to render a list of item in _React Native_, it optimizes rendering unlike `map`
- `keyExtractor` tells `FlatList` how to extract unique key from each item to optimize performance
- We can also use `FlatList` with `View` instead of `ScrollView`

```js
const renderItem = ({ item }: { item: Film }) => {
  return <Text style={styles.film}>{item.title}</Text>;
};
return (
  <FlatList
    data={films}
    keyExtractor={(item) => item.episode_id.toString()}
    renderItem={renderItem}
    refreshControl={
      <RefreshControl
        refreshing={refreshing} // Display loading if true
        onRefresh={onRefresh} // Call function on pull to refresh
        colors={[COLORS.itemBackground]} // Text color (Android)
        tintColor={COLORS.text} // Text color (iOS)
      />
    }
    ListEmptyComponent={() => <ListEmpty />}
);
```

Note : `FastList` (lib to install) has better performance than `FlatList`

## File structure (Expo Router)

- Each files in app are pages/routes

### Simple app structure :

Ex:

- `film.tsx` - film page
- `character.tsx` - character page
- etc...

### More complex app structure :

- Each folder can be used as pages/routes
  - They must have an `index` file
  - They also have their own `_layout` file
    - If we don't want to wrap the app with anything we can return `<Slot />`
  - They can have dynamic routes (`[id]` file)

Ex:

- `films/` - folder
  - `index.tsx` - films page
  - `_layout.tsx` - layout for films page
  - `[id].tsx` - dynamic page (ex: films/1, films/2)

### Group folders app structure

Files with `()` are used for organizing routes, they do not affect the url structure

Ex:

- `(auth)/`
  - index.tsx - "Not accessible as `/auth`"
  - login.tsx - `/login`
  - register.tsx - `/register`

## ImagePicker (ext lib)

- Provides access to the system's UI for selecting images and videos from the phone's library or taking a photo with the camera
- Asking for permissions is needed for it to work, or it might crash the app
- (Permissions are not needed/asked when using Expo Go)

## React Navigation Drawer

- Sliding left menu that needs to be install

```sh
npx expo install @react-navigation/drawer
```

Note : this package needs extra libraries which are already installed when initiating a project with Expo
Note 2 : `react-native-gesture-handler` on the web increases the JavaScript bundle size significantly

### Drawer template

```js
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const Layout = () => {
  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          // Hides status bar (iOS ?)
          drawerHideStatusBarOnOpen: true,
          // Colors the link name
          drawerActiveTintColor: "#F2A310",
          // Colors the menu (hamburger) and the title name
          headerTintColor: "#F2A",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Manage Locations",
          }}
        />
        <Drawer.Screen
          name="location"
          options={{
            title: "Fake Location",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default Layout;
```

## Expo SQLite

```sh
npx expo install expo-sqlite
```

## Image Picker

We can take picture using `expo-image-picker`

```sh
npx expo install expo-image-picker
```

- When using this feature, permission is needed

```json
{
  "plugin": [
    "expo-router",
    [
      "expo-image-picker",
      {
        "photosPermission": "The app accesses your photos to let you share them with your friends."
      }
    ]
  ]
}
```

## Expo Notifications

```sh
npx expo install expo-notifications
```
