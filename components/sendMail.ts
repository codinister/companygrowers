import {z} from 'zod'
import resend from 'resend'
import { emailSchema } from './zodSchema'


const sendMail = (val: z.infer<typeof emailSchema>) => {

    const info = emailSchema.safeParse(val)

    if(!info) return {error: ''}

}

export default sendMail