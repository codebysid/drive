import { useEffect, useState } from "react"
import useUser from "./useUser"
import useParentFolder from "./useParentFolder"
import { getFiles } from "@/actions/file"
// import { useToast } from "@/components/ui/use-toast"
import { toast } from "sonner"

const useFiles = () => {
  const [files, setFiles] = useState([])
  const user = useUser()
  const parentFolder = useParentFolder()

  const getUserFiles = async () => {
    if (!parentFolder?.parentFolder || !user?.user._id) {
      setFiles([])
      return
    }
    else {
      try {
        const files = await getFiles(parentFolder?.parentFolder, user?.user._id)
        if (!files) {
          setFiles([])
          return
        }
        setFiles(files)
      } catch (err) {
        console.log(err)

        toast.warning("Something went wrong")
      }
    }
  }

  useEffect(() => {
    getUserFiles()
  }, [user, parentFolder])
  return files
}

export default useFiles
