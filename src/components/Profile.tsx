import {FC, useState} from "react";

export type ProfileType = {
  id: number, fullname: string, age: number, dob: string, classValue: string, slogan?: string, isLiked?: boolean
}

const Profile: FC<ProfileType & {changeLike: (val: boolean) => void; setBonusAges: (id: number, age: number) => void; maxAge: number, position: number}> =
  ({fullname, age, dob, classValue, slogan, changeLike, setBonusAges, maxAge, position}) => {
    return <div style={{border: '1px solid white'}}>
      <p>Full name: {fullname}</p>
      <p>age: {age}</p>
      <p>dob: {dob}</p>
      <p>class: {classValue}</p>
      <p>slogan: {slogan}</p>
    </div>

}

export default Profile;
