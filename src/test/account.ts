import { createAccount } from "../core/account"

const run = async () => {
  console.log(await createAccount())
}

run().catch((e) => console.error(e))
