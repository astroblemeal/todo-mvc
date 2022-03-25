import PrimaryButton from '@components/PrimaryButton'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
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
          type="button"
          isDisabled={false}
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
