import {useSelector} from "react-redux";
import Profile from "../components/Profile";

export const ListProfile = () => {
  const profiles = useSelector(state => state.user).profiles;
  return <div>
    List profile
    <div>
      {
        profiles.map(item => <Profile id={item.id} fullname={item.name} age={item.age} classValue={item.classValue} slogan={item.slogan} />)
      }
    </div>
  </div>
}
