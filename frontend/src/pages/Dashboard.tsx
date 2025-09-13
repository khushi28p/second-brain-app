import { Button } from "../components/Button"
import { Sidebar } from "../components/Sidebar"
import { useState } from "react"
import { CreateContentModal } from "../components/CreateContentModal"
import { Card } from "../components/Card"
import { ShareIcon } from "../icons/ShareIcon"
import { PlusIcon } from "../icons/PlusIcon"
import { useContent } from "../hooks/useContent"

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent();

  return (
    <div> 
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-blue-50">
    <CreateContentModal open={modalOpen} onClose={() => {setModalOpen(false)}} />
      <div className="flex justify-end gap-4">
        <Button onClick={() => {setModalOpen(true)}} variant="primary" text="Add Content" startIcon={<PlusIcon/>} /> 
      <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon/>} />
      </div>

      <div className="flex gap-4 mt-4">
        { contents?.map(({type, link, title}) => <Card type={type} link={link} title={title} />)
        }
        
      </div>
      </div>
    </div>
  )
}

export default Dashboard;
