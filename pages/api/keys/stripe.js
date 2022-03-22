import nc from 'next-connect'
import { isAuth } from '../../../utils/auth'

const handler = nc()
handler.use(isAuth)
handler.get(async (req, res) => {
  res.send(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'sb')
})

export default handler
