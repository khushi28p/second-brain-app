import { Button } from "./components/Button"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"
import { Card } from "./components/Card"
import { CreateContentModal } from "./components/CreateContentModal"
import { useState } from "react"
import { Sidebar } from "./components/Sidebar"

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div> 
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-red-50">
    <CreateContentModal open={modalOpen} onClose={() => {setModalOpen(false)}} />
      <div className="flex justify-end gap-4">
        <Button onClick={() => {setModalOpen(true)}} variant="primary" text="Add Content" startIcon={<PlusIcon/>} /> 
      <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon/>} />
      </div>

      <div className="flex gap-4 mt-4">
        <Card type="twitter" link="https://twitter.com/striver_79/status/1955123352013885674" title="First tweet" />
      <Card type="youtube" link="https://www.youtube.com/embed/K-ssUVyfn5g?si=hhvibE4BDB7717C0" title="First video" />
      </div>
      </div>
    </div>
  )
}

export default App
