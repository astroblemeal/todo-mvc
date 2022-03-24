import PrimaryButton from '@components/PrimaryButton'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { Fragment, useEffect } from 'react'
import AnimatedText from 'react-animated-text-content'
import styles from './Landing.module.css'
import { Typography } from '@mui/material'

function LandingPage() {
  const router = useRouter()

  return (
    <Fragment>
      <Head>
        <title>Todo Landing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <Typography align="center" variant="h1">
          Welcome to the TODO MVC Experience!
        </Typography>
        <PrimaryButton
          color="inherit"
          title="Enter site"
          variant="outlined"
          onClick={() => router.push('/todos')}
        />
      </div>
    </Fragment>
  )
}

export default LandingPage
