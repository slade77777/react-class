import {FC, useState} from "react";

export type ProfileType = {
  fullname: string, age: number, dob: string, classValue: string, slogan?: string,
}

const Profile: FC<ProfileType & {changeLike: (val: boolean) => void}> = ({fullname, age, dob, classValue, slogan, changeLike}) => {
  const [isLiked, setLike] = useState<boolean>(false);
  const [bonusAge , setBonusAge] = useState(0);

  function addOneAge() {
    setBonusAge(bonusAge + 1);
  }

  function handleLike() {
    setLike(isLiked === false ? true : false);
    changeLike(!isLiked);
  }

  if (1 < 2) {
    return <div>
      <p>Full name: {fullname}</p>
      <p>age: {age + bonusAge}</p>
      <p>dob: {dob}</p>
      <p>class: {classValue}</p>
      <p>slogan: {slogan}</p>
      <button onClick={addOneAge}>cộng 1 tuổi</button>
      <button onClick={handleLike}>{isLiked ? 'Liked' : 'Like'}</button>
    </div>
  }

  return <div>asdas</div>

}

export default Profile;