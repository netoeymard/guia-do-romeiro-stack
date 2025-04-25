import React, { useState, useRef, useCallback } from "react";
import {
  View,
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { WebView } from "react-native-webview";

export default function Index() {
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const webviewRef = useRef<WebView>(null);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    webviewRef.current?.reload();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading && (
        <View
          style={{
            position: "absolute",
            zIndex: 1,
            backgroundColor: "#fff",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color="#000" />
        </View>
      )}

      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <WebView
          ref={webviewRef}
          source={{ uri: "http://localhost:5173" }} // 👈 Replace with your URL
          style={{ flex: 1 }}
          onLoadEnd={() => {
            setLoading(false);
            setRefreshing(false);
          }}
          pullToRefreshEnabled={false} // we use ScrollView instead
        />
      </ScrollView>
    </SafeAreaView>
  );
}
