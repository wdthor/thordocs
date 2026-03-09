# React Native

## Adapt to device StatusBar

```ts
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    // SafeAreaView adapts the view only on IOS
    <SafeAreaView style={styles.container}>
      <Text>Focus App</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // add padding on android devices
  },
});
```

## Flat List

- A flat list helps us render infinite scrollable lists

```js
import { FlassList } from "react-native";
import ProductListItem from "@components/ProductListItem";

export default function MenuSection() {
  return (
    <FlatList
      data={list}
      renderItem={({ item }) => <ProductListItem product={item} />} // render 1 item
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }} // horizontal gap
      columnWrapperStyle={{ gap: 10 }} // vertical gap
    />
  );
}
```

## Pressable - add click event

- The View component doesn't have `onPress` (onClick) event, so if we wrap it inside a Link component, it won't work

```ts
import { StyleSheet, Text, Pressable } from "react-native";
import { Link } from "expo-router";

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    // asChild will forward all props to the first child of the Link
    <Link href={"/product"} asChild>
      <Pressable style={styles.container}>
        <Text>Go product</Text>
      </Pressable>
    </Link>
  );
};
```
