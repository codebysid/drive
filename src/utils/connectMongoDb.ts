import { connect } from "mongoose";

export default async function connectToMongoDb(uri: string) {
  if (!uri) {
    console.log("no mongo uri provided")
    return
  }
  await connect(uri).then(() => console.log("DB Connected")).catch((err) => console.log(err))
}
