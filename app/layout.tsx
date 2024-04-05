import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Antura test',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar
          position="static"
          sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '.5rem', marginBottom: '1rem' }}
        >
          <EmojiPeopleIcon />
          <Typography variant="h6" color="inherit" component="div">
            Antura kodtest
          </Typography>
        </AppBar>
        <main>{children}</main>
      </body>
    </html>
  );
}
