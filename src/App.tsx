import {useEffect, useRef, useState} from 'react'
import './App.css'
import Profile, {ProfileType} from "./components/Profile";
import Modal from 'react-modal';
import AddForm from "./components/AddForm";

Modal.setAppElement('#root');

function App() {
  const [listProfile, setListProfile] = useState<ProfileType[]>([])
  const [isOpenModal, setOpenModal] = useState(false);

  useEffect(() => {
    // get list profile from server
    //@ts-ignore
    fetch('https://645644b92e41ccf16918360b.mockapi.io/profile', {
      method: 'GET'
    }).then(res => res.json()).then(res => {
      setListProfile(res)
    })
  }, [])

  function openModal() {
    setOpenModal(true);
  }

  function finishCreate() {
    setOpenModal(false);
    fetch('https://645644b92e41ccf16918360b.mockapi.io/profile', {
      method: 'GET'
    }).then(res => res.json()).then(res => {
      setListProfile(res)
    })
  }

  return (
    <div id="App">
      {listProfile.map((item, index) => <Profile
        id={item.id}
        key={index} fullname={item.fullname}
        age={item.age} classValue={item.classValue} slogan={item.slogan} /> )}
      <button onClick={openModal}>Thêm mới</button>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={() => setOpenModal(false)}
        contentLabel="Example Modal"
      >
        <AddForm finish={finishCreate} />
      </Modal>
    </div>
  )
}

export default App
