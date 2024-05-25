'use client'

import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/BusinessList.module.css'
type Props = {}

function BusinessList({}: Props) {
  const searchParams = useSearchParams();
  const [create, setCreate] = useState(false);
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  
  const name = useRef(null);
  const description = useRef(null);
  const address = useRef(null);
  const mn = useRef(null);
  const ts = useRef(null);
  const wd = useRef(null);
  const tr = useRef(null);
  const fr = useRef(null);
  const st = useRef(null);
  const sn = useRef(null);

  useEffect(() => {
    updateData();
  }, [])
  console.log(user)
  /*
  const existingIDs = ['AA1111','XY1234'];
  const getRandomLetters = (length = 1) => Array(length).fill().map(e => String.fromCharCode(Math.floor(Math.random() * 26) + 65)).join('');
  const getRandomDigits = (length = 1) => Array(length).fill().map(e => Math.floor(Math.random() * 10)).join('');
  const generateUniqueID = () => {
    let id = getRandomLetters(2) + getRandomDigits(4);
    while (existingIDs.includes(id)) id = getRandomLetters(2) + getRandomDigits(4);
    return id;
  };
  const newID = generateUniqueID();

  */
  
  const updateData = () => {
    let local = JSON.parse(localStorage.getItem(searchParams.get('login')));
    if (local) {
      setUser(local);
      setList(local.objects)
    }
  }

  const createObject = () => {
    setCreate(false);
    const existingIDs = ['AA1111','XY1234'];
    const getRandomLetters = (length = 1) => Array(length).fill().map(e => String.fromCharCode(Math.floor(Math.random() * 26) + 65)).join('');
    const getRandomDigits = (length = 1) => Array(length).fill().map(e => Math.floor(Math.random() * 10)).join('');
    const generateUniqueID = () => {
      let id = getRandomLetters(2) + getRandomDigits(4);
      while (existingIDs.includes(id)) id = getRandomLetters(2) + getRandomDigits(4);
      return id;
    };
    const newID = generateUniqueID();
    let new_object = {
      id: newID,
      name: name.current.value,
      description: description.current.value,
      address: address.current.value,
      schedule: {
        mn: mn.current.value,
        ts: ts.current.value,
        wd: wd.current.value,
        tr: tr.current.value,
        fr: fr.current.value,
        st: st.current.value,
        sn: sn.current.value,
      },
      people: [0, 0, 0, 0, 0, 0, 0]
    }
    let new_user = user;
    new_user.objects.push(new_object);
    localStorage.setItem(searchParams.get('login'), JSON.stringify(new_user))
    setUser(new_user);
  }
  const cancelObject = () => {
    setCreate(false);
  }
  const showAddbar = () => {
    setCreate(true);
  }

  let code = (
    <div className={styles.create}>
      <div className={styles.inputs}>
        <input ref={name} placeholder='Название' type="text" />
        <textarea rows={4} ref={description} placeholder='Описание'></textarea>
        <input ref={address} placeholder='Адрес' type="text" />
      </div>
      <h3 className={`${styles.schedule_title}`}>Расписание</h3>
      <div className={`${styles.schedule}`}>
        <input placeholder='Пн' ref={mn} type="text" />
        <input placeholder='Вт' ref={ts} type="text" />
        <input placeholder='Ср' ref={wd} type="text" />
        <input placeholder='Чт' ref={tr} type="text" />
        <input placeholder='Пт' ref={fr} type="text" />
        <input placeholder='Сб' ref={st} type="text" />
        <input placeholder='Вс' ref={sn} type="text" />
      </div>
      
      <div className="button_grp">
        <button onClick={createObject} className={`${styles.add_object}`}>Добавить объект</button>
        <button onClick={cancelObject} className={`${styles.cancel_object}`}>Отмена</button>
      </div>
    </div>
  )

  const list_of_objects = list.map(obj => {
    return (
      <div key={obj.id}>
        <h3>{obj.name}</h3>
        <p>{obj.description}</p>
      </div>
    )
  })

  return (
    <div className={styles.BusinessList}>
      <div className={styles.content}>
        {!create ? <button className={`${styles.main_btn}`} onClick={showAddbar}>Создать</button> : code}
        <div className={`${styles.object_list}`}>
          {list_of_objects}
        </div>
      </div>
    </div>
  )
}

export default BusinessList