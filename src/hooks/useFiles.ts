import { useEffect, useState } from "react"
import useUser from "./useUser"
import useParentFolder from "./useParentFolder"
import { getFiles } from "@/actions/file"
import { useToast } from "@/components/ui/use-toast"

const useFiles = () => {
  const [files, setFiles] = useState([])
  const user = useUser()
  const parentFolder = useParentFolder()
  const { toast } = useToast()

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

        toast({ title: "Something went wrong", variant: "destructive" })
      }
    }
  }

  useEffect(() => {
    getUserFiles()
  }, [user, parentFolder.parentFolder, parentFolder])
  return files
}

export default useFiles
