import { Card, Typography, CardContent, Divider, Box, Input, Button } from '@mui/joy'
import { Link, usePage } from '@inertiajs/react'
import { useState, useEffect } from 'react'

export default function CollectionList(props) {
  const { user } = usePage().props


  return (
    <Card variant="soft" color="neutral" sx={{ marginTop: 5 }}>
      <Typography level="h3">Your Time</Typography>
      <Divider />
      <CardContent>
        <Typography>Time tracks</Typography>
      </CardContent>
    </Card>
  )
}