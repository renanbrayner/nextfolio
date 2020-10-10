import { motion, AnimatePresence } from 'framer-motion'
import { FormspreeProvider } from '@formspree/react'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
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
                transform: 'scale(0.95, 0.95)',
              },
              pageAnimate: {
                opacity: 1,
                transform: 'scale(1, 1)',
              },
              pageExit: {
                opacity: 0,
                transform: 'scale(1.15, 1.15)',
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </FormspreeProvider>
    </Layout>
  )
}

export default MyApp
