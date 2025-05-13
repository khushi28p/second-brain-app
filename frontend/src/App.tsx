import { Button } from "./components/ui/Button"
import { PlusIcon } from "./components/icons/PlusIcon"
import { ShareIcon } from "./components/icons/ShareIcon"

function App() {

  const handleShare = () => {
    console.log("Share button clicked")
  }

  const handleAddContent = () => {
    console.log("Add Content button clicked")
  }

  return (
    <>
      <div className="flex justify-end">
        <Button variant="secondary" text="Share" size="md" startIcon={<ShareIcon size="md" />} onClick={handleShare} />
      <Button variant="primary" text="Add Content" size="md" startIcon={<PlusIcon size="md" />} onClick={handleAddContent} />
      </div>
    </>
  )
}

export default App
