import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Dialog from 'components/Dialog/Dialog';
import { MotionButton } from 'components/Button/Button.styled';
import AvatarSettingBox from './AvatarSettingBox/AvatarSettingBox';
import { addCurrentUser } from 'redux/storage/currentUser/currentUser';

/* -------------------------------------------------------------------------- */

export default function SignInDialog({
  visible = false, // 다이얼로그 가시성 여부
}) {

  const dispatch = useDispatch();

  return (
    <Dialog visible={visible} infoText="Start with your avatar!">
      <AvatarSettingBox
        initValue=""
        id="dialogInput"
        label="프로필 설정"
      />
      <MotionButton
        // onClick={}
      >DONE</MotionButton>
    </Dialog>
  );
}
