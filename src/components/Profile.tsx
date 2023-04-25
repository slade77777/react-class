import {FC, useContext, useState} from "react";
import { TeenagerAgeContext } from "../App";

export type ProfileType = {
  id: number, fullname: string, age: number, dob: string, classValue: string, slogan?: string, isLiked?: boolean
}

const Profile: FC<ProfileType & {changeLike: (val: boolean) => void; setBonusAges: (id: number, age: number) => void; maxAge: number, position: number }> =
  ({ fullname, age, dob, classValue, slogan, changeLike, setBonusAges, maxAge, position}) => {
  const [isLiked, setLike] = useState<boolean>(false);
  const [bonusAge , setBonusAge] = useState(0);
  function addOneAge() {
    setBonusAge(bonusAge + 1);
    setBonusAges(position, age + bonusAge + 1)
  }

  const ageProvider = useContext<{age: number, changeAge: (val: number) => void}>(TeenagerAgeContext);
    console.log(ageProvider);

    function handleLike() {
    setLike(isLiked === false ? true : false);
    changeLike(!isLiked, age + bonusAge);
  }

    return <div>
      { age + bonusAge === maxAge && <p>Lớn đầu nhất</p>}
      <p>Full name: {fullname}</p>
      <p>age: {age + bonusAge} { age + bonusAge < ageProvider.age ? '(Tuổi teen)' : ''}</p>
      <p>dob: {dob}</p>
      <p>class: {classValue}</p>
      <p>slogan: {slogan}</p>
      <button onClick={addOneAge}>cộng 1 tuổi</button>
      <button onClick={handleLike}>{isLiked ? 'Liked' : 'Like'}</button>
      <button onClick={() => ageProvider.changeAge(ageProvider.age + 2)}>Tăng tuổi teen lên 2</button>
    </div>

}

export default Profile;