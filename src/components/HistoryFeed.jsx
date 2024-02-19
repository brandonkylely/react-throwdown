import { useEffect } from "react";
import { historyAtom } from "../state"
import { useAtom } from "jotai"

export default function HistoryFeed() {
  const [history, setHistory] = useAtom(historyAtom);
  const bool = true;

useEffect(()=> {
  console.log(history)
},[history])

  return <div className="absolute">
  <h4 className="text-2xl">Browsing History</h4>
  {bool && history.map((item, index)=>(
    <ul className="text-sm list-disc" key={index}>
      <li className="text-xl">{item.name}</li>
      <li>{item.manufacturer}</li>
      <li>{item.cost_in_credits}</li>
    </ul>
  ))}

  </div>
}