import {useSelector} from "react-redux";
import Profile from "../components/Profile";
import React, {useEffect, useState} from "react";
import {useInternetStatus} from "../hooks/useInternetStatus";

export const ListProfile = () => {
  const profiles = useSelector(state => state.user).profiles;
  const { isOnline } = useInternetStatus();

  return <div>
    {
      !isOnline && <h1>Trang web đang không kết nối mạng</h1>
    }
    List profile
    <div>
      {
        profiles.map(item => <Profile id={item.id} fullname={item.name} age={item.age} classValue={item.classValue} slogan={item.slogan} />)
      }
    </div>
  </div>
}
