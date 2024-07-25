import ChatWindow from '@/components/ChatWindow';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Chat - AIDE',
  description: 'Chat with the internet, chat with AIDE.',
};

const Home = () => {
  return (
    <div>
      <Suspense>
        <ChatWindow />
      </Suspense>
    </div>
  );
};

export default Home;
