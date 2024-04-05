'use client';

import React, { useState } from 'react';
import { Result } from '../interfaces/Result';
import { User } from '../interfaces/User';
import GetAppIcon from '@mui/icons-material/GetApp';
import MyRecursiveViewer from '@/components/MyRecursiveViewer';
import { Box, Button, Card, CircularProgress, TextField, Typography } from '@mui/material';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [url, setUrl] = useState('https://randomuser.me/api/');

  const fetchResult = async () => {
    setIsLoading(true);
    setHasError(false);
    setUser(null);
    try {
      const result = await fetchResultFromAPI(url);
      setUser(result.results[0]);
    } catch (error) {
      console.error('Error fetching Result:', error);
      setHasError(true);
    }
    setIsLoading(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'baseline' }}>
      <TextField
        onChange={(ev) => setUrl(ev.target.value)}
        label="URL"
        variant="outlined"
        value={url}
        sx={{ width: '100%' }}
      />

      <Button disabled={isLoading} variant="outlined" startIcon={<GetAppIcon />} onClick={fetchResult}>
        Hämta användarinformation
      </Button>

      {hasError && <Typography color="error">Ett oväntat fel uppstod</Typography>}

      {isLoading && (
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          <CircularProgress size="1rem" sx={{ marginRight: '.5rem' }} /> Hämtar...
        </Typography>
      )}

      {user && (
        <Card
          sx={{
            width: '100%',
            display: 'flex',
            gap: '1rem',
          }}
        >
          {user && <MyRecursiveViewer sx={{ flex: 1 }} object={user} />}
          <Box sx={{ width: '10rem', height: '10rem' }} component="img" src={user.picture.large} alt="" />
        </Card>
      )}
    </Box>
  );
}

async function fetchResultFromAPI(url: string): Promise<Result> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const result = (await response.json()) as Result;

  return result;
}
