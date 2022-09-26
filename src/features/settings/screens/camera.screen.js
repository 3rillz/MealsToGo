import React, {useContext, useRef} from 'react';
import {TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import styled from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthenticationContext} from '../../../services/authentication/authentication.context';

const ProfileCamera = styled(RNCamera)`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const InnerSnap = styled.View`
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const CameraScreen = ({navigation}) => {
  const cameraRef = useRef();
  const {user} = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef && cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };
  return (
    <ProfileCamera
      captureAudio={false}
      ref={camera => (cameraRef.current = camera)}
      type={RNCamera.Constants.Type.front}
      ratio={'16:9'}>
      <TouchableOpacity onPress={snap}>
        <InnerSnap />
      </TouchableOpacity>
    </ProfileCamera>
  );
};
