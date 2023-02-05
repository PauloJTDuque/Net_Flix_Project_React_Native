import React, { useRef, useState } from 'react'
import { View, Text } from 'react-native';
import { Video } from 'expo-av';
import { Episode } from '../../types';
import { Playback } from 'expo-av/build/AV';
import styles from './styles';

interface VideoPlayerProps {
        episode: Episode;
    }

const VideoPlayer = (props: VideoPlayerProps) =>{
    const { episode } = props;

    const [status, setStatus] = useState({});

    const video = useRef(null);
    
    // const handLeVideoRef = (component: Playback) => {
    //     const playbackObject = component;

    //     const source = {
    //         uri: episode.video
    //     };

    //     const initialStatus ={

    //     };

    //     playbackObject.loadAsync(source, initialStatus, false);

    // }

  return (
        <Video 
            ref={video}
            style={styles.video}
            source={{
                uri: episode.video
            }}
            useNativeControls
            resizeMode="contain"
            onPlaybackStatusUpdate={stayus => setStatus(() => status)}
        />
}

export default VideoPlayer;