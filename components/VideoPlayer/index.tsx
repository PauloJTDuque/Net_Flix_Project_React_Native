import React from 'react'
import { View, Text } from 'react-native';
import { Video } from 'expo-av';
import { Episode } from '../../types';
import { Playback } from 'expo-av/build/AV';

interface VideoPlayerProps {
        episode: Episode;
    }

const VideoPlayer = (props: VideoPlayerProps) =>{
    const { episode } = props;
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
            ref={handleVideoRef}
        />
}

export default VideoPlayer;