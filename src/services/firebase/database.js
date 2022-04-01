import { getDatabase, ref } from "firebase/database"
import app from "./app"

const database = getDatabase(app)

export const nodesRef = ref(database, "nodes")
export const edgesRef = ref(database, "edges")

export default database
