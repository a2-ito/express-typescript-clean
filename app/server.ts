import express from 'express'
import app from './index.js'

const port = process.env.PORT || '3000';

app.listen(port, () => {
  return null;
})
