import React from 'react';
import Readmore from './Readmore';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { emailSchema } from './zodSchema';
import Errors from './Errors';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';


const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
      subject: '',
      message: '',
    },
  });


  const [isPending,startTransition] = useTransition()

  const formSubmit = async (val: z.infer<typeof emailSchema>) => {

    console.log(val)
  };

  return (
    <div className="contactform">
      <form onSubmit={handleSubmit(formSubmit)}>
        <h4>Make enquiry</h4>

        <Errors error="" />

        <div className="input-control">
          <input type="text" id="email" placeholder="" {...register('email')} />
          <label htmlFor="email">Email</label>
          <Errors error={errors.email?.message} />
        </div>

        <div className="input-control">
          <input
            type="text"
            id="subject"
            placeholder=""
            {...register('subject')}
          />
          <label htmlFor="subject">Subject</label>
          <Errors error={errors.subject?.message} />
        </div>

        <div className="input-control">
          <textarea
            id=""
            placeholder="Message"
            {...register('message')}
          ></textarea>

          <Errors error={errors.message?.message} />
        </div>

        <Readmore name="Read more">Send</Readmore>
      </form>
    </div>
  );
};

export default ContactForm;
