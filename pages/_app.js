import Head from 'next/head'

import { motion, AnimatePresence } from 'framer-motion'
import { FormspreeProvider } from '@formspree/react'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps, router }) {
  return (
    <html lang='pt-br'>
      <Layout>
        <Head>
          <title>Renan Brayer | DESENVOLVEDOR FULLSTACK</title>
          <meta name="description" content="Meu nome é Renan Brayner. Trabalho com desenvolvimento web em sites e sistemas web com javascript. Tenha sites com qualidade e adptados ao mobile." />
        </Head>
        <FormspreeProvider project='1520404215854267925'>
          <AnimatePresence exitBeforeEnter={true}>
            <motion.div
              style={{ height: '100%'}}
              key={router.route}
              initial="pageInitial"
              animate="pageAnimate"
              exit="pageExit"
              transition={{ duration: 0.3 }}
              variants={{
                pageInitial: {
                  opacity: 0,
                },
                pageAnimate: {
                  opacity: 1,
                },
                pageExit: {
                  opacity: 0,
                },
              }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </FormspreeProvider>
      </Layout>
    </html>
  )
}

export default MyApp
