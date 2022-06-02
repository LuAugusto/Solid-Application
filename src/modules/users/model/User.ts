import { v4 as uuidV4 } from "uuid";
class User {

  constructor(){
    this.id = uuidV4()
    this.name 
    this.email
    this.created_at = new Date()
    this.updated_at = new Date()
    this.admin = false
  }

  id: string
  name: string
  email: string
  created_at: Date
  updated_at: Date
  admin: boolean
}

export { User };
