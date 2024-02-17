import { connect } from "mongoose";

export default async function connectToMongoDb(uri: string) {
  await connect(uri).then(() => console.log("DB Connected")).catch((err) => console.log(err))
}
