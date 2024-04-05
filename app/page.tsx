'use client';

import React, { useState } from 'react';
import { Result } from '../types/Result';
import { User } from '../types/User';
import GetAppIcon from '@mui/icons-material/GetApp';
import UserCard from '@/components/UserCard';
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

      {user && <UserCard user={user} />}
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
