import {FC, useState} from "react";

export type ProfileType = {
  id: number, fullname: string, age: number, classValue: string, slogan?: string
}

const Profile: FC<ProfileType> =
  ({fullname, age, classValue, slogan}) => {

    return <div style={{border: '1px solid white', width: 500}}>
      <p>Full name: {fullname}</p>
      <p>age: {age}</p>
      <p>class: {classValue}</p>
      <p>slogan: {slogan}</p>
    </div>

}

export default Profile;