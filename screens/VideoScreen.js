import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const VideoScreen = ({  }) => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: "https://www.youtube.com/watch?v=qD-6d8Wo3do" }}
        style={styles.video}
        resizeMode="contain"
        controls={true}
        fullscreen={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default VideoScreen;
