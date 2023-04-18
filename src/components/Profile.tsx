import {FC, useState} from "react";

export type ProfileType = {
  fullname: string, age: number, dob: string, classValue: string, slogan?: string
}

const Profile: FC<ProfileType> = ({fullname, age, dob, classValue, slogan}) => {
  const [show, setShow] = useState<boolean>(true);
  const [bonusAge , setBonusAge] = useState(0);

  function addOneAge() {
    setBonusAge(bonusAge + 1);
  }
  console.log(bonusAge)
  if (show) {
    return <div>
      <p>Full name: {fullname}</p>
      <p>age: {age + bonusAge}</p>
      <p>dob: {dob}</p>
      <p>class: {classValue}</p>
      <p>slogan: {slogan}</p>
      <button onClick={addOneAge}>cộng 1 tuổi</button>
      <button onClick={() => {
        setShow(false)
      }}>Ẩn</button>
    </div>
  }
  return <button onClick={() => {
    setShow(true)
  }}>Hiện</button>
}

export default Profile;