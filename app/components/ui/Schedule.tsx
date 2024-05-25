'use client'

import { useEffect, useRef } from "react"
import { useParams } from "next/navigation"
type Props = {}

const Schedule = ({}: Props) => {
  
  const params = useParams<{ login: string}>()
  const user: any = localStorage.getItem(params.login);
  const mn = useRef(null);
  const ts = useRef(null);
  const wd = useRef(null);
  const tr = useRef(null);
  const fr = useRef(null);
  const st = useRef(null);
  const sn = useRef(null);

  useEffect(() => {
    mn.current.value = user.objects
  }, [])

  const saveSchedule = () => {
    if (params.login != null) {
      const user: any = localStorage.getItem(params.login);
      user.objects.push({
        mn: mn.current.value,
        ts: ts.current.value,
        wd: wd.current.value,
        tr: tr.current.value,
        fr: fr.current.value,
        st: st.current.value,
        sn: sn.current.value
      });
      localStorage.setItem(params.login, user);
    }
  

  }

  return (
    <div>
      <div>
        <input ref={mn} type="text" />
        <input ref={ts} type="text" />
        <input ref={wd} type="text" />
        <input ref={tr} type="text" />
        <input ref={fr} type="text" />
        <input ref={st} type="text" />
        <input ref={sn} type="text" />
      </div>
      <button onClick={saveSchedule}>Сохранить</button>
    </div>
  )
}

export default Schedule